(this.webpackJsonpchart=this.webpackJsonpchart||[]).push([[0],{18:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var i=n(3),c=n.n(i),s=n(19),a=n.n(s),o=(n(30),n.p,n(31),n(20)),r=n(21),l=n(25),h=n(24),d=n(22),u=n.n(d),j=n(23),b=n.n(j),f=(n(18),n(0)),p=function(t){return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){t.onClick(1)},children:"1 Min"}),Object(f.jsx)("button",{onClick:function(){t.onClick(5)},children:"5 Min"}),Object(f.jsx)("button",{onClick:function(){t.onClick(60)},children:"1 Hour"}),Object(f.jsx)("button",{onClick:function(){t.onClick(10080)},children:"1 Week"})]})},x=n(7),O=(n(55),n(8)),C=function(){return Object(f.jsxs)("div",{className:"externalLinks",children:[Object(f.jsx)("a",{href:"https://www.linkedin.com/in/shanip27",id:"linkedin",children:Object(f.jsx)(x.a,{icon:O.b})}),Object(f.jsx)("a",{href:"https://github.com/shanipj",id:"github",children:Object(f.jsx)(x.a,{icon:O.a})})]})},k=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={firstResponse:!1,series:[{data:[]}],options:{chart:{height:400,type:"candlestick"},title:{text:"Apple Inc",align:"center",style:{fontSize:"36px",color:"#000000"}},annotations:{xaxis:[{x:"Oct 06 14:00",borderColor:"#00E396",label:{borderColor:"#00E396",style:{fontSize:"12px",color:"#fff",background:"#00E396"},orientation:"horizontal",offsetY:7,text:"Annotation Test"}}]},tooltip:{enabled:!0},xaxis:{type:"category"},yaxis:{tooltip:{enabled:!0}}}},i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){!1===this.state.firstResponse&&this.getData(60)}},{key:"getData",value:function(t){var e=this;u.a.get("https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period="+t+"&Precision=Minutes&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume").then((function(t){var n=[];t.data.map((function(t){n.push({x:t.Date,y:[t.Open,t.High,t.Low,t.Close]})})),e.setState({series:[{data:n}],firstResponse:!0})})).catch((function(t){e.setState({error:!0})}))}},{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{className:"background",children:[Object(f.jsx)("h1",{children:"Market Chart"}),Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)(p,{onClick:function(e){return t.getData(e)}}),Object(f.jsx)("div",{id:"chart",children:Object(f.jsx)(b.a,{options:this.state.options,series:this.state.series,type:"candlestick",height:350})})]}),Object(f.jsx)(C,{})]})}}]),n}(i.Component);var g=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(k,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),s(t),a(t)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),m()}},[[56,1,2]]]);
//# sourceMappingURL=main.99066510.chunk.js.map