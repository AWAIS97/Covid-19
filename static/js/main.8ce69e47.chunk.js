(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{125:function(e,t,a){e.exports={container:"Chart_container__9VijV"}},126:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__RKH86"}},127:function(e,t,a){e.exports={container:"App_container__1rj1H"}},132:function(e,t,a){e.exports=a(254)},252:function(e,t,a){e.exports=a.p+"static/media/components.83dc46cb.png"},254:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(116),o=a.n(c),u=a(25),s=a.n(u),l=a(39),i=a(117),d=a(118),f=a(129),m=a(128),p=a(271),v=a(275),h=a(272),b=a(273),E=a(48),y=a.n(E),x=a(76),g=a.n(x),C=a(77),_=a.n(C),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("di",{className:y.a.container},r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:_()(y.a.card,y.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:a.value,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:_()(y.a.card,y.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:n.value,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Recovered of COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:_()(y.a.card,y.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:c.value,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Death cases of COVID-19"))))):"loading.."},j=a(75),w=a(78),k=a.n(w),D="https://covid19.mathdro.id/api",S=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,i={confirmed:c,recovered:o,deaths:u,lastUpdate:l},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportdate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=a(88),B=a(125),R=a.n(B),A=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,u=e.country,i=Object(n.useState)([]),d=Object(j.a)(i,2),f=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=f.length?r.a.createElement(V.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(V.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:R.a.container},u?v:p)},H=a(276),U=a(274),J=a(126),K=a.n(J),P=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(H.a,{className:K.a.formControl},r.a.createElement(U.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},F=a(127),G=a.n(F),M=(a(252),function(e){Object(f.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:G.a.container},r.a.createElement("h1",null,"Covid-19 live"),r.a.createElement(P,{handleCountryChange:this.handleCountryChange}),r.a.createElement(O,{data:t}),r.a.createElement(A,{data:t,country:a}))}}]),a}(r.a.Component));o.a.render(r.a.createElement(M,null),document.getElementById("root"))},48:function(e,t,a){e.exports={container:"Cards_container__I44dH",card:"Cards_card__17OKh",infected:"Cards_infected__2lNFA",recovered:"Cards_recovered__2n-0c",deaths:"Cards_deaths__1xvrx"}}},[[132,1,2]]]);
//# sourceMappingURL=main.8ce69e47.chunk.js.map