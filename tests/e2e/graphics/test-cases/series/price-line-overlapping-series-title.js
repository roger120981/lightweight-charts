function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, { layout: { attributionLogo: false } });

	const series = chart.addSeries(LightweightCharts.LineSeries, { title: 'TITLE' });

	series.setData([
		{ time: '1990-04-24', value: 0 },
		{ time: '1990-04-25', value: 1 },
		{ time: '1990-04-26', value: 2 },
	]);

	series.createPriceLine({ color: 'red', title: 'price line', price: 2 });
}
