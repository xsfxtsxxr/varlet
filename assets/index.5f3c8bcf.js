import{e,f as r}from"./components.fc1d8498.js";import{S as a,a as t}from"./provide.609f1ae4.js";import{_ as s}from"./IconSfc.d1e88af2.js";import{q as i,r as n,o,c as p,O as l,n as c}from"./vendor.bac705d4.js";var d=s(i({name:"VarSwipeItem",setup(){const s=n(0),{swipe:i,bindSwipe:o,index:p}=function(){const{bindParent:s,parentProvider:i}=e(a),{index:n}=r(t);if(!s||!i||!n)throw Error("<var-swipe-item/> must in <var-swipe/>");return{index:n,swipe:i,bindSwipe:s}}(),{size:l,vertical:c}=i;return o({index:p,setTranslate:e=>{s.value=e}}),{size:l,vertical:c,translate:s}}}),[["render",function(e,r,a,t,s,i){return o(),p("div",{class:"var-swipe-item",style:c({width:e.vertical?null:`${e.size}px`,height:e.vertical?`${e.size}px`:null,transform:`translate${e.vertical?"Y":"X"}(${e.translate}px)`})},[l(e.$slots,"default")],4)}]]);d.install=function(e){e.component(d.name,d)};export{d as S};