(this["webpackJsonpbeast-academy-clone"]=this["webpackJsonpbeast-academy-clone"]||[]).push([[0],{64:function(t,e,o){},89:function(t,e,o){"use strict";o.r(e);var s=o(0),a=o(2),i=o.n(a),n=o(48),c=o.n(n),r=(o(64),o(98)),l=o(96),h=o(52),d=o(99),b=Object(h.a)({palette:{primary:{main:"#264653",contrastText:"#fff"},secondary:{main:"#e76f51",contrastText:"#fff"},success:{main:"#4caf50",contrastText:"#fff"}},typography:{fontFamily:"system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),g=b=Object(d.a)(b),m=o(7),u=o.n(m),p=o(53),j=i.a.createContext(null),f=o(17),x="drop-shadow(3px 3px 0 rgba(0,0,0,.5))",y=u()((function(t){return{root:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",cursor:"url(".concat("/beast-academy-clone/assets/cursors/wonky-hand-point.cur","),pointer"),filter:x,"&:hover, &:focus":{filter:"drop-shadow(3px 3px 0 rgba(0,0,0,.5)) drop-shadow(0 0 2px rgba(255,255,255,.9))"},"&:active":{filter:"drop-shadow(1px 1px 0 rgba(0,0,0,.5)) drop-shadow(0 0 1px rgba(255,255,255,.9))",transform:"translate(2px, 2px)"},"&:focus":{outline:"none"},"& img":{maxWidth:"100%",maxHeight:"100%"}}}})),v=function(t){var e=t.iconSource,o=t.width,a=t.height,i=t.title,n=y();return Object(s.jsx)("button",{className:n.root,style:{width:o,height:a},"aria-label":i,children:Object(s.jsx)("img",{src:e,alt:i})})},O=u()((function(t){return{root:{width:"90%",position:"absolute",zIndex:t.zIndex.appBar,top:0,left:"50%",transform:"translateX(-50%)",filter:"drop-shadow(0 0 .4rem rgba(0,0,0,.9))",cursor:""},background:{width:"100%"},buttonsWrapper:{width:"96%",height:"70%",position:"absolute",left:"2%",top:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},centerButtonsGroup:{width:"33%",height:"200%",position:"relative"},centerButtonsGroupBackground:{position:"absolute",width:"80%",height:"100%",top:0,left:"10%",backgroundColor:"#ffce41"},centerButtonsGroupLeft:{position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderTopWidth:"100%",borderRightWidth:"100%",borderBottomWidth:0,borderLeftWidth:0,borderTopColor:"transparent",borderRightColor:"#ffce41",borderBottomColor:"transparent",borderLeftColor:"transparent"}}})),w=function(){var t=O();return Object(s.jsxs)("div",{className:t.root,children:[Object(s.jsx)("img",{src:"/beast-academy-clone/assets/ba-top-bar.svg",className:t.background}),Object(s.jsxs)("div",{className:t.buttonsWrapper,children:[Object(s.jsx)(v,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-baHome.svg"),width:"9%",height:"100%",title:"home"}),Object(s.jsx)(v,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-bell.svg"),width:"8%",height:"100%",title:"home"}),Object(s.jsx)(v,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-book.svg"),width:"8%",height:"100%",title:"home"}),Object(s.jsx)(v,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-projector.svg"),width:"8%",height:"100%",title:"home"}),Object(s.jsxs)("div",{className:t.centerButtonsGroup,children:[Object(s.jsx)("div",{className:t.centerButtonsGroupLeft,children:" "}),Object(s.jsx)("div",{className:t.centerButtonsGroupBackground})]}),Object(s.jsx)(v,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-help.svg"),width:"8%",height:"100%",title:"home"}),Object(s.jsx)(v,{iconSource:"".concat("/beast-academy-clone","/assets/icons/button-settings.svg"),width:"8%",height:"100%",title:"home"})]})]})},k=o(54),N=u()((function(t){return{root:{width:0,height:0,borderStyle:"solid"}}})),I=function(t){var e=t.width,o=t.height,i=t.vertices,n=t.color,c=t.style,r=N(),l=Object(a.useMemo)((function(){var t="transparent";return"0 1 1 1"===i?{top:t,right:n,bottom:t,left:t}:"1 0 1 1"===i||"1 1 0 1"===i?{top:t,right:t,bottom:t,left:n}:{top:t,right:n,bottom:t,left:t}}),[i,n]),h=Object(a.useMemo)((function(){return"0 1 1 1"===i?{top:o,right:e,bottom:0,left:0}:"1 0 1 1"===i?{top:o,right:0,bottom:0,left:e}:"1 1 0 1"===i?{top:0,right:0,bottom:o,left:e}:{top:0,right:e,bottom:o,left:0}}),[o,e,i]),d=Object(a.useMemo)((function(){return Object(k.a)({borderTopWidth:h.top,borderRightWidth:h.right,borderBottomWidth:h.bottom,borderLeftWidth:h.left,borderTopColor:l.top,borderRightColor:l.right,borderBottomColor:l.bottom,borderLeftColor:l.left},c)}),[l,h,c]);return Object(s.jsx)("div",{className:r.root,style:d})},z=1,S=2,C=u()((function(t){return{root:{width:"100%",height:"100%",position:"relative"},sky:{zIndex:z,position:"absolute",top:"-1%",left:"-1%",width:"102%"},skyHazeLeft:{zIndex:S,position:"absolute",top:"4.1%",left:"-1%",height:"17.2%"},skyHazeRight:{zIndex:S,position:"absolute",top:"12%",right:"-1%",height:"17.5%"},cloud1:{zIndex:S,position:"absolute",top:"9%",left:"0%",height:"15%",animation:"$cloudFloating 40s infinite linear",animationDelay:"-10s"},cloud2:{zIndex:S,position:"absolute",top:"28%",height:"7%",animation:"$cloudFloating 60s infinite linear",animationDelay:"-20s"},cloud3:{zIndex:6,position:"absolute",top:"13.5%",height:"13%",animation:"$cloudFloating 50s infinite linear",animationDelay:"-30s"},"@keyframes cloudFloating":{"0%":{transform:"translateX(-20vw)"},"100%":{transform:"translateX(100vw)"}},mountain:{zIndex:3,position:"absolute",bottom:"34.4%",left:"-1.1%",width:"102.5%"},hillRangeBack:{position:"absolute",zIndex:4,left:"36.4%",top:"27%",width:"54%"},hillRangeFront:{position:"absolute",zIndex:4,left:"-1.1%",top:"22.5%",width:"103%"},hillBackLeft:{position:"absolute",zIndex:6,left:"16.7%",top:"44.5%",width:"32.4%",height:"21.8%"},hillBackRight:{position:"absolute",zIndex:6,right:"18.4%",top:"41.9%",width:"34.1%",height:"30.3%"},hillFrontLeft:{position:"absolute",zIndex:7,left:"-1%",height:"39%",top:"34.7%"},hillFrontRight:{position:"absolute",zIndex:7,right:"-.6%",top:"45.4%",width:"33.1%",height:"30.3%"},hill:{position:"absolute",zIndex:9,width:"100%",bottom:"-1px"},bush1:{position:"absolute",zIndex:11,left:"-.1%",height:"8.5%",bottom:"18%"},bush2:{position:"absolute",zIndex:11,left:"15.5%",height:"12.5%",bottom:"4.9%"},tree1:{position:"absolute",zIndex:11,right:"5.2%",height:"17.1%",bottom:"2%"},tree2:{position:"absolute",zIndex:9,left:"7%",bottom:"55.8%",height:"5.8%"},tree3:{position:"absolute",zIndex:9,left:"2.5%",bottom:"61.8%",height:"5.3%"},tree4:{position:"absolute",zIndex:9,left:"34.7%",height:"16.8%",bottom:"48.8%"},tree5:{position:"absolute",zIndex:9,right:"24.7%",height:"6.5%",bottom:"46.2%"},tree6:{position:"absolute",zIndex:9,right:".3%",height:"26.7%",bottom:"43.7%"},lab:{position:"absolute",zIndex:8,height:"55.9%",bottom:"32%",left:".4%"},theatre:{position:"absolute",zIndex:10,height:"31.3%",bottom:"25.2%",right:"5.2%"},library:{position:"absolute",zIndex:10,height:"30.6%",bottom:"25.1%",left:"1.1%"},school:{position:"absolute",zIndex:10,height:"52.7%",bottom:"19.4%",left:"28.3%"},clock:{position:"absolute",zIndex:14,left:"46.4%",height:"5.9%",width:"4.5%",bottom:"46.2%"},clockFace:{position:"absolute",height:"100%",width:"100%"},clockMinuteWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 3600s infinite linear"},clockHourWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 43200s infinite linear"},clockSecondWrapper:{position:"absolute",height:"100%",width:"100%",animation:"$clockHand 60s infinite steps(60)"},clockMinuteImage:{position:"absolute",height:"35%",left:"50%",bottom:"45%",transform:"translateX(-50%)"},clockHourImage:{position:"absolute",height:"30%",left:"50%",bottom:"43%",transform:"translateX(-50%)"},clockSecondImage:{position:"absolute",height:"45%",width:1,backgroundColor:"#7f3e1c",left:"50%",bottom:"43%",transform:"translateX(-50%)"},"@keyframes clockHand":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}})),H=function(){var t=C(),e=Object(a.useMemo)((function(){var t=new Date(Date.now()),e=t.getSeconds(),o=60*t.getMinutes()+e,s=t.getHours()%12*3600+o;return{hourHandStyle:{transform:"rotate(".concat(s/43200*360,"deg)"),animationDelay:"".concat(-s,"s")},minuteHandStyle:{transform:"rotate(".concat(o/3600*360,"deg)"),animationDelay:"".concat(-o,"s")},secondHandStyle:{transform:"rotate(".concat(6*e,"deg)"),animationDelay:"".concat(-e,"s")}}}),[]);return Object(s.jsxs)("div",{className:t.root,children:[Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-sky.svg"),className:t.sky,alt:"sky"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-skyhaze-left.svg"),className:t.skyHazeLeft,alt:"skyHazeLeft"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-skyhaze-right.svg"),className:t.skyHazeRight,alt:"skyHazeRight"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-left.svg"),className:t.cloud1,alt:"cloud1"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-left-small.svg"),className:t.cloud2,alt:"cloud2"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clouds-right.svg"),className:t.cloud3,alt:"cloud3"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-mountains.svg"),className:t.mountain,alt:"mountain"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-range-back.svg"),className:t.hillRangeBack,alt:"hillRangeBack"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-range-front.svg"),className:t.hillRangeFront,alt:"hillRangeFront"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-back-left.svg"),className:t.hillBackLeft,alt:"hillBackLeft"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-back-right.svg"),className:t.hillBackRight,alt:"hillBackRight"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-front-left.svg"),className:t.hillFrontLeft,alt:"hillFrontLeft"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-front-right.svg"),className:t.hillFrontRight,alt:"hillFrontRight"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-hill-center.svg"),className:t.hill,alt:"hill"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-bush-left.svg"),className:t.bush1,alt:"bush1"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-bush-front.svg"),className:t.bush2,alt:"bush2"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-tree-front.svg"),className:t.tree1,alt:"tree1"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-one-tree-left.svg"),className:t.tree2,alt:"tree2"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-two-trees-left.svg"),className:t.tree3,alt:"tree3"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-five-trees-left.svg"),className:t.tree4,alt:"tree4"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-four-trees-right.svg"),className:t.tree5,alt:"tree5"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-six-trees-right.svg"),className:t.tree6,alt:"tree6"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-lab.svg"),className:t.lab,alt:"lab"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/theater-text-13.svg"),className:t.theatre,alt:"theatre"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-library.svg"),className:t.library,alt:"library"}),Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-main-building.svg"),className:t.school,alt:"school"}),Object(s.jsxs)("div",{className:t.clock,children:[Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-face.svg"),className:t.clockFace,alt:"clockFace"}),Object(s.jsx)("div",{className:t.clockMinuteWrapper,style:e.minuteHandStyle,children:Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-minute-hand.svg"),className:t.clockMinuteImage,alt:"clockMinuteImage"})}),Object(s.jsx)("div",{className:t.clockHourWrapper,style:e.hourHandStyle,children:Object(s.jsx)("img",{src:"".concat("/beast-academy-clone","/assets/paintings/homescreen-clock-hour-hand.svg"),className:t.clockHourImage,alt:"clockHourImage"})}),Object(s.jsx)("div",{className:t.clockSecondWrapper,style:e.secondHandStyle,children:Object(s.jsx)("div",{className:t.clockSecondImage,children:" "})})]})]})},W=u()((function(t){return{root:{width:"100%",position:"relative",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",overflow:"hidden","& img":{userSelect:"none",userDrag:"none"}},fullSize:{width:"100%",height:"100%"},background1:{position:"absolute",top:0,left:0,backgroundImage:"url(".concat("/beast-academy-clone/assets/patch-blue-bright.png",")"),zIndex:-1},background2:{backgroundImage:"url(".concat("/beast-academy-clone/assets/mathjazz.svg",")")},mainContentWrapper:{position:"relative",border:"10px solid #fff",flexShrink:0,boxShadow:"inset 0 0 30px 10px rgba(0,0,0,0.2)"},mainContent:{position:"relative",width:"100%",height:"100%",overflow:"hidden",zIndex:-1}}})),B=function(){var t=W(),e=Object(a.useContext)(j);return null===e?Object(s.jsx)(s.Fragment,{}):Object(s.jsxs)("div",{className:t.root,style:{height:e.height},children:[Object(s.jsx)("div",{className:Object(f.a)(t.background1,t.fullSize),children:Object(s.jsx)("div",{className:Object(f.a)(t.background2,t.fullSize),children:" "})}),Object(s.jsxs)("div",{className:t.mainContentWrapper,style:{width:e.mainContainerWidth,height:e.mainContainerHeight,boxSizing:"content-box"},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)(I,{width:100,height:e.height,vertices:"1 1 1 0",color:"#00b2dd",style:{position:"absolute",top:0,left:-110}}),Object(s.jsx)(I,{width:70,height:e.height,vertices:"0 1 1 1",color:"#00b2dd",style:{position:"absolute",top:0,left:-80}})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(I,{width:70,height:e.height,vertices:"1 1 0 1",color:"#00b2dd",style:{position:"absolute",top:0,right:-80}}),Object(s.jsx)(I,{width:100,height:e.height,vertices:"1 0 1 1",color:"#00b2dd",style:{position:"absolute",top:0,right:-110}})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(I,{width:e.width,height:100,vertices:"1 0 1 1",color:"#00b2dd",style:{position:"absolute",top:-110,left:0}}),Object(s.jsx)(I,{width:e.width,height:70,vertices:"0 1 1 1",color:"#00b2dd",style:{position:"absolute",top:-80,left:0}})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(I,{width:e.width,height:100,vertices:"1 1 1 0",color:"#00b2dd",style:{position:"absolute",bottom:-110,left:0}}),Object(s.jsx)(I,{width:e.width,height:70,vertices:"1 1 0 1",color:"#00b2dd",style:{position:"absolute",bottom:-80,left:0}})]}),Object(s.jsx)(w,{}),Object(s.jsx)("div",{className:t.mainContent,children:Object(s.jsx)(H,{})})]})]})},F=u()((function(t){return{root:{width:"100vw",maxWidth:"100%",overflowX:"hidden",cursor:"url(".concat("/beast-academy-clone/assets/cursors/tool-arrow-point.cur","),default")}}})),R=function(){var t=F();return null===Object(a.useContext)(j)?Object(s.jsx)(s.Fragment,{}):Object(s.jsx)("div",{className:t.root,children:Object(s.jsx)(B,{})})},L=function(){var t=function(){var t=Object(a.useState)(null),e=Object(p.a)(t,2),o=e[0],s=e[1];return Object(a.useEffect)((function(){var t,e,o=window.innerWidth,a=window.innerHeight,i=1.33;a*i>o?e=(t=o)/i:t=(e=a)*i,s({width:o,height:a,mainContainerWidth:t,mainContainerHeight:e})}),[]),o}();return Object(s.jsx)(j.Provider,{value:t,children:Object(s.jsxs)(l.a,{theme:g,children:[Object(s.jsx)(r.a,{}),Object(s.jsx)(R,{})]})})},D=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,100)).then((function(e){var o=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,n=e.getTTFB;o(t),s(t),a(t),i(t),n(t)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),D()}},[[89,1,2]]]);
//# sourceMappingURL=main.8fa78f4f.chunk.js.map