(this["webpackJsonpfin-bus"]=this["webpackJsonpfin-bus"]||[]).push([[0],{22:function(e,n,t){e.exports=t(34)},27:function(e,n,t){},28:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(13),r=t.n(i),c=(t(27),t(14)),l=t(15),s=t(20),u=t(16),f=t(21),d=t(17),p=t(5),h=(t(28),function(){return a.a.createElement("div",{className:"navbar"},a.a.createElement("a",{href:"#/"},"Feed"),a.a.createElement("a",{href:"#/profile"},"Profile"))}),m=function(){return console.log("--==== Template ::: Feed ====-- "),a.a.createElement("div",null,a.a.createElement("p",{className:"page-info"},"This is the Feed page."))},g=function(){return console.log("--==== Template ::: Prof ====-- "),a.a.createElement("div",null,a.a.createElement("p",{className:"page-info"},"This is the Profile page."))},v=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return console.log("--==== App Component Render Method ====--"),a.a.createElement("div",null,a.a.createElement(h,null),a.a.createElement(d.a,null,a.a.createElement(p.a,{exact:!0,path:"/profile",component:g}),a.a.createElement(p.a,{exact:!0,path:"/",component:m})))}}]),n}(o.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/fin-bus",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/fin-bus","/service-worker.js");w?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):E(e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.e5abec3f.chunk.js.map