import{u as D}from"./components.81bffda1.js";import{t as N}from"./shared.5973ad73.js";import{F as k,u as F}from"./provide.086bcab4.js";import{L as $}from"./index.4c5d9efa.js";import{R as A}from"./index.40559b3e.js";import{_ as R}from"./elevation.61c5e873.js";import{q as T,b as U,z as W,d as S,e as L,o as B,c as q,a as p,n as h,m as w,i as E,k as H,f as M,h as P}from"./vendor.7d218dee.js";const G={modelValue:{default:!1},activeValue:{default:!0},inactiveValue:{default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},color:{type:String},loadingColor:{type:String},closeColor:{type:String},size:{type:[String,Number],default:20},rules:{type:Array},ripple:{type:Boolean,default:!0},onClick:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const I=T({name:"VarSwitch",components:{[$.name]:$,[k.name]:k},directives:{Ripple:A},props:G,setup(e){const{bindForm:s,form:a}=F(),{errorMessage:n,validateWithTrigger:b,validate:_,resetValidation:v}=D(),f=()=>_(e.rules,e.modelValue),g=()=>W(()=>b(["onChange"],"onChange",e.rules,e.modelValue)),y=U(()=>{const{size:t,modelValue:l,color:d,closeColor:c,loadingColor:m,activeValue:o}=e,i=N(t),u=i*2,r=i*1.2;return{handle:{width:`${t}px`,height:`${t}px`,backgroundColor:l===o?d||"":c||"",color:m&&m},ripple:{left:l===o?`${i/2}px`:`-${i/2}px`,color:l===o?d||"":c||"#999",width:`${i*2}px`,height:`${i*2}px`},track:{height:`${r*.6}px`,width:`${u-2}px`,borderRadius:`${u/3}px`,filter:l===o||(n==null?void 0:n.value)?"opacity(.6)":"brightness(.6)",backgroundColor:l===o?d||"":c||""},switch:{height:`${r}px`,width:`${u}px`}}}),j=()=>{const{onClick:t,onChange:l,disabled:d,loading:c,readonly:m,modelValue:o,activeValue:i,inactiveValue:u,"onUpdate:modelValue":r}=e;if(t==null||t(),d||c||m||(a==null?void 0:a.disabled.value)||(a==null?void 0:a.readonly.value))return;const C=o===i?u:i;l==null||l(C),r==null||r(C),g()},z={reset:()=>{var t;(t=e["onUpdate:modelValue"])==null||t.call(e,e.inactiveValue),v()},validate:f,resetValidation:v};return s==null||s(z),{switchActive:j,styleComputed:y,errorMessage:n,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly}}}),J={class:"var-switch"};function K(e,s,a,n,b,_){const v=S("var-loading"),f=S("var-form-details"),g=L("ripple");return B(),q("div",J,[p("div",{class:w(["var-switch-block",[e.disabled||e.formDisabled?"var-switch__disable":null]]),onClick:s[0]||(s[0]=(...y)=>e.switchActive&&e.switchActive(...y)),style:h(e.styleComputed.switch)},[p("div",{style:h(e.styleComputed.track),class:w(["var-switch__track",[e.modelValue===e.activeValue?"var-switch__track-active":null,e.errorMessage?"var-switch__track-error":null]])},null,6),E(p("div",{class:"var-switch__ripple",style:h(e.styleComputed.ripple)},[p("div",{style:h(e.styleComputed.handle),class:w(["var-switch__handle var-elevation--2",[e.modelValue===e.activeValue?"var-switch__handle-active":null,e.errorMessage?"var-switch__handle-error":null]])},[e.loading?(B(),H(v,{key:0,radius:e.size/2-2},null,8,["radius"])):M("v-if",!0)],6)],4),[[g,{disabled:!e.ripple||e.disabled||e.loading||e.formDisabled}]])],6),P(f,{"error-message":e.errorMessage},null,8,["error-message"])])}var V=R(I,[["render",K]]);V.install=function(e){e.component(V.name,V)};export{V as S};