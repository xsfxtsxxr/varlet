import{R as p}from"./index.fef475e0.js";import{t as v}from"./elements.6bb3d81f.js";import{_ as c}from"./elevation.3f27fa24.js";import{d as f,f as u,w as m,o as t,c as i,G as s,h as r,p as y,n as g,t as o}from"./vendor.9810b84e.js";function S(e){return["fill","contain","cover","none","scale-down"].includes(e)}const _={src:{type:String},fit:{type:String,validator:S,default:"cover"},height:{type:[String,Number]},alt:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},elevation:{type:[Number,String]},ripple:{type:Boolean,default:!1},onClick:{type:Function}};const b=f({name:"VarCard",directives:{Ripple:p},props:_,setup(){return{toSizeUnit:v}}}),h=["src","alt"],k={key:0,class:"var-card__title"},C={key:0,class:"var-card__subtitle"},$={key:0,class:"var-card__description"},j={key:0,class:"var-card__footer"};function z(e,n,w,B,D,N){const l=u("ripple");return m((t(),i("div",{class:y(["var-card",[e.elevation?`var-elevation--${e.elevation}`:"var-elevation--2"]]),onClick:n[0]||(n[0]=(...d)=>e.onClick&&e.onClick(...d))},[s(e.$slots,"image",{},()=>[e.src?(t(),i("img",{key:0,class:"var-card__image",style:g({objectFit:e.fit,height:e.toSizeUnit(e.height)}),src:e.src,alt:e.alt},null,12,h)):r("v-if",!0)]),s(e.$slots,"title",{},()=>[e.title?(t(),i("div",k,o(e.title),1)):r("v-if",!0)]),s(e.$slots,"subtitle",{},()=>[e.subtitle?(t(),i("div",C,o(e.subtitle),1)):r("v-if",!0)]),s(e.$slots,"description",{},()=>[e.description?(t(),i("div",$,o(e.description),1)):r("v-if",!0)]),e.$slots.extra?(t(),i("div",j,[s(e.$slots,"extra")])):r("v-if",!0)],2)),[[l,{disabled:!e.ripple}]])}var a=c(b,[["render",z]]);a.install=function(e){e.component(a.name,a)};export{a as C};