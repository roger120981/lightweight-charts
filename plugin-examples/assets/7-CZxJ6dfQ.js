import{L as r,a as t}from"./lightweight-charts.production-DIHQEmeG.js";import{g as a}from"./sample-data-x_8-FZm1.js";import{D as o}from"./delta-tooltip-B62fTkhz.js";import"./delegate-Cpxv3xcm.js";import"./time-ooAJ2Ah_.js";import"./positions-t2UKkghX.js";const e=window.chart=r("chart",{autoSize:!0,grid:{vertLines:{visible:!1},horzLines:{visible:!1}},timeScale:{borderVisible:!1},rightPriceScale:{borderVisible:!1},handleScale:!1,handleScroll:!1}),i=e.addSeries(t,{lineColor:"rgb(40,98,255)",topColor:"rgba(40,98,255, 0.4)",bottomColor:"rgba(40,98,255, 0)",priceLineVisible:!1});i.setData(a());const l=new o({lineColor:"rgba(0, 0, 0, 0.2)"});i.attachPrimitive(l);e.timeScale().fitContent();
