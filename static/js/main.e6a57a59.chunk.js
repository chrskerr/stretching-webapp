(this["webpackJsonpthe-contortionist"]=this["webpackJsonpthe-contortionist"]||[]).push([[0],{44:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(7),c=n(29),i=(n(44),n(37)),s=n(24),o=n.n(s),d=n(4),l=n(30),u=n(11),b=n(3),h=n.n(b);var j=n(25),f=n.n(j),p=n(22),m=n(74),g=n(73),O=n.p+"static/media/logo.62967c48.png",x=n.p+"static/media/single-ding-sound-effect.ab26721d.mp3",y=n(2),v=new Audio(x),w=Object(m.a)({root:{flexGrow:1,padding:"2rem 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"},header:{marginBottom:"1em",textAlign:"center","& img ":{width:"min(95%, 25em)",filter:function(e){return e.darkMode?"invert(1) brightness(10)":""}},"& p":{textAlign:"justify"}},timer:{textAlign:"center",width:"100%"},time:{textAlign:"center",fontSize:"min(25vw, 7em)",color:"var(--highlight)"},controls:{width:"90%",margin:"0 auto",marginTop:"2em",display:"flex",justifyContent:"space-between"},buttonContainer:{width:"min(25%, 8em)",height:"3em","&  button":{textAlign:"center",borderRadius:"8px",border:"none",height:"100%",width:"100%",background:"var(--secondary)",overflow:"hidden",padding:0,cursor:"pointer"}}});function S(e){var t=e.state,n=e.dispatch,r=e.darkMode,c=w({darkMode:r}),i=t.duration,s=t.currentKey,o=t.activitiesList,l=t.currentActivityIndex,b=Object(a.useState)({secondsRemaining:i,intervalRef:null,start:function(){return p((function(e){return Object(d.a)(Object(d.a)({},e),{},{intervalRef:setInterval(e.decrementSeconds,1e3)})}))},pause:function(){return p((function(e){return clearInterval(e.intervalRef),Object(d.a)(Object(d.a)({},e),{},{intervalRef:null})}))},reset:function(e){return p((function(t){return clearInterval(t.intervalRef),Object(d.a)(Object(d.a)({},t),{},{intervalRef:null,secondsRemaining:e})}))},decrementSeconds:function(){return p((function(e){return Object(d.a)(Object(d.a)({},e),{},{secondsRemaining:e.secondsRemaining-1})}))}}),j=Object(u.a)(b,2),f=j[0],p=j[1],m=f.secondsRemaining,g=f.intervalRef,x=f.start,S=f.pause,k=f.reset,N=Boolean(g),C="".concat(h.a.floor(m/60),":").concat(m%60<10?"0".concat(m%60):m%60),M=0===l,q=l===h.a.size(o)-1,B=M?h.a.last(o):h.a.nth(o,l-1),I=h.a.nth(o,l),z=q?h.a.head(o):h.a.nth(o,l+1),R=function(){n({type:"setCurrentKey",key:h.a.get(z,"key")}),k(i)};return Object(a.useEffect)((function(){m<=0&&(v.play(),R())}),[m]),Object(a.useEffect)((function(){k(i)}),[i]),h.a.isUndefined(s)?null:Object(y.jsxs)("div",{className:c.root,children:[Object(y.jsxs)("div",{className:c.header,children:[Object(y.jsx)("img",{src:O,alt:"Site logo, woman stretching"}),Object(y.jsx)("p",{children:"A rolling queue of stretches with a timer, a finish bell, and a record of where you left off last time!"}),Object(y.jsx)("p",{children:"You can configure the duration and queue in the settings (top right), the defaults are based on what I'm bad at :)"})]}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("h4",{children:["Current activity: ",h.a.get(I,"label")]}),Object(y.jsxs)("p",{className:"-smaller",children:["Next activity: ",h.a.get(z,"label")]})]}),Object(y.jsxs)("div",{className:c.timer,children:[Object(y.jsx)("div",{className:c.time,children:C}),Object(y.jsxs)("div",{className:c.controls,children:[Object(y.jsx)("div",{className:c.buttonContainer,children:Object(y.jsx)("button",{onClick:N?function(){return k(i)}:function(){N?k(i):n({type:"setCurrentKey",key:h.a.get(B,"key")})},children:Object(y.jsx)("span",{className:"fa-chevrons-left"})})}),Object(y.jsx)("div",{className:c.buttonContainer,children:Object(y.jsx)("button",{onClick:N?S:function(){x(),v.play(),v.pause()},children:Object(y.jsx)("span",{className:N?"fa-pause":"fa-play"})})}),Object(y.jsx)("div",{className:c.buttonContainer,children:Object(y.jsx)("button",{onClick:R,children:Object(y.jsx)("span",{className:"fa-chevrons-right"})})})]})]})]})}var k=n(9),N=n(72),C=n(6),M=Object(m.a)({root:{flexGrow:1,padding:"4rem 0",display:"flex",flexDirection:"column",margin:"0 auto","& *":{animation:"$fadein 150ms",willChange:"opacity"}},header:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginBottom:"1.5rem","& > *":{minWidth:"13rem"},"& button":{background:"var(--tertiary)",display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"4px",padding:"0.3rem 0.6rem",cursor:"pointer",fontSize:"80%"}},input:{display:"flex",alignItems:"center",paddingTop:"0.5rem",paddingBottom:"0.5rem",flexWrap:"wrap","& > *":{margin:"0 0.5rem 0 0.5rem",padding:0}},stretchMapInput:{display:"flex",alignItems:"center",paddingTop:"0.5rem",paddingBottom:"0.5rem",flexWrap:"wrap",justifyContent:function(e){return e.isBig?"space-betweem":"flex-start"},"& > *":{margin:"0.2rem 0.5rem",padding:0}},borderBottom:{borderBottom:"1px dashed lightgrey"},button:{display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"4px",padding:"0.3rem 0.4rem",cursor:"pointer",fontSize:"70%","& span":{padding:0,margin:0}},deleteButton:{background:"var(--highlight)",width:"60px"},addButton:{background:"var(--secondary)",width:"60px"},upDownButton:{background:"white",display:"inline-block",padding:0,margin:"0.25rem",border:"1px inset var(--paragraph)"},hidden:{opacity:0,cursor:"default"},disabledButton:{opacity:.25,cursor:"not-allowed"},popover:{"& .MuiPaper-root":{marginTop:"8px",padding:"1.5rem",maxHeight:"70vh",maxWidth:"70vw"}},"@keyframes fadein":{from:{opacity:0},to:{opacity:1}}});function q(e){var t=e.state,n=e.dispatch,r=t.duration,c=t.useDefaultStretches,i=t.stretchesMap,s=Object(N.a)("(min-width:893px)"),o=M({isBig:s}),l=Object(a.useState)(!1),b=Object(u.a)(l,2),j=b[0],f=b[1],p=Object(a.useState)({name:"",frequency:1,bothSides:!0}),m=Object(u.a)(p,2),O=m[0],x=m[1];return Object(y.jsxs)("div",{className:o.root,children:[Object(y.jsxs)("div",{className:o.header,children:[Object(y.jsx)("h4",{children:"Settings:"}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:function(e){return f(e.currentTarget)},children:"Guide"})})]}),Object(y.jsx)(g.a,{className:o.popover,open:Boolean(j),anchorEl:j,onClose:function(){return f(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(y.jsx)(L,{})}),Object(y.jsxs)("div",{className:o.input,children:[Object(y.jsx)("h5",{children:"Duration:"}),Object(y.jsx)(R,{value:r,wide:!0,onChange:function(e){return n({type:"setDuration",value:Number(e)})}}),Object(y.jsxs)("p",{children:["seconds \u2248 ",h.a.round(r/60,1)," mins"]})]}),Object(y.jsxs)("div",{className:o.input,children:[Object(y.jsx)("h5",{children:"Use Default Stretches?:"}),Object(y.jsx)(I,{checked:c,onChange:function(){return n({type:"setUseDefaultStretches",value:!c})}})]}),!h.a.isEmpty(i)&&h.a.map(h.a.concat(i),(function(e,t){return Object(y.jsxs)("div",{className:Object(C.a)(o.stretchMapInput,o.borderBottom),children:[Object(y.jsx)(R,{disabled:c,label:"Name",value:h.a.get(e,"name"),onChange:function(e){return n({type:"updateStretchesMap",stretchesMap:h.a.map(i,(function(n,a){return t!=a?n:Object(d.a)(Object(d.a)({},n),{},{name:e})}))})}}),Object(y.jsx)(R,{disabled:c,label:"Frequency",value:h.a.get(e,"frequency"),onChange:function(e){return n({type:"updateStretchesMap",stretchesMap:h.a.map(i,(function(n,a){return t!=a?n:Object(d.a)(Object(d.a)({},n),{},{frequency:Number(e)})}))})}}),Object(y.jsx)(I,{disabled:c,label:"Both Sides",checked:h.a.get(e,"bothSides"),onChange:function(){return n({type:"updateStretchesMap",stretchesMap:h.a.map(i,(function(n,a){return t!=a?n:Object(d.a)(Object(d.a)({},n),{},{bothSides:!h.a.get(e,"bothSides")})}))})}}),Object(y.jsx)("button",{disabled:c,className:Object(C.a)(o.button,o.deleteButton,Object(k.a)({},o.disabledButton,c)),onClick:function(){c||n({type:"updateStretchesMap",stretchesMap:h.a.reject(i,(function(e,n){return t===n}))})},children:"Delete"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:Object(C.a)(o.button,o.upDownButton,Object(k.a)({},o.disabledButton,c||0===t)),disabled:0===t,onClick:function(){c||0===t||n({type:"updateStretchesMap",stretchesMap:h.a.reduce(i,(function(n,a,r){return r===t?n:r===t-1?h.a.concat(n,e,a):h.a.concat(n,a)}),[])})},children:Object(y.jsx)("span",{className:"fa-chevron-up"})}),Object(y.jsx)("button",{className:Object(C.a)(o.button,o.upDownButton,Object(k.a)({},o.disabledButton,c||t===h.a.size(i)-1)),disabled:t===h.a.size(i)-1,onClick:function(){c||t===h.a.size(i)-1||n({type:"updateStretchesMap",stretchesMap:h.a.reduce(i,(function(n,a,r){return r===t?n:r===t+1?h.a.concat(n,a,e):h.a.concat(n,a)}),[])})},children:Object(y.jsx)("span",{className:"fa-chevron-down"})})]})]},t)})),Object(y.jsxs)("div",{className:o.stretchMapInput,children:[Object(y.jsx)(R,{disabled:c,label:"Name",value:h.a.get(O,"name"),onChange:function(e){return x((function(t){return Object(d.a)(Object(d.a)({},t),{},{name:e})}))}}),Object(y.jsx)(R,{disabled:c,label:"Frequency",value:h.a.get(O,"frequency"),onChange:function(e){return x((function(t){return Object(d.a)(Object(d.a)({},t),{},{frequency:Number(e)})}))}}),Object(y.jsx)(I,{disabled:c,label:"Both Sides",checked:h.a.get(O,"bothSides"),onChange:function(){return x((function(e){return Object(d.a)(Object(d.a)({},e),{},{bothSides:!e.bothSides})}))}}),Object(y.jsx)("button",{className:Object(C.a)(o.button,o.addButton,Object(k.a)({},o.disabledButton,!O.name||!O.frequency||c)),disabled:!O.name||!O.frequency||c,onClick:function(){O.name&&O.frequency&&(n({type:"updateStretchesMap",stretchesMap:h.a.concat(i,O)}),x({name:"",frequency:1,bothSides:!0}))},children:"Add"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:Object(C.a)(o.button,o.upDownButton,o.hidden,Object(k.a)({},o.disabledButton,c)),disabled:!0,onClick:function(){},children:Object(y.jsx)("span",{className:"fa-chevron-up"})}),Object(y.jsx)("button",{disabled:!0,className:Object(C.a)(o.button,o.upDownButton,o.hidden,Object(k.a)({},o.disabledButton,c)),onClick:function(){},children:Object(y.jsx)("span",{className:"fa-chevron-down"})})]})]})]})}var B=Object(m.a)({root:{display:"flex",alignItems:"center",opacity:function(e){return e.disabled?.25:1}},label:{fontSize:"85%",padding:"0 1rem 0 0",margin:0},toggle:{borderStyle:"solid",borderColor:"var(--tertiary)",borderWidth:"1px",padding:"3px",cursor:"pointer","& span":{opacity:function(e){return e.checked?1:0},fontWeight:"bold"}}}),I=function(e){var t=e.checked,n=e.onChange,a=e.label,r=e.disabled,c=B({checked:t,disabled:r});return Object(y.jsxs)("span",{className:c.root,children:[a&&Object(y.jsxs)("label",{className:c.label,children:[a,":"]}),Object(y.jsx)("span",{className:c.toggle,onClick:r?null:n,children:Object(y.jsx)("span",{className:"fa-check"})})]})},z=Object(m.a)({root:{display:"flex",alignItems:"center",opacity:function(e){return e.disabled?.25:1}},label:{fontSize:"85%",padding:"0 1rem 0 0",margin:0},input:{borderStyle:"solid",borderColor:"var(--tertiary)",borderWidth:"1px",padding:"2px",width:function(e){var t=e.isTypeNumber,n=e.wide;return t?n?"4rem":"2rem":n?"12rem":"7rem"},"& :active, :hover, :focus":{backgroundColor:"var(--secondary)"},"& input":{border:"none"}}}),R=function(e){var t=e.value,n=e.onChange,a=e.label,r=e.disabled,c=e.wide,i="number"===typeof t,s=z({isTypeNumber:i,wide:c,disabled:r});return Object(y.jsxs)("span",{className:s.root,children:[a&&Object(y.jsxs)("label",{className:s.label,children:[a,":"]}),Object(y.jsx)("input",{className:s.input,type:i?"number":"text",value:t,disabled:r,onChange:r?null:function(e){return n(e.target.value)}})]})},D=Object(m.a)({list:{"& li":{fontSize:"75%",width:"90%"}}}),L=function(){var e=D();return Object(y.jsxs)("div",{children:[Object(y.jsx)("h5",{children:"Guide"}),Object(y.jsxs)("ul",{className:e.list,children:[Object(y.jsxs)("li",{children:[Object(y.jsx)("b",{children:"Name:"})," The name which will show up for you in the queue."]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("b",{children:"Frequency:"})," The number of times the stretch will repeat in the queue. If frequencies above 1 are used, then the higher frequency stretches will be added to the end in the same order as originally until the frequency has been hit."]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("b",{children:"Both Sides:"})," A single entry or a single entry for each side of your body. Text will either: just be the name, or for both sided stretches, it will be 'Stretch Left/Right *name*'."]})]})]})},T=Object(m.a)({root:{flexGrow:1,display:"flex"},viewPort:{flexGrow:1,position:"relative",width:"min(70vw, 40em)"},animated:{willChange:"transform, opacity",display:"flex",flexDirection:"column",position:"absolute",top:0,right:0,left:0,bottom:0},toggle:{position:"fixed",top:"1rem",zIndex:15,"& button":{width:"1.5rem",height:"1.5rem",backgroundColor:"var(--alt-background)",padding:0,border:"none",cursor:"pointer",borderRadius:"4px","& span::before":{color:"var(--alt-paragraph)"}}},darkModeToggle:{right:"1rem"},settingsToggle:{right:"calc( 1rem + 1.5rem + 1rem )"},queueToggle:{right:"calc( 1rem + 1.5rem + 1rem + 1.5rem + 1rem )"},popover:{"& .MuiPaper-root":{marginTop:"8px",padding:"1.5rem",maxHeight:"70vh",maxWidth:"70vw"}},list:{columnCount:function(e){var t=e.count;return h.a.clamp(1,h.a.ceil(t/20),3)},columnGap:"1.5rem","& li":{fontSize:"75%",width:"90%"},"& .current":{fontWeight:900}}});function A(){var e=Object(a.useReducer)(G,K),t=Object(u.a)(e,2),n=t[0],r=t[1],c=n.loaded,i=n.stretchesMap,s=n.activitiesList,b=n.currentActivityIndex;Object(a.useEffect)((function(){Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.getItem("state");case 2:t=e.sent,a=W(h.a.get(t,"stretchesMap")||i),r({type:"loadLocalStorage",state:Object(d.a)(Object(d.a)({},t),{},{loaded:!0,activitiesList:a,currentActivityIndex:h.a.findIndex(h.a.get(n,"activitiesList"),{key:h.a.get(t,"currentKey")})||0})});case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(a.useEffect)((function(){f.a.setItem("state",h.a.omit(n,["activitiesList","loaded","currentActivityIndex"]))}),[n]);var j=Object(a.useState)(function(e,t,n){var r=e.map((function(e){return window.matchMedia(e)})),c=function(){var e=r.findIndex((function(e){return e.matches}));return"undefined"!==typeof t[e]?t[e]:n},i=Object(a.useState)(c),s=Object(u.a)(i,2),o=s[0],d=s[1];return Object(a.useEffect)((function(){var e=function(){return d(c)};return r.forEach((function(t){return t.addListener(e)})),function(){return r.forEach((function(t){return t.removeListener(e)}))}}),[]),o}(["(prefers-color-scheme: dark)"],[!0],!1)),m=Object(u.a)(j,2),O=m[0],x=m[1];Object(a.useEffect)((function(){document.getElementById("apple-mobile-web-app-status-bar-style").setAttribute("content",O?"black-translucent":"default")}),[O]);var v=Object(a.useState)(!1),w=Object(u.a)(v,2),k=w[0],N=w[1],M=Object(p.b)({opacity:k?1:0,transform:"perspective(600px) rotateY(".concat(k?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),B=M.transform,I=M.opacity,z=M.width,R=Object(a.useState)(!1),D=Object(u.a)(R,2),L=D[0],A=D[1],E=T({count:h.a.size(s)});return c?Object(y.jsxs)("div",{className:E.root,children:[Object(y.jsxs)("div",{className:E.viewPort,style:{width:z},children:[Object(y.jsx)(p.a.div,{className:E.animated,style:{zIndex:k?1:10,opacity:I.interpolate((function(e){return 1-e})),transform:B},children:Object(y.jsx)(S,{state:n,dispatch:r,darkMode:O})}),Object(y.jsx)(p.a.div,{className:E.animated,style:{display:k?"":"none",zIndex:k?10:1,opacity:I,transform:B.interpolate((function(e){return"".concat(e," rotateY(180deg)")}))},children:Object(y.jsx)(q,{state:n,dispatch:r})})]}),Object(y.jsx)("div",{className:Object(C.a)(E.toggle,E.queueToggle),children:Object(y.jsx)("button",{onClick:function(e){return A(e.currentTarget)},children:Object(y.jsx)("span",{className:L?"fa-x":"fa-list"})})}),Object(y.jsx)("div",{className:Object(C.a)(E.toggle,E.settingsToggle),children:Object(y.jsx)("button",{onClick:function(){return N((function(e){return!e}))},children:Object(y.jsx)("span",{className:k?"fa-x":"fa-settings"})})}),Object(y.jsx)("div",{className:Object(C.a)(E.toggle,E.darkModeToggle),children:Object(y.jsx)("button",{onClick:function(){return x((function(e){return!e}))},children:Object(y.jsx)("span",{className:O?"fa-sun":"fa-moon"})})}),Object(y.jsx)(g.a,{className:E.popover,open:Boolean(L),anchorEl:L,onClose:function(){return A(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(y.jsxs)("div",{children:[Object(y.jsx)("h5",{children:"Whole Stretching Loop"}),Object(y.jsx)("ol",{className:E.list,children:!h.a.isEmpty(s)&&h.a.map(s,(function(e,t){var n=e.key,a=e.label;return Object(y.jsx)("li",{className:t===b?"current":"",children:a},n)}))})]})}),Object(y.jsx)("style",{children:"\n\t\t\t\thtml {\n\t\t\t\t\t--background: ".concat(O?"#000":"#ffffff",";\n\t\t\t\t\t--alt-background: ").concat(O?"#ffffff":"#000",";\n\t\t\t\t\t\n\t\t\t\t\t--stroke: ").concat(O?"#121629":"#272343",";\n\t\t\t\t\t--highlight: ").concat(O?"#eebbc3":"#ffd803",";\n\t\t\t\t\t--secondary: ").concat(O?"#fffffe":"#e3f6f5",";\n\t\t\t\t\t--tertiary: ").concat(O?"#eebbc3":"#bae8e8",";\n\t\t\t\t\t--heading: ").concat(O?"#fffffe":"#272343",";\n\t\t\t\t\t\n\t\t\t\t\t--paragraph: ").concat(O?"#b8c1ec":"#2d334a",";\n\t\t\t\t\t--alt-paragraph: ").concat(O?"#2d334a":"#b8c1ec",";\n\t\t\t\t}\n\t\t\t")})]}):null}var E=[{name:"Glute",frequency:3,bothSides:!0},{name:"Hamstring",frequency:3,bothSides:!0},{name:"Quad",frequency:3,bothSides:!0},{name:"Half Lotus",frequency:2,bothSides:!0},{name:"Forearm",frequency:2,bothSides:!0},{name:"Front Shoulder",frequency:2,bothSides:!0},{name:"Standing Pike Stretch",bothSides:!1,frequency:1},{name:"Lat",frequency:1,bothSides:!0},{name:"Pec",frequency:1,bothSides:!0},{name:"Frog Stretch",frequency:1,bothSides:!1},{name:"Calf",frequency:1,hasRolling:!1,bothSides:!0}],W=function(e){if(h.a.isEmpty(e))return[];var t=h.a.max(h.a.map(e,"frequency")),n=h.a.reduce(h.a.range(0,t),(function(t,n){return h.a.concat(t,h.a.filter(e,(function(e){return e.frequency>=n+1})))}),[]);return h.a.reduce(n,(function(e,t){var n=t.name,a=t.bothSides,r=void 0===a||a,c=h.a.size(h.a.filter(e,{name:n}));return r?h.a.concat(e,{key:"".concat(n,"-right-").concat(c),label:"Stretch Right ".concat(h.a.startCase(n)),name:n},{key:"".concat(n,"-left-").concat(c),label:"Stretch Left ".concat(h.a.startCase(n)),name:n}):h.a.concat(e,{key:"".concat(n,"-").concat(c),label:"".concat(h.a.startCase(n)),name:n})}),[])},G=function(e,t){var n=t.type,a=Object(i.a)(t,["type"]);switch(n){case"loadLocalStorage":return Object(d.a)(Object(d.a)({},e),h.a.get(a,"state"));case"setCurrentKey":return Object(d.a)(Object(d.a)({},e),{},{currentKey:h.a.get(a,"key"),currentActivityIndex:h.a.findIndex(h.a.get(e,"activitiesList"),{key:h.a.get(a,"key")})||0});case"setUseDefaultStretches":return Object(d.a)(Object(d.a)({},e),{},{useDefaultStretches:h.a.get(a,"value"),stretchesMap:E});case"updateStretchesMap":return Object(d.a)(Object(d.a)({},e),{},{stretchesMap:h.a.get(a,"stretchesMap"),activitiesList:W(h.a.get(a,"stretchesMap"))});case"setDuration":return Object(d.a)(Object(d.a)({},e),{},{duration:h.a.get(a,"value")});default:return e}},K={loaded:!1,duration:150,useDefaultStretches:!0,stretchesMap:E,currentKey:null,currentActivityIndex:0,activitiesList:[]},F=document.getElementById("root");if(F.hasChildNodes()?Object(r.hydrate)(Object(y.jsx)(A,{}),F):Object(r.render)(Object(y.jsx)(A,{}),F),"serviceWorker"in navigator){var P=new c.a("service-worker.js");P.addEventListener("installed",(function(e){e.isUpdate&&window.location.reload()})),P.register()}}},[[52,1,2]]]);
//# sourceMappingURL=main.e6a57a59.chunk.js.map