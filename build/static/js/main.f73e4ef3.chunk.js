(this["webpackJsonpvae-slider"]=this["webpackJsonpvae-slider"]||[]).push([[0],{284:function(e,t,n){},285:function(e,t,n){},287:function(e,t,n){},292:function(e,t){},293:function(e,t){},301:function(e,t){},311:function(e,t){},312:function(e,t){},313:function(e,t){},321:function(e,t){},327:function(e,t,n){"use strict";n.r(t);var a,r,c=n(31),s=n.n(c),i=n(178),u=n.n(i),o=(n(284),n(285),n(4)),l=n.n(o),p=n(11),d=n(6),f=n(338),b=(n(287),n(190)),j=n(56),h="https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/test-tfjs/model.json";var x=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(0),u=Object(d.a)(i,2),o=u[0],x=u[1],m=Object(c.useRef)();function v(){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.b(h);case 3:a=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("model loading error....");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function y(){return(y=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.c([o,n],[1,2]),r=a.predict(t,{batchSize:1}).reshape([28,28]),e.next=4,b.a.toPixels(r,m.current);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){return y.apply(this,arguments)}().then(Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),console.log(o,n),Object(j.jsxs)("div",{className:"large-box",children:[Object(j.jsx)("div",{className:"image-box",children:Object(j.jsx)("canvas",{ref:m})}),Object(j.jsx)("div",{className:"vSlider",children:Object(j.jsx)(f.a,{orientation:"vertical",defaultValue:0,step:.02,"aria-labelledby":"discrete-vertical-slider-small-steps",min:-1,max:1,marks:!0,valueLabelDisplay:"auto",onChange:function(e,t){return s(t)}})}),Object(j.jsx)("div",{className:"hSlider",children:Object(j.jsx)(f.a,{defaultValue:0,"aria-labelledby":"discrete-slider-small-steps",step:.02,marks:!0,min:-1,max:1,valueLabelDisplay:"auto",onChange:function(e,t){return x(t)}})})]})};var m=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(x,{})})})};u.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[327,1,2]]]);
//# sourceMappingURL=main.f73e4ef3.chunk.js.map