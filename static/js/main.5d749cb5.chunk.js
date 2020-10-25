(this["webpackJsonpthe-contortionist"]=this["webpackJsonpthe-contortionist"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=(a(13),a(2)),i=a(4),l=a(1),s=a.n(l),u=a(6),h=a.n(u),f=a(7),m=new Audio(a.n(f).a);function d(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("savedData"))),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){a||c({lastCompleted:null}),localStorage.setItem("savedData",JSON.stringify(a))}),[a]);var l=s.a.get(a,"currentKey"),u=Object(n.useState)({secondsRemaining:150,intervalRef:null,start:function(){return v((function(e){return Object(o.a)(Object(o.a)({},e),{},{intervalRef:setInterval(e.decrementSeconds,1e3)})}))},pause:function(){return v((function(e){return clearInterval(e.intervalRef),Object(o.a)(Object(o.a)({},e),{},{intervalRef:null})}))},reset:function(){return v((function(e){return clearInterval(e.intervalRef),Object(o.a)(Object(o.a)({},e),{},{intervalRef:null,secondsRemaining:150})}))},decrementSeconds:function(){return v((function(e){return Object(o.a)(Object(o.a)({},e),{},{secondsRemaining:e.secondsRemaining-1})}))}}),f=Object(i.a)(u,2),d=f[0],v=f[1],p=d.secondsRemaining,b=d.intervalRef,y=d.start,R=d.pause,S=d.reset,w=Boolean(b),k="".concat(s.a.floor(p/60),":").concat(p%60<10?"0".concat(p%60):p%60),O=s.a.findIndex(g,{key:l}),j=s.a.nth(g,O-1),E=l?s.a.find(g,{key:l}):s.a.head(g),N=s.a.nth(s.a.concat(g,g),O+1),C=function(){c(Object(o.a)(Object(o.a)({},a),{},{currentKey:s.a.get(N,"key")})),S()};return Object(n.useEffect)((function(){p<=0&&(m.play(),C())}),[p]),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:h.a,alt:"Site logo, woman stretching"}),r.a.createElement("p",null,"A rolling queue of ",s.a.size(g)," stretching and rolling activities with a timer and a record of where you left off last time. Try to do ",s.a.ceil(s.a.size(g)/7)," every day to get through every body part in a week.")),r.a.createElement("div",{className:"current"},r.a.createElement("p",{className:"-smaller"},"Previous activity: ",s.a.get(j,"label")),r.a.createElement("h4",null,"Current activity: ",s.a.get(E,"label")),r.a.createElement("p",{className:"-smaller"},"Next activity: ",s.a.get(N,"label"))),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"time"},k),r.a.createElement("div",{className:"controls"},r.a.createElement("button",{onClick:w?S:function(){w?S():c(Object(o.a)(Object(o.a)({},a),{},{currentKey:s.a.get(j,"key")}))}},w?"Restart":"Back"),r.a.createElement("button",{onClick:w?R:function(){y(),m.play(),m.pause()}},w?"Pause":"Start"),r.a.createElement("button",{onClick:C},"Next")))))}var g=s.a.flatten(s.a.map([{name:"hamstring",hasStretch:!0,hasRolling:!0},{name:"glute",hasStretch:!0,hasRolling:!0},{name:"lat",hasStretch:!0,hasRolling:!0},{name:"pec",hasStretch:!0,hasRolling:!0},{name:"quad",hasStretch:!0,hasRolling:!0},{name:"hip-flexor",hasStretch:!0,hasRolling:!0},{name:"forearm",hasStretch:!0,hasRolling:!0},{name:"tricep",hasStretch:!0,hasRolling:!0},{name:"front-shoulder",hasStretch:!0,hasRolling:!1},{name:"groin",hasStretch:!0,hasRolling:!0},{name:"calf",hasStretch:!0,hasRolling:!0},{name:"trap",hasStretch:!1,hasRolling:!0}],(function(e){return function(e){var t=e.name,a=e.hasStretch,n=[];return e.hasRolling&&n.push({key:"".concat(t,"-roll-right"),type:"rolling",label:"Foam Roll Right ".concat(s.a.startCase(t))},{key:"".concat(t,"-roll-left"),type:"rolling",label:"Foam Roll Left ".concat(s.a.startCase(t))}),a&&n.push({key:"".concat(t,"-stretch-right"),type:"stretching",label:"Stretch Right ".concat(s.a.startCase(t))},{key:"".concat(t,"-stretch-left"),type:"stretching",label:"Stretch Left ".concat(s.a.startCase(t))}),n}(e)}))),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){return console.error("Error during service worker registration:",e)}))}var b,y=document.getElementById("root");y.hasChildNodes()?Object(c.hydrate)(r.a.createElement(d,null),y):Object(c.render)(r.a.createElement(d,null),y),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat(window.location.href,"service-worker.js");v?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){return e.unregister().then((function(){return window.location.reload()}))})):p(e,t)})).catch((function(){return console.log("No internet connection found. App is running in offline mode.")}))}(e,b),navigator.serviceWorker.ready.then((function(){return console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(e,b)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo.82113bab.png"},7:function(e,t,a){e.exports=a.p+"static/media/single-ding-sound-effect.205fabcd.mp3"},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.5d749cb5.chunk.js.map