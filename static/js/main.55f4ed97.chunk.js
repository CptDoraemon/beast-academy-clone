(this["webpackJsonpbeast-academy-clone"]=this["webpackJsonpbeast-academy-clone"]||[]).push([[0],{65:function(e,t,s){},90:function(e,t,s){"use strict";s.r(t);var o=s(0),n=s(1),a=s.n(n),i=s(31),c=s.n(i),l=(s(65),s(99)),r=s(97),h=s(55),b=s(100),u=Object(h.a)({palette:{primary:{main:"#264653",contrastText:"#fff"},secondary:{main:"#e76f51",contrastText:"#fff"},success:{main:"#4caf50",contrastText:"#fff"}},typography:{fontFamily:"system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),d=u=Object(b.a)(u),g=s(7),m=s.n(g),j=s(9),f=a.a.createContext(null),p=s(11),x=s(20),O=s(10),v="drop-shadow(3px 3px 0 rgba(0,0,0,.5))",y=m()((function(e){return{root:{backgroundColor:"transparent",cursor:"url(".concat("/beast-academy-clone/assets/cursors/wonky-hand-point.cur","),pointer"),filter:v,"&:hover, &:focus":{filter:"drop-shadow(3px 3px 0 rgba(0,0,0,.5)) drop-shadow(0 0 2px rgba(255,255,255,.9))"},"&:active":{filter:"drop-shadow(1px 1px 0 rgba(0,0,0,.5)) drop-shadow(0 0 1px rgba(255,255,255,.9))",transform:"translate(2px, 2px)"},"&:focus":{outline:"none"}},inner:{position:"relative",width:"100%",height:"100%"},background:{position:"absolute",top:"50%",transform:"translateY(-50%)",left:0,width:"100%",height:"100%","& img":{width:"100%",height:"100%",objectFit:"contain"}},content:{width:"100%",height:"100%",position:"absolute",top:0,left:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center","& img":{padding:"0 5% 0 0"},"& span":{fontFamily:'"RobotoSlab", serif',fontWeight:500,textTransform:"uppercase",wordSpacing:"100vw",lineHeight:1.25}}}})),w=a.a.forwardRef((function(e,t){var s=e.iconSource,a=e.backgroundSource,i=e.style,c=e.iconStyle,l=e.title,r=e.isText,h=void 0!==r&&r,b=e.textStyle,u=y(),d=Object(n.useRef)(null),g=Object(n.useState)(0),m=Object(j.a)(g,2),f=m[0],p=m[1];Object(n.useEffect)((function(){if(d.current){var e=l.split(" ").length||1,t=d.current.getBoundingClientRect().height;p(Math.round(t/e/4))}}),[l]);var x=Object(n.useMemo)((function(){return h?{width:"15%",height:"100%",objectFit:"contain"}:{width:"70%",height:"70%",objectFit:"contain"}}),[h]);return Object(o.jsx)("button",{className:u.root,style:Object(O.a)({},i),"aria-label":l,ref:function(e){d.current=e,t&&(t.current=e)},children:Object(o.jsxs)("div",{className:u.inner,children:[a&&Object(o.jsx)("div",{className:u.background,children:Object(o.jsx)("img",{src:a,alt:l})}),Object(o.jsxs)("div",{className:u.content,style:Object(O.a)({},c),children:[s&&Object(o.jsx)("img",{src:s,alt:l,style:Object(O.a)(Object(O.a)({},x),c)}),h&&Object(o.jsx)("span",{style:Object(O.a)({fontSize:f},b),children:l})]})]})})})),k=m()((function(e){return{root:{fontFamily:'"RobotoSlab", serif',fontSize:"1rem",position:"fixed",zIndex:e.zIndex.tooltip},innerWrapper:{position:"relative",width:"100%",height:"100%"},background:{position:"absolute",width:"100%",height:"100%",objectFit:"contain"},text:{position:"absolute",display:"block"},textDimension:{padding:"2px 5px",maxWidth:300,width:"fit-content",textAlign:"center"}}})),S=function(e){var t=e.message,s=e.x,a=e.y,i=e.handleMouseMove,c=e.handleMouseLeave,l=k(),r=Object(n.useRef)(null),h=Object(n.useState)(null),b=Object(j.a)(h,2),u=b[0],d=b[1],g=Object(n.useContext)(f),m=(null===g||void 0===g?void 0:g.mainContainerX)||0,x=(null===g||void 0===g?void 0:g.mainContainerY)||0;if(Object(n.useEffect)((function(){if(r.current){var e,t,s=r.current.getBoundingClientRect(),o=s.width,n=s.height;o/n<3.7?(t=n,e=3.7*n):(e=o,t=o/3.7),d({width:e/.7,height:t/.41})}}),[]),null===u)return Object(o.jsx)("div",{className:Object(p.a)(l.root,l.textDimension),style:{left:-9999,top:-9999},ref:r,children:t});var O=s-u.width-5,v=a-u.height-5,y=1,w=1,S=1,z=1,I="auto",N={left:I,top:I,right:"54%",bottom:"58%",transform:""};v<x&&(w=-1,v=a+5,N.top="58%",N.bottom=I,z=-1),O<m&&(y=-1,O=s+5,N.right=I,N.left="54%",S=-1),N.transform="translate(".concat(50*S,"%, ").concat(50*z,"%)");var C={left:O,top:v,width:u.width,height:u.height},R={transform:"scale(".concat(y,", ").concat(w)};return Object(o.jsx)("div",{className:l.root,style:C,onMouseMove:i,onMouseLeave:c,children:Object(o.jsxs)("div",{className:l.innerWrapper,children:[Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/shapes/tooltip-small.svg"),alt:"tooltip",className:l.background,style:R}),Object(o.jsx)("span",{className:Object(p.a)(l.text,l.textDimension),style:N,children:t})]})})},z=function(e){var t=e.children,s=e.text,i=Object(n.useRef)(null),l=Object(n.useRef)(null),r=Object(n.useRef)(null),h=Object(n.useRef)(null),b=Object(n.useState)(!1),u=Object(j.a)(b,2),d=u[0],g=u[1],m=Object(n.useState)(0),f=Object(j.a)(m,2),p=f[0],x=f[1],v=Object(n.useState)(0),y=Object(j.a)(v,2),w=y[0],k=y[1],z=Object(n.useCallback)((function(){null!==h.current&&(window.clearTimeout(h.current),h.current=null),null!==r.current&&(window.clearTimeout(r.current),r.current=null)}),[]),I=Object(n.useCallback)((function(e){z(),r.current=window.setTimeout((function(){g(!0)}),0),x(e.clientX),k(e.clientY)}),[z]),N=Object(n.useCallback)((function(e){z(),h.current=window.setTimeout((function(){g(!1)}),20)}),[z]);return Object(n.useEffect)((function(){return function(){z()}}),[z]),Object(n.useEffect)((function(){if(i.current){var e=i.current;return e.addEventListener("mousemove",I),e.addEventListener("mouseleave",N),function(){e.removeEventListener("mousemove",I),e.removeEventListener("mouseleave",N)}}}),[I,N]),Object(n.useEffect)((function(){return l.current=document.createElement("div"),document.body.appendChild(l.current),function(){var e;l.current&&(null===(e=l.current.parentElement)||void 0===e||e.removeChild(l.current),l.current=null)}}),[]),Object(o.jsxs)(o.Fragment,{children:[a.a.cloneElement(t,Object(O.a)(Object(O.a)({},t.props),{},{ref:i})),d&&l.current&&c.a.createPortal(Object(o.jsx)(S,{message:s,x:p,y:w,handleMouseLeave:N,handleMouseMove:I}),l.current)]})},I=m()((function(e){var t;return{root:{width:"90%",height:"10%",position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"50%",transform:"translateX(-50%)",filter:"drop-shadow(0 0 .4rem rgba(0,0,0,.9))",cursor:""},background:{width:"100%"},buttonsWrapper:{width:"96%",height:"70%",position:"absolute",left:"2%",top:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},centerButtonsGroup:{width:"33%",height:"150%",position:"relative",top:"25%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},centerButtonsGroupBackground:{position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:1},centerTitle:Object(x.a)({display:"block",width:"40%",textAlign:"center",fontFamily:'"RobotoSlab", serif',fontWeight:700,fontSize:"2.8rem",zIndex:2,color:"rgb(204,154,66)",textShadow:"1px 1px 1px rgba(0,0,0,0.5)"},e.breakpoints.down("sm"),{fontSize:"1.5rem"}),right:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",position:"absolute",right:0},guest:(t={fontSize:"1.75rem",color:"#ffce41",filter:"drop-shadow(3px 3px 0 rgba(0,0,0,.5))",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},Object(x.a)(t,e.breakpoints.down("sm"),{fontSize:"1rem"}),Object(x.a)(t,"& img",{margin:"0 0 0 5px",width:"15%"}),t),pullOut:{position:"absolute",transition:e.transitions.create("transform"),zIndex:-1}}})),N=function(){var e=I(),t=Object(n.useRef)(null),s=Object(n.useRef)(null),a={width:"20%",margin:"0 5%",zIndex:2,height:"100%"},i=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),s=t[0],o=t[1],a=Object(n.useRef)(null),i=Object(n.useCallback)((function(){null!==a.current&&(window.clearTimeout(a.current),a.current=null)}),[]),c=Object(n.useCallback)((function(){i(),o(!0)}),[i]),l=Object(n.useCallback)((function(){i(),a.current=window.setTimeout((function(){o(!1)}),50)}),[i]);return Object(n.useEffect)((function(){return function(){i()}}),[i]),{isPullOutActive:s,makePullOutActive:c,makePullOutInactive:l}}(),c=i.isPullOutActive,l=i.makePullOutActive,r=i.makePullOutInactive;return Object(n.useEffect)((function(){if(s.current&&t.current){var e=t.current.getBoundingClientRect().width,o=t.current.getBoundingClientRect().height,n=s.current,a=n.getContext("2d");if(n.width=e,n.height=o,a){var i=.03*e,c=e-i-.02*e;a.fillStyle="#ffce41",a.beginPath(),a.moveTo(i,0),a.lineTo(i+c,0),a.lineTo(e,o),a.lineTo(0,o),a.fill()}}}),[]),Object(o.jsxs)("div",{className:e.root,children:[Object(o.jsx)("img",{src:"/beast-academy-clone/assets/ba-top-bar.svg",className:e.background}),Object(o.jsxs)("div",{className:e.buttonsWrapper,children:[Object(o.jsx)(z,{text:"Home",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-baHome.svg"),style:{width:"9%",height:"100%"},title:"Home"})}),Object(o.jsx)(z,{text:"Class",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-bell.svg"),style:{width:"8%",height:"100%"},title:"Class"})}),Object(o.jsx)(z,{text:"Library",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-book.svg"),style:{width:"8%",height:"100%"},title:"Library"})}),Object(o.jsx)(z,{text:"Theater",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-projector.svg"),style:{width:"8%",height:"100%"},title:"Theater"})}),Object(o.jsxs)("div",{className:e.centerButtonsGroup,ref:t,children:[Object(o.jsx)("canvas",{ref:s,width:1,height:1,className:e.centerButtonsGroupBackground}),Object(o.jsx)(w,{backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/octagon.svg"),style:a,title:"learn more",isText:!0}),Object(o.jsx)("span",{className:e.centerTitle,children:"DEMO"}),Object(o.jsx)(w,{backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/octagon.svg"),style:a,title:"enroll now",isText:!0})]}),Object(o.jsx)(z,{text:"Help",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-help.svg"),style:{width:"8%",height:"100%"},title:"Help"})}),Object(o.jsx)(z,{text:"Settings",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-settings.svg"),style:{width:"8%",height:"100%"},title:"Settings"})}),Object(o.jsx)(z,{text:"Profile",children:Object(o.jsx)(w,{style:{width:"8%",height:"80%"},iconSource:"".concat("/beast-academy-clone","/assets/icons/default-avatar.svg"),backgroundSource:"".concat("/beast-academy-clone","/assets/icons/button-surround.svg"),title:"Profile"})}),Object(o.jsx)("div",{style:{width:"8%",height:"100%"},className:e.right,children:Object(o.jsxs)("div",{className:e.guest,children:["Guest",Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/icons/button-right-yellow.svg"),alt:"profile more"})]})}),Object(o.jsx)("div",{style:{width:"10%",height:"100%",position:"absolute",right:"-2%"},onMouseEnter:l,onMouseLeave:r}),Object(o.jsx)("div",{style:{width:"8%",height:"100%",top:"15%",right:0,transform:"translateX(".concat(c?"50%":"-100%",")")},className:e.pullOut,onMouseEnter:l,onMouseLeave:r,children:Object(o.jsx)(w,{title:"EXIT",backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/quad4.svg"),style:{width:"200%",height:"100%"},isText:!0,textStyle:{color:"#ffce41"}})})]})]})},C=m()((function(e){return{root:{width:0,height:0,borderStyle:"solid"}}})),R=function(e){var t=e.width,s=e.height,a=e.vertices,i=e.color,c=e.style,l=C(),r=Object(n.useMemo)((function(){var e="transparent";return"0 1 1 1"===a?{top:e,right:i,bottom:e,left:e}:"1 0 1 1"===a||"1 1 0 1"===a?{top:e,right:e,bottom:e,left:i}:{top:e,right:i,bottom:e,left:e}}),[a,i]),h=Object(n.useMemo)((function(){return"0 1 1 1"===a?{top:s,right:t,bottom:0,left:0}:"1 0 1 1"===a?{top:s,right:0,bottom:0,left:t}:"1 1 0 1"===a?{top:0,right:0,bottom:s,left:t}:{top:0,right:t,bottom:s,left:0}}),[s,t,a]),b=Object(n.useMemo)((function(){return Object(O.a)({borderTopWidth:h.top,borderRightWidth:h.right,borderBottomWidth:h.bottom,borderLeftWidth:h.left,borderTopColor:r.top,borderRightColor:r.right,borderBottomColor:r.bottom,borderLeftColor:r.left},c)}),[r,h,c]);return Object(o.jsx)("div",{className:l.root,style:b})},F=1,H=2,T=99,M=m()((function(e){return{root:{width:"100%",height:"100%",position:"relative"},sky:{zIndex:F,position:"absolute",top:"-1%",left:"-1%",width:"102%"},skyHazeLeft:{zIndex:H,position:"absolute",top:"4.1%",left:"-1%",height:"17.2%"},skyHazeRight:{zIndex:H,position:"absolute",top:"12%",right:"-1%",height:"17.5%"},cloud1:{zIndex:H,position:"absolute",top:"9%",left:"0%",height:"15%",animation:"$cloudFloating 40s infinite linear",animationDelay:"-10s"},cloud2:{zIndex:H,position:"absolute",top:"28%",height:"7%",animation:"$cloudFloating 60s infinite linear",animationDelay:"-20s"},cloud3:{zIndex:6,position:"absolute",top:"13.5%",height:"13%",animation:"$cloudFloating 50s infinite linear",animationDelay:"-30s"},"@keyframes cloudFloating":{"0%":{transform:"translateX(-20vw)"},"100%":{transform:"translateX(100vw)"}},mountain:{zIndex:3,position:"absolute",bottom:"34.4%",left:"-1.1%",width:"102.5%"},hillRangeBack:{position:"absolute",zIndex:4,left:"36.4%",top:"27%",width:"54%"},hillRangeFront:{position:"absolute",zIndex:4,left:"-1.1%",top:"22.5%",width:"103%"},hillBackLeft:{position:"absolute",zIndex:6,left:"16.7%",top:"44.5%",width:"32.4%",height:"21.8%"},hillBackRight:{position:"absolute",zIndex:6,right:"18.4%",top:"41.9%",width:"34.1%",height:"30.3%"},hillFrontLeft:{position:"absolute",zIndex:7,left:"-1%",height:"39%",top:"34.7%"},hillFrontRight:{position:"absolute",zIndex:7,right:"-.6%",top:"45.4%",width:"33.1%",height:"30.3%"},hill:{position:"absolute",zIndex:9,width:"100%",bottom:"-1px"},bush1:{position:"absolute",zIndex:11,left:"-.1%",height:"8.5%",bottom:"18%"},bush2:{position:"absolute",zIndex:11,left:"15.5%",height:"12.5%",bottom:"4.9%"},tree1:{position:"absolute",zIndex:11,right:"5.2%",height:"17.1%",bottom:"2%"},tree2:{position:"absolute",zIndex:9,left:"7%",bottom:"55.8%",height:"5.8%"},tree3:{position:"absolute",zIndex:9,left:"2.5%",bottom:"61.8%",height:"5.3%"},tree4:{position:"absolute",zIndex:9,left:"34.7%",height:"16.8%",bottom:"48.8%"},tree5:{position:"absolute",zIndex:9,right:"24.7%",height:"6.5%",bottom:"46.2%"},tree6:{position:"absolute",zIndex:9,right:".3%",height:"26.7%",bottom:"43.7%"},lab:{position:"absolute",zIndex:8,height:"55.9%",bottom:"32%",left:".4%"},theatre:{position:"absolute",zIndex:10,height:"31.3%",bottom:"25.2%",right:"5.2%"},library:{position:"absolute",zIndex:10,height:"30.6%",bottom:"25.1%",left:"1.1%"},school:{position:"absolute",zIndex:10,height:"52.7%",bottom:"19.4%",left:"28.3%"},clock:{position:"absolute",zIndex:14,left:"46.4%",height:"5.9%",width:"4.5%",bottom:"46.2%"},clockFace:{position:"absolute",height:"100%",width:"100%"},clockMinuteWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 3600s infinite linear"},clockHourWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 43200s infinite linear"},clockSecondWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 60s infinite steps(60)"},clockMinuteImage:{position:"absolute",height:"35%",left:"50%",bottom:"45%",transform:"translateX(-50%)"},clockHourImage:{position:"absolute",height:"30%",left:"50%",bottom:"43%",transform:"translateX(-50%)"},clockSecondImage:{position:"absolute",height:"45%",width:1,backgroundColor:"#7f3e1c",left:"50%",bottom:"43%",transform:"translateX(-50%)"},"@keyframes clockHand":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}})),B=function(){var e=M(),t=Object(n.useMemo)((function(){var e=new Date(Date.now()),t=e.getSeconds(),s=60*e.getMinutes()+t,o=e.getHours()%12*3600+s;return{hourHandStyle:{transform:"rotate(".concat(o/43200*360,"deg)"),animationDelay:"".concat(-o,"s")},minuteHandStyle:{transform:"rotate(".concat(s/3600*360,"deg)"),animationDelay:"".concat(-s,"s")},secondHandStyle:{transform:"rotate(".concat(6*t,"deg)"),animationDelay:"".concat(-t,"s")}}}),[]);return Object(o.jsxs)("div",{className:e.root,children:[Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-sky.svg"),className:e.sky,alt:"sky"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-skyhaze-left.svg"),className:e.skyHazeLeft,alt:"skyHazeLeft"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-skyhaze-right.svg"),className:e.skyHazeRight,alt:"skyHazeRight"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-left.svg"),className:e.cloud1,alt:"cloud1"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-left-small.svg"),className:e.cloud2,alt:"cloud2"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-right.svg"),className:e.cloud3,alt:"cloud3"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-mountains.svg"),className:e.mountain,alt:"mountain"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-range-back.svg"),className:e.hillRangeBack,alt:"hillRangeBack"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-range-front.svg"),className:e.hillRangeFront,alt:"hillRangeFront"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-back-left.svg"),className:e.hillBackLeft,alt:"hillBackLeft"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-back-right.svg"),className:e.hillBackRight,alt:"hillBackRight"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-front-left.svg"),className:e.hillFrontLeft,alt:"hillFrontLeft"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-front-right.svg"),className:e.hillFrontRight,alt:"hillFrontRight"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-center.svg"),className:e.hill,alt:"hill"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-bush-left.svg"),className:e.bush1,alt:"bush1"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-bush-front.svg"),className:e.bush2,alt:"bush2"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-tree-front.svg"),className:e.tree1,alt:"tree1"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-one-tree-left.svg"),className:e.tree2,alt:"tree2"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-two-trees-left.svg"),className:e.tree3,alt:"tree3"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-five-trees-left.svg"),className:e.tree4,alt:"tree4"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-four-trees-right.svg"),className:e.tree5,alt:"tree5"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-six-trees-right.svg"),className:e.tree6,alt:"tree6"}),Object(o.jsx)(z,{text:"The full version of BA Online includes a Puzzle Lab with more than 250 puzzles that complement the standard lessons.",children:Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-lab.svg"),className:e.lab,alt:"lab"})}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/theater-text-13.svg"),className:e.theatre,alt:"theatre"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-library.svg"),className:e.library,alt:"library"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-main-building.svg"),className:e.school,alt:"school"}),Object(o.jsxs)("div",{className:e.clock,children:[Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-face.svg"),className:e.clockFace,alt:"clockFace"}),Object(o.jsx)("div",{className:e.clockMinuteWrapper,style:t.minuteHandStyle,children:Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-minute-hand.svg"),className:e.clockMinuteImage,alt:"clockMinuteImage"})}),Object(o.jsx)("div",{className:e.clockHourWrapper,style:t.hourHandStyle,children:Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-hour-hand.svg"),className:e.clockHourImage,alt:"clockHourImage"})}),Object(o.jsx)("div",{className:e.clockSecondWrapper,style:t.secondHandStyle,children:Object(o.jsx)("div",{className:e.clockSecondImage,children:" "})})]}),Object(o.jsx)(w,{title:"library",backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/quad.svg"),isText:!0,iconSource:"".concat("/beast-academy-clone","/assets/icons/button-book-white.svg"),style:{position:"absolute",zIndex:T,left:"6.5%",bottom:"19.2%",height:"8.5%",width:"16%"}}),Object(o.jsx)(w,{title:"class",backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/quad2.svg"),isText:!0,iconSource:"".concat("/beast-academy-clone","/assets/icons/button-bell-white.svg"),style:{position:"absolute",zIndex:T,left:"39.1%",bottom:"11.8%",height:"9.5%",width:"20%"}}),Object(o.jsx)(w,{title:"theater",backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/quad3.svg"),isText:!0,iconSource:"".concat("/beast-academy-clone","/assets/icons/button-projector-white.svg"),style:{position:"absolute",zIndex:T,left:"76.2%",bottom:"16.5%",height:"9.5%",width:"15.5%"}})]})},L=m()((function(e){return{root:{width:"100%",position:"relative",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",overflow:"hidden",fontFamily:'"RobotoSlab", serif',userSelect:"none","& img":{userSelect:"none",userDrag:"none"}},fullSize:{width:"100%",height:"100%"},background1:{position:"absolute",top:0,left:0,backgroundImage:"url(".concat("/beast-academy-clone/assets/patch-blue-bright.png",")"),zIndex:-1},background2:{backgroundImage:"url(".concat("/beast-academy-clone/assets/mathjazz.svg",")")},mainContentWrapper:{position:"relative",border:"10px solid #fff",flexShrink:0,boxShadow:"inset 0 0 30px 10px rgba(0,0,0,0.2)"},mainContent:{position:"relative",width:"100%",height:"100%",overflow:"hidden"}}})),W=function(){var e=L(),t=Object(n.useContext)(f);if(null===t)return Object(o.jsx)(o.Fragment,{});return Object(o.jsxs)("div",{className:e.root,style:{height:t.height},children:[Object(o.jsx)("div",{className:Object(p.a)(e.background1,e.fullSize),children:Object(o.jsx)("div",{className:Object(p.a)(e.background2,e.fullSize),children:" "})}),Object(o.jsxs)("div",{className:e.mainContentWrapper,style:{width:t.mainContainerWidth,height:t.mainContainerHeight,boxSizing:"content-box"},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(R,{width:70,height:t.height,vertices:"1 1 1 0",color:"#00b2dd",style:{position:"absolute",top:0,left:-80}}),Object(o.jsx)(R,{width:50,height:t.height,vertices:"0 1 1 1",color:"#00b2dd",style:{position:"absolute",top:0,left:-60}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(R,{width:50,height:t.height,vertices:"1 1 0 1",color:"#00b2dd",style:{position:"absolute",top:0,right:-60}}),Object(o.jsx)(R,{width:70,height:t.height,vertices:"1 0 1 1",color:"#00b2dd",style:{position:"absolute",top:0,right:-80}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(R,{width:t.width,height:70,vertices:"1 0 1 1",color:"#00b2dd",style:{position:"absolute",top:-80,left:0}}),Object(o.jsx)(R,{width:t.width,height:50,vertices:"0 1 1 1",color:"#00b2dd",style:{position:"absolute",top:-60,left:0}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(R,{width:t.width,height:100,vertices:"1 1 1 0",color:"#00b2dd",style:{position:"absolute",bottom:-110,left:0}}),Object(o.jsx)(R,{width:t.width,height:70,vertices:"1 1 0 1",color:"#00b2dd",style:{position:"absolute",bottom:-80,left:0}})]}),Object(o.jsx)(N,{}),Object(o.jsx)("div",{className:e.mainContent,children:Object(o.jsx)(B,{})})]})]})},E=m()((function(e){return{root:{width:"100vw",maxWidth:"100%",overflowX:"hidden",cursor:"url(".concat("/beast-academy-clone/assets/cursors/tool-arrow-point.cur","),default")}}})),D=function(){var e=E();return null===Object(n.useContext)(f)?Object(o.jsx)(o.Fragment,{}):Object(o.jsx)("div",{className:e.root,children:Object(o.jsx)(W,{})})},P=function(){var e=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),s=t[0],o=t[1];return Object(n.useEffect)((function(){var e,t,s=window.innerWidth,n=window.innerHeight,a=1.33;n*a>s?t=(e=s)/a:e=(t=n)*a,o({width:s,height:n,mainContainerWidth:e,mainContainerHeight:t,mainContainerX:(s-e)/2,mainContainerY:(n-t)/2})}),[]),s}();return Object(o.jsx)(f.Provider,{value:e,children:Object(o.jsxs)(r.a,{theme:d,children:[Object(o.jsx)(l.a,{}),Object(o.jsx)(D,{})]})})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,101)).then((function(t){var s=t.getCLS,o=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),o(e),n(e),a(e),i(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root")),X()}},[[90,1,2]]]);
//# sourceMappingURL=main.55f4ed97.chunk.js.map