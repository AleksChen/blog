"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[2186],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=d(r),m=a,u=f["".concat(i,".").concat(m)]||f[m]||l[m]||c;return r?n.createElement(u,o(o({ref:t},p),{},{components:r})):n.createElement(u,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<c;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>J,contentTitle:()=>B,default:()=>K,frontMatter:()=>X,metadata:()=>I,toc:()=>V});var n=r(7462),a=r(7294),c=r(3905);const o="listWrapper_JZ7x",s="cardWrapper_R0nX",i="mobileCardWrapper_qqGz",d="image_O1GS",p="title_pahK",l="title_sm_CtYL",f="title_md_s7_s";var m=r(6010),u=r(9960),b=r(838);function y(e){let{data:t=[],wrapperClassName:r,wrapperStyle:n}=e;return a.createElement("div",{style:n,className:(0,m.Z)(o,r)},t.map((e=>a.createElement(u.Z,{key:e.title,className:(0,b.tq)()?i:s,to:e.link},a.createElement("img",{className:(0,m.Z)(d),src:e.src,alt:e.title}),!(0,b.tq)()&&a.createElement("div",{className:(0,m.Z)(p,"md"===e.fontSize&&f,"sm"===e.fontSize&&l)},e.title)))))}const g="CSS",v="JavaScript",O="TypeScript",w="React",Z="React Native",h="Vue",k="Webpack",j="Vite",_="Node.js",S="\u7b97\u6cd5",T="\u9762\u8bd5";var x=r(2679),E=r(9351),P=r(7719),C=r(9195),N=r(8321),D=r(3246),G=r(9646),L=r(3258),M=r(15),q=r(2639);function z(e,t,r,n){return void 0===n&&(n="lg"),{title:e,link:t,src:r,fontSize:n}}const F=[z(g,"/docs/css",x.Z),z(v,"/docs/javascript",E.Z),z(O,"/docs/typescript",P.Z),z(w,"/docs/react",C.Z),z(Z,"/docs/rn",C.Z),z(h,"/docs/vue",N.Z),z(k,"/docs/webpack",D.Z),z(j,"/docs/vite",G.Z)],R=[z(_,"/docs/nodejs",L.Z)],W=[z(S,"/docs/algorithm",M.Z),z(T,"/docs/interview",q.Z)],X={title:"\u524d\u7aef",hide_title:!0,hide_table_of_contents:!0},B=void 0,I={unversionedId:"entry",id:"entry",title:"\u524d\u7aef",description:"Frontend",source:"@site/docs/entry.mdx",sourceDirName:".",slug:"/entry",permalink:"/docs/entry",draft:!1,tags:[],version:"current",frontMatter:{title:"\u524d\u7aef",hide_title:!0,hide_table_of_contents:!0}},J={},V=[{value:"Frontend",id:"frontend",level:2},{value:"Backend",id:"backend",level:2},{value:"Other",id:"other",level:2}],A={toc:V};function K(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},A,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"frontend"},"Frontend"),(0,c.kt)(y,{data:F,wrapperStyle:{marginTop:"1rem"},mdxType:"GridList"}),(0,c.kt)("h2",{id:"backend"},"Backend"),(0,c.kt)(y,{data:R,wrapperStyle:{marginTop:"1rem"},mdxType:"GridList"}),(0,c.kt)("h2",{id:"other"},"Other"),(0,c.kt)(y,{data:W,wrapperStyle:{marginTop:"1rem"},mdxType:"GridList"}))}K.isMDXComponent=!0},15:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/algorithm-6611aee5c6d989d2dc91b89f6c87d04b.png"},2679:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/css-7cd3a363a3f794a19b2a456b4e81a4ac.png"},9351:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/javascript-a10d37851dff846a8a9e32cd99965a46.png"},3258:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/nodejs-b508473ad71a31ce2fae7ed21e4942a4.png"},2639:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pokeball-6c6b4cb944d0eedc032f9e0e1cee0fad.png"},9195:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/react-222b46ec12ee705ead716d594add0e11.png"},7719:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/typescript-af108db04a54d784da9bf75244a6daf5.png"},9646:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vite-2c4ee4208716a42d02b381ba490f9981.png"},8321:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vue-c5e198013b9c2e123a6c5083990b265d.png"},3246:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/webpack-bcf4578f43d8fcf4cf2556916253b859.png"}}]);