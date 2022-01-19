import{_ as y}from"./elevation.49b7c3d2.js";import{d as z,r as m,x as E,S as V,o as d,c as u,a as S,G as _,n as A,h as C,p as w,m as l,t as n,e as f,f as N,i as o,j as a,F as D,Z as I,_ as P,k as U,w as M,l as Y}from"./vendor.efca09d3.js";import{I as G}from"./index.6e97e0ec.js";import{A as O}from"./AppType.e6037b59.js";import{R as Z}from"./index.b50b8baf.js";import{S as F}from"./index.9545ea2c.js";import{M as q}from"./index.809864c7.js";import{B as H}from"./index.91fedec9.js";import{C as J}from"./index.de751d72.js";import{d as K}from"./index.77fe3760.js";import{u as Q,a as T,_ as W,b as X,c as $}from"./en-US.f8762106.js";import{w as tt,a as et}from"./utils.77a9ee56.js";import"./shared.61f3a471.js";import"./elements.78a8f643.js";import"./index.45528475.js";import"./index.6a5b4e65.js";import"./zIndex.2548bfbd.js";import"./components.7ab0cf36.js";import"./lock.363e6814.js";function ot(t){return["left","center","right"].includes(t)}const at={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:ot},elevation:{type:Boolean,default:!0}};const lt=z({name:"VarAppBar",props:at,setup(t,{slots:i}){const r=m(),e=m(),c=()=>{r.value=i.left?0:void 0,e.value=i.right?0:void 0};return E(c),V(c),{paddingLeft:r,paddingRight:e}}}),nt={class:"var-app-bar__left"},it={key:0,class:"var-app-bar__title"},st={class:"var-app-bar__right"};function rt(t,i,r,e,c,B){return d(),u("div",{class:w(["var-app-bar",{"var-elevation--3":t.elevation}]),style:A({background:t.color,color:t.textColor})},[S("div",nt,[_(t.$slots,"left"),t.titlePosition==="left"?(d(),u("div",{key:0,class:"var-app-bar__title",style:A({paddingLeft:t.paddingLeft})},[_(t.$slots,"default",{},()=>[l(n(t.title),1)])],4)):C("v-if",!0)]),t.titlePosition==="center"?(d(),u("div",it,[_(t.$slots,"default",{},()=>[l(n(t.title),1)])])):C("v-if",!0),S("div",st,[t.titlePosition==="right"?(d(),u("div",{key:0,class:"var-app-bar__title",style:A({paddingRight:t.paddingRight})},[_(t.$slots,"default",{},()=>[l(n(t.title),1)])],4)):C("v-if",!0),_(t.$slots,"right")])],6)}var b=y(lt,[["render",rt]]);b.install=function(t){t.component(b.name,b)};var dt={basicAppBar:"\u57FA\u7840\u5BFC\u822A\u680F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",addSlotsAtTitle:"\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD",addTheTitleFromTheSlot:"\u4ECE\u63D2\u69FD\u5904\u6DFB\u52A0\u6807\u9898",addLeftSlot:"\u6DFB\u52A0\u5DE6\u4FA7\u63D2\u69FD",title:"\u6807\u9898",addRightSlot:"\u6DFB\u52A0\u53F3\u4FA7\u63D2\u69FD",addLeftAndRightSlot:"\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD",options1:"\u9009\u9879\u4E00",options2:"\u9009\u9879\u4E8C",search:"\u641C\u7D22",goBack:"\u8FD4\u56DE"},ct={basicAppBar:"Basic AppBar",customStyle:"Custom Style",addSlotsAtTitle:"Add Slots At Title",addTheTitleFromTheSlot:"Add The Title From The Slot",addLeftSlot:"Add Left Slot",title:"Title",addRightSlot:"Add Right Slot",addLeftAndRightSlot:"Add Left And Right Slot",options1:"options1",options2:"options2",search:"search",goBack:"Go Back"};const{add:j,use:pt,pack:v,packs:wt,merge:Nt}=Q(),ut=t=>{$(t),pt(t)};T("zh-CN",W);T("en-US",X);j("zh-CN",dt);j("en-US",ct);const ft={name:"AppBarExample",directives:{Ripple:Z},components:{VarAppBar:b,VarIcon:G,VarMenu:q,VarButton:H,VarCell:J,AppType:O},setup(){const t=m(!1),i=m([]),r=m("#fff"),e=()=>{F({content:v.value.search,position:"top"})},c=()=>{F({content:v.value.goBack,position:"top"})},B=()=>{i.value=[{label:v.value.options1,value:"menu1"},{label:v.value.options2,value:"menu2"}],t.value=!0};return tt(s=>{ut(s),t.value=!1}),et(K,s=>{r.value=s==="darkThemes"?"#272727":"#fff"}),{offsetY:t,bgColor:r,menuList:i,pack:v,searchData:e,goBack:c,changeOffset:B}}},mt=t=>(I("data-v-5707b37e"),t=t(),P(),t),_t=mt(()=>S("div",{class:"space"},null,-1));function vt(t,i,r,e,c,B){const s=f("app-type"),p=f("var-app-bar"),h=f("var-icon"),g=f("var-button"),x=f("var-cell"),L=f("var-menu"),R=N("ripple");return d(),u(D,null,[o(s,null,{default:a(()=>[l(n(e.pack.basicAppBar),1)]),_:1}),o(p,{title:e.pack.title},null,8,["title"]),o(s,null,{default:a(()=>[l(n(e.pack.customStyle),1)]),_:1}),o(p,{title:e.pack.title,"title-position":"center",color:"#ff9f00"},null,8,["title"]),o(s,null,{default:a(()=>[l(n(e.pack.addSlotsAtTitle),1)]),_:1}),o(p,null,{default:a(()=>[l(n(e.pack.addTheTitleFromTheSlot),1)]),_:1}),o(s,null,{default:a(()=>[l(n(e.pack.addLeftSlot),1)]),_:1}),o(p,{title:e.pack.title,"title-position":"center"},{left:a(()=>[o(g,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.goBack},{default:a(()=>[o(h,{name:"chevron-left",size:24})]),_:1},8,["onClick"])]),_:1},8,["title"]),o(s,null,{default:a(()=>[l(n(e.pack.addRightSlot),1)]),_:1}),o(p,{title:e.pack.title},{right:a(()=>[o(g,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.searchData},{default:a(()=>[o(h,{name:"magnify",size:24})]),_:1},8,["onClick"])]),_:1},8,["title"]),o(s,null,{default:a(()=>[l(n(e.pack.addLeftAndRightSlot),1)]),_:1}),o(p,{title:e.pack.title},{left:a(()=>[o(g,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.goBack},{default:a(()=>[o(h,{name:"chevron-left",size:24})]),_:1},8,["onClick"])]),right:a(()=>[o(L,{"offset-y":42,"offset-x":-20,show:e.offsetY,"onUpdate:show":i[0]||(i[0]=k=>e.offsetY=k)},{menu:a(()=>[S("div",{class:"menu-list",style:A({background:e.bgColor})},[(d(!0),u(D,null,U(e.menuList,k=>M((d(),Y(x,{class:"menu-cell",key:k.value},{default:a(()=>[l(n(k.label),1)]),_:2},1536)),[[R]])),128))],4)]),default:a(()=>[o(g,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.changeOffset},{default:a(()=>[o(h,{name:"menu",size:24})]),_:1},8,["onClick"])]),_:1},8,["show"])]),_:1},8,["title"]),_t],64)}var It=y(ft,[["render",vt],["__scopeId","data-v-5707b37e"]]);export{It as default};
