(this["webpackJsonpradial-menu"]=this["webpackJsonpradial-menu"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),s=n.n(a),l=n(15),r=n.n(l),i=(n(22),n(23),n(5)),o=n.n(i),b=n(6),u=n.n(b),j=n(16),d=n(3),h=(n(43),function e(t){var n=Object(a.useState)(!1),s=Object(d.a)(n,2),l=s[0],r=s[1],i=Object(a.useState)(t.type),b=Object(d.a)(i,2),h=(b[0],b[1],Object(a.useState)(t.label)),p=Object(d.a)(h,2),O=p[0],g=(p[1],Object(a.useState)([])),f=Object(d.a)(g,2),x=f[0],m=f[1],v=Object(a.useState)(),y=Object(d.a)(v,2),k=(y[0],y[1]),w="http://18.203.83.17/public/explorePictures?path=",S=t.label?w+"/"+t.label:w,N=Object(a.useCallback)(Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("".concat(S),{json:!0,headers:{"X-TOKEN":"2d4e69f4823176197ccf41caa5ee6456"}});case 3:t=e.sent,console.log("inside try"),n=t.data.data,m(n),r(!0),console.log("inside try=",n),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),k(e.t0.message),window.alert(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))),C=O.split("/").length;console.log(O);var F=t.siblings.length;console.log(t.siblings.length);var M=t.index;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:"root"===t.label?"root":0===t.type?l?"clicked-folder":"folder":"picture",style:{transform:function(e,t,n){if(x){var c=8*(e+1),a=t,s=n,l=Math.PI/2/(a+1)*s,r=Math.abs(c*Math.cos(l)),i=Math.abs(c*Math.sin(l));return console.log("pos: a=",l,"r=",c,"n=",a,"i=",s),"translate("+r+"vw, "+i+"vw)"}}(C,F,M)},onClick:N,children:C}),l&&Object(c.jsx)("ul",{className:"nodes",children:x.children&&x.children.map((function(t,n){return Object(c.jsx)(e,{index:n,type:t.type,label:O+"/"+t.label.toString(),siblings:x.children},t.label)}))})]})}),p=(n(44),function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:e.type,onClick:function(){0!==e.type&&e.type}})})});var O=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("ul",{className:"nodes",children:Object(c.jsx)(h,{className:"root",label:"root",type:"0",siblings:[]})}),Object(c.jsx)(p,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),s(e),l(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.2f5078c3.chunk.js.map