(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/usertive.90816553.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/arrow-down.0af08359.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/arrow-up.218a3aa5.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/arrows.84ef6e78.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/hide.59dc4710.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/landing-gear.5a568f7c.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/planet.972e895e.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/rocket.66ee6847.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/smoke1.558330cc.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/smoke2.b185472f.svg"},,,,,,,,,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){var c={"./arrow-down.svg":13,"./arrow-up.svg":14,"./arrows.svg":15,"./capsules.svg":49,"./crew.svg":50,"./hide.svg":16,"./landing-gear.svg":17,"./planet.svg":18,"./rocket.svg":19,"./rockets.svg":51,"./smoke1.svg":20,"./smoke2.svg":21,"./starlink.svg":52,"./usertive.svg":12};function a(e){var t=n(e);return s(t)}function n(e){if(!s.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=n,e.exports=a,a.id=48},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/capsules.f56c2cc3.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/crew.4852fe2e.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/rockets.3ce4e8de.svg"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/starlink.433e07e5.svg"},function(e,t,s){},,,,,,,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(8),i=s.n(n),r=s(6),l=(s(43),s(12)),o=(s(44),s(0)),d=function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("span",{children:"Copyright \xa9 Usertive & SpaceX API"}),Object(o.jsx)("span",{children:"Recruiment Task / Summer 2021"})]})},u=s(3),j=(s(46),s(47),function(e){var t=e.type,c=e.setCurrentType,a=e.setVisibility,n=s(48)("./".concat(t.type,".svg")).default;return Object(o.jsxs)("div",{className:"link-button",onClick:function(){c(t),a(!0)},children:[Object(o.jsx)("img",{className:"background",src:n,alt:"rockets",onLoad:function(e){e.target.style.opacity="1"}}),Object(o.jsx)("div",{className:"overlay",children:Object(o.jsx)("span",{className:"details",children:"Details"})}),Object(o.jsx)("span",{className:"type",children:t.type})]})}),f=(s(53),s(5)),b=s.n(f),p=s(9),m=s(32),O=s.n(m),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"capsules";return function(){var t=Object(p.a)(b.a.mark((function t(s){var c,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s({type:"DATA_GET_REQUEST"}),t.next=4,O.a.get("https://api.spacexdata.com/v4/".concat(e));case 4:c=t.sent,a=c.data,console.log(a),setTimeout((function(){s({type:"DATA_GET_SUCCESS",payload:a})}),500),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),s({type:"DATA_GET_FAILURE",payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},g=s(16),x=(s(73),function(e){var t=e.loading;return Object(o.jsx)("div",{className:"loader ".concat(t?"":"hidden"),children:Object(o.jsx)("div",{className:"lds-dual-ring"})})}),h=s(14),y=s(13),N=s(15),k=function(e){var t=e.currentType,s=e.visibility,a=e.setVisibility,n=Object(c.useState)("unsorted"),i=Object(u.a)(n,2),l=i[0],d=i[1],j=Object(r.b)(),f=Object(r.c)((function(e){return e.apiData})),b=f.data,p=f.loading;return Object(c.useEffect)((function(){j(v(t.type))}),[t]),Object(c.useEffect)((function(){"unsorted"===l&&j(v(t.type))}),[l]),Object(o.jsxs)("div",{className:"modal ".concat(s?"":"hidden"),children:[Object(o.jsxs)("div",{className:"topbar",children:[Object(o.jsx)("h3",{className:"heading",children:t.type}),Object(o.jsx)("img",{className:"hide-button",src:g.default,alt:"hide",onClick:function(){return a(!1)}})]}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)(x,{loading:p}),Object(o.jsxs)("table",{className:"data-table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"upper-row",children:[Object(o.jsxs)("th",{className:"head-left",children:[t.fieldOne,Object(o.jsx)("div",{className:"sort-button-wrapper",children:"unsorted"===l?Object(o.jsx)("img",{className:"sort-button",src:N.default,alt:"arrow-up",onClick:function(){return d("ascending")}}):"ascending"===l?Object(o.jsx)("img",{className:"sort-button",src:h.default,alt:"arrow-up",onClick:function(){return d("descending")}}):Object(o.jsx)("img",{className:"sort-button",src:y.default,alt:"arrow-down",onClick:function(){return d("unsorted")}})})]}),Object(o.jsx)("th",{className:"head-right",children:t.fieldTwo})]})}),Object(o.jsx)("tbody",{className:0===(null===b||void 0===b?void 0:b.length)?"content-hidden":"",children:null===b||void 0===b?void 0:b.sort((function(e,s){return"ascending"===l?e[t.fieldOne]>s[t.fieldOne]?1:-1:"descending"===l?s[t.fieldOne]>e[t.fieldOne]?1:-1:0})).map((function(e,s){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e[t.fieldOne]}),Object(o.jsx)("td",{children:e[t.fieldTwo]})]},s)}))})]}),Object(o.jsx)("div",{className:"gradient"})]})]})},w=[{type:"capsules",fieldOne:"type",fieldTwo:"status"},{type:"crew",fieldOne:"name",fieldTwo:"status"},{type:"rockets",fieldOne:"name",fieldTwo:"company"},{type:"starlink",fieldOne:"version",fieldTwo:"id"}],T=function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),i=Object(u.a)(n,2),r=i[0],l=i[1];return Object(o.jsxs)("div",{className:"link-button-list",children:[w.map((function(e){return Object(o.jsx)(j,{type:e,setCurrentType:a,setVisibility:l},e.type)})),Object(o.jsx)(k,{currentType:s,visibility:r,setVisibility:l})]})},E=(s(74),s(75),s(19)),C=s(17),S=s(20),A=s(21),_=function(e){var t=e.rocketRef,s=e.isFlying;return Object(o.jsxs)("div",{className:"rocket ".concat(s&&"flying"),ref:t,children:[Object(o.jsx)("img",{className:"smoke-one",src:S.default,alt:"smoke1"}),Object(o.jsxs)("div",{className:"center",children:[Object(o.jsx)("img",{className:"rocket-img",src:E.default,alt:"rocket"}),Object(o.jsx)("img",{className:"landing-gear-img",src:C.default,alt:"landing-gear"})]}),Object(o.jsx)("img",{className:"smoke-two",src:A.default,alt:"smoke2"})]})},D=s(18),R=s(4),F=s(80),U=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),s=t[0],a=t[1];R.c.registerPlugin(F.a);var n=Object(c.useRef)(null),i=new R.b,r=function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),n.current.style.transform="rotate(90deg)",e.next=4,i.to(n.current,{duration:8,motionPath:{path:[{x:0,y:-600},{x:500,y:-200},{x:500,y:1100},{x:-1200,y:500},{x:-1200,y:-100},{x:-500,y:-200},{x:0,y:50},{x:0,y:0}],curviness:1,autoRotate:90},ease:R.a.easeInOut});case 4:a(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"illustration",children:[Object(o.jsx)(_,{rocketRef:n,isFlying:s}),Object(o.jsx)("img",{className:"planet",src:D.default,alt:"planet-img"}),Object(o.jsx)("span",{className:"launch-button ".concat(s&&"active"),onClick:r,children:s?"Flying Now!":"Launch Rocket!"})]})},L=(s(76),function(){return Object(o.jsxs)("div",{className:"background-items",children:[Object(o.jsx)("div",{className:"circle circle-1",children:Object(o.jsx)("div",{className:"filler"})}),Object(o.jsx)("div",{className:"circle circle-2",children:Object(o.jsx)("div",{className:"filler"})}),Object(o.jsx)("div",{className:"circle circle-3",children:Object(o.jsx)("div",{className:"filler"})}),Object(o.jsx)("span",{className:"dot dot-1"}),Object(o.jsx)("span",{className:"dot dot-2"}),Object(o.jsx)("span",{className:"dot dot-3"}),Object(o.jsx)("span",{className:"dot dot-4"})]})}),G=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("img",{className:"usertive-logo",src:l.default,alt:"images"}),Object(o.jsx)(L,{}),Object(o.jsxs)("div",{className:"content-wrapper",children:[Object(o.jsx)(T,{}),Object(o.jsx)(U,{})]}),Object(o.jsx)(d,{})]})},I=(s(77),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,81)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))}),P=s(7),V=s(33),M=s(34),B=s(23),J=Object(P.combineReducers)({apiData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_GET_REQUEST":return{loading:!0,data:[]};case"DATA_GET_SUCCESS":return Object(B.a)(Object(B.a)({},e),{},{loading:!1,data:t.payload});case"DATA_GET_FAILURE":return{loading:!1,error:t.payload};default:return e}}}),Q=[V.a],W=Object(P.createStore)(J,{},Object(M.composeWithDevTools)(P.applyMiddleware.apply(void 0,Q)));i.a.render(Object(o.jsx)(r.a,{store:W,children:Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(G,{})})}),document.getElementById("root")),I()}],[[78,1,2]]]);
//# sourceMappingURL=main.0d01867a.chunk.js.map