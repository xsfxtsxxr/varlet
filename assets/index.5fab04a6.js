import{A as m}from"./AppType.78e3bbda.js";import{I as _}from"./index.839d5100.js";import{C as f}from"./index.5696c946.js";import{d as h}from"./index.9b1139e6.js";import{u as k,a as p,_ as w,b as C,c as F}from"./en-US.f8762106.js";import{w as v,a as x}from"./utils.5a4067e3.js";import{_ as b}from"./elevation.6f443b25.js";import{e as d,o as j,c as B,a as s,i as e,j as o,F as U,m as t,t as c}from"./vendor.efca09d3.js";import"./shared.1184922b.js";import"./elements.ce092872.js";var D={basicUsage:"\u57FA\u672C\u4F7F\u7528",showIcon:"\u663E\u793A\u56FE\u6807",showDesc:"\u663E\u793A\u63CF\u8FF0",showBorder:"\u663E\u793A\u8FB9\u6846",content:"\u8FD9\u662F\u5355\u5143\u683C",description:"\u63CF\u8FF0"},N={basicUsage:"Basic Usage",showIcon:"Show Icon",showDesc:"Show Description",showBorder:"Show Border",content:"This is Cell",description:"Description"};const{add:u,use:S,pack:g,packs:R,merge:W}=k(),A=i=>{F(i),S(i)};p("zh-CN",w);p("en-US",C);u("zh-CN",D);u("en-US",N);const I={name:"CellExample",components:{VarIcon:_,VarCell:f,AppType:m},setup(){return v(A),x(h),{pack:g}}};function E(i,y,V,a,z,T){const r=d("app-type"),n=d("var-cell"),l=d("var-icon");return j(),B(U,null,[s("div",null,[e(r,null,{default:o(()=>[t(c(a.pack.basicUsage),1)]),_:1}),e(n,null,{default:o(()=>[t(c(a.pack.content),1)]),_:1}),e(n,null,{default:o(()=>[t(c(a.pack.content),1)]),_:1})]),s("div",null,[e(r,null,{default:o(()=>[t(c(a.pack.showIcon),1)]),_:1}),e(n,{icon:"fire",title:a.pack.content},{extra:o(()=>[e(l,{name:"information"})]),_:1},8,["title"]),e(n,{icon:"fire",title:a.pack.content},{extra:o(()=>[e(l,{name:"information"})]),_:1},8,["title"])]),s("div",null,[e(r,null,{default:o(()=>[t(c(a.pack.showDesc),1)]),_:1}),e(n,{icon:"fire",title:a.pack.content,desc:a.pack.description},{extra:o(()=>[e(l,{name:"information"})]),_:1},8,["title","desc"]),e(n,{title:a.pack.content,desc:a.pack.description},null,8,["title","desc"])]),s("div",null,[e(r,null,{default:o(()=>[t(c(a.pack.showBorder),1)]),_:1}),e(n,{border:""},{default:o(()=>[t(c(a.pack.content),1)]),_:1}),e(n,{border:""},{default:o(()=>[t(c(a.pack.content),1)]),_:1})])],64)}var X=b(I,[["render",E]]);export{X as default};