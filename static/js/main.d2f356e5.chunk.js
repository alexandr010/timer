(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),o=n(4),a=n.n(o),u=(n(9),n(3)),i=(n(10),n(11),n(1)),r=Object(c.memo)((function(t){var e=t.onStart,n=t.onWait,c=t.onReset;return Object(i.jsxs)("div",{className:"controls",children:[Object(i.jsx)("button",{className:"button wait",onClick:n,children:"Wait"}),Object(i.jsx)("button",{className:"button start",onClick:e,children:"Start / Stop"}),Object(i.jsx)("button",{className:"button reset",onClick:c,children:"Reset"})]})}));var l=function(){var t=Object(c.useState)({hours:0,minutes:0,seconds:0}),e=Object(u.a)(t,2),n=e[0],s=e[1],o=Object(c.useState)(null),a=Object(u.a)(o,2),l=a[0],b=a[1],j=Object(c.useCallback)((function(){var t=setInterval((function(){s((function(t){var e=t.seconds+1,n=t.minutes,c=t.hours;return e>=60&&(n+=1,e=0),n>=60&&(c+=1,n=0),{hours:c,minutes:n,seconds:e}}))}),1e3);b(t)}),[]),d=Object(c.useCallback)((function(){clearInterval(l),s({hours:0,minutes:0,seconds:0}),b(null)}),[l]),O=Object(c.useCallback)((function(){l?d():j()}),[l,d,j]),f=Object(c.useCallback)((function(t){2===t.detail&&l&&(clearInterval(l),b(null))}),[l]),h=Object(c.useCallback)((function(){d(),j()}),[d,j]),m=n.hours,v=n.minutes,C=n.seconds;return Object(i.jsxs)("div",{className:"App",children:[m<10?"0".concat(m):m," : ",v<10?"0".concat(v):v," : ",C<10?"0".concat(C):C,Object(i.jsx)(r,{onStart:O,onWait:f,onReset:h})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),o(t),a(t)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.d2f356e5.chunk.js.map