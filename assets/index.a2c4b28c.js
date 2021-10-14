import{C as v}from"./index.867d718b.js";import{R as y}from"./index.40559b3e.js";import{q as N,r as P,b as r,y as T,d as w,e as g,i as B,o as m,c as I,a as f,m as b,n as C,k as V,K as j,f as D,B as K,l as $,t as L}from"./vendor.7d218dee.js";import{b as Y,e as U,a as z,f as A}from"./components.81bffda1.js";import{_ as R}from"./elevation.61c5e873.js";const h=Symbol("SELECT_BIND_OPTION_KEY"),S=Symbol("SELECT_COUNT_OPTION_KEY");function ee(){const{bindChildren:e,childProviders:o}=Y(h),{length:n}=U(S);return{length:n,options:o,bindOptions:e}}function W(){const{bindParent:e,parentProvider:o}=z(h),{index:n}=A(S);if(!e||!o)throw Error("<var-option/> must in <var-select/>");return{index:n,select:o,bindSelect:e}}const q={label:{},value:{}};const M=N({name:"VarOption",directives:{Ripple:y},components:{[v.name]:v},props:q,setup(e){const o=P(!1),n=r(()=>o.value),c=r(()=>e.label),d=r(()=>e.value),{select:u,bindSelect:l}=W(),{wrapWidth:s,multiple:t,focusColor:k,onSelect:p}=u,_=()=>{o.value=!o.value,p(a)},O=()=>p(a),a={label:c,value:d,selected:n,sync:E=>{o.value=E}};return T([()=>e.label,()=>e.value],()=>{if(e.label==null&&e.value==null)throw Error(`Props label and value can't both be undefined
`)},{immediate:!0}),l(a),{optionSelected:o,wrapWidth:s,multiple:t,focusColor:k,handleClick:_,handleSelect:O}}}),F={class:"var-option__text"};function G(e,o,n,c,d,u){const l=w("var-checkbox"),s=g("ripple");return B((m(),I("div",{class:b(["var-option var--box",[e.optionSelected?"var-option--selected-color":null]]),style:C({width:e.wrapWidth,color:e.optionSelected?e.focusColor:null}),onClick:o[2]||(o[2]=(...t)=>e.handleClick&&e.handleClick(...t))},[f("div",{class:b(["var-option__cover",[e.optionSelected?"var-option--selected-background":null]]),style:C({background:e.optionSelected?e.focusColor:null})},null,6),e.multiple?(m(),V(l,{key:0,ref:"checkbox","checked-color":e.focusColor,modelValue:e.optionSelected,"onUpdate:modelValue":o[0]||(o[0]=t=>e.optionSelected=t),onClick:o[1]||(o[1]=j(()=>{},["stop"])),onChange:e.handleSelect},null,8,["checked-color","modelValue","onChange"])):D("v-if",!0),f("div",F,[K(e.$slots,"default",{},()=>[$(L(e.label),1)])])],6)),[[s]])}var i=R(M,[["render",G]]);i.install=function(e){e.component(i.name,i)};export{i as O,ee as u};