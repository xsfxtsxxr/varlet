import{S as p}from"./index.15373d88.js";import{u as w}from"./provide.d9f8a785.js";import{_ as I}from"./elevation.42ce02b4.js";import{q as C,r as g,y as f,d as S,o as y,k as T,w as x,B}from"./vendor.7d218dee.js";const $={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},"onUpdate:active":{type:Function}};const j=C({name:"VarTabsItems",components:{[p.name]:p},props:$,setup(e){const r=g(null),{tabItemList:n,bindTabItem:l,length:d}=w(),u=t=>n.find(({name:a})=>t===a.value),i=t=>n.find(({index:a})=>t===a.value),h=t=>u(t)||i(t),m=t=>{var o;const a=h(t);!a||(n.forEach(({setCurrent:s})=>s(!1)),a.setCurrent(!0),(o=r.value)==null||o.to(a.index.value))},b=t=>{var s,v;const a=n.find(({index:_})=>_.value===t),o=(s=a.name.value)!=null?s:a.index.value;(v=e["onUpdate:active"])==null||v.call(e,o)};return l({}),f(()=>e.active,m),f(()=>d.value,()=>m(e.active)),{swipe:r,handleSwipeChange:b}}});function k(e,r,n,l,d,u){const i=S("var-swipe");return y(),T(i,{class:"var-tabs-items",ref:"swipe",loop:e.loop,touchable:e.canSwipe,indicator:!1,onChange:e.handleSwipeChange},{default:x(()=>[B(e.$slots,"default")]),_:3},8,["loop","touchable","onChange"])}var c=I(j,[["render",k]]);c.install=function(e){e.component(c.name,c)};export{c as T};