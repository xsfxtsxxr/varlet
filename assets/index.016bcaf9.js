import{p as G,S as M}from"./index.ff68fa98.js";import{d as Y,r as b,b as l,y as D,x as Q,C as q,T as J,o as H,l as Z,j as x,a as _,p as N,G as I,n as V,H as tt,Q as et,f as at,w as ot,c as it}from"./vendor.efca09d3.js";import{p as nt,c as st,f as rt,b as lt,g as ct}from"./components.57ac5c69.js";import{i as dt,s as W}from"./shared.1184922b.js";import{t as ut,s as F,h as vt}from"./elements.ce092872.js";import{_ as K}from"./elevation.6f443b25.js";import{R as ft}from"./index.b50b8baf.js";function R(t){return["horizontal","vertical"].includes(t)}const bt={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:R},itemDirection:{type:String,default:"horizontal",validator:R},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},offsetTop:nt(G,"offsetTop"),onClick:{type:Function},onChange:{type:Function},"onUpdate:active":{type:Function}},X=Symbol("TABS_BIND_TAB_KEY"),O=Symbol("TABS_COUNT_TAB_KEY");function mt(){const{childProviders:t,bindChildren:o}=st(X),{length:n}=rt(O);return{length:n,tabList:t,bindTabList:o}}const yt=Y({name:"VarTabs",components:{VarSticky:M},inheritAttrs:!1,props:bt,setup(t){const o=b("0px"),n=b("0px"),m=b("0px"),y=b("0px"),i=b(!1),h=b(null),C=l(()=>t.active),z=l(()=>t.activeColor),c=l(()=>t.inactiveColor),S=l(()=>t.disabledColor),$=l(()=>t.itemDirection),{tabList:T,bindTabList:k,length:d}=mt(),g=a=>{var L,j;const e=(L=a.name.value)!=null?L:a.index.value,{active:r,onChange:f,onClick:E}=t;(j=t["onUpdate:active"])==null||j.call(t,e),E==null||E(e),e!==r&&(f==null||f(e))},w=()=>T.find(({name:a})=>t.active===a.value),B=()=>T.find(({index:a})=>t.active===a.value),A=()=>{var e,r;if(d.value===0)return;const{active:a}=t;return dt(a)&&(a>d.value-1?(e=t["onUpdate:active"])==null||e.call(t,d.value-1):(r=t["onUpdate:active"])==null||r.call(t,0)),B()},u=()=>{i.value=T.length>=5},v=({element:a})=>{const e=a.value;t.layoutDirection==="horizontal"?(o.value=`${e==null?void 0:e.offsetWidth}px`,m.value=`${e==null?void 0:e.offsetLeft}px`):(n.value=`${e==null?void 0:e.offsetHeight}px`,y.value=`${e==null?void 0:e.offsetTop}px`)},p=({element:a})=>{if(!i.value)return;const e=h.value,r=a.value;if(t.layoutDirection==="horizontal"){const f=r.offsetLeft+r.offsetWidth/2-e.offsetWidth/2;F(e,{left:f,animation:W})}else{const f=r.offsetTop+r.offsetHeight/2-e.offsetHeight/2;F(e,{top:f,animation:W})}},s=()=>{const a=w()||B()||A();!a||a.disabled.value||(u(),v(a),p(a))};return k({active:C,activeColor:z,inactiveColor:c,disabledColor:S,itemDirection:$,resize:s,onTabClick:g}),D(()=>d.value,async()=>{await vt(),s()}),D(()=>t.active,s),Q(()=>window.addEventListener("resize",s)),q(()=>window.removeEventListener("resize",s)),{indicatorWidth:o,indicatorHeight:n,indicatorX:m,indicatorY:y,scrollable:i,scrollerEl:h,Transition:J,toSizeUnit:ut,resize:s}}});function ht(t,o,n,m,y,i){return H(),Z(et(t.sticky?"var-sticky":t.Transition),{"offset-top":t.sticky?t.offsetTop:null},{default:x(()=>[_("div",tt({class:["var-tabs var--box",[`var-tabs--item-${t.itemDirection}`,`var-tabs--layout-${t.layoutDirection}-padding`,t.elevation?"var-elevation--4":null,t.fixedBottom?"var-tabs--fixed-bottom":null]],style:{background:t.color}},t.$attrs),[_("div",{class:N(["var-tabs__tab-wrap",[t.scrollable?`var-tabs--layout-${t.layoutDirection}-scrollable`:null,`var-tabs--layout-${t.layoutDirection}`]]),ref:"scrollerEl"},[I(t.$slots,"default"),_("div",{class:N(["var-tabs__indicator",[`var-tabs--layout-${t.layoutDirection}-indicator`]]),style:V({width:t.layoutDirection==="horizontal"?t.indicatorWidth:t.toSizeUnit(t.indicatorSize),height:t.layoutDirection==="horizontal"?t.toSizeUnit(t.indicatorSize):t.indicatorHeight,transform:t.layoutDirection==="horizontal"?`translateX(${t.indicatorX})`:`translateY(${t.indicatorY})`,background:t.indicatorColor||t.activeColor})},null,6)],2)],16)]),_:3},8,["offset-top"])}var P=K(yt,[["render",ht]]);P.install=function(t){t.component(P.name,P)};const Ct={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:{type:Function}};function Tt(){const{parentProvider:t,bindParent:o}=lt(X),{index:n}=ct(O);if(!t||!o||!n)throw Error("<var-tab/> must in <var-tabs/>");return{index:n,tabs:t,bindTabs:o}}const pt=Y({name:"VarTab",directives:{Ripple:ft},props:Ct,setup(t){const o=b(null),n=l(()=>t.name),m=l(()=>t.disabled),y=l(()=>o.value),{index:i,tabs:h,bindTabs:C}=Tt(),{onTabClick:z,active:c,activeColor:S,inactiveColor:$,disabledColor:T,itemDirection:k,resize:d}=h,g={name:n,index:i,disabled:m,element:y};C(g);const w=()=>{const{disabled:u,name:v}=t;return u?T.value:c.value===v||c.value===(i==null?void 0:i.value)?S.value:$.value},B=()=>{const{disabled:u,name:v}=t;return u?"var-tab--disabled":c.value===v||c.value===(i==null?void 0:i.value)?"var-tab--active":"var-tab--inactive"},A=u=>{const{disabled:v,name:p,onClick:s}=t;v||(s==null||s(p!=null?p:i.value,u),z(g))};return D(()=>t.name,d),D(()=>t.disabled,d),{tabEl:o,active:c,activeColor:S,inactiveColor:$,itemDirection:k,computeColorStyle:w,computeColorClass:B,handleClick:A}}});function St(t,o,n,m,y,i){const h=at("ripple");return ot((H(),it("div",{class:N(["var-tab var--box",[t.computeColorClass(),`var-tab--${t.itemDirection}`]]),ref:"tabEl",style:V({color:t.computeColorStyle()}),onClick:o[0]||(o[0]=(...C)=>t.handleClick&&t.handleClick(...C))},[I(t.$slots,"default")],6)),[[h,{disabled:t.disabled}]])}var U=K(pt,[["render",St]]);U.install=function(t){t.component(U.name,U)};export{P as T,U as a};