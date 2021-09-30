import{A as V}from"./AppType.2d728c69.js";import{e as P,r as R}from"./elements.412991f3.js";import{t as A,p as q}from"./shared.5973ad73.js";import{_ as B}from"./elevation.42ce02b4.js";import{q as L,r as i,y as O,o as D,c as E,B as W,$ as X,a0 as Y,l,t as n,d as k,a as s,h as a,w as r,F as G,W as J,X as K}from"./vendor.7d218dee.js";import{S as Q}from"./index.ee287742.js";import{B as N}from"./index.743d106c.js";import{u as Z,a as M,_ as ee,b as te,c as oe,w as ae}from"./en-US.c590db11.js";import"./index.c3bfc59b.js";import"./index.728f5949.js";import"./zIndex.52d284ff.js";import"./index.40559b3e.js";import"./components.81bffda1.js";import"./lock.0e62da87.js";const ne={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const x=1e3,F=60*x,b=60*F,U=24*b,se=L({name:"VarCountdown",props:ne,setup(e){const o=i(0),u=i(!1),t=i(""),C=i(0),w=i(0),c=i({}),d=p=>{var j;const v=Math.floor(p/U),y=Math.floor(p%U/b),S=Math.floor(p%b/F),_=Math.floor(p%F/x),I=Math.floor(p%x),T={days:v,hours:y,minutes:S,seconds:_,milliseconds:I};c.value=T,(j=e.onChange)==null||j.call(e,c.value),t.value=q(e.format,T)},f=()=>{const{time:p,onEnd:v,autoStart:y}=e,S=Date.now();o.value||(o.value=S+A(p));let _=o.value-S;if(_<0&&(_=0),w.value=_,d(_),_===0){v==null||v();return}(y||u.value)&&(C.value=R(f))},m=()=>{u.value||(u.value=!0,o.value=Date.now()+(w.value||A(e.time)),f())},z=()=>{u.value=!1},g=()=>{o.value=0,u.value=!1,P(C.value),f()};return O(()=>e.time,()=>g(),{immediate:!0}),{showTime:t,timeData:c,start:m,pause:z,reset:g}}}),ue={class:"var-countdown"};function ce(e,o,u,t,C,w){return D(),E("div",ue,[W(e.$slots,"default",X(Y(e.timeData)),()=>[l(n(e.showTime),1)])])}var h=B(se,[["render",ce]]);h.install=function(e){e.component(h.name,h)};var le={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},re={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"};const{add:H,use:me,pack:ie,packs:Ue,merge:He}=Z(),de=e=>{oe(e),me(e)};M("zh-CN",ee);M("en-US",te);H("zh-CN",le);H("en-US",re);const fe={name:"CountdownExample",components:{[h.name]:h,[N.name]:N,AppType:V},setup(){const e=i(null),o=i(3e3),u=()=>{Q.info("end!")},t=()=>{};return ae(de),{time:o,pack:ie,end:u,countdown:e,change:t}}},$=e=>(J("data-v-caa2d80e"),e=e(),K(),e),pe={class:"block"},_e=$(()=>s("span",{class:"colon"},":",-1)),ve={class:"block"},he=$(()=>s("span",{class:"colon"},":",-1)),Ce={class:"block"},we={class:"btn-container"};function Se(e,o,u,t,C,w){const c=k("app-type"),d=k("var-countdown"),f=k("var-button");return D(),E(G,null,[s("div",null,[a(c,null,{default:r(()=>[l(n(t.pack.basicUsage),1)]),_:1}),a(d,{time:"108000000"})]),s("div",null,[a(c,null,{default:r(()=>[l(n(t.pack.customFormat),1)]),_:1}),a(d,{time:"108000000",format:t.pack.format},null,8,["format"])]),s("div",null,[a(c,null,{default:r(()=>[l(n(t.pack.showMillisecond),1)]),_:1}),a(d,{time:"108000000",format:"HH : mm : ss : SS"})]),s("div",null,[a(c,null,{default:r(()=>[l(n(t.pack.customStyle),1)]),_:1}),a(d,{time:"108000000"},{default:r(m=>[s("span",pe,n(m.hours),1),_e,s("span",ve,n(m.minutes),1),he,s("span",Ce,n(m.seconds),1)]),_:1})]),s("div",null,[a(c,null,{default:r(()=>[l(n(t.pack.manualControl),1)]),_:1}),a(d,{time:t.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:t.end,onChange:t.change},null,8,["time","onEnd","onChange"]),s("div",we,[a(f,{type:"primary",onClick:o[0]||(o[0]=m=>e.$refs.countdown.start())},{default:r(()=>[l(n(t.pack.startText),1)]),_:1}),a(f,{onClick:o[1]||(o[1]=m=>e.$refs.countdown.pause())},{default:r(()=>[l(n(t.pack.pauseText),1)]),_:1}),a(f,{onClick:o[2]||(o[2]=m=>e.$refs.countdown.reset())},{default:r(()=>[l(n(t.pack.resetText),1)]),_:1})])])],64)}var $e=B(fe,[["render",Se],["__scopeId","data-v-caa2d80e"]]);export{$e as default};