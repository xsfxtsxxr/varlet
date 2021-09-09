(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[2026],{8331:(e,a,n)=>{"use strict";n.d(a,{Z:()=>p});var t=n(7875),l=n(641),i=n(9838),r=n(4274);const s=(0,t.aZ)({name:"VarSwipeItem",setup(){var e=(0,l.iH)(0),{swipe:a,bindSwipe:n,index:t}=function(){var{bindParent:e,parentProvider:a}=(0,i.NB)(r.AV),{index:n}=(0,i.wn)(r.IC);if(!e||!a||!n)throw Error("<var-swipe-item/> must in <var-swipe/>");return{index:n,swipe:a,bindSwipe:e}}(),{size:s,vertical:o}=a;return n({index:t,setTranslate:a=>{e.value=a}}),{size:s,vertical:o,translate:e}}});var o=n(6062),u=n.n(o),c=n(8947);u()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,s.render=function(e,a,n,l,i,r){return(0,t.wg)(),(0,t.j4)("div",{class:"var-swipe-item",style:{width:e.vertical?null:"".concat(e.size,"px"),height:e.vertical?"".concat(e.size,"px"):null,transform:"translate".concat(e.vertical?"Y":"X","(").concat(e.translate,"px)")}},[(0,t.WI)(e.$slots,"default")],4)};const v=s;v.install=function(e){e.component(v.name,v)};const p=v},7669:(e,a,n)=>{"use strict";n.d(a,{Z:()=>m});var t=n(7875),l={class:"var-swipe",ref:"swipeEl"},i=n(641),r=n(4274),s=n(4268),o=n(3449),u=n(8442);const c=(0,t.aZ)({name:"VarSwipe",props:o.N,setup(e){var a,n,l,o,c,v=(0,i.iH)(null),p=(0,i.iH)(0),d=(0,t.Fl)((()=>e.vertical)),f=(0,i.iH)(0),m=(0,i.iH)(0),h=(0,i.iH)(!1),g=(0,i.iH)(0),{swipeItems:w,bindSwipeItems:b,length:x}=(0,r.bB)(),W=!1,_=-1,k=e=>w.find((({index:a})=>a.value===e)),y=a=>{var n=(0,u.hj)(a)?a:Math.floor((m.value-p.value/2)/-p.value),{loop:t}=e;return n<=-1?t?-1:0:n>=x.value?t?x.value:x.value-1:n},z=a=>{var{loop:n}=e;return a<0?n?x.value-1:0:a>x.value-1?n?0:x.value-1:a},j=e=>{var a=m.value>=p.value,n=m.value<=-f.value,t=-(f.value-p.value);h.value=!0,(a||n)&&(h.value=!0,m.value=n?0:t,k(0).setTranslate(0),k(x.value-1).setTranslate(0)),(0,s.xX)((()=>{h.value=!1,null==e||e()}))},I=()=>{var{autoplay:a}=e;!a||x.value<=1||(S(),_=window.setTimeout((()=>{C(),I()}),(0,u.He)(a)))},S=()=>{_&&clearInterval(_)},T=()=>{p.value=e.vertical?v.value.offsetHeight:v.value.offsetWidth,f.value=p.value*x.value,h.value=!0,g.value=z((0,u.He)(e.initialIndex)),m.value=g.value*-p.value,(0,s.xX)((()=>{h.value=!1})),I()},C=()=>{if(!(x.value<=1)){var{loop:a,onChange:n}=e,t=g.value;g.value=z(t+1),null==n||n(g.value),j((()=>{if(t===x.value-1&&a)return k(0).setTranslate(f.value),void(m.value=x.value*-p.value);t!==x.value-1&&(m.value=g.value*-p.value)}))}},Z=()=>{if(!(x.value<=1)){var{loop:a,onChange:n}=e,t=g.value;g.value=z(t-1),null==n||n(g.value),j((()=>{if(0===t&&a)return k(x.value-1).setTranslate(-f.value),void(m.value=p.value);0!==t&&(m.value=g.value*-p.value)}))}};return b({size:p,vertical:d}),(0,t.YP)((()=>x.value),T),(0,t.bv)((()=>{window.addEventListener("resize",T)})),(0,t.Ah)((()=>{window.removeEventListener("resize",T),S()})),{length:x,index:g,swipeEl:v,trackSize:f,translate:m,lockDuration:h,handleTouchstart:t=>{if(!(x.value<=1)&&e.touchable){var{clientX:i,clientY:r}=t.touches[0];a=i,n=r,l=performance.now(),W=!0,S(),j((()=>{h.value=!0}))}},handleTouchmove:t=>{var{touchable:l,vertical:i}=e;if(W&&l){var r,s,{clientX:u,clientY:v}=t.touches[0];if(((r=Math.abs(u-a))>(s=Math.abs(v-n))&&r>10?"horizontal":s>r&&s>10?"vertical":void 0)===(i?"vertical":"horizontal")){t.preventDefault();var d=void 0!==o?u-o:0,h=void 0!==c?v-c:0;o=u,c=v,m.value+=i?h:d,e.loop&&(m.value>=0&&k(x.value-1).setTranslate(-f.value),m.value<=-(f.value-p.value)&&k(0).setTranslate(f.value),m.value>-(f.value-p.value)&&m.value<0&&(k(x.value-1).setTranslate(0),k(0).setTranslate(0)))}}},handleTouchend:()=>{if(W){var{vertical:t,onChange:i}=e,r=t?c<n:o<a,s=t?Math.abs(n-c):Math.abs(a-o),u=performance.now()-l<=250&&s>=20?y(r?g.value+1:g.value-1):y();W=!1,h.value=!1,o=void 0,c=void 0,m.value=u*-p.value;var v=g.value;g.value=(a=>{var{loop:n}=e;return-1===a?n?x.value-1:0:a===x.value?n?0:x.value-1:a})(u),I(),v!==g.value&&(null==i||i(g.value))}},next:C,prev:Z,to:e=>{if(!(x.value<=1||e===g.value)){var a=(e=(e=e<0?0:e)>=x.value?x.value:e)>g.value?C:Z;Array.from({length:Math.abs(e-g.value)}).forEach(a)}},resize:T,toNumber:u.He}}});var v=n(6062),p=n.n(v),d=n(9646);p()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,c.render=function(e,a,n,i,r,s){return(0,t.wg)(),(0,t.j4)("div",l,[(0,t.Wm)("div",{class:["var-swipe__track",[e.vertical?"var-swipe--vertical":null]],style:{width:e.vertical?null:"".concat(e.trackSize,"px"),height:e.vertical?"".concat(e.trackSize,"px"):null,transform:"translate".concat(e.vertical?"Y":"X","(").concat(e.translate,"px)"),transitionDuration:e.lockDuration?"0ms":"".concat(e.toNumber(e.duration),"ms")},onTouchstart:a[1]||(a[1]=(...a)=>e.handleTouchstart&&e.handleTouchstart(...a)),onTouchmove:a[2]||(a[2]=(...a)=>e.handleTouchmove&&e.handleTouchmove(...a)),onTouchend:a[3]||(a[3]=(...a)=>e.handleTouchend&&e.handleTouchend(...a))},[(0,t.WI)(e.$slots,"default")],38),(0,t.WI)(e.$slots,"indicator",{index:e.index,length:e.length},(()=>[e.indicator&&e.length?((0,t.wg)(),(0,t.j4)("div",{key:0,class:["var-swipe__indicators",[e.vertical?"var-swipe--indicators-vertical":null]]},[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.length,((a,n)=>((0,t.wg)(),(0,t.j4)("div",{class:["var-swipe__indicator",[e.index===n?"var-swipe--indicator-active":null,e.vertical?"var-swipe--indicator-vertical":null]],style:{background:e.indicatorColor},key:a,onClick:a=>e.to(n)},null,14,["onClick"])))),128))],2)):(0,t.kq)("v-if",!0)]))],512)};const f=c;f.install=function(e){e.component(f.name,f)};const m=f},3449:(e,a,n)=>{"use strict";n.d(a,{N:()=>t});var t={loop:{type:Boolean,default:!0},autoplay:{type:[String,Number]},duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},indicator:{type:Boolean,default:!0},indicatorColor:{type:String},vertical:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},onChange:{type:Function}}},4274:(e,a,n)=>{"use strict";n.d(a,{AV:()=>l,IC:()=>i,bB:()=>r});var t=n(9838),l=Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"),i=Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");function r(){var{childProviders:e,bindChildren:a}=(0,t.$E)(l),{length:n}=(0,t.nN)(i);return{length:n,swipeItems:e,bindSwipeItems:a}}},8947:(e,a,n)=>{"use strict";n.d(a,{Z:()=>i});var t=n(2609),l=n.n(t)()((function(e){return e[1]}));l.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-swipe-item {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n}\n",""]);const i=l},9646:(e,a,n)=>{"use strict";n.d(a,{Z:()=>i});var t=n(2609),l=n.n(t)()((function(e){return e[1]}));l.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --swipe-indicator-color: #fff;\n  --swipe-indicators-offset: 10px;\n  --swipe-indicator-offset: 4px;\n}\n.var-swipe {\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.var-swipe__track {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  transition-property: transform;\n}\n.var-swipe__indicators {\n  position: absolute;\n  display: flex;\n  bottom: var(--swipe-indicators-offset);\n  left: 50%;\n  transform: translateX(-50%);\n}\n.var-swipe__indicator {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--swipe-indicator-color);\n  opacity: 0.3;\n  margin: 0 var(--swipe-indicator-offset);\n  transition: opacity 0.3s;\n}\n.var-swipe--vertical {\n  flex-direction: column;\n}\n.var-swipe--indicators-vertical {\n  flex-direction: column;\n  left: var(--swipe-indicators-offset);\n  bottom: 50%;\n  transform: translateY(50%);\n}\n.var-swipe--indicator-active {\n  opacity: 1;\n}\n.var-swipe--indicator-vertical {\n  margin: var(--swipe-indicator-offset) 0;\n}\n",""]);const i=l},1262:(e,a,n)=>{"use strict";n.d(a,{Z:()=>i});var t=n(2609),l=n.n(t)()((function(e){return e[1]}));l.push([e.id,".swipe[data-v-d7f2ff38] {\n  height: 160px;\n}\n.swipe-item[data-v-d7f2ff38] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  pointer-events: none;\n}\n.space[data-v-d7f2ff38] {\n  height: 20px;\n}\n.indicators[data-v-d7f2ff38] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 4px 0;\n  color: #fff;\n  font-size: 14px;\n  background: rgba(0, 0, 0, 0.6);\n}\n",""]);const i=l},2026:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>$});var t=n(7875),l=n(349),i=(0,t.HX)("data-v-d7f2ff38");(0,t.dD)("data-v-d7f2ff38");var r=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1),s=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1),o=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1),u=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1),c=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1),v=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1),p=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1),d=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1),f=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1),m=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1),h=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1),g=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1),w=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1),b=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1),x=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1),W=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1),_=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1),k=(0,t.Wm)("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1),y={class:"indicators"},z=(0,t.Wm)("div",{class:"space"},null,-1);(0,t.Cn)();var j=i(((e,a,n,j,I,S)=>{var T=(0,t.up)("app-type"),C=(0,t.up)("var-swipe-item"),Z=(0,t.up)("var-swipe");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)(T,null,{default:i((()=>[(0,t.Uk)((0,l.zw)(j.pack.basicUsage),1)])),_:1}),(0,t.Wm)(Z,{class:"swipe",ref:"swipe"},{default:i((()=>[(0,t.Wm)(C,null,{default:i((()=>[r])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[s])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[o])),_:1})])),_:1},512),(0,t.Wm)(T,null,{default:i((()=>[(0,t.Uk)((0,l.zw)(j.pack.forbidLoop),1)])),_:1}),(0,t.Wm)(Z,{class:"swipe",loop:!1},{default:i((()=>[(0,t.Wm)(C,null,{default:i((()=>[u])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[c])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[v])),_:1})])),_:1}),(0,t.Wm)(T,null,{default:i((()=>[(0,t.Uk)((0,l.zw)(j.pack.autoplay),1)])),_:1}),(0,t.Wm)(Z,{class:"swipe",autoplay:2e3},{default:i((()=>[(0,t.Wm)(C,null,{default:i((()=>[p])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[d])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[f])),_:1})])),_:1}),(0,t.Wm)(T,null,{default:i((()=>[(0,t.Uk)((0,l.zw)(j.pack.vertical),1)])),_:1}),(0,t.Wm)(Z,{class:"swipe",vertical:""},{default:i((()=>[(0,t.Wm)(C,null,{default:i((()=>[m])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[h])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[g])),_:1})])),_:1}),(0,t.Wm)(T,null,{default:i((()=>[(0,t.Uk)((0,l.zw)(j.pack.handleChange),1)])),_:1}),(0,t.Wm)(Z,{class:"swipe",onChange:j.Snackbar},{default:i((()=>[(0,t.Wm)(C,null,{default:i((()=>[w])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[b])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[x])),_:1})])),_:1},8,["onChange"]),(0,t.Wm)(T,null,{default:i((()=>[(0,t.Uk)((0,l.zw)(j.pack.customIndicator),1)])),_:1}),(0,t.Wm)(Z,{class:"swipe"},{default:i((()=>[(0,t.Wm)(C,null,{default:i((()=>[W])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[_])),_:1}),(0,t.Wm)(C,null,{default:i((()=>[k])),_:1})])),indicator:i((({index:e,length:a})=>[(0,t.Wm)("div",y,(0,l.zw)(e+1)+" / "+(0,l.zw)(a),1)])),_:1}),z],64)})),I=n(7669),S=n(8331),T=n(9524),C=n(6544),Z=n(8732),H=n(7245),E=n(4186),{add:U,use:N,pack:Y,packs:B,merge:P}=(0,E.bU)(),M=e=>{(0,E.D$)(e),N(e)};(0,E.IH)("zh-CN",Z.Z),(0,E.IH)("en-US",H.Z),U("zh-CN",{basicUsage:"基本使用",forbidLoop:"禁止循环轮播",autoplay:"开启自动播放",vertical:"垂直轮播",handleChange:"监听切换",customIndicator:"自定义指示器"}),U("en-US",{basicUsage:"Basic Usage",forbidLoop:"Forbid Loop",autoplay:"Autoplay",vertical:"Vertical Swipe",handleChange:"Handle Change",customIndicator:"Custom Indicator"});var X=n(6125);const D={name:"SwipeExample",components:{[I.Z.name]:I.Z,[S.Z.name]:S.Z,AppType:T.Z},setup:()=>((0,X.jS)(M),{pack:Y,Snackbar:C.ZP})};var A=n(6062),L=n.n(A),V=n(1262);L()(V.Z,{insert:"head",singleton:!1}),V.Z.locals,D.render=j,D.__scopeId="data-v-d7f2ff38";const $=D}}]);