(this.webpackJsonpfixed_site=this.webpackJsonpfixed_site||[]).push([[0],{24:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return o}));var n=r(38),a=function(e){return RegExp("^q[0-9]+\\.[0-9]+$").test(e.toLowerCase())},c=function(e){return a(e)||function(e){return RegExp("^uq[0-9]+\\.[0-9]+$").test(e.toLowerCase())}(e)};function i(e){e=e.toLowerCase();if(c(e)){var t=e.split("q")[1].split(".").map((function(e){return parseInt(e)}));return[a(e)?1:0].concat(Object(n.a)(t))}return"float32"===e?[1,8,23]:"float64"===e?[1,11,52]:[0,0,0]}function s(t,r){if(c(r)){var n=i(r),s=parseInt(t,16)/(1<<n[2]);return a(r)&&1===function(e,t){for(var r=parseInt(e,16),n=[],a=0;a<i(t).reduce((function(e,t){return e+t}));a++)n.push(r&1<<a?1:0);return n.reverse()}(t,r)[0]&&(s-=1<<1+n[1]),s}return"float32"===r?new Float32Array(Uint8Array.from(e.from(t,"hex").reverse()).buffer)[0]:"float64"===r?new Float64Array(Uint8Array.from(e.from(t,"hex").reverse()).buffer)[0]:0}function o(e,t){if(c(t)){var r=i(t),n=1/(1<<r[2]),a=Math.round(e/n),s=r.reduce((function(e,t){return e+t}));a<0&&(a+=1<<s+1);var o=Math.ceil(s/4);return j=o,a.toString(16).padStart(j,"0")}return"0";var j}}).call(this,r(46).Buffer)},44:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(15),i=r.n(c),s=(r(44),r(45),r(16)),o=r(6),j=r(60),l=r(62),u=r(37),b=r(14),f=r(58),d=r(61),h=r(33),O=r(59),x=r(24),g=r(3),p=function(e){return"0"<=e&&e<="9"};var v=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useState)("q0.0"),i=Object(b.a)(c,2),s=i[0],o=i[1],j=Object(n.useState)("q"),l=Object(b.a)(j,2),u=l[0],v=l[1],C=Object(n.useState)("0"),y=Object(b.a)(C,2),m=y[0],F=y[1],S=Object(n.useState)("0"),L=Object(b.a)(S,2),w=L[0],q=L[1],k=Object(n.useState)("0"),I=Object(b.a)(k,2),R=I[0],A=I[1],E=Object(n.useState)("0"),T=Object(b.a)(E,2),B=T[0],G=T[1],P=function(r){var n=r.target,a=n.value,c=(n.name,a.charAt(a.length-1));switch(p(c)||(r.target.value=a.slice(0,-1)),r.target){case e.current:F(r.target.value);break;case t.current:q(r.target.value)}};Object(n.useEffect)((function(){o("".concat(u||"",m||"",".",w||""))}),[u,m,w]),Object(n.useEffect)((function(){a.current.value=B}),[B]),Object(n.useEffect)((function(){r.current.value=R}),[R]);var V=function(e){if("Enter"===e.key)switch(e.target){case a.current:A(Object(x.c)(parseFloat(B),s).toString());break;case r.current:G(Object(x.b)(R,s).toString())}};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(f.a,{children:[Object(g.jsxs)(d.a,{children:[Object(g.jsxs)(d.a.Label,{children:["Q-Fixed Type : ",s," / ",Object(x.a)(s||"q0.0").reduce((function(e,t){return e+t})),"bit"]}),Object(g.jsxs)(d.a.Row,{children:[Object(g.jsx)(d.a.Group,{as:h.a,controlId:"signed",children:Object(g.jsxs)(d.a.Control,{as:"select",defaultValue:"Signed",onChange:function(e){var t=e.target,r=t.value;t.name;v("Signed"===r?"q":"uq")},children:[Object(g.jsx)("option",{children:"Signed"}),Object(g.jsx)("option",{children:"Unsigned"})]})}),Object(g.jsx)(d.a.Group,{as:h.a,controlId:"integer",children:Object(g.jsx)(d.a.Control,{type:"text",placeholder:"Integer",defaultValue:0,onChange:P,ref:e})}),Object(g.jsx)(d.a.Group,{as:h.a,controlId:"fraction",children:Object(g.jsx)(d.a.Control,{type:"text",placeholder:"Fraction",defaultValue:0,onChange:P,ref:t})})]})]}),Object(g.jsxs)(d.a.Group,{children:[Object(g.jsx)(d.a.Label,{children:"Hex Representation"}),Object(g.jsx)(d.a.Control,{type:"text",placeholder:"hex",onKeyPress:V,onChange:function(e){var t=e.target,r=t.value,n=(t.name,r.charAt(r.length-1).toLowerCase());p(n)||"a"<=n&&n<="f"?A(e.target.value):e.target.value=r.slice(0,-1)},ref:r}),Object(g.jsx)("br",{}),Object(g.jsx)(d.a.Label,{children:"Value"}),Object(g.jsx)(d.a.Control,{type:"text",placeholder:"value in decimal",onKeyPress:V,onChange:function(e){G(e.target.value)},ref:a})]}),Object(g.jsx)("br",{}),Object(g.jsx)(O.a,{children:"Calculate"})]})})};var C=function(){var e={textDecoration:"inherit",color:"inherit"};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(s.a,{children:[Object(g.jsxs)(j.a,{bg:"light",expand:"lg",children:[Object(g.jsxs)(j.a.Brand,{children:[" ",Object(g.jsx)(u.a,{})," Type Calculator "]}),Object(g.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(l.a.Link,{children:Object(g.jsx)(s.b,{to:"/float32",style:e,children:"Float32"})}),Object(g.jsx)(l.a.Link,{children:Object(g.jsx)(s.b,{to:"/float64",style:e,children:"Float64"})}),Object(g.jsx)(l.a.Link,{children:Object(g.jsx)(s.b,{to:"/qfixed",style:e,children:"Q-Fixed"})}),Object(g.jsx)(l.a.Link,{children:Object(g.jsx)(s.b,{to:"/fixed_arithmetic",style:e,children:"Fixed Arithmetic"})})]})})]}),Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"/float32"}),Object(g.jsx)(o.a,{path:"/float64"}),Object(g.jsx)(o.a,{path:"/qfixed",children:Object(g.jsx)(v,{})}),Object(g.jsx)(o.a,{path:"/fixed_arithmetic"})]})]})})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,63)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),y()}},[[56,1,2]]]);
//# sourceMappingURL=main.54c389b6.chunk.js.map