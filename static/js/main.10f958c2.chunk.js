(this["webpackJsonpbeast-academy-clone"]=this["webpackJsonpbeast-academy-clone"]||[]).push([[0],{65:function(t,e,o){},90:function(t,e,o){"use strict";o.r(e);var s=o(0),n=o(1),a=o.n(n),i=o(31),c=o.n(i),l=(o(65),o(99)),r=o(97),h=o(55),b=o(100),u=Object(h.a)({palette:{primary:{main:"#264653",contrastText:"#fff"},secondary:{main:"#e76f51",contrastText:"#fff"},success:{main:"#4caf50",contrastText:"#fff"}},typography:{fontFamily:"system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),d=u=Object(b.a)(u),m=o(8),g=o.n(m),j=o(9),f=a.a.createContext(null),p=o(11),x=o(7),O=o(20),v="drop-shadow(3px 3px 0 rgba(0,0,0,.5))",y=g()((function(t){return{root:{backgroundColor:"transparent",cursor:"url(".concat("/beast-academy-clone/assets/cursors/wonky-hand-point.cur","),pointer"),filter:v,"&:hover, &:focus":{filter:"drop-shadow(3px 3px 0 rgba(0,0,0,.5)) drop-shadow(0 0 2px rgba(255,255,255,.9))"},"&:active":{filter:"drop-shadow(1px 1px 0 rgba(0,0,0,.5)) drop-shadow(0 0 1px rgba(255,255,255,.9))",transform:"translate(2px, 2px)"},"&:focus":{outline:"none"}},inner:{position:"relative",width:"100%",height:"100%"},background:{position:"absolute",top:"50%",transform:"translateY(-50%)",left:0,width:"100%",height:"100%","& img":{width:"100%",height:"100%",objectFit:"contain"}},content:{width:"100%",height:"100%",position:"absolute",top:0,left:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center","& img":{padding:"0 5% 0 0"},"& span":{fontFamily:'"RobotoSlab", serif',fontWeight:500,textTransform:"uppercase",wordSpacing:"100vw",lineHeight:1.25}}}})),w=a.a.forwardRef((function(t,e){var o=t.iconSource,a=t.backgroundSource,i=t.style,c=t.iconStyle,l=t.title,r=t.isText,h=void 0!==r&&r,b=t.textStyle,u=y(),d=Object(n.useRef)(null),m=Object(n.useState)(0),g=Object(j.a)(m,2),f=g[0],p=g[1];Object(n.useEffect)((function(){if(d.current){var t=l.split(" ").length||1,e=d.current.getBoundingClientRect().height;p(Math.round(e/t/4))}}),[l]);var O=Object(n.useMemo)((function(){return h?{width:"15%",height:"100%",objectFit:"contain"}:{width:"70%",height:"70%",objectFit:"contain"}}),[h]);return Object(s.jsx)("button",{className:u.root,style:Object(x.a)({},i),"aria-label":l,ref:function(t){d.current=t,e&&(e.current=t)},children:Object(s.jsxs)("div",{className:u.inner,children:[a&&Object(s.jsx)("div",{className:u.background,children:Object(s.jsx)("img",{src:a,alt:l})}),Object(s.jsxs)("div",{className:u.content,style:Object(x.a)({},c),children:[o&&Object(s.jsx)("img",{src:o,alt:l,style:Object(x.a)(Object(x.a)({},O),c)}),h&&Object(s.jsx)("span",{style:Object(x.a)({fontSize:f},b),children:l})]})]})})})),k=g()((function(t){return{root:{fontFamily:'"RobotoSlab", serif',fontSize:"1rem",position:"fixed",zIndex:t.zIndex.tooltip},innerWrapper:{position:"relative",width:"100%",height:"100%"},background:{position:"absolute",width:"100%",height:"100%",objectFit:"contain"},text:{position:"absolute",display:"block"},textDimension:{padding:"2px 5px",width:"fit-content",textAlign:"center"}}})),S=function(t){var e=t.message,o=t.x,a=t.y,i=t.maxWidth,c=t.handleMouseMove,l=t.handleMouseLeave,r=k(),h=Object(n.useRef)(null),b=Object(n.useState)(null),u=Object(j.a)(b,2),d=u[0],m=u[1],g=Object(n.useContext)(f),O=(null===g||void 0===g?void 0:g.mainContainerX)||0,v=(null===g||void 0===g?void 0:g.mainContainerY)||0,y=Object(n.useMemo)((function(){var t=Math.floor(i/20);return{maxWidth:i,fontSize:Math.max(Math.min(t,16),8)}}),[i]);if(Object(n.useEffect)((function(){if(h.current){var t,e,o=h.current.getBoundingClientRect(),s=o.width,n=o.height;s/n<3.7?(e=n,t=3.7*n):(t=s,e=s/3.7),m({width:t/.7,height:e/.41})}}),[]),null===d)return Object(s.jsx)("div",{className:Object(p.a)(r.root,r.textDimension),style:Object(x.a)({left:-9999,top:-9999},y),ref:h,children:e});var w=o-d.width-5,S=a-d.height-5,z=1,I=1,N=1,C=1,W="auto",R={left:W,top:W,right:"54%",bottom:"58%",transform:""};S<v&&(I=-1,S=a+5,R.top="58%",R.bottom=W,C=-1),w<O&&(z=-1,w=o+5,R.right=W,R.left="54%",N=-1),R.transform="translate(".concat(50*N,"%, ").concat(50*C,"%)");var M={left:w,top:S,width:d.width,height:d.height},T={transform:"scale(".concat(z,", ").concat(I)};return Object(s.jsx)("div",{className:r.root,style:M,onMouseMove:c,onMouseLeave:l,children:Object(s.jsxs)("div",{className:r.innerWrapper,children:[Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/shapes/tooltip-small.svg"),alt:"tooltip",className:r.background,style:T}),Object(s.jsx)("span",{className:Object(p.a)(r.text,r.textDimension),style:Object(x.a)(Object(x.a)({},R),y),children:e})]})})},z=function(t){var e=t.children,o=t.text,i=t.maxWidth,l=Object(n.useRef)(null),r=Object(n.useRef)(null),h=Object(n.useRef)(null),b=Object(n.useRef)(null),u=Object(n.useState)(!1),d=Object(j.a)(u,2),m=d[0],g=d[1],f=Object(n.useState)(0),p=Object(j.a)(f,2),O=p[0],v=p[1],y=Object(n.useState)(0),w=Object(j.a)(y,2),k=w[0],z=w[1],I=Object(n.useCallback)((function(){null!==b.current&&(window.clearTimeout(b.current),b.current=null),null!==h.current&&(window.clearTimeout(h.current),h.current=null)}),[]),N=Object(n.useCallback)((function(t){I(),h.current=window.setTimeout((function(){g(!0)}),0),v(t.clientX),z(t.clientY)}),[I]),C=Object(n.useCallback)((function(t){I(),b.current=window.setTimeout((function(){g(!1)}),20)}),[I]);return Object(n.useEffect)((function(){return function(){I()}}),[I]),Object(n.useEffect)((function(){if(l.current){var t=l.current;return t.addEventListener("mousemove",N),t.addEventListener("mouseleave",C),function(){t.removeEventListener("mousemove",N),t.removeEventListener("mouseleave",C)}}}),[N,C]),Object(n.useEffect)((function(){return r.current=document.createElement("div"),document.body.appendChild(r.current),function(){var t;r.current&&(null===(t=r.current.parentElement)||void 0===t||t.removeChild(r.current),r.current=null)}}),[]),Object(s.jsxs)(s.Fragment,{children:[a.a.cloneElement(e,Object(x.a)(Object(x.a)({},e.props),{},{ref:l})),m&&r.current&&c.a.createPortal(Object(s.jsx)(S,{message:o,x:O,y:k,handleMouseLeave:C,handleMouseMove:N,maxWidth:i}),r.current)]})},I=function(t){var e=t.ref,o=t.scale,s=t.max,a=t.min,i=Object(n.useState)({}),c=Object(j.a)(i,2),l=c[0],r=c[1];return Object(n.useEffect)((function(){if(e.current){var t=void 0===o?20:o,n=void 0===a?8:a,i=void 0===s?16:s,c=Math.floor(e.current.getBoundingClientRect().width/t);r({fontSize:Math.max(Math.min(c,i),n)})}}),[e,o,s,a]),l},N=g()((function(t){var e;return{root:{width:"90%",height:"8.5%",position:"absolute",zIndex:t.zIndex.appBar,top:0,left:"50%",transform:"translateX(-50%)",filter:"drop-shadow(0 0 .4rem rgba(0,0,0,.9))"},background:{maxWidth:"100%",maxHeight:"100%"},buttonsWrapper:{width:"100%",height:"100%",position:"absolute",left:0,top:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},centerButtonsGroup:{width:"33%",height:"150%",position:"relative",top:"25%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},centerButtonsGroupBackground:{position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:1},centerTitle:Object(O.a)({display:"block",width:"40%",textAlign:"center",fontFamily:'"RobotoSlab", serif',fontWeight:700,fontSize:"2.8rem",zIndex:2,color:"rgb(204,154,66)",textShadow:"1px 1px 1px rgba(0,0,0,0.5)"},t.breakpoints.down("sm"),{fontSize:"1.5rem"}),right:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",position:"absolute",right:0},guest:(e={fontSize:"1.75rem",color:"#ffce41",filter:"drop-shadow(3px 3px 0 rgba(0,0,0,.5))",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},Object(O.a)(e,t.breakpoints.down("sm"),{fontSize:"1rem"}),Object(O.a)(e,"& img",{margin:"0 0 0 5px",width:"15%"}),e),pullOut:{position:"absolute",transition:t.transitions.create("transform"),zIndex:-1}}})),C=function(){var t,e=N(),o=Object(n.useRef)(null),a=Object(n.useRef)(null),i=Object(n.useRef)(null),c={width:"20%",margin:"0 5%",zIndex:2,height:"100%"},l=I({ref:o,scale:8,max:42}),r=I({ref:i,scale:4,max:22}),h=function(){var t=Object(n.useState)(!1),e=Object(j.a)(t,2),o=e[0],s=e[1],a=Object(n.useRef)(null),i=Object(n.useCallback)((function(){null!==a.current&&(window.clearTimeout(a.current),a.current=null)}),[]),c=Object(n.useCallback)((function(){i(),s(!0)}),[i]),l=Object(n.useCallback)((function(){i(),a.current=window.setTimeout((function(){s(!1)}),50)}),[i]);return Object(n.useEffect)((function(){return function(){i()}}),[i]),{isPullOutActive:o,makePullOutActive:c,makePullOutInactive:l}}(),b=h.isPullOutActive,u=h.makePullOutActive,d=h.makePullOutInactive,m=(null===(t=Object(n.useContext)(f))||void 0===t?void 0:t.maxTooltipWidth)||0;Object(n.useEffect)((function(){if(a.current&&o.current){var t=o.current.getBoundingClientRect().width,e=o.current.getBoundingClientRect().height,s=a.current,n=s.getContext("2d");if(s.width=t,s.height=e,n){var i=.03*t,c=t-i-.02*t;n.fillStyle="#ffce41",n.beginPath(),n.moveTo(i,0),n.lineTo(i+c,0),n.lineTo(t,e),n.lineTo(0,e),n.fill()}}}),[]);var g={width:"9%",height:"80%"};return Object(s.jsxs)("div",{className:e.root,children:[Object(s.jsx)("img",{src:"/beast-academy-clone/assets/ba-top-bar.svg",className:e.background}),Object(s.jsxs)("div",{className:e.buttonsWrapper,children:[Object(s.jsx)(z,{text:"Home",maxWidth:m,children:Object(s.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-baHome.svg"),style:g,title:"Home"})}),Object(s.jsx)(z,{text:"Class",maxWidth:m,children:Object(s.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-bell.svg"),style:g,title:"Class"})}),Object(s.jsx)(z,{text:"Library",maxWidth:m,children:Object(s.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-book.svg"),style:g,title:"Library"})}),Object(s.jsx)(z,{text:"Theater",maxWidth:m,children:Object(s.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-projector.svg"),style:g,title:"Theater"})}),Object(s.jsxs)("div",{className:e.centerButtonsGroup,ref:o,children:[Object(s.jsx)("canvas",{ref:a,width:1,height:1,className:e.centerButtonsGroupBackground}),Object(s.jsx)(w,{backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/octagon.svg"),style:c,title:"learn more",isText:!0}),Object(s.jsx)("span",{className:e.centerTitle,style:l,children:"DEMO"}),Object(s.jsx)(w,{backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/octagon.svg"),style:c,title:"enroll now",isText:!0})]}),Object(s.jsx)(z,{text:"Help",maxWidth:m,children:Object(s.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-help.svg"),style:g,title:"Help"})}),Object(s.jsx)(z,{text:"Settings",maxWidth:m,children:Object(s.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-settings.svg"),style:g,title:"Settings"})}),Object(s.jsx)(z,{text:"Profile",maxWidth:m,children:Object(s.jsx)(w,{style:{width:"7%",height:"60%"},iconSource:"".concat("/beast-academy-clone","/assets/icons/default-avatar.svg"),backgroundSource:"".concat("/beast-academy-clone","/assets/icons/button-surround.svg"),title:"Profile"})}),Object(s.jsxs)("div",{className:e.guest,style:Object(x.a)({width:"11%",height:"80%"},r),ref:i,children:["Guest",Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/icons/button-right-yellow.svg"),alt:"profile more"})]}),Object(s.jsx)("div",{style:{width:"11%",height:"100%",position:"absolute",right:0},onMouseEnter:u,onMouseLeave:d}),Object(s.jsx)("div",{style:{width:"8%",height:"100%",top:"12%",right:0,transform:"translateX(".concat(b?"50%":"-100%",")")},className:e.pullOut,onMouseEnter:u,onMouseLeave:d,children:Object(s.jsx)(w,{title:"EXIT",backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/quad4.svg"),style:{width:"200%",height:"80%"},isText:!0,textStyle:{color:"#ffce41"}})})]})]})},W=g()((function(t){return{root:{width:0,height:0,borderStyle:"solid"}}})),R=function(t){var e=t.width,o=t.height,a=t.vertices,i=t.color,c=t.style,l=W(),r=Object(n.useMemo)((function(){var t="transparent";return"0 1 1 1"===a?{top:t,right:i,bottom:t,left:t}:"1 0 1 1"===a||"1 1 0 1"===a?{top:t,right:t,bottom:t,left:i}:{top:t,right:i,bottom:t,left:t}}),[a,i]),h=Object(n.useMemo)((function(){return"0 1 1 1"===a?{top:o,right:e,bottom:0,left:0}:"1 0 1 1"===a?{top:o,right:0,bottom:0,left:e}:"1 1 0 1"===a?{top:0,right:0,bottom:o,left:e}:{top:0,right:e,bottom:o,left:0}}),[o,e,a]),b=Object(n.useMemo)((function(){return Object(x.a)({borderTopWidth:h.top,borderRightWidth:h.right,borderBottomWidth:h.bottom,borderLeftWidth:h.left,borderTopColor:r.top,borderRightColor:r.right,borderBottomColor:r.bottom,borderLeftColor:r.left},c)}),[r,h,c]);return Object(s.jsx)("div",{className:l.root,style:b})},M=1,T=2,F=99,H=g()((function(t){return{root:{width:"100%",height:"100%",position:"relative"},sky:{zIndex:M,position:"absolute",top:"-1%",left:"-1%",width:"102%"},skyHazeLeft:{zIndex:T,position:"absolute",top:"4.1%",left:"-1%",height:"17.2%"},skyHazeRight:{zIndex:T,position:"absolute",top:"12%",right:"-1%",height:"17.5%"},cloud1:{zIndex:T,position:"absolute",top:"9%",left:"0%",height:"15%",animation:"$cloudFloating 40s infinite linear",animationDelay:"-10s"},cloud2:{zIndex:T,position:"absolute",top:"28%",height:"7%",animation:"$cloudFloating 60s infinite linear",animationDelay:"-20s"},cloud3:{zIndex:6,position:"absolute",top:"13.5%",height:"13%",animation:"$cloudFloating 50s infinite linear",animationDelay:"-30s"},"@keyframes cloudFloating":{"0%":{transform:"translateX(-20vw)"},"100%":{transform:"translateX(100vw)"}},mountain:{zIndex:3,position:"absolute",bottom:"34.4%",left:"-1.1%",width:"102.5%"},hillRangeBack:{position:"absolute",zIndex:4,left:"36.4%",top:"27%",width:"54%"},hillRangeFront:{position:"absolute",zIndex:4,left:"-1.1%",top:"22.5%",width:"103%"},hillBackLeft:{position:"absolute",zIndex:6,left:"16.7%",top:"44.5%",width:"32.4%",height:"21.8%"},hillBackRight:{position:"absolute",zIndex:6,right:"18.4%",top:"41.9%",width:"34.1%",height:"30.3%"},hillFrontLeft:{position:"absolute",zIndex:7,left:"-1%",height:"39%",top:"34.7%"},hillFrontRight:{position:"absolute",zIndex:7,right:"-.6%",top:"45.4%",width:"33.1%",height:"30.3%"},hill:{position:"absolute",zIndex:9,width:"100%",bottom:"-1px"},bush1:{position:"absolute",zIndex:11,left:"-.1%",height:"8.5%",bottom:"18%"},bush2:{position:"absolute",zIndex:11,left:"15.5%",height:"12.5%",bottom:"4.9%"},tree1:{position:"absolute",zIndex:11,right:"5.2%",height:"17.1%",bottom:"2%"},tree2:{position:"absolute",zIndex:9,left:"7%",bottom:"55.8%",height:"5.8%"},tree3:{position:"absolute",zIndex:9,left:"2.5%",bottom:"61.8%",height:"5.3%"},tree4:{position:"absolute",zIndex:9,left:"34.7%",height:"16.8%",bottom:"48.8%"},tree5:{position:"absolute",zIndex:9,right:"24.7%",height:"6.5%",bottom:"46.2%"},tree6:{position:"absolute",zIndex:9,right:".3%",height:"26.7%",bottom:"43.7%"},lab:{position:"absolute",zIndex:8,height:"55.9%",bottom:"32%",left:".4%"},theatre:{position:"absolute",zIndex:10,height:"31.3%",bottom:"25.2%",right:"5.2%"},library:{position:"absolute",zIndex:10,height:"30.6%",bottom:"25.1%",left:"1.1%"},school:{position:"absolute",zIndex:10,height:"52.7%",bottom:"19.4%",left:"28.3%"},clock:{position:"absolute",zIndex:14,left:"46.4%",height:"5.9%",width:"4.5%",bottom:"46.2%"},clockFace:{position:"absolute",height:"100%",width:"100%"},clockMinuteWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 3600s infinite linear"},clockHourWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 43200s infinite linear"},clockSecondWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 60s infinite steps(60)"},clockMinuteImage:{position:"absolute",height:"35%",left:"50%",bottom:"45%",transform:"translateX(-50%)"},clockHourImage:{position:"absolute",height:"30%",left:"50%",bottom:"43%",transform:"translateX(-50%)"},clockSecondImage:{position:"absolute",height:"45%",width:1,backgroundColor:"#7f3e1c",left:"50%",bottom:"43%",transform:"translateX(-50%)"},"@keyframes clockHand":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}})),B=function(){var t,e=H(),o=(null===(t=Object(n.useContext)(f))||void 0===t?void 0:t.maxTooltipWidth)||0,a=Object(n.useMemo)((function(){var t=new Date(Date.now()),e=t.getSeconds(),o=60*t.getMinutes()+e,s=t.getHours()%12*3600+o;return{hourHandStyle:{transform:"rotate(".concat(s/43200*360,"deg)"),animationDelay:"".concat(-s,"s")},minuteHandStyle:{transform:"rotate(".concat(o/3600*360,"deg)"),animationDelay:"".concat(-o,"s")},secondHandStyle:{transform:"rotate(".concat(6*e,"deg)"),animationDelay:"".concat(-e,"s")}}}),[]);return Object(s.jsxs)("div",{className:e.root,children:[Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-sky.svg"),className:e.sky,alt:"sky"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-skyhaze-left.svg"),className:e.skyHazeLeft,alt:"skyHazeLeft"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-skyhaze-right.svg"),className:e.skyHazeRight,alt:"skyHazeRight"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-left.svg"),className:e.cloud1,alt:"cloud1"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-left-small.svg"),className:e.cloud2,alt:"cloud2"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-right.svg"),className:e.cloud3,alt:"cloud3"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-mountains.svg"),className:e.mountain,alt:"mountain"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-range-back.svg"),className:e.hillRangeBack,alt:"hillRangeBack"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-range-front.svg"),className:e.hillRangeFront,alt:"hillRangeFront"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-back-left.svg"),className:e.hillBackLeft,alt:"hillBackLeft"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-back-right.svg"),className:e.hillBackRight,alt:"hillBackRight"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-front-left.svg"),className:e.hillFrontLeft,alt:"hillFrontLeft"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-front-right.svg"),className:e.hillFrontRight,alt:"hillFrontRight"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-center.svg"),className:e.hill,alt:"hill"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-bush-left.svg"),className:e.bush1,alt:"bush1"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-bush-front.svg"),className:e.bush2,alt:"bush2"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-tree-front.svg"),className:e.tree1,alt:"tree1"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-one-tree-left.svg"),className:e.tree2,alt:"tree2"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-two-trees-left.svg"),className:e.tree3,alt:"tree3"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-five-trees-left.svg"),className:e.tree4,alt:"tree4"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-four-trees-right.svg"),className:e.tree5,alt:"tree5"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-six-trees-right.svg"),className:e.tree6,alt:"tree6"}),Object(s.jsx)(z,{text:"The full version of BA Online includes a Puzzle Lab with more than 250 puzzles that complement the standard lessons.",maxWidth:o,children:Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-lab.svg"),className:e.lab,alt:"lab"})}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/theater-text-13.svg"),className:e.theatre,alt:"theatre"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-library.svg"),className:e.library,alt:"library"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-main-building.svg"),className:e.school,alt:"school"}),Object(s.jsxs)("div",{className:e.clock,children:[Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-face.svg"),className:e.clockFace,alt:"clockFace"}),Object(s.jsx)("div",{className:e.clockMinuteWrapper,style:a.minuteHandStyle,children:Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-minute-hand.svg"),className:e.clockMinuteImage,alt:"clockMinuteImage"})}),Object(s.jsx)("div",{className:e.clockHourWrapper,style:a.hourHandStyle,children:Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-hour-hand.svg"),className:e.clockHourImage,alt:"clockHourImage"})}),Object(s.jsx)("div",{className:e.clockSecondWrapper,style:a.secondHandStyle,children:Object(s.jsx)("div",{className:e.clockSecondImage,children:" "})})]}),Object(s.jsx)(w,{title:"library",backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/quad.svg"),isText:!0,iconSource:"".concat("/beast-academy-clone","/assets/icons/button-book-white.svg"),style:{position:"absolute",zIndex:F,left:"6.5%",bottom:"19.2%",height:"8.5%",width:"16%"}}),Object(s.jsx)(w,{title:"class",backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/quad2.svg"),isText:!0,iconSource:"".concat("/beast-academy-clone","/assets/icons/button-bell-white.svg"),style:{position:"absolute",zIndex:F,left:"39.1%",bottom:"11.8%",height:"9.5%",width:"20%"}}),Object(s.jsx)(w,{title:"theater",backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/quad3.svg"),isText:!0,iconSource:"".concat("/beast-academy-clone","/assets/icons/button-projector-white.svg"),style:{position:"absolute",zIndex:F,left:"76.2%",bottom:"16.5%",height:"9.5%",width:"15.5%"}})]})},L=g()((function(t){return{root:{width:"100%",position:"relative",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",overflow:"hidden",fontFamily:'"RobotoSlab", serif',userSelect:"none","& img":{userSelect:"none",userDrag:"none"}},fullSize:{width:"100%",height:"100%"},background1:{position:"absolute",top:0,left:0,backgroundImage:"url(".concat("/beast-academy-clone/assets/patch-blue-bright.png",")"),zIndex:-1},background2:{backgroundImage:"url(".concat("/beast-academy-clone/assets/mathjazz.svg",")")},mainContentWrapper:{position:"relative",border:"10px solid #fff",flexShrink:0,boxShadow:"inset 0 0 30px 10px rgba(0,0,0,0.2)"},mainContent:{position:"relative",width:"100%",height:"100%",overflow:"hidden"}}})),E=function(){var t=L(),e=Object(n.useContext)(f);if(null===e)return Object(s.jsx)(s.Fragment,{});return Object(s.jsxs)("div",{className:t.root,style:{height:e.height},children:[Object(s.jsx)("div",{className:Object(p.a)(t.background1,t.fullSize),children:Object(s.jsx)("div",{className:Object(p.a)(t.background2,t.fullSize),children:" "})}),Object(s.jsxs)("div",{className:t.mainContentWrapper,style:{width:e.mainContainerWidth,height:e.mainContainerHeight,boxSizing:"content-box"},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)(R,{width:70,height:e.height,vertices:"1 1 1 0",color:"#00b2dd",style:{position:"absolute",top:0,left:-80}}),Object(s.jsx)(R,{width:50,height:e.height,vertices:"0 1 1 1",color:"#00b2dd",style:{position:"absolute",top:0,left:-60}})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(R,{width:50,height:e.height,vertices:"1 1 0 1",color:"#00b2dd",style:{position:"absolute",top:0,right:-60}}),Object(s.jsx)(R,{width:70,height:e.height,vertices:"1 0 1 1",color:"#00b2dd",style:{position:"absolute",top:0,right:-80}})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(R,{width:e.width,height:70,vertices:"1 0 1 1",color:"#00b2dd",style:{position:"absolute",top:-80,left:0}}),Object(s.jsx)(R,{width:e.width,height:50,vertices:"0 1 1 1",color:"#00b2dd",style:{position:"absolute",top:-60,left:0}})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(R,{width:e.width,height:100,vertices:"1 1 1 0",color:"#00b2dd",style:{position:"absolute",bottom:-110,left:0}}),Object(s.jsx)(R,{width:e.width,height:70,vertices:"1 1 0 1",color:"#00b2dd",style:{position:"absolute",bottom:-80,left:0}})]}),Object(s.jsx)(C,{}),Object(s.jsx)("div",{className:t.mainContent,children:Object(s.jsx)(B,{})})]})]})},D=g()((function(t){return{root:{width:"100vw",maxWidth:"100%",overflowX:"hidden",cursor:"url(".concat("/beast-academy-clone/assets/cursors/tool-arrow-point.cur","),default")}}})),P=function(){var t=D();return null===Object(n.useContext)(f)?Object(s.jsx)(s.Fragment,{}):Object(s.jsx)("div",{className:t.root,children:Object(s.jsx)(E,{})})},X=function(){var t=function(){var t=Object(n.useState)(null),e=Object(j.a)(t,2),o=e[0],s=e[1];return Object(n.useEffect)((function(){var t,e,o=window.innerWidth,n=window.innerHeight,a=1.33;n*a>o?e=(t=o)/a:t=(e=n)*a,s({width:o,height:n,mainContainerWidth:t,mainContainerHeight:e,mainContainerX:(o-t)/2,mainContainerY:(n-e)/2,maxTooltipWidth:.3*t})}),[]),o}();return Object(s.jsx)(f.Provider,{value:t,children:Object(s.jsxs)(r.a,{theme:d,children:[Object(s.jsx)(l.a,{}),Object(s.jsx)(P,{})]})})},A=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,101)).then((function(e){var o=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,i=e.getTTFB;o(t),s(t),n(t),a(t),i(t)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(X,{})}),document.getElementById("root")),A()}},[[90,1,2]]]);
//# sourceMappingURL=main.10f958c2.chunk.js.map