var e=Object.defineProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,t=(a,n,r)=>n in a?e(a,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[n]=r,o=(e,o)=>{for(var b in o||(o={}))n.call(o,b)&&t(e,b,o[b]);if(a)for(var b of a(o))r.call(o,b)&&t(e,b,o[b]);return e};import{r as b,x as i,G as m}from"./vendor.bac705d4.js";import"./IconSfc.d1e88af2.js";var c={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"};function s(){const e={},a=b({}),n=n=>{if(!e[n])return console.warn(`The ${n} does not exist. You can mount a language package using the add method`),{};a.value=e[n]};return{packs:e,pack:a,add:(a,n)=>{n.lang=a,e[a]=n},use:n,merge:(a,r)=>{e[a]?(e[a]=o(o({},e[a]),r),n(a)):console.warn(`The ${a} does not exist. You can mount a language package using the add method`)}}}const{packs:l,pack:d,add:u,use:T,merge:g}=s();u("zh-CN",c),T("zh-CN");var p,h,f={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"};function y(){const{href:e}=window.location,a=e.slice(e.indexOf("?"));return new URLSearchParams(a)}function w(e,a="mobile"){const n=()=>{var n;const r="mobile"===a?null!=(n=y().get("language"))?n:"zh-CN":function(){const[,e,a]=window.location.hash.split("/");return{language:e,menuName:a}}().language;e(r)};x(n),n()}function C(e){const a=()=>{var a;const n=null!=(a=y().get("platform"))?a:"mobile";e(n)};x(a),a()}function x(e){i((()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)})),m((()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)}))}(h=p||(p={}))[h.TITLE=1]="TITLE",h[h.COMPONENT=2]="COMPONENT",h[h.DOCUMENTATION=3]="DOCUMENTATION";export{c as _,u as a,f as b,T as c,w as d,d as p,s as u,C as w};