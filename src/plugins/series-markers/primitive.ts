import { IChartApiBase } from '../../api/ichart-api';
import { DataChangedHandler, DataChangedScope, ISeriesApi } from '../../api/iseries-api';
import { ISeriesPrimitive, SeriesAttachedParameter } from '../../api/iseries-primitive-api';

import { ensureNotNull } from '../../helpers/assertions';

import { AutoScaleMargins } from '../../model/autoscale-info-impl';
import { IPrimitivePaneView, PrimitiveHoveredItem } from '../../model/ipane-primitive';
import { MismatchDirection } from '../../model/plot-list';
import { AutoscaleInfo, SeriesType } from '../../model/series-options';
import { Logical, TimePointIndex } from '../../model/time-data';
import { UpdateType } from '../../views/pane/iupdatable-pane-view';

import { SeriesMarkersPaneView } from './pane-view';
import { InternalSeriesMarker, MarkerPositions, SeriesMarker } from './types';
import {
	calculateAdjustedMargin,
	calculateShapeHeight,
	shapeMargin as calculateShapeMargin,
} from './utils';

export class SeriesMarkersPrimitive<HorzScaleItem> implements ISeriesPrimitive<HorzScaleItem> {
	private _paneView: SeriesMarkersPaneView<HorzScaleItem> | null = null;
	private _markers: SeriesMarker<HorzScaleItem>[] = [];
	private _indexedMarkers: InternalSeriesMarker<TimePointIndex>[] = [];
	private _dataChangedHandler: DataChangedHandler | null = null;
	private _series: ISeriesApi<SeriesType, HorzScaleItem> | null = null;
	private _chart: IChartApiBase<HorzScaleItem> | null = null;
	private _requestUpdate?: () => void;
	private _autoScaleMarginsInvalidated: boolean = true;
	private _autoScaleMargins: AutoScaleMargins | null = null;
	private _markersPositions: MarkerPositions | null = null;
	private _cachedBarSpacing: number | null = null;
	private _recalculationRequired: boolean = true;

	public attached(param: SeriesAttachedParameter<HorzScaleItem>): void {
		this._recalculateMarkers();
		this._chart = param.chart;
		this._series = param.series;
		this._paneView = new SeriesMarkersPaneView(this._series, ensureNotNull(this._chart));
		this._requestUpdate = param.requestUpdate;
		this._series.subscribeDataChanged((scope: DataChangedScope) => this._onDataChanged(scope));
		this._recalculationRequired = true;
		this.requestUpdate();
	}

	public requestUpdate(): void {
		if (this._requestUpdate) {
			this._requestUpdate();
		}
	}

	public detached(): void {
		if (this._series && this._dataChangedHandler) {
			this._series.unsubscribeDataChanged(this._dataChangedHandler);
		}
		this._chart = null;
		this._series = null;
		this._paneView = null;
		this._dataChangedHandler = null;
	}

	public setMarkers(markers: SeriesMarker<HorzScaleItem>[]): void {
		this._recalculationRequired = true;
		this._markers = markers;
		this._recalculateMarkers();
		this._autoScaleMarginsInvalidated = true;
		this._markersPositions = null;
		this.requestUpdate();
	}

	public markers(): readonly SeriesMarker<HorzScaleItem>[] {
		return this._markers;
	}

	public paneViews(): readonly IPrimitivePaneView[] {
		return this._paneView ? [this._paneView] : [];
	}

	public updateAllViews(): void {
		this._updateAllViews();
	}

	public hitTest(x: number, y: number): PrimitiveHoveredItem | null {
		if (this._paneView) {
			return this._paneView.renderer()?.hitTest(x, y) ?? null;
		}
		return null;
	}

	public autoscaleInfo(startTimePoint: Logical, endTimePoint: Logical): AutoscaleInfo | null {
		if (this._paneView) {
			const margins = this._getAutoScaleMargins();
			if (margins) {
				return {
					priceRange: null,
					margins: margins,
				};
			}
		}
		return null;
	}

	private _getAutoScaleMargins(): AutoScaleMargins | null {
		const chart = ensureNotNull(this._chart);
		const barSpacing = chart.timeScale().options().barSpacing;
		if (this._autoScaleMarginsInvalidated || barSpacing !== this._cachedBarSpacing) {
			this._cachedBarSpacing = barSpacing;
			if (this._markers.length > 0) {
				const shapeMargin = calculateShapeMargin(barSpacing);
				const marginValue = calculateShapeHeight(barSpacing) * 1.5 + shapeMargin * 2;
				const positions = this._getMarkerPositions();

				this._autoScaleMargins = {
					above: calculateAdjustedMargin(marginValue, positions.aboveBar, positions.inBar),
					below: calculateAdjustedMargin(marginValue, positions.belowBar, positions.inBar),
				};
			} else {
				this._autoScaleMargins = null;
			}

			this._autoScaleMarginsInvalidated = false;
		}

		return this._autoScaleMargins;
	}

	private _getMarkerPositions(): MarkerPositions {
		if (this._markersPositions === null) {
			this._markersPositions = this._markers.reduce(
				(acc: MarkerPositions, marker: SeriesMarker<HorzScaleItem>) => {
					if (!acc[marker.position]) {
						acc[marker.position] = true;
					}
					return acc;
				},
				{
					inBar: false,
					aboveBar: false,
					belowBar: false,
				}
			);
		}
		return this._markersPositions;
	}

	private _recalculateMarkers(): void {
		if (!this._recalculationRequired || !this._chart || !this._series) {
			return;
		}
		const timeScale = this._chart.timeScale();
		if (timeScale.getVisibleLogicalRange() == null || !this._series || this._series?.data().length === 0) {
			this._indexedMarkers = [];
			return;
		}

		const seriesData = this._series?.data();
		const firstDataIndex = timeScale.timeToIndex(ensureNotNull(seriesData[0].time), true) as unknown as Logical;
		this._indexedMarkers = this._markers.map<InternalSeriesMarker<TimePointIndex>>((marker: SeriesMarker<HorzScaleItem>, index: number) => {
			const timePointIndex = timeScale.timeToIndex(marker.time, true) as unknown as Logical;
			const searchMode = timePointIndex < firstDataIndex ? MismatchDirection.NearestRight : MismatchDirection.NearestLeft;
			const seriesDataByIndex = ensureNotNull(this._series).dataByIndex(timePointIndex, searchMode);
			// @TODO think about should we expose the series' `.search()` method
			const finalIndex = timeScale.timeToIndex(ensureNotNull(seriesDataByIndex).time, false) as unknown as TimePointIndex;

			return {
				time: finalIndex,
				position: marker.position,
				shape: marker.shape,
				color: marker.color,
				id: marker.id,
				internalId: index,
				text: marker.text,
				size: marker.size,
				originalTime: marker.time,
			};
		});
		this._recalculationRequired = false;
	}

	private _updateAllViews(updateType?: UpdateType): void {
		if (this._paneView) {
			this._recalculateMarkers();
			this._paneView.setMarkers(this._indexedMarkers);
			this._paneView.update(updateType);
		}
	}

	private _onDataChanged(scope: DataChangedScope): void {
		this._recalculationRequired = true;
		this.requestUpdate();
	}
}

