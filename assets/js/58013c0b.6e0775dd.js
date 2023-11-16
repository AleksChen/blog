"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[3684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||l[f]||s;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var d=2;d<s;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6663:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7294);const a="listWrapper_JZ7x",s="cardWrapper_R0nX",c="mobileCardWrapper_qqGz",o="image_O1GS",i="title_pahK",d="title_sm_CtYL",p="title_md_s7_s";var l=n(6010),u=n(9960),f=n(838);function m(e){let{data:t=[],wrapperClassName:n,wrapperStyle:m}=e;return r.createElement("div",{style:m,className:(0,l.Z)(a,n)},t.map((e=>r.createElement(u.Z,{key:e.title,className:(0,f.tq)()?c:s,to:e.link},r.createElement("img",{src:e.src,className:(0,l.Z)(o),alt:e.title}),!(0,f.tq)()&&r.createElement("div",{className:(0,l.Z)(i,"md"===e.fontSize&&p,"sm"===e.fontSize&&d)},e.title)))))}},5082:(e,t,n)=>{n.d(t,{qg:()=>O,HA:()=>s,Rc:()=>w,yb:()=>a,b6:()=>c});const r="GitHub",a={frontend:"Frontend",html:"HTML",css:"CSS",javascript:"JavaScript",typescript:"TypeScript",react:"React",rn:"React Native",vue:"Vue",tailwindcss:"Tailwind",webpack:"Webpack"},s={backend:"Backend",nodejs:"Node.js",mongodb:"MongoDB"},c={others:"Others",git:"Git",github:r};var o=n(5560),i=n(2679),d=n(9351),p=n(7719),l=n(9195),u=n(8321),f=n(451),m=n(3246),b=n(3258),g=n(5177),y=n(5807);function v(e,t,n,r){return void 0===r&&(r="lg"),{title:e,link:t,src:n,fontSize:r}}const w=[v(a.javascript,"/docs/javascript",d.Z),v(a.typescript,"/docs/typescript",p.Z),v(a.react,"/docs/react",l.Z),v(a.rn,"/docs/rn",l.Z),v(a.vue,"/docs/vue",u.Z),v(a.webpack,"/docs/webpack",m.Z),v(a.html,"/docs/html",o.Z),v(a.css,"/docs/css",i.Z),v(a.tailwindcss,"/docs/tailwindcss",f.Z)],O=[v(s.nodejs,"/docs/nodejs",b.Z),v(s.mongodb,"/docs/mongodb",g.Z)];v(c.git,"/docs/git",y.Z)},838:(e,t,n)=>{let r;function a(){const e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}n.d(t,{tq:()=>a,yz:()=>c}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(r||(r={}));var s;function c(e){switch(e){case s.Primary:case"":case void 0:case null:return"#25c2a0";case s.Red:return"#e53935";case s.Pink:return"#d81b60";case s.Blue:return"#1e88e5";case s.Purple:return"#ba68c8";case s.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(s||(s={}))},8387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(7462),a=(n(7294),n(3905)),s=n(6663),c=n(5082);const o={title:"\u524d\u7aef",hide_title:!0,hide_table_of_contents:!0},i=void 0,d={unversionedId:"front-end",id:"front-end",title:"\u524d\u7aef",description:"",source:"@site/docs/front-end.mdx",sourceDirName:".",slug:"/front-end",permalink:"/blog/docs/front-end",draft:!1,tags:[],version:"current",frontMatter:{title:"\u524d\u7aef",hide_title:!0,hide_table_of_contents:!0}},p={},l=[],u={toc:l};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{data:c.Rc,wrapperStyle:{marginTop:"1rem"},mdxType:"GridList"}))}f.isMDXComponent=!0},2679:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/css-7cd3a363a3f794a19b2a456b4e81a4ac.png"},5807:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/git-0d190006bbd50b0681b5421d960913f0.png"},5560:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/html-35c6607db36364e3f8bbbb94c0610939.png"},9351:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/javascript-a10d37851dff846a8a9e32cd99965a46.png"},5177:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mongodb-16c8d28aecda2fd6aa4be6595b09edf5.png"},3258:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nodejs-b508473ad71a31ce2fae7ed21e4942a4.png"},9195:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/react-222b46ec12ee705ead716d594add0e11.png"},451:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tailwindcss-a7ab485ed6e2758a06dd9cd3cebad585.png"},7719:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/typescript-af108db04a54d784da9bf75244a6daf5.png"},8321:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vue-c5e198013b9c2e123a6c5083990b265d.png"},3246:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/webpack-bcf4578f43d8fcf4cf2556916253b859.png"}}]);