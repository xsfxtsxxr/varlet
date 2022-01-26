import{A as I}from"./AppType.78e3bbda.js";import{d as V,r as P}from"./elements.32433021.js";import{t as A,p as R}from"./shared.17f26706.js";import{_ as B}from"./elevation.6f443b25.js";import{d as L,r as m,y as O,o as D,c as E,G as q,a0 as G,a1 as Y,m as l,t as n,e as b,a as s,i as a,j as c,F as Z,Z as J,_ as K}from"./vendor.efca09d3.js";import{S as Q}from"./index.ee8b3109.js";import{B as W}from"./index.922fa206.js";import{d as X}from"./index.9b1139e6.js";import{u as tt,a as M,_ as et,b as ot,c as at}from"./en-US.f8762106.js";import{w as nt,a as st}from"./utils.5a4067e3.js";import"./index.a7398902.js";import"./index.45a1600c.js";import"./zIndex.2548bfbd.js";import"./index.45528475.js";import"./components.2dc8f096.js";import"./lock.363e6814.js";import"./index.b50b8baf.js";const ut={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const k=1e3,x=60*k,F=60*x,N=24*F,rt=L({name:"VarCountdown",props:ut,setup(t){const o=m(0),u=m(!1),e=m(""),h=m(0),C=m(0),r=m({days:0,hours:0,minutes:0,seconds:0,milliseconds:0}),d=p=>{var T;const v=Math.floor(p/N),y=Math.floor(p%N/F),w=Math.floor(p%F/x),_=Math.floor(p%x/k),z=Math.floor(p%k),j={days:v,hours:y,minutes:w,seconds:_,milliseconds:z};r.value=j,(T=t.onChange)==null||T.call(t,r.value),e.value=R(t.format,j)},f=()=>{const{time:p,onEnd:v,autoStart:y}=t,w=Date.now();o.value||(o.value=w+A(p));let _=o.value-w;if(_<0&&(_=0),C.value=_,d(_),_===0){v==null||v();return}(y||u.value)&&(h.value=P(f))},i=()=>{u.value||(u.value=!0,o.value=Date.now()+(C.value||A(t.time)),f())},$=()=>{u.value=!1},g=()=>{o.value=0,u.value=!1,V(h.value),f()};return O(()=>t.time,()=>g(),{immediate:!0}),{showTime:e,timeData:r,start:i,pause:$,reset:g}}}),lt={class:"var-countdown"};function ct(t,o,u,e,h,C){return D(),E("div",lt,[q(t.$slots,"default",G(Y(t.timeData)),()=>[l(n(t.showTime),1)])])}var S=B(rt,[["render",ct]]);S.install=function(t){t.component(S.name,S)};var it={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},mt={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"};const{add:U,use:dt,pack:ft,packs:Vt,merge:Pt}=tt(),pt=t=>{at(t),dt(t)};M("zh-CN",et);M("en-US",ot);U("zh-CN",it);U("en-US",mt);const _t={name:"CountdownExample",components:{VarCountdown:S,VarButton:W,AppType:I},setup(){const t=m(null),o=m(3e3),u=()=>{Q.info("end!")},e=()=>{console.log("change")};return nt(pt),st(X),{time:o,pack:ft,end:u,countdown:t,change:e}}},H=t=>(J("data-v-4f9fa9e9"),t=t(),K(),t),vt={class:"block"},ht=H(()=>s("span",{class:"colon"},":",-1)),Ct={class:"block"},wt=H(()=>s("span",{class:"colon"},":",-1)),St={class:"block"},yt={class:"btn-container"};function bt(t,o,u,e,h,C){const r=b("app-type"),d=b("var-countdown"),f=b("var-button");return D(),E(Z,null,[s("div",null,[a(r,null,{default:c(()=>[l(n(e.pack.basicUsage),1)]),_:1}),a(d,{time:"108000000"})]),s("div",null,[a(r,null,{default:c(()=>[l(n(e.pack.customFormat),1)]),_:1}),a(d,{time:"108000000",format:e.pack.format},null,8,["format"])]),s("div",null,[a(r,null,{default:c(()=>[l(n(e.pack.showMillisecond),1)]),_:1}),a(d,{time:"108000000",format:"HH : mm : ss : SS"})]),s("div",null,[a(r,null,{default:c(()=>[l(n(e.pack.customStyle),1)]),_:1}),a(d,{time:"108000000"},{default:c(i=>[s("span",vt,n(i.hours),1),ht,s("span",Ct,n(i.minutes),1),wt,s("span",St,n(i.seconds),1)]),_:1})]),s("div",null,[a(r,null,{default:c(()=>[l(n(e.pack.manualControl),1)]),_:1}),a(d,{time:e.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:e.end,onChange:e.change},null,8,["time","onEnd","onChange"]),s("div",yt,[a(f,{type:"primary",onClick:o[0]||(o[0]=i=>t.$refs.countdown.start())},{default:c(()=>[l(n(e.pack.startText),1)]),_:1}),a(f,{onClick:o[1]||(o[1]=i=>t.$refs.countdown.pause())},{default:c(()=>[l(n(e.pack.pauseText),1)]),_:1}),a(f,{onClick:o[2]||(o[2]=i=>t.$refs.countdown.reset())},{default:c(()=>[l(n(e.pack.resetText),1)]),_:1})])])],64)}var Rt=B(_t,[["render",bt],["__scopeId","data-v-4f9fa9e9"]]);export{Rt as default};
