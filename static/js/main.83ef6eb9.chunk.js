(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),i=a.n(o),r=(a(9),a(1));a(10);function l(e){var t=e.count;return c.a.createElement("div",{className:"timer-container"},c.a.createElement("h2",{id:e.id},e.title),c.a.createElement("div",{className:"flex actions-wrapper"},c.a.createElement("button",{id:e.idd,onClick:function(){e.update(t-1<=1?1:t-1)}},c.a.createElement("i",{className:"fas fa-minus"})),c.a.createElement("span",{id:e.idl},t),c.a.createElement("button",{id:e.idi,onClick:function(){e.update(t+1>=60?60:t+1)}},c.a.createElement("i",{className:"fas fa-plus"}))))}var s=function(){var e=Object(n.useState)(5),t=Object(r.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(25),s=Object(r.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(1500),f=Object(r.a)(d,2),b=f[0],p=f[1],E=Object(n.useState)("Session"),h=Object(r.a)(E,2),v=h[0],k=h[1],j=Object(n.useState)(!1),S=Object(r.a)(j,2),O=S[0],g=S[1],w=Object(n.useState)(),N=Object(r.a)(w,2),B=N[0],C=N[1],y={id:"break-label",title:"Break Length",idd:"break-decrement",idi:"break-increment",idl:"break-length",count:a,update:function(e){return O?null:o(e)}},x={id:"session-label",title:"Session Length",idd:"session-decrement",idi:"session-increment",idl:"session-length",count:u,update:function(e){return O?null:(m(e),p(60*e))}};return Object(n.useEffect)((function(){var e=null;return O&&b>=0?e=setInterval((function(){p((function(e){return e-1}))}),1e3):O&&-1===b&&-1===b&&(B.play(),k("Break"),p((function(e){return"Session"===v?60*a:60*u})),k("Session"===v?"Break":"Session")),function(){clearInterval(e)}}),[O,b,v,u,a,B]),c.a.createElement("div",null,c.a.createElement("div",{className:"flex"},c.a.createElement(l,y),c.a.createElement(l,x)),c.a.createElement("div",{className:"clock-container"},c.a.createElement("h1",{id:"timer-label"},v),c.a.createElement("span",{id:"time-left"},function(e){var t=1===(""+Math.floor(b/60)).length?"0"+Math.floor(b/60):""+Math.floor(b/60),a=1===(""+b%60).length?"0"+b%60:""+b%60;return"".concat(t,":").concat(a)}()),c.a.createElement("audio",{id:"beep",preload:"auto",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",ref:function(e){C(e)}}),c.a.createElement("div",{className:"flex"},c.a.createElement("button",{className:"button-time",id:"start_stop",onClick:function(){g(!O)}},c.a.createElement("i",{className:"fas fa-".concat(O?"pause":"play")})),c.a.createElement("button",{className:"button-time",id:"reset",onClick:function(){o(5),m(25),p(1500),k("Session"),g(!1),B.pause(),B.currentTime=0}},c.a.createElement("i",{className:"fas fa-sync"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.83ef6eb9.chunk.js.map