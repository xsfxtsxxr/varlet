import{R as c}from"./index.b50b8baf.js";import{p as s,L as b}from"./index.20272ca0.js";import{p as d}from"./components.57ac5c69.js";import{_ as g}from"./elevation.6f443b25.js";import{d as m,r as y,e as h,f as k,w as B,o as u,c as C,l as z,h as S,a as T,G as $,p,n as L}from"./vendor.efca09d3.js";function V(e){return["default","primary","info","success","warning","danger"].includes(e)}function j(e){return["normal","mini","small","large"].includes(e)}const R={type:{type:String,default:"default",validator:V},size:{type:String,default:"normal",validator:j},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},autoLoading:{type:Boolean,default:!1},loadingRadius:{type:[Number,String],default:12},loadingType:d(s,"type"),loadingSize:d(s,"size"),onClick:{type:Function},onTouchstart:{type:Function}};const w=m({name:"VarButton",components:{VarLoading:b},directives:{Ripple:c},props:R,setup(e){const a=y(!1),i=n=>{e.autoLoading&&(a.value=!0,Promise.resolve(n).finally(()=>{a.value=!1}))};return{pending:a,handleClick:n=>{const{loading:t,disabled:l,onClick:o}=e;!o||t||l||a.value||i(o(n))},handleTouchstart:n=>{const{loading:t,disabled:l,onTouchstart:o}=e;!o||t||l||a.value||i(o(n))}}}}),N=["disabled"];function D(e,a,i,f,v,n){const t=h("var-loading"),l=k("ripple");return B((u(),C("button",{class:p(["var-button var--box",[`var-button--${e.size}`,e.block?"var--flex var-button--block":"var--inline-flex",e.disabled?"var-button--disabled":null,e.text?`var-button--text-${e.type}`:`var-button--${e.type}`,e.text?"var-button--text":"var-elevation--2",e.text&&e.disabled?"var-button--text-disabled":null,e.round?"var-button--round":null,e.outline?"var-button--outline":null]]),style:L({color:e.textColor,background:e.color}),disabled:e.disabled,onClick:a[0]||(a[0]=(...o)=>e.handleClick&&e.handleClick(...o)),onTouchstart:a[1]||(a[1]=(...o)=>e.handleTouchstart&&e.handleTouchstart(...o))},[e.loading||e.pending?(u(),z(t,{key:0,class:"var-button__loading","var-button-cover":"",type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius},null,8,["type","size","radius"])):S("v-if",!0),T("div",{class:p(["var-button__content",[e.loading||e.pending?"var-button--hidden":null]])},[$(e.$slots,"default")],2)],46,N)),[[l,{disabled:e.disabled||!e.ripple}]])}var r=g(w,[["render",D]]);r.install=function(e){e.component(r.name,r)};export{r as B};