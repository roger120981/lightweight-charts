var P=Object.defineProperty;var x=(r,t,i)=>t in r?P(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var a=(r,t,i)=>x(r,typeof t!="symbol"?t+"":t,i);import{L as y,K as L}from"./lightweight-charts.production-DIHQEmeG.js";import{g as T}from"./sample-data-x_8-FZm1.js";const f=40,b=3,m=2,S=10,u=12,v=4;class C{constructor(){a(this,"_data",null)}update(t){this._data=t}draw(t){t.useMediaCoordinateSpace(i=>{if(!this._data)return;const s=this._calculatePriceScale(i.mediaSize.height,this._data),o=s.reduce((d,h)=>Math.max(d,h.label.length),0),n="".padEnd(o,"0"),e=i.context,c=this._data.options.side==="left";e.font=`${u}px -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif`,e.textAlign="center",e.textBaseline="top";const l=e.measureText(n).width,_=c?S:i.mediaSize.width-S-l,w=_+b+Math.round(l/2);s.forEach(d=>{e.beginPath();const h=d.y-u/2;e.roundRect(_,h,l+b*2,u+2*m,v),e.fillStyle=this._data.options.backgroundColor,e.fill(),e.beginPath(),e.fillStyle=this._data.options.textColor,e.fillText(d.label,w,h+m,l)})})}_calculatePriceScale(t,i){const s=[],o=Math.round(f/4);let n=o;for(;n<=t-o;)s.push(n),n+=f;return s.map(c=>{const p=i.coordinateToPrice(c);return p===null?null:{label:i.priceFormatter.format(p),y:c}}).filter(c=>!!c)}}class M{constructor(){a(this,"_renderer");this._renderer=new C}renderer(){return this._renderer}update(t){this._renderer.update(t)}}const V={textColor:"rgb(0, 0, 0)",backgroundColor:"rgba(255, 255, 255, 0.6)",side:"left"};class z{constructor(t){a(this,"_paneViews");a(this,"_chart",null);a(this,"_series",null);a(this,"_requestUpdate");a(this,"_options");this._options={...V,...t},this._paneViews=[new M]}applyOptions(t){this._options={...this._options,...t},this._requestUpdate&&this._requestUpdate()}attached({chart:t,series:i,requestUpdate:s}){this._chart=t,this._series=i,this._requestUpdate=s}detached(){this._chart=null,this._series=null}updateAllViews(){if(!this._series||!this._chart)return;const t=e=>this._series.coordinateToPrice(e),i=e=>this._series.priceToCoordinate(e),s=this._series.priceFormatter(),o=this._options,n={coordinateToPrice:t,priceToCoordinate:i,priceFormatter:s,options:o};this._paneViews.forEach(e=>e.update(n))}paneViews(){return this._paneViews}}const k=window.chart=y("chart",{autoSize:!0,rightPriceScale:{visible:!1},grid:{horzLines:{visible:!1}}}),g=k.addSeries(L,{priceScaleId:"overlay"}),F=T();g.setData(F);g.attachPrimitive(new z({}));
