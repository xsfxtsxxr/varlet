(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[9215],{7245:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"}},4186:(e,a,t)=>{"use strict";t.d(a,{bU:()=>c,P2:()=>d,IH:()=>l,D$:()=>u});var n=t(641),r=t(8732);function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(){var e={},a=(0,n.iH)({}),t=t=>{if(!e[t])return console.warn("The ".concat(t," does not exist. You can mount a language package using the add method")),{};a.value=e[t]};return{packs:e,pack:a,add:(a,t)=>{t.lang=a,e[a]=t},use:t,merge:(a,n)=>{e[a]?(e[a]=o(o({},e[a]),n),t(a)):console.warn("The ".concat(a," does not exist. You can mount a language package using the add method"))}}}var{packs:s,pack:d,add:l,use:u,merge:b}=c();l("zh-CN",r.Z),u("zh-CN")},8732:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"}},4268:(e,a,t)=>{"use strict";t.d(a,{vF:()=>o,cx:()=>p,vj:()=>c,IS:()=>s,UD:()=>d,R6:()=>u,xj:()=>b,Ak:()=>x,I:()=>v,uA:()=>w,gI:()=>g,U7:()=>f,Wx:()=>k,xX:()=>S,X5:()=>T,ez:()=>j});var n=t(8442);function r(e,a,t,n,r,i,o){try{var p=e[i](o),c=p.value}catch(e){return void t(e)}p.done?a(c):Promise.resolve(c).then(n,r)}function i(e){return function(){var a=this,t=arguments;return new Promise((function(n,i){var o=e.apply(a,t);function p(e){r(o,n,i,p,c,"next",e)}function c(e){r(o,n,i,p,c,"throw",e)}p(void 0)}))}}function o(e){var{top:a}=e.getBoundingClientRect();return a+(document.body.scrollTop||document.documentElement.scrollTop)}function p(e){var a="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(a,0)}function c(e){var a="scrollLeft"in e?e.scrollLeft:e.pageXOffset;return Math.max(a,0)}function s(e){var{left:a}=e.getBoundingClientRect();return a+(document.body.scrollLeft||document.documentElement.scrollLeft)}function d(e){return l.apply(this,arguments)}function l(){return(l=i((function*(e){yield z();var{top:a,bottom:t,left:n,right:r}=e.getBoundingClientRect(),{innerWidth:i,innerHeight:o}=window;return n<=i&&r>=0&&a<=o&&t>=0}))).apply(this,arguments)}function u(e){var{transform:a}=window.getComputedStyle(e);return+a.slice(a.lastIndexOf(",")+2,a.length-1)}function b(e){var{width:a,height:t}=e.getBoundingClientRect();return 0===a&&0===t}function x(e){for(var a=e;a&&a.parentNode&&(a=a.parentNode)!==document.body&&a!==document.documentElement;){var t=/(scroll|auto)/,{overflowY:n,overflow:r}=window.getComputedStyle(a);if(t.test(n)||t.test(r))return a}return window}function v(e){for(var a=[],t=e;t!==window;)t=x(t),a.push(t);return a}var m=e=>(0,n.HD)(e)&&e.endsWith("rem"),h=e=>(0,n.HD)(e)&&e.endsWith("vw"),y=e=>(0,n.HD)(e)&&e.endsWith("vh"),w=e=>{if((0,n.hj)(e))return e;if((e=>(0,n.HD)(e)&&e.endsWith("px")||(0,n.hj)(e))(e))return+e.replace("px","");if(h(e))return+e.replace("vw","")*window.innerWidth/100;if(y(e))return+e.replace("vh","")*window.innerHeight/100;if(m(e)){var a=+e.replace("rem",""),t=window.getComputedStyle(document.documentElement).fontSize;return a*parseFloat(t)}return(0,n.HD)(e)?(0,n.He)(e):0},g=e=>null==e?null:(e=>(0,n.HD)(e)&&e.endsWith("%"))(e)||h(e)||y(e)||m(e)?e:"".concat(w(e),"px");function f(e){return window.requestAnimationFrame?window.requestAnimationFrame(e):window.setTimeout(e,16)}function k(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.clearTimeout(e)}function S(e){f((()=>{f(e)}))}function z(){return new Promise((e=>{f((()=>{f(e)}))}))}function T(e,{top:a=0,left:t=0,duration:n=300,animation:r}){var i=Date.now(),o=p(e),s=c(e);return new Promise((p=>{var c=()=>{var d=(Date.now()-i)/n;if(d<1){var l=o+(a-o)*r(d),u=s+(t-s)*r(d);e.scrollTo(u,l),f(c)}else e.scrollTo(t,a),p()};f(c)}))}function j(e){return Object.entries(e).reduce(((e,[a,t])=>(e[a.startsWith("--")?a:"--".concat((0,n.GL)(a))]=t,e)),{})}},8442:(e,a,t)=>{"use strict";t.d(a,{He:()=>n,QM:()=>r,MW:()=>i,HD:()=>o,Bl:()=>p,hj:()=>c,PO:()=>s,kJ:()=>d,PX:()=>l,xb:()=>u,cl:()=>b,P2:()=>x,Df:()=>v,GE:()=>m,qb:()=>y,Ou:()=>w,dt:()=>g,_f:()=>f,jj:()=>k,GL:()=>S});var n=e=>null==e?0:o(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e):p(e)?Number(e):e,r=e=>e.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg)$/.test(e),i=e=>e.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(e),o=e=>"string"==typeof e,p=e=>"boolean"==typeof e,c=e=>"number"==typeof e,s=e=>"[object Object]"===Object.prototype.toString.call(e),d=e=>Array.isArray(e),l=e=>/^(http)|(\.*\/)/.test(e),u=e=>null==e||""===e||Array.isArray(e)&&!e.length,b=(e,a)=>{if(e.length){var t=e.indexOf(a);if(t>-1)return e.splice(t,1)}},x=(e,a=200)=>{var t,n;return function r(...i){var o=Date.now();n||(n=o),t&&window.clearTimeout(t),o-n>=a?(e.apply(this,i),n=o):t=window.setTimeout((()=>{r.apply(this,i)}),50)}},v=e=>{var a=[];return{cache:a,has(e){return this.cache.includes(e)},add(t){this.has(t)||(this.cache.length===e&&a.shift(),this.cache.push(t))},remove(e){this.has(e)&&b(this.cache,e)},clear(){this.cache.length=0}}},m=e=>e,h=e=>Math.pow(e,3),y=e=>e<.5?h(2*e)/2:1-h(2*(1-e))/2;function w(e,a){var t=Object.values(a),n=[24,60,60,1e3];if(["DD","HH","mm","ss"].forEach(((a,r)=>{e.includes(a)?e=e.replace(a,String(t[r]).padStart(2,"0")):t[r+1]+=t[r]*n[r]})),e.includes("S")){var r=String(t[t.length-1]).padStart(3,"0");e=e.includes("SSS")?e.replace("SSS",r):e.includes("SS")?e.replace("SS",r.slice(0,2)):e.replace("S",r.slice(0,1))}return e}var g=(e,a)=>null==e?a:e,f="undefined"!=typeof window,k=e=>[...new Set(e)];function S(e){var a=/([^-])([A-Z])/g;return e.replace(a,"$1-$2").replace(a,"$1-$2").toLowerCase()}},4452:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var n=t(2609),r=t.n(n)()((function(e){return e[1]}));r.push([e.id,"\n.example[data-v-00033a53] {\n  background: antiquewhite;\n}\n",""]);const i=r},1761:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var n=t(2609),r=t.n(n)()((function(e){return e[1]}));r.push([e.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const i=r},5740:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var n=t(2609),r=t.n(n)()((function(e){return e[1]}));r.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-elevation--0 {\n  box-shadow: 0 0 0 0 var(--shadow-key-umbra-opacity), 0 0 0 0 var(--shadow-key-penumbra-opacity), 0 0 0 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--1 {\n  box-shadow: 0 2px 1px -1px var(--shadow-key-umbra-opacity), 0 1px 1px 0 var(--shadow-key-penumbra-opacity), 0 1px 3px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--2 {\n  box-shadow: 0 3px 1px -2px var(--shadow-key-umbra-opacity), 0 2px 2px 0 var(--shadow-key-penumbra-opacity), 0 1px 5px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--3 {\n  box-shadow: 0 3px 3px -2px var(--shadow-key-umbra-opacity), 0 3px 4px 0 var(--shadow-key-penumbra-opacity), 0 1px 8px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--4 {\n  box-shadow: 0 2px 4px -1px var(--shadow-key-umbra-opacity), 0 4px 5px 0 var(--shadow-key-penumbra-opacity), 0 1px 10px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--5 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 5px 8px 0 var(--shadow-key-penumbra-opacity), 0 1px 14px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--6 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 6px 10px 0 var(--shadow-key-penumbra-opacity), 0 1px 18px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--7 {\n  box-shadow: 0 4px 5px -2px var(--shadow-key-umbra-opacity), 0 7px 10px 1px var(--shadow-key-penumbra-opacity), 0 2px 16px 1px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--8 {\n  box-shadow: 0 5px 5px -3px var(--shadow-key-umbra-opacity), 0 8px 10px 1px var(--shadow-key-penumbra-opacity), 0 3px 14px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--9 {\n  box-shadow: 0 5px 6px -3px var(--shadow-key-umbra-opacity), 0 9px 12px 1px var(--shadow-key-penumbra-opacity), 0 3px 16px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--10 {\n  box-shadow: 0 6px 6px -3px var(--shadow-key-umbra-opacity), 0 10px 14px 1px var(--shadow-key-penumbra-opacity), 0 4px 18px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--11 {\n  box-shadow: 0 6px 7px -4px var(--shadow-key-umbra-opacity), 0 11px 15px 1px var(--shadow-key-penumbra-opacity), 0 4px 20px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--12 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 12px 17px 2px var(--shadow-key-penumbra-opacity), 0 5px 22px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--13 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 13px 19px 2px var(--shadow-key-penumbra-opacity), 0 5px 24px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--14 {\n  box-shadow: 0 7px 9px -4px var(--shadow-key-umbra-opacity), 0 14px 21px 2px var(--shadow-key-penumbra-opacity), 0 5px 26px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--15 {\n  box-shadow: 0 8px 9px -5px var(--shadow-key-umbra-opacity), 0 15px 22px 2px var(--shadow-key-penumbra-opacity), 0 6px 28px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--16 {\n  box-shadow: 0 8px 10px -5px var(--shadow-key-umbra-opacity), 0 16px 24px 2px var(--shadow-key-penumbra-opacity), 0 6px 30px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--17 {\n  box-shadow: 0 8px 11px -5px var(--shadow-key-umbra-opacity), 0 17px 26px 2px var(--shadow-key-penumbra-opacity), 0 6px 32px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--18 {\n  box-shadow: 0 9px 11px -5px var(--shadow-key-umbra-opacity), 0 18px 28px 2px var(--shadow-key-penumbra-opacity), 0 7px 34px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--19 {\n  box-shadow: 0 9px 12px -6px var(--shadow-key-umbra-opacity), 0 19px 29px 2px var(--shadow-key-penumbra-opacity), 0 7px 36px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--20 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 20px 31px 3px var(--shadow-key-penumbra-opacity), 0 8px 38px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--21 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 21px 33px 3px var(--shadow-key-penumbra-opacity), 0 8px 40px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--22 {\n  box-shadow: 0 10px 14px -6px var(--shadow-key-umbra-opacity), 0 22px 35px 3px var(--shadow-key-penumbra-opacity), 0 8px 42px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--23 {\n  box-shadow: 0 11px 14px -7px var(--shadow-key-umbra-opacity), 0 23px 36px 3px var(--shadow-key-penumbra-opacity), 0 9px 44px 8px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--24 {\n  box-shadow: 0 11px 15px -7px var(--shadow-key-umbra-opacity), 0 24px 38px 3px var(--shadow-key-penumbra-opacity), 0 9px 46px 8px var(--shadow-key-ambient-opacity);\n}\n.var-ripple {\n  position: absolute;\n  transition: transform 0.2s cubic-bezier(0.68, 0.01, 0.62, 0.6), opacity 0.08s linear;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  opacity: 0;\n  will-change: transform, opacity;\n  pointer-events: none;\n  z-index: 100;\n}\n:root {\n  --card-padding: 0 0 10px 0;\n  --card-border-radius: 4px;\n  --card-image-width: 100%;\n  --card-image-height: 200px;\n  --card-title-color: #333;\n  --card-title-font-size: 20px;\n  --card-title-padding: 0 12px;\n  --card-title-margin: 10px 0 0 0;\n  --card-subtitle-color: rgba(0, 0, 0, 0.6);\n  --card-subtitle-font-size: 14px;\n  --card-subtitle-padding: 0 13px;\n  --card-subtitle-margin: 10px 0 0 0;\n  --card-description-color: rgba(0, 0, 0, 0.6);\n  --card-description-font-size: 14px;\n  --card-description-margin: 20px 0 0 0;\n  --card-description-padding: 0 13px;\n  --card-footer-padding: 0 12px;\n  --card-footer-margin: 30px 0 0px 0;\n  --card-line-height: 22px;\n}\n.var-card {\n  border-radius: var(--card-border-radius);\n  overflow: hidden;\n  padding: var(--card-padding);\n  line-height: var(--card-line-height);\n}\n.var-card__image {\n  width: var(--card-image-width);\n  height: var(--card-image-height);\n  display: block;\n}\n.var-card__title {\n  font-size: var(--card-title-font-size);\n  padding: var(--card-title-padding);\n  margin: var(--card-title-margin);\n  color: var(--card-title-color);\n}\n.var-card__subtitle {\n  font-size: var(--card-subtitle-font-size);\n  color: var(--card-subtitle-color);\n  padding: var(--card-subtitle-padding);\n  margin: var(--card-subtitle-margin);\n}\n.var-card__description {\n  font-size: var(--card-description-font-size);\n  color: var(--card-description-color);\n  margin: var(--card-description-margin);\n  padding: var(--card-description-padding);\n}\n.var-card__footer {\n  padding: var(--card-footer-padding);\n  margin: var(--card-footer-margin);\n}\n",""]);const i=r},9524:(e,a,t)=>{"use strict";t.d(a,{Z:()=>s});var n=t(7875),r={class:"app-type"};const i=(0,n.aZ)({name:"AppType"});var o=t(6062),p=t.n(o),c=t(1761);p()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,i.render=function(e,a,t,i,o,p){return(0,n.wg)(),(0,n.j4)("div",r,[(0,n.WI)(e.$slots,"default")])};const s=i},9215:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>A});var n=t(7875),r=t(349),i=(0,n.HX)("data-v-00033a53"),o=i(((e,a,t,o,p,c)=>{var s=(0,n.up)("app-type"),d=(0,n.up)("var-card"),l=(0,n.up)("var-button");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)(s,null,{default:i((()=>[(0,n.Uk)((0,r.zw)(o.pack.basicUsage),1)])),_:1}),(0,n.Wm)(d,{title:o.pack.title,description:o.pack.description},null,8,["title","description"]),(0,n.Wm)(s,null,{default:i((()=>[(0,n.Uk)((0,r.zw)(o.pack.showSubtitle),1)])),_:1}),(0,n.Wm)(d,{title:o.pack.title,subtitle:o.pack.subtitle,description:o.pack.description},null,8,["title","subtitle","description"]),(0,n.Wm)(s,null,{default:i((()=>[(0,n.Uk)((0,r.zw)(o.pack.showImage),1)])),_:1}),(0,n.Wm)(d,{title:o.pack.title,subtitle:o.pack.subtitle,description:o.pack.description,src:"https://varlet.gitee.io/varlet-ui/cat.jpg"},null,8,["title","subtitle","description"]),(0,n.Wm)(s,null,{default:i((()=>[(0,n.Uk)((0,r.zw)(o.pack.useSlot),1)])),_:1}),(0,n.Wm)(d,{title:o.pack.title,subtitle:o.pack.subtitle,description:o.pack.description,src:"https://varlet.gitee.io/varlet-ui/cat.jpg"},{extra:i((()=>[(0,n.Wm)(l,{type:"primary",style:{"margin-right":"10px"}},{default:i((()=>[(0,n.Uk)((0,r.zw)(o.pack.button),1)])),_:1}),(0,n.Wm)(l,{type:"warning"},{default:i((()=>[(0,n.Uk)((0,r.zw)(o.pack.button),1)])),_:1})])),_:1},8,["title","subtitle","description"]),(0,n.Wm)(s,null,{default:i((()=>[(0,n.Uk)((0,r.zw)(o.pack.showRipple),1)])),_:1}),(0,n.Wm)(d,{title:o.pack.title,subtitle:o.pack.subtitle,description:o.pack.description,ripple:""},null,8,["title","subtitle","description"])],64)})),p=t(9524),c=t(4733),s={key:0,class:"var-card__title"},d={key:0,class:"var-card__subtitle"},l={key:0,class:"var-card__description"},u={key:0,class:"var-card__footer"},b=t(2986),x={src:{type:String},fit:{type:String,validator:function(e){return["fill","contain","cover","none","scale-down"].includes(e)},default:"cover"},height:{type:[String,Number]},alt:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},elevation:{type:[Number,String]},ripple:{type:Boolean,default:!1},onClick:{type:Function}},v=t(4268);const m=(0,n.aZ)({name:"VarCard",directives:{Ripple:b.Z},props:x,setup:()=>({toSizeUnit:v.gI})});var h=t(6062),y=t.n(h),w=t(5740);y()(w.Z,{insert:"head",singleton:!1}),w.Z.locals,m.render=function(e,a,t,i,o,p){var c=(0,n.Q2)("ripple");return(0,n.wy)(((0,n.wg)(),(0,n.j4)("div",{class:["var-card",[e.elevation?"var-elevation--".concat(e.elevation):"var-elevation--2"]],onClick:a[1]||(a[1]=(...a)=>e.onClick&&e.onClick(...a))},[(0,n.WI)(e.$slots,"image",{},(()=>[e.src?((0,n.wg)(),(0,n.j4)("img",{key:0,class:"var-card__image",style:{objectFit:e.fit,height:e.toSizeUnit(e.height)},src:e.src,alt:e.alt},null,12,["src","alt"])):(0,n.kq)("v-if",!0)])),(0,n.WI)(e.$slots,"title",{},(()=>[e.title?((0,n.wg)(),(0,n.j4)("div",s,(0,r.zw)(e.title),1)):(0,n.kq)("v-if",!0)])),(0,n.WI)(e.$slots,"subtitle",{},(()=>[e.subtitle?((0,n.wg)(),(0,n.j4)("div",d,(0,r.zw)(e.subtitle),1)):(0,n.kq)("v-if",!0)])),(0,n.WI)(e.$slots,"description",{},(()=>[e.description?((0,n.wg)(),(0,n.j4)("div",l,(0,r.zw)(e.description),1)):(0,n.kq)("v-if",!0)])),e.$slots.extra?((0,n.wg)(),(0,n.j4)("div",u,[(0,n.WI)(e.$slots,"extra")])):(0,n.kq)("v-if",!0)],2)),[[c,{disabled:!e.ripple}]])};const g=m;g.install=function(e){e.component(g.name,g)};const f=g;var k=t(9947),S=t(8732),z=t(7245),T=t(4186),{add:j,use:_,pack:C,packs:O,merge:W}=(0,T.bU)(),D=e=>{(0,T.D$)(e),_(e)};(0,T.IH)("zh-CN",S.Z),(0,T.IH)("en-US",z.Z),j("zh-CN",{basicUsage:"基本使用",title:"风景",showSubtitle:"显示副标题",subtitle:"公园里的风景",description:"公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。",showImage:"显示图片",useSlot:"使用插槽",button:"添加按钮",showRipple:"水波效果"}),j("en-US",{basicUsage:"Basic Usage",title:"Little Prince",showSubtitle:"Show Subtitlewhere",subtitle:"little prince from",description:"It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me.",showImage:"Show Image",useSlot:"Use Slot",button:"Use Button",showRipple:"Ripple Effect"});var Z=t(6125);const U={name:"CardExample",components:{[f.name]:f,[c.Z.name]:c.Z,AppType:p.Z},setup(){(0,Z.jS)(D);var e=k.Z.touchmoveForbid;return(0,Z.Id)((e=>{"pc"===e&&(k.Z.touchmoveForbid=!1)})),(0,n.Ah)((()=>{k.Z.touchmoveForbid=e})),{pack:C}}};var I=t(4452);y()(I.Z,{insert:"head",singleton:!1}),I.Z.locals,U.render=o,U.__scopeId="data-v-00033a53";const A=U}}]);