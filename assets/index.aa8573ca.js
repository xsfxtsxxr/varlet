import{A as m}from"./AppType.78e3bbda.js";import{B as E}from"./index.99c30020.js";import{C as b}from"./index.a2f324ca.js";import{c as n}from"./index.45528475.js";import{d as C}from"./index.9b1139e6.js";import{u as _,a as d,_ as h,b as f,c as k}from"./en-US.f8762106.js";import{w as B,a as v,b as D}from"./utils.5a4067e3.js";import{_ as w}from"./elevation.6f443b25.js";import{C as g,e as c,o as x,c as A,i as t,j as e,F as j,m as a,t as i}from"./vendor.efca09d3.js";import"./index.b50b8baf.js";import"./index.20272ca0.js";import"./shared.1184922b.js";import"./components.57ac5c69.js";import"./elements.ce092872.js";var y={basicUsage:"\u57FA\u672C\u4F7F\u7528",title:"\u98CE\u666F",showSubtitle:"\u663E\u793A\u526F\u6807\u9898",subtitle:"\u516C\u56ED\u91CC\u7684\u98CE\u666F",description:"\u516C\u56ED\u7684\u6811\u6797\u4E5F\u5F88\u7F8E\u3002\u5728\u516C\u56ED\u7684\u5C0F\u5C71\u4E0A\u683D\u6EE1\u4E86\u6811\u6728\uFF0C\u68A7\u6850\u6811\u7684\u53F6\u5B50\u968F\u7740\u65F6\u95F4\u7684\u6D41\u901D\u6162\u6162\u53D8\u9EC4\uFF0C\u7EB7\u7EB7\u98D8\u843D\uFF1B\u67AB\u6811\u7684\u53F6\u5B50\u5374\u53D8\u7EA2\u4E86\uFF0C\u516C\u56ED\u7B3C\u7F69\u5728\u7247\u7247\u7EA2\u4E91\u4E2D\uFF0C\u4E5F\u4F7F\u79CB\u5929\u589E\u6DFB\u4E86\u4E00\u5206\u70ED\u60C5\u3002\u800C\u67CF\u6811\u7684\u53F6\u5B50\u4ECD\u662F\u90A3\u4E48\u9752\u7FE0\u6B32\u6EF4\uFF0C\u4EE4\u4F60\u9676\u9189\u6781\u4E86\u3002\u5C71\u4E0A\u6709\u4E00\u7FA4\u5B69\u5B50\u5728\u5FEB\u4E50\u7684\u5B09\u620F\uFF0C\u4E0D\u65F6\u4F20\u6765\u9635\u9635\u6B22\u7B11\u58F0\uFF0C\u77A7\uFF0C\u4ED6\u4EEC\u73A9\u5F97\u591A\u8D77\u52B2\u5440\uFF0C\u7ED9\u6811\u6797\u589E\u6DFB\u4E86\u6D3B\u529B\u3002",showImage:"\u663E\u793A\u56FE\u7247",useSlot:"\u4F7F\u7528\u63D2\u69FD",button:"\u6DFB\u52A0\u6309\u94AE",showRipple:"\u6C34\u6CE2\u6548\u679C"},S={basicUsage:"Basic Usage",title:"Little Prince",showSubtitle:"Show Subtitle",subtitle:"little prince from",description:"It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me.",showImage:"Show Image",useSlot:"Use Slot",button:"Use Button",showRipple:"Ripple Effect"};const{add:F,use:U,pack:I,packs:uu,merge:tu}=_(),N=o=>{k(o),U(o)};d("zh-CN",h);d("en-US",f);F("zh-CN",y);F("en-US",S);const T={name:"CardExample",components:{VarButton:E,VarCard:b,AppType:m},setup(){B(N),v(C);const o=n.touchmoveForbid;return D(l=>{l==="pc"&&(n.touchmoveForbid=!1)}),g(()=>{n.touchmoveForbid=o}),{pack:I}}};function z(o,l,R,u,V,L){const s=c("app-type"),r=c("var-card"),p=c("var-button");return x(),A(j,null,[t(s,null,{default:e(()=>[a(i(u.pack.basicUsage),1)]),_:1}),t(r,{title:u.pack.title,description:u.pack.description},null,8,["title","description"]),t(s,null,{default:e(()=>[a(i(u.pack.showSubtitle),1)]),_:1}),t(r,{title:u.pack.title,subtitle:u.pack.subtitle,description:u.pack.description},null,8,["title","subtitle","description"]),t(s,null,{default:e(()=>[a(i(u.pack.showImage),1)]),_:1}),t(r,{title:u.pack.title,subtitle:u.pack.subtitle,description:u.pack.description,src:"https://varlet.gitee.io/varlet-ui/cat.jpg"},null,8,["title","subtitle","description"]),t(s,null,{default:e(()=>[a(i(u.pack.useSlot),1)]),_:1}),t(r,{title:u.pack.title,subtitle:u.pack.subtitle,description:u.pack.description,src:"https://varlet.gitee.io/varlet-ui/cat.jpg"},{extra:e(()=>[t(p,{type:"primary",style:{"margin-right":"10px"}},{default:e(()=>[a(i(u.pack.button),1)]),_:1}),t(p,{type:"warning"},{default:e(()=>[a(i(u.pack.button),1)]),_:1})]),_:1},8,["title","subtitle","description"]),t(s,null,{default:e(()=>[a(i(u.pack.showRipple),1)]),_:1}),t(r,{title:u.pack.title,subtitle:u.pack.subtitle,description:u.pack.description,ripple:""},null,8,["title","subtitle","description"])],64)}var eu=w(T,[["render",z],["__scopeId","data-v-adb74238"]]);export{eu as default};