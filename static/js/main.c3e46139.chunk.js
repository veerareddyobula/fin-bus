(this["webpackJsonpfin-bus"]=this["webpackJsonpfin-bus"]||[]).push([[0],{22:function(e,n,t){e.exports=t(34)},27:function(e,n,t){},28:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(14),r=t.n(i),c=(t(27),t(15)),l=t(16),s=t(20),u=t(17),f=t(21),d=t(8),p=t(5),h=(t(28),function(){return a.a.createElement("div",{className:"navbar"},a.a.createElement(d.b,{to:"/"},"Feed"),a.a.createElement(d.b,{to:"profile"},"Profile"))}),m=function(e){var n=e.title;return console.log("--==== Template ::: Title ====-- ",n),a.a.createElement("div",null,a.a.createElement("p",{className:"page-info"},"This is the ",n," page."))},g=function(e){return a.a.createElement(m,{title:"Feed"})},v=function(e){return a.a.createElement(m,{title:"Profile"})},w=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return console.log("--==== App Component Render Method ====--"),a.a.createElement("div",null,a.a.createElement(h,null),a.a.createElement(d.a,null,a.a.createElement(p.a,{exact:!0,path:"/profile",component:v}),a.a.createElement(p.a,{exact:!0,path:"/",component:g})))}}]),n}(o.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");E?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):b(e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.c3e46139.chunk.js.map