(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(63)},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=a(88),l=a(37),u=a(38),m=a(41),s=a(39),b=a(42),d=a(87),p=a(65),v=a(89),f=(a(86),a(85));a(84);var g=Object(f.a)(function(e){return{root:{margin:e.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)}}});function j(){var e=g();return r.a.createElement(p.a,{className:e.root,color:"textSecondary"})}var E=a(29),O=a(90),h=Object(f.a)(function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}});function y(e){var t,a=Object(n.useState)(0),c=Object(E.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)(0),u=Object(E.a)(l,2),m=u[0],s=u[1],b=Object(n.useState)(0),d=Object(E.a)(b,2),p=d[0],v=d[1],f=h();return r.a.createElement("div",null,r.a.createElement("div",{className:"timer"},o<10?"0"+o:o,":",m<10?"0"+m:m,":",p<10?"0"+p:p),r.a.createElement(O.a,{variant:"contained",color:"primary",className:f.button,onClick:function(){return t=setInterval(function(){v(p++),p>59&&(s(++m),p=0),m>59&&(i(++o),m=0)},100),void localStorage.setItem("interval_id",t)}},"Start"),r.a.createElement(O.a,{variant:"contained",color:"primary",className:f.button,onClick:function(){clearInterval(localStorage.getItem("interval_id"))}},"Stop"),r.a.createElement(O.a,{variant:"contained",color:"primary",className:f.button,onClick:function(){return v(0),s(0),void i(0)}},"Reset"))}a(62);var S=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{maxWidth:"sm"},r.a.createElement(v.a,{my:4},r.a.createElement(p.a,{variant:"h2",component:"h1",gutterBottom:!0},"React Chronometer"),r.a.createElement(j,null),r.a.createElement("div",{className:"container-box"},r.a.createElement(y,{id:"buttons"}))))}}]),t}(r.a.Component),k=a(28),w=a(40),N=Object(w.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:k.a.A400},background:{default:"#fff"}}});o.a.render(r.a.createElement(i.a,{theme:N},r.a.createElement(S,null)),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4a151224.chunk.js.map