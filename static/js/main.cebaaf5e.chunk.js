(this["webpackJsonpbeast-academy-clone"]=this["webpackJsonpbeast-academy-clone"]||[]).push([[0],{65:function(t,e,s){},90:function(t,e,s){"use strict";s.r(e);var o=s(0),a=s(2),n=s.n(a),i=s(30),c=s.n(i),r=(s(65),s(99)),l=s(97),h=s(55),b=s(100),d=Object(h.a)({palette:{primary:{main:"#264653",contrastText:"#fff"},secondary:{main:"#e76f51",contrastText:"#fff"},success:{main:"#4caf50",contrastText:"#fff"}},typography:{fontFamily:"system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),g=d=Object(b.a)(d),u=s(7),m=s.n(u),j=s(9),f=n.a.createContext(null),p=s(11),x=s(33),y=s(10),O="drop-shadow(3px 3px 0 rgba(0,0,0,.5))",v=m()((function(t){return{root:{backgroundColor:"transparent",cursor:"url(".concat("/beast-academy-clone/assets/cursors/wonky-hand-point.cur","),pointer"),filter:O,"&:hover, &:focus":{filter:"drop-shadow(3px 3px 0 rgba(0,0,0,.5)) drop-shadow(0 0 2px rgba(255,255,255,.9))"},"&:active":{filter:"drop-shadow(1px 1px 0 rgba(0,0,0,.5)) drop-shadow(0 0 1px rgba(255,255,255,.9))",transform:"translate(2px, 2px)"},"&:focus":{outline:"none"}},inner:{position:"relative",width:"100%",height:"100%"},background:{position:"absolute",top:"50%",transform:"translateY(-50%)",left:0,width:"100%",height:"100%","& img":{width:"100%",height:"100%",objectFit:"contain"}},content:{width:"100%",height:"100%",position:"absolute",top:0,left:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center","& img":{padding:"0 5% 0 0"},"& span":{fontFamily:'"RobotoSlab", serif',fontWeight:500,textTransform:"uppercase",wordSpacing:"100vw",lineHeight:1.25}}}})),w=n.a.forwardRef((function(t,e){var s=t.iconSource,n=t.backgroundSource,i=t.style,c=t.iconStyle,r=t.title,l=t.isText,h=void 0!==l&&l,b=v(),d=Object(a.useRef)(null),g=Object(a.useState)(0),u=Object(j.a)(g,2),m=u[0],f=u[1];Object(a.useEffect)((function(){if(d.current){var t=r.split(" ").length||1,e=d.current.getBoundingClientRect().height;f(Math.round(e/t/4))}}),[r]);var p=Object(a.useMemo)((function(){return h?{width:"15%",height:"100%",objectFit:"contain"}:{width:"70%",height:"70%",objectFit:"contain"}}),[h]);return Object(o.jsx)("button",{className:b.root,style:Object(y.a)({},i),"aria-label":r,ref:function(t){d.current=t,e&&(e.current=t)},children:Object(o.jsxs)("div",{className:b.inner,children:[n&&Object(o.jsx)("div",{className:b.background,children:Object(o.jsx)("img",{src:n,alt:r})}),Object(o.jsxs)("div",{className:b.content,style:Object(y.a)({},c),children:[s&&Object(o.jsx)("img",{src:s,alt:r,style:Object(y.a)(Object(y.a)({},p),c)}),h&&Object(o.jsx)("span",{style:{fontSize:m},children:r})]})]})})})),k=m()((function(t){return{root:{fontFamily:'"RobotoSlab", serif',fontSize:"1.5rem",position:"fixed",zIndex:t.zIndex.tooltip},innerWrapper:{position:"relative",width:"100%",height:"100%"},background:{position:"absolute",width:"100%",height:"100%",objectFit:"contain"},text:{position:"absolute",display:"block"},textDimension:{padding:"2px 5px",maxWidth:500,textAlign:"center"}}})),S=function(t){var e=t.message,s=t.x,n=t.y,i=k(),c=Object(a.useRef)(null),r=Object(a.useState)(null),l=Object(j.a)(r,2),h=l[0],b=l[1];return Object(a.useEffect)((function(){if(c.current){var t,e,s=c.current.getBoundingClientRect(),o=s.width,a=s.height;o/a<3.7?(e=a,t=3.7*a):(t=o,e=o/3.7),b({width:t/.7,height:e/.41})}}),[]),Object(a.useMemo)((function(){if(null===h)return Object(o.jsx)("div",{className:Object(p.a)(i.root,i.textDimension),style:{left:-9999,top:-9999},ref:c,children:e});var t=s-h.width-5,a=n-h.height-5,r=1,l=1,b=1,d=1,g="auto",u={left:g,top:g,right:"54%",bottom:"58%",transform:""};a<0&&(l=-1,a=n+5,u.top="58%",u.bottom=g,d=-1),t<0&&(r=-1,t=s+5,u.right=g,u.left="54%",b=-1),u.transform="translate(".concat(50*b,"%, ").concat(50*d,"%)");var m={left:t,top:a,width:h.width,height:h.height},j={transform:"scale(".concat(r,", ").concat(l)};return Object(o.jsx)("div",{className:i.root,style:m,onMouseEnter:function(t){return t.stopPropagation()},children:Object(o.jsxs)("div",{className:i.innerWrapper,children:[Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/shapes/tooltip-small.svg"),alt:"tooltip",className:i.background,style:j}),Object(o.jsx)("span",{className:Object(p.a)(i.text,i.textDimension),style:u,children:e})]})})}),[i,h,s,n,e])},z=function(t){var e=t.children,s=t.text,i=Object(a.useRef)(null),r=Object(a.useRef)(null),l=Object(a.useState)(!1),h=Object(j.a)(l,2),b=h[0],d=h[1],g=Object(a.useState)(0),u=Object(j.a)(g,2),m=u[0],f=u[1],p=Object(a.useState)(0),x=Object(j.a)(p,2),O=x[0],v=x[1];return Object(a.useEffect)((function(){if(i.current){var t=function(t){d(!0),f(t.clientX),v(t.clientY)},e=function(){d(!1)},s=i.current;return s.addEventListener("mousemove",t),s.addEventListener("mouseleave",e),function(){s.removeEventListener("mousemove",t),s.removeEventListener("mouseleave",e)}}}),[]),Object(a.useEffect)((function(){return r.current=document.createElement("div"),document.body.appendChild(r.current),function(){var t;r.current&&(null===(t=r.current.parentElement)||void 0===t||t.removeChild(r.current),r.current=null)}}),[]),Object(o.jsxs)(o.Fragment,{children:[n.a.cloneElement(e,Object(y.a)(Object(y.a)({},e.props),{},{ref:i})),b&&r.current&&c.a.createPortal(Object(o.jsx)(S,{message:s,x:m,y:O}),r.current)]})},N=m()((function(t){return{root:{width:"90%",height:"10%",position:"absolute",zIndex:t.zIndex.appBar,top:0,left:"50%",transform:"translateX(-50%)",filter:"drop-shadow(0 0 .4rem rgba(0,0,0,.9))",cursor:""},background:{width:"100%"},buttonsWrapper:{width:"96%",height:"70%",position:"absolute",left:"2%",top:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},centerButtonsGroup:{width:"33%",height:"150%",position:"relative",top:"25%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},centerButtonsGroupBackground:{position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:1},centerTitle:Object(x.a)({display:"block",width:"40%",textAlign:"center",fontFamily:'"RobotoSlab", serif',fontWeight:700,fontSize:"2.8rem",zIndex:2,color:"rgb(204,154,66)",textShadow:"1px 1px 1px rgba(0,0,0,0.5)"},t.breakpoints.down("sm"),{fontSize:"1.5rem"}),right:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},guest:{marginLeft:"10%",fontSize:"1.75rem",color:"#ffce41",filter:"drop-shadow(3px 3px 0 rgba(0,0,0,.5))",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"row","& img":{margin:"0 0 0 5px",width:"15%"}}}})),I=function(){var t=N(),e=Object(a.useRef)(null),s=Object(a.useRef)(null),n={width:"20%",margin:"0 5%",zIndex:2,height:"100%"};return Object(a.useEffect)((function(){if(s.current&&e.current){var t=e.current.getBoundingClientRect().width,o=e.current.getBoundingClientRect().height,a=s.current,n=a.getContext("2d");if(a.width=t,a.height=o,n){var i=.03*t,c=t-i-.02*t;n.fillStyle="#ffce41",n.beginPath(),n.moveTo(i,0),n.lineTo(i+c,0),n.lineTo(t,o),n.lineTo(0,o),n.fill()}}}),[]),Object(o.jsxs)("div",{className:t.root,children:[Object(o.jsx)("img",{src:"/beast-academy-clone/assets/ba-top-bar.svg",className:t.background}),Object(o.jsxs)("div",{className:t.buttonsWrapper,children:[Object(o.jsx)(z,{text:"Home",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-baHome.svg"),style:{width:"9%",height:"100%"},title:"Home"})}),Object(o.jsx)(z,{text:"Class",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-bell.svg"),style:{width:"8%",height:"100%"},title:"Class"})}),Object(o.jsx)(z,{text:"Library",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-book.svg"),style:{width:"8%",height:"100%"},title:"Library"})}),Object(o.jsx)(z,{text:"Theater",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-projector.svg"),style:{width:"8%",height:"100%"},title:"Theater"})}),Object(o.jsxs)("div",{className:t.centerButtonsGroup,ref:e,children:[Object(o.jsx)("canvas",{ref:s,width:1,height:1,className:t.centerButtonsGroupBackground}),Object(o.jsx)(w,{backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/octagon.svg"),style:n,title:"learn more",isText:!0}),Object(o.jsx)("span",{className:t.centerTitle,children:"DEMO"}),Object(o.jsx)(w,{backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/octagon.svg"),style:n,title:"enroll now",isText:!0})]}),Object(o.jsx)(z,{text:"Help",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-help.svg"),style:{width:"8%",height:"100%"},title:"Help"})}),Object(o.jsx)(z,{text:"Settings",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-settings.svg"),style:{width:"8%",height:"100%"},title:"Settings"})}),Object(o.jsxs)("div",{style:{width:"17%",height:"100%",transform:"translateX(10%)"},className:t.right,children:[Object(o.jsx)(z,{text:"Profile",children:Object(o.jsx)(w,{iconSource:"".concat("/beast-academy-clone","/assets/icons/default-avatar.svg"),backgroundSource:"".concat("/beast-academy-clone","/assets/icons/button-surround.svg"),style:{width:"25%",height:"100%"},title:"Profile"})}),Object(o.jsxs)("div",{className:t.guest,children:["Guest",Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/icons/button-right-yellow.svg"),alt:"profile more"})]})]})]})]})},C=m()((function(t){return{root:{width:0,height:0,borderStyle:"solid"}}})),R=function(t){var e=t.width,s=t.height,n=t.vertices,i=t.color,c=t.style,r=C(),l=Object(a.useMemo)((function(){var t="transparent";return"0 1 1 1"===n?{top:t,right:i,bottom:t,left:t}:"1 0 1 1"===n||"1 1 0 1"===n?{top:t,right:t,bottom:t,left:i}:{top:t,right:i,bottom:t,left:t}}),[n,i]),h=Object(a.useMemo)((function(){return"0 1 1 1"===n?{top:s,right:e,bottom:0,left:0}:"1 0 1 1"===n?{top:s,right:0,bottom:0,left:e}:"1 1 0 1"===n?{top:0,right:0,bottom:s,left:e}:{top:0,right:e,bottom:s,left:0}}),[s,e,n]),b=Object(a.useMemo)((function(){return Object(y.a)({borderTopWidth:h.top,borderRightWidth:h.right,borderBottomWidth:h.bottom,borderLeftWidth:h.left,borderTopColor:l.top,borderRightColor:l.right,borderBottomColor:l.bottom,borderLeftColor:l.left},c)}),[l,h,c]);return Object(o.jsx)("div",{className:r.root,style:b})},F=1,H=2,B=99,W=m()((function(t){return{root:{width:"100%",height:"100%",position:"relative"},sky:{zIndex:F,position:"absolute",top:"-1%",left:"-1%",width:"102%"},skyHazeLeft:{zIndex:H,position:"absolute",top:"4.1%",left:"-1%",height:"17.2%"},skyHazeRight:{zIndex:H,position:"absolute",top:"12%",right:"-1%",height:"17.5%"},cloud1:{zIndex:H,position:"absolute",top:"9%",left:"0%",height:"15%",animation:"$cloudFloating 40s infinite linear",animationDelay:"-10s"},cloud2:{zIndex:H,position:"absolute",top:"28%",height:"7%",animation:"$cloudFloating 60s infinite linear",animationDelay:"-20s"},cloud3:{zIndex:6,position:"absolute",top:"13.5%",height:"13%",animation:"$cloudFloating 50s infinite linear",animationDelay:"-30s"},"@keyframes cloudFloating":{"0%":{transform:"translateX(-20vw)"},"100%":{transform:"translateX(100vw)"}},mountain:{zIndex:3,position:"absolute",bottom:"34.4%",left:"-1.1%",width:"102.5%"},hillRangeBack:{position:"absolute",zIndex:4,left:"36.4%",top:"27%",width:"54%"},hillRangeFront:{position:"absolute",zIndex:4,left:"-1.1%",top:"22.5%",width:"103%"},hillBackLeft:{position:"absolute",zIndex:6,left:"16.7%",top:"44.5%",width:"32.4%",height:"21.8%"},hillBackRight:{position:"absolute",zIndex:6,right:"18.4%",top:"41.9%",width:"34.1%",height:"30.3%"},hillFrontLeft:{position:"absolute",zIndex:7,left:"-1%",height:"39%",top:"34.7%"},hillFrontRight:{position:"absolute",zIndex:7,right:"-.6%",top:"45.4%",width:"33.1%",height:"30.3%"},hill:{position:"absolute",zIndex:9,width:"100%",bottom:"-1px"},bush1:{position:"absolute",zIndex:11,left:"-.1%",height:"8.5%",bottom:"18%"},bush2:{position:"absolute",zIndex:11,left:"15.5%",height:"12.5%",bottom:"4.9%"},tree1:{position:"absolute",zIndex:11,right:"5.2%",height:"17.1%",bottom:"2%"},tree2:{position:"absolute",zIndex:9,left:"7%",bottom:"55.8%",height:"5.8%"},tree3:{position:"absolute",zIndex:9,left:"2.5%",bottom:"61.8%",height:"5.3%"},tree4:{position:"absolute",zIndex:9,left:"34.7%",height:"16.8%",bottom:"48.8%"},tree5:{position:"absolute",zIndex:9,right:"24.7%",height:"6.5%",bottom:"46.2%"},tree6:{position:"absolute",zIndex:9,right:".3%",height:"26.7%",bottom:"43.7%"},lab:{position:"absolute",zIndex:8,height:"55.9%",bottom:"32%",left:".4%"},theatre:{position:"absolute",zIndex:10,height:"31.3%",bottom:"25.2%",right:"5.2%"},library:{position:"absolute",zIndex:10,height:"30.6%",bottom:"25.1%",left:"1.1%"},school:{position:"absolute",zIndex:10,height:"52.7%",bottom:"19.4%",left:"28.3%"},clock:{position:"absolute",zIndex:14,left:"46.4%",height:"5.9%",width:"4.5%",bottom:"46.2%"},clockFace:{position:"absolute",height:"100%",width:"100%"},clockMinuteWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 3600s infinite linear"},clockHourWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 43200s infinite linear"},clockSecondWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 60s infinite steps(60)"},clockMinuteImage:{position:"absolute",height:"35%",left:"50%",bottom:"45%",transform:"translateX(-50%)"},clockHourImage:{position:"absolute",height:"30%",left:"50%",bottom:"43%",transform:"translateX(-50%)"},clockSecondImage:{position:"absolute",height:"45%",width:1,backgroundColor:"#7f3e1c",left:"50%",bottom:"43%",transform:"translateX(-50%)"},"@keyframes clockHand":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}})),T=function(){var t=W(),e=Object(a.useMemo)((function(){var t=new Date(Date.now()),e=t.getSeconds(),s=60*t.getMinutes()+e,o=t.getHours()%12*3600+s;return{hourHandStyle:{transform:"rotate(".concat(o/43200*360,"deg)"),animationDelay:"".concat(-o,"s")},minuteHandStyle:{transform:"rotate(".concat(s/3600*360,"deg)"),animationDelay:"".concat(-s,"s")},secondHandStyle:{transform:"rotate(".concat(6*e,"deg)"),animationDelay:"".concat(-e,"s")}}}),[]);return Object(o.jsxs)("div",{className:t.root,children:[Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-sky.svg"),className:t.sky,alt:"sky"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-skyhaze-left.svg"),className:t.skyHazeLeft,alt:"skyHazeLeft"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-skyhaze-right.svg"),className:t.skyHazeRight,alt:"skyHazeRight"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-left.svg"),className:t.cloud1,alt:"cloud1"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-left-small.svg"),className:t.cloud2,alt:"cloud2"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-right.svg"),className:t.cloud3,alt:"cloud3"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-mountains.svg"),className:t.mountain,alt:"mountain"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-range-back.svg"),className:t.hillRangeBack,alt:"hillRangeBack"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-range-front.svg"),className:t.hillRangeFront,alt:"hillRangeFront"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-back-left.svg"),className:t.hillBackLeft,alt:"hillBackLeft"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-back-right.svg"),className:t.hillBackRight,alt:"hillBackRight"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-front-left.svg"),className:t.hillFrontLeft,alt:"hillFrontLeft"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-front-right.svg"),className:t.hillFrontRight,alt:"hillFrontRight"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-center.svg"),className:t.hill,alt:"hill"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-bush-left.svg"),className:t.bush1,alt:"bush1"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-bush-front.svg"),className:t.bush2,alt:"bush2"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-tree-front.svg"),className:t.tree1,alt:"tree1"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-one-tree-left.svg"),className:t.tree2,alt:"tree2"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-two-trees-left.svg"),className:t.tree3,alt:"tree3"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-five-trees-left.svg"),className:t.tree4,alt:"tree4"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-four-trees-right.svg"),className:t.tree5,alt:"tree5"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-six-trees-right.svg"),className:t.tree6,alt:"tree6"}),Object(o.jsx)(z,{text:"The full version of BA Online includes a Puzzle Lab with more than 250 puzzles that complement the standard lessons.",children:Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-lab.svg"),className:t.lab,alt:"lab"})}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/theater-text-13.svg"),className:t.theatre,alt:"theatre"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-library.svg"),className:t.library,alt:"library"}),Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-main-building.svg"),className:t.school,alt:"school"}),Object(o.jsxs)("div",{className:t.clock,children:[Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-face.svg"),className:t.clockFace,alt:"clockFace"}),Object(o.jsx)("div",{className:t.clockMinuteWrapper,style:e.minuteHandStyle,children:Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-minute-hand.svg"),className:t.clockMinuteImage,alt:"clockMinuteImage"})}),Object(o.jsx)("div",{className:t.clockHourWrapper,style:e.hourHandStyle,children:Object(o.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-hour-hand.svg"),className:t.clockHourImage,alt:"clockHourImage"})}),Object(o.jsx)("div",{className:t.clockSecondWrapper,style:e.secondHandStyle,children:Object(o.jsx)("div",{className:t.clockSecondImage,children:" "})})]}),Object(o.jsx)(w,{title:"library",backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/quad.svg"),isText:!0,iconSource:"".concat("/beast-academy-clone","/assets/icons/button-book-white.svg"),style:{position:"absolute",zIndex:B,left:"6.5%",bottom:"19.2%",height:"8.5%",width:"16%"}}),Object(o.jsx)(w,{title:"class",backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/quad2.svg"),isText:!0,iconSource:"".concat("/beast-academy-clone","/assets/icons/button-bell-white.svg"),style:{position:"absolute",zIndex:B,left:"39.1%",bottom:"11.8%",height:"9.5%",width:"20%"}}),Object(o.jsx)(w,{title:"theater",backgroundSource:"".concat("/beast-academy-clone","/assets/shapes/quad3.svg"),isText:!0,iconSource:"".concat("/beast-academy-clone","/assets/icons/button-projector-white.svg"),style:{position:"absolute",zIndex:B,left:"76.2%",bottom:"16.5%",height:"9.5%",width:"15.5%"}})]})},L=m()((function(t){return{root:{width:"100%",position:"relative",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",overflow:"hidden",fontFamily:'"RobotoSlab", serif',userSelect:"none","& img":{userSelect:"none",userDrag:"none"}},fullSize:{width:"100%",height:"100%"},background1:{position:"absolute",top:0,left:0,backgroundImage:"url(".concat("/beast-academy-clone/assets/patch-blue-bright.png",")"),zIndex:-1},background2:{backgroundImage:"url(".concat("/beast-academy-clone/assets/mathjazz.svg",")")},mainContentWrapper:{position:"relative",border:"10px solid #fff",flexShrink:0,boxShadow:"inset 0 0 30px 10px rgba(0,0,0,0.2)"},mainContent:{position:"relative",width:"100%",height:"100%",overflow:"hidden"}}})),D=function(){var t=L(),e=Object(a.useContext)(f);if(null===e)return Object(o.jsx)(o.Fragment,{});return Object(o.jsxs)("div",{className:t.root,style:{height:e.height},children:[Object(o.jsx)("div",{className:Object(p.a)(t.background1,t.fullSize),children:Object(o.jsx)("div",{className:Object(p.a)(t.background2,t.fullSize),children:" "})}),Object(o.jsxs)("div",{className:t.mainContentWrapper,style:{width:e.mainContainerWidth,height:e.mainContainerHeight,boxSizing:"content-box"},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(R,{width:70,height:e.height,vertices:"1 1 1 0",color:"#00b2dd",style:{position:"absolute",top:0,left:-80}}),Object(o.jsx)(R,{width:50,height:e.height,vertices:"0 1 1 1",color:"#00b2dd",style:{position:"absolute",top:0,left:-60}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(R,{width:50,height:e.height,vertices:"1 1 0 1",color:"#00b2dd",style:{position:"absolute",top:0,right:-60}}),Object(o.jsx)(R,{width:70,height:e.height,vertices:"1 0 1 1",color:"#00b2dd",style:{position:"absolute",top:0,right:-80}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(R,{width:e.width,height:70,vertices:"1 0 1 1",color:"#00b2dd",style:{position:"absolute",top:-80,left:0}}),Object(o.jsx)(R,{width:e.width,height:50,vertices:"0 1 1 1",color:"#00b2dd",style:{position:"absolute",top:-60,left:0}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(R,{width:e.width,height:100,vertices:"1 1 1 0",color:"#00b2dd",style:{position:"absolute",bottom:-110,left:0}}),Object(o.jsx)(R,{width:e.width,height:70,vertices:"1 1 0 1",color:"#00b2dd",style:{position:"absolute",bottom:-80,left:0}})]}),Object(o.jsx)(I,{}),Object(o.jsx)("div",{className:t.mainContent,children:Object(o.jsx)(T,{})})]})]})},E=m()((function(t){return{root:{width:"100vw",maxWidth:"100%",overflowX:"hidden",cursor:"url(".concat("/beast-academy-clone/assets/cursors/tool-arrow-point.cur","),default")}}})),M=function(){var t=E();return null===Object(a.useContext)(f)?Object(o.jsx)(o.Fragment,{}):Object(o.jsx)("div",{className:t.root,children:Object(o.jsx)(D,{})})},P=function(){var t=function(){var t=Object(a.useState)(null),e=Object(j.a)(t,2),s=e[0],o=e[1];return Object(a.useEffect)((function(){var t,e,s=window.innerWidth,a=window.innerHeight,n=1.33;a*n>s?e=(t=s)/n:t=(e=a)*n,o({width:s,height:a,mainContainerWidth:t,mainContainerHeight:e})}),[]),s}();return Object(o.jsx)(f.Provider,{value:t,children:Object(o.jsxs)(l.a,{theme:g,children:[Object(o.jsx)(r.a,{}),Object(o.jsx)(M,{})]})})},X=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,101)).then((function(e){var s=e.getCLS,o=e.getFID,a=e.getFCP,n=e.getLCP,i=e.getTTFB;s(t),o(t),a(t),n(t),i(t)}))};c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root")),X()}},[[90,1,2]]]);
//# sourceMappingURL=main.cebaaf5e.chunk.js.map