"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92819"],{48591:function(e,r,i){i.r(r),i.d(r,{default:()=>o,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>t});var n=JSON.parse('{"id":"api/interfaces/ISeriesApi","title":"Interface: ISeriesApi\\\\<TSeriesType, HorzScaleItem, TData, TOptions, TPartialOptions\\\\>","description":"Represents the interface for interacting with series.","source":"@site/versioned_docs/version-4.2/api/interfaces/ISeriesApi.md","sourceDirName":"api/interfaces","slug":"/api/interfaces/ISeriesApi","permalink":"/lightweight-charts/docs/4.2/api/interfaces/ISeriesApi","draft":false,"unlisted":false,"tags":[],"version":"4.2","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"apiSidebar"}'),s=i("85893"),a=i("50065");let l={pagination_next:null,pagination_prev:null},t="Interface: ISeriesApi<TSeriesType, HorzScaleItem, TData, TOptions, TPartialOptions>",c={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"priceFormatter()",id:"priceformatter",level:3},{value:"Returns",id:"returns",level:4},{value:"priceToCoordinate()",id:"pricetocoordinate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"coordinateToPrice()",id:"coordinatetoprice",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"barsInLogicalRange()",id:"barsinlogicalrange",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Examples",id:"examples",level:4},{value:"applyOptions()",id:"applyoptions",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"options()",id:"options",level:3},{value:"Returns",id:"returns-5",level:4},{value:"priceScale()",id:"pricescale",level:3},{value:"Returns",id:"returns-6",level:4},{value:"setData()",id:"setdata",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Examples",id:"examples-1",level:4},{value:"update()",id:"update",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Examples",id:"examples-2",level:4},{value:"dataByIndex()",id:"databyindex",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Example",id:"example",level:4},{value:"data()",id:"data",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Example",id:"example-1",level:4},{value:"subscribeDataChanged()",id:"subscribedatachanged",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Example",id:"example-2",level:4},{value:"unsubscribeDataChanged()",id:"unsubscribedatachanged",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Example",id:"example-3",level:4},{value:"setMarkers()",id:"setmarkers",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Example",id:"example-4",level:4},{value:"markers()",id:"markers",level:3},{value:"Returns",id:"returns-14",level:4},{value:"createPriceLine()",id:"createpriceline",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Example",id:"example-5",level:4},{value:"removePriceLine()",id:"removepriceline",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-16",level:4},{value:"Example",id:"example-6",level:4},{value:"seriesType()",id:"seriestype",level:3},{value:"Returns",id:"returns-17",level:4},{value:"Example",id:"example-7",level:4},{value:"attachPrimitive()",id:"attachprimitive",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-18",level:4},{value:"detachPrimitive()",id:"detachprimitive",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"Returns",id:"returns-19",level:4}];function h(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"interface-iseriesapitseriestype-horzscaleitem-tdata-toptions-tpartialoptions",children:"Interface: ISeriesApi<TSeriesType, HorzScaleItem, TData, TOptions, TPartialOptions>"})}),"\n",(0,s.jsx)(r.p,{children:"Represents the interface for interacting with series."}),"\n",(0,s.jsx)(r.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"TSeriesType"})," ",(0,s.jsx)(r.em,{children:"extends"})," ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/type-aliases/SeriesType",children:(0,s.jsx)(r.code,{children:"SeriesType"})})]}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"HorzScaleItem"})," = ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/type-aliases/Time",children:(0,s.jsx)(r.code,{children:"Time"})})]}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"TData"})," = ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/SeriesDataItemTypeMap",children:(0,s.jsx)(r.code,{children:"SeriesDataItemTypeMap"})}),"<",(0,s.jsx)(r.code,{children:"HorzScaleItem"}),">[",(0,s.jsx)(r.code,{children:"TSeriesType"}),"]"]}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"TOptions"})," = ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/SeriesOptionsMap",children:(0,s.jsx)(r.code,{children:"SeriesOptionsMap"})}),"[",(0,s.jsx)(r.code,{children:"TSeriesType"}),"]"]}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"TPartialOptions"})," = ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/SeriesPartialOptionsMap",children:(0,s.jsx)(r.code,{children:"SeriesPartialOptionsMap"})}),"[",(0,s.jsx)(r.code,{children:"TSeriesType"}),"]"]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(r.h3,{id:"priceformatter",children:"priceFormatter()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"priceFormatter"}),"(): ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/IPriceFormatter",children:(0,s.jsx)(r.code,{children:"IPriceFormatter"})})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Returns current price formatter"}),"\n",(0,s.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/IPriceFormatter",children:(0,s.jsx)(r.code,{children:"IPriceFormatter"})})}),"\n",(0,s.jsx)(r.p,{children:"Interface to the price formatter object that can be used to format prices in the same way as the chart does"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"pricetocoordinate",children:"priceToCoordinate()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"priceToCoordinate"}),"(",(0,s.jsx)(r.code,{children:"price"}),"): ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/type-aliases/Coordinate",children:(0,s.jsx)(r.code,{children:"Coordinate"})})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Converts specified series price to pixel coordinate according to the series price scale"}),"\n",(0,s.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"price"}),": ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsx)(r.p,{children:"Input price to be converted"}),"\n",(0,s.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/type-aliases/Coordinate",children:(0,s.jsx)(r.code,{children:"Coordinate"})})}),"\n",(0,s.jsx)(r.p,{children:"Pixel coordinate of the price level on the chart"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"coordinatetoprice",children:"coordinateToPrice()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"coordinateToPrice"}),"(",(0,s.jsx)(r.code,{children:"coordinate"}),"): ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/type-aliases/BarPrice",children:(0,s.jsx)(r.code,{children:"BarPrice"})})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Converts specified coordinate to price value according to the series price scale"}),"\n",(0,s.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"coordinate"}),": ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsx)(r.p,{children:"Input coordinate to be converted"}),"\n",(0,s.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/type-aliases/BarPrice",children:(0,s.jsx)(r.code,{children:"BarPrice"})})}),"\n",(0,s.jsx)(r.p,{children:"Price value of the coordinate on the chart"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"barsinlogicalrange",children:"barsInLogicalRange()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"barsInLogicalRange"}),"(",(0,s.jsx)(r.code,{children:"range"}),"): ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/BarsInfo",children:(0,s.jsx)(r.code,{children:"BarsInfo"})}),"<",(0,s.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Returns bars information for the series in the provided ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/time-scale#logical-range",children:"logical range"})," or ",(0,s.jsx)(r.code,{children:"null"}),", if no series data has been found in the requested range.\nThis method can be used, for instance, to implement downloading historical data while scrolling to prevent a user from seeing empty space."]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"range"}),": ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/Range",children:(0,s.jsx)(r.code,{children:"Range"})}),"<",(0,s.jsx)(r.code,{children:"number"}),">"]}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/time-scale#logical-range",children:"logical range"})," to retrieve info for."]}),"\n",(0,s.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/BarsInfo",children:(0,s.jsx)(r.code,{children:"BarsInfo"})}),"<",(0,s.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"The bars info for the given logical range."}),"\n",(0,s.jsx)(r.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const barsInfo = series.barsInLogicalRange(chart.timeScale().getVisibleLogicalRange());\nconsole.log(barsInfo);\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"function onVisibleLogicalRangeChanged(newVisibleLogicalRange) {\n    const barsInfo = series.barsInLogicalRange(newVisibleLogicalRange);\n    // if there less than 50 bars to the left of the visible area\n    if (barsInfo !== null && barsInfo.barsBefore < 50) {\n        // try to load additional historical data and prepend it to the series data\n    }\n}\n\nchart.timeScale().subscribeVisibleLogicalRangeChange(onVisibleLogicalRangeChanged);\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"applyoptions",children:"applyOptions()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"applyOptions"}),"(",(0,s.jsx)(r.code,{children:"options"}),"): ",(0,s.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Applies new options to the existing series\nYou can set options initially when you create series or use the ",(0,s.jsx)(r.code,{children:"applyOptions"})," method of the series to change the existing options.\nNote that you can only pass options you want to change."]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"options"}),": ",(0,s.jsx)(r.code,{children:"TPartialOptions"})]}),"\n",(0,s.jsx)(r.p,{children:"Any subset of options."}),"\n",(0,s.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"void"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"options",children:"options()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"options"}),"(): ",(0,s.jsx)(r.code,{children:"Readonly"}),"<",(0,s.jsx)(r.code,{children:"TOptions"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Returns currently applied options"}),"\n",(0,s.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Readonly"}),"<",(0,s.jsx)(r.code,{children:"TOptions"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"Full set of currently applied options, including defaults"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"pricescale",children:"priceScale()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"priceScale"}),"(): ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/IPriceScaleApi",children:(0,s.jsx)(r.code,{children:"IPriceScaleApi"})})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Returns interface of the price scale the series is currently attached"}),"\n",(0,s.jsx)(r.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/IPriceScaleApi",children:(0,s.jsx)(r.code,{children:"IPriceScaleApi"})})}),"\n",(0,s.jsx)(r.p,{children:"IPriceScaleApi object to control the price scale"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"setdata",children:"setData()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"setData"}),"(",(0,s.jsx)(r.code,{children:"data"}),"): ",(0,s.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Sets or replaces series data."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"data"}),": ",(0,s.jsx)(r.code,{children:"TData"}),"[]"]}),"\n",(0,s.jsx)(r.p,{children:"Ordered (earlier time point goes first) array of data items. Old data is fully replaced with the new one."}),"\n",(0,s.jsx)(r.h4,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"void"})}),"\n",(0,s.jsx)(r.h4,{id:"examples-1",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"lineSeries.setData([\n    { time: '2018-12-12', value: 24.11 },\n    { time: '2018-12-13', value: 31.74 },\n]);\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"barSeries.setData([\n    { time: '2018-12-19', open: 141.77, high: 170.39, low: 120.25, close: 145.72 },\n    { time: '2018-12-20', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },\n]);\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"update",children:"update()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"update"}),"(",(0,s.jsx)(r.code,{children:"bar"}),"): ",(0,s.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Adds new data item to the existing set (or updates the latest item if times of the passed/latest items are equal)."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"bar"}),": ",(0,s.jsx)(r.code,{children:"TData"})]}),"\n",(0,s.jsx)(r.p,{children:"A single data item to be added. Time of the new item must be greater or equal to the latest existing time point.\nIf the new item's time is equal to the last existing item's time, then the existing item is replaced with the new one."}),"\n",(0,s.jsx)(r.h4,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"void"})}),"\n",(0,s.jsx)(r.h4,{id:"examples-2",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"lineSeries.update({\n    time: '2018-12-12',\n    value: 24.11,\n});\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"barSeries.update({\n    time: '2018-12-19',\n    open: 141.77,\n    high: 170.39,\n    low: 120.25,\n    close: 145.72,\n});\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"databyindex",children:"dataByIndex()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"dataByIndex"}),"(",(0,s.jsx)(r.code,{children:"logicalIndex"}),", ",(0,s.jsx)(r.code,{children:"mismatchDirection"}),"?): ",(0,s.jsx)(r.code,{children:"TData"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Returns a bar data by provided logical index."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"logicalIndex"}),": ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsx)(r.p,{children:"Logical index"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"mismatchDirection?"}),": ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/enumerations/MismatchDirection",children:(0,s.jsx)(r.code,{children:"MismatchDirection"})})]}),"\n",(0,s.jsx)(r.p,{children:"Search direction if no data found at provided logical index."}),"\n",(0,s.jsx)(r.h4,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"TData"})}),"\n",(0,s.jsx)(r.p,{children:"Original data item provided via setData or update methods."}),"\n",(0,s.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const originalData = series.dataByIndex(10, LightweightCharts.MismatchDirection.NearestLeft);\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"data",children:"data()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"data"}),"(): readonly ",(0,s.jsx)(r.code,{children:"TData"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Returns all the bar data for the series."}),"\n",(0,s.jsx)(r.h4,{id:"returns-10",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:["readonly ",(0,s.jsx)(r.code,{children:"TData"}),"[]"]}),"\n",(0,s.jsx)(r.p,{children:"Original data items provided via setData or update methods."}),"\n",(0,s.jsx)(r.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const originalData = series.data();\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"subscribedatachanged",children:"subscribeDataChanged()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"subscribeDataChanged"}),"(",(0,s.jsx)(r.code,{children:"handler"}),"): ",(0,s.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Subscribe to the data changed event. This event is fired whenever the ",(0,s.jsx)(r.code,{children:"update"})," or ",(0,s.jsx)(r.code,{children:"setData"})," method is evoked\non the series."]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"handler"}),": ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/type-aliases/DataChangedHandler",children:(0,s.jsx)(r.code,{children:"DataChangedHandler"})})]}),"\n",(0,s.jsx)(r.p,{children:"Handler to be called on a data changed event."}),"\n",(0,s.jsx)(r.h4,{id:"returns-11",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"void"})}),"\n",(0,s.jsx)(r.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"function myHandler() {\n    const data = series.data();\n    console.log(`The data has changed. New Data length: ${data.length}`);\n}\n\nseries.subscribeDataChanged(myHandler);\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"unsubscribedatachanged",children:"unsubscribeDataChanged()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"unsubscribeDataChanged"}),"(",(0,s.jsx)(r.code,{children:"handler"}),"): ",(0,s.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Unsubscribe a handler that was previously subscribed using ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/ISeriesApi#subscribedatachanged",children:"subscribeDataChanged"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"handler"}),": ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/type-aliases/DataChangedHandler",children:(0,s.jsx)(r.code,{children:"DataChangedHandler"})})]}),"\n",(0,s.jsx)(r.p,{children:"Previously subscribed handler"}),"\n",(0,s.jsx)(r.h4,{id:"returns-12",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"void"})}),"\n",(0,s.jsx)(r.h4,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"chart.unsubscribeDataChanged(myHandler);\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"setmarkers",children:"setMarkers()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"setMarkers"}),"(",(0,s.jsx)(r.code,{children:"data"}),"): ",(0,s.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Allows to set/replace all existing series markers with new ones."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"data"}),": ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/SeriesMarker",children:(0,s.jsx)(r.code,{children:"SeriesMarker"})}),"<",(0,s.jsx)(r.code,{children:"HorzScaleItem"}),">[]"]}),"\n",(0,s.jsx)(r.p,{children:"An array of series markers. This array should be sorted by time. Several markers with same time are allowed."}),"\n",(0,s.jsx)(r.h4,{id:"returns-13",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"void"})}),"\n",(0,s.jsx)(r.h4,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"series.setMarkers([\n    {\n        time: '2019-04-09',\n        position: 'aboveBar',\n        color: 'black',\n        shape: 'arrowDown',\n    },\n    {\n        time: '2019-05-31',\n        position: 'belowBar',\n        color: 'red',\n        shape: 'arrowUp',\n        id: 'id3',\n    },\n    {\n        time: '2019-05-31',\n        position: 'belowBar',\n        color: 'orange',\n        shape: 'arrowUp',\n        id: 'id4',\n        text: 'example',\n        size: 2,\n    },\n]);\n\nchart.subscribeCrosshairMove(param => {\n    console.log(param.hoveredObjectId);\n});\n\nchart.subscribeClick(param => {\n    console.log(param.hoveredObjectId);\n});\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"markers",children:"markers()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"markers"}),"(): ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/SeriesMarker",children:(0,s.jsx)(r.code,{children:"SeriesMarker"})}),"<",(0,s.jsx)(r.code,{children:"HorzScaleItem"}),">[]"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Returns an array of series markers."}),"\n",(0,s.jsx)(r.h4,{id:"returns-14",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/SeriesMarker",children:(0,s.jsx)(r.code,{children:"SeriesMarker"})}),"<",(0,s.jsx)(r.code,{children:"HorzScaleItem"}),">[]"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"createpriceline",children:"createPriceLine()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"createPriceLine"}),"(",(0,s.jsx)(r.code,{children:"options"}),"): ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/IPriceLine",children:(0,s.jsx)(r.code,{children:"IPriceLine"})})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Creates a new price line"}),"\n",(0,s.jsx)(r.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"options"}),": ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/type-aliases/CreatePriceLineOptions",children:(0,s.jsx)(r.code,{children:"CreatePriceLineOptions"})})]}),"\n",(0,s.jsxs)(r.p,{children:["Any subset of options, however ",(0,s.jsx)(r.code,{children:"price"})," is required."]}),"\n",(0,s.jsx)(r.h4,{id:"returns-15",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/IPriceLine",children:(0,s.jsx)(r.code,{children:"IPriceLine"})})}),"\n",(0,s.jsx)(r.h4,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const priceLine = series.createPriceLine({\n    price: 80.0,\n    color: 'green',\n    lineWidth: 2,\n    lineStyle: LightweightCharts.LineStyle.Dotted,\n    axisLabelVisible: true,\n    title: 'P/L 500',\n});\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"removepriceline",children:"removePriceLine()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"removePriceLine"}),"(",(0,s.jsx)(r.code,{children:"line"}),"): ",(0,s.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Removes the price line that was created before."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"line"}),": ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/interfaces/IPriceLine",children:(0,s.jsx)(r.code,{children:"IPriceLine"})})]}),"\n",(0,s.jsx)(r.p,{children:"A line to remove."}),"\n",(0,s.jsx)(r.h4,{id:"returns-16",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"void"})}),"\n",(0,s.jsx)(r.h4,{id:"example-6",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const priceLine = series.createPriceLine({ price: 80.0 });\nseries.removePriceLine(priceLine);\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"seriestype",children:"seriesType()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"seriesType"}),"(): ",(0,s.jsx)(r.code,{children:"TSeriesType"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Return current series type."}),"\n",(0,s.jsx)(r.h4,{id:"returns-17",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"TSeriesType"})}),"\n",(0,s.jsx)(r.p,{children:"Type of the series."}),"\n",(0,s.jsx)(r.h4,{id:"example-7",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'const lineSeries = chart.addLineSeries();\nconsole.log(lineSeries.seriesType()); // "Line"\n\nconst candlestickSeries = chart.addCandlestickSeries();\nconsole.log(candlestickSeries.seriesType()); // "Candlestick"\n'})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"attachprimitive",children:"attachPrimitive()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"attachPrimitive"}),"(",(0,s.jsx)(r.code,{children:"primitive"}),"): ",(0,s.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Attaches additional drawing primitive to the series"}),"\n",(0,s.jsx)(r.h4,{id:"parameters-12",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"primitive"}),": ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/type-aliases/ISeriesPrimitive",children:(0,s.jsx)(r.code,{children:"ISeriesPrimitive"})}),"<",(0,s.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"any implementation of ISeriesPrimitive interface"}),"\n",(0,s.jsx)(r.h4,{id:"returns-18",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"void"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"detachprimitive",children:"detachPrimitive()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"detachPrimitive"}),"(",(0,s.jsx)(r.code,{children:"primitive"}),"): ",(0,s.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Detaches additional drawing primitive from the series"}),"\n",(0,s.jsx)(r.h4,{id:"parameters-13",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"primitive"}),": ",(0,s.jsx)(r.a,{href:"/lightweight-charts/docs/4.2/api/type-aliases/ISeriesPrimitive",children:(0,s.jsx)(r.code,{children:"ISeriesPrimitive"})}),"<",(0,s.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"implementation of ISeriesPrimitive interface attached before\nDoes nothing if specified primitive was not attached"}),"\n",(0,s.jsx)(r.h4,{id:"returns-19",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"void"})})]})}function o(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,r,i){i.d(r,{Z:function(){return t},a:function(){return l}});var n=i(67294);let s={},a=n.createContext(s);function l(e){let r=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);