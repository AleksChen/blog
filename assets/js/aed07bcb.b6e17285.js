"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[5500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||y[m]||p;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const p={title:"any",description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-15",author:"Winwoo"}},o=void 0,i={unversionedId:"typescript/types/any",id:"typescript/types/any",title:"any",description:"",source:"@site/docs/typescript/types/any.mdx",sourceDirName:"typescript/types",slug:"/typescript/types/any",permalink:"/blog/docs/typescript/types/any",draft:!1,tags:[{label:"TypeScript",permalink:"/blog/docs/tags/typescript"}],version:"current",frontMatter:{title:"any",description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-15",author:"Winwoo"}},sidebar:"typescript",previous:{title:"\u7c7b\u578b",permalink:"/blog/docs/typescript/types/"},next:{title:"\u6570\u7ec4",permalink:"/blog/docs/typescript/types/array"}},l={},c=[{value:"\u672a\u6307\u5b9a\u7c7b\u578b\u7684\u53d8\u91cf",id:"\u672a\u6307\u5b9a\u7c7b\u578b\u7684\u53d8\u91cf",level:2},{value:"\u68c0\u67e5\u9690\u5f0f\u58f0\u660e\u7684 any \u7c7b\u578b",id:"\u68c0\u67e5\u9690\u5f0f\u58f0\u660e\u7684-any-\u7c7b\u578b",level:2}],s={toc:c};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"any")," \u7c7b\u578b\u662f ",(0,a.kt)("strong",{parentName:"p"},"TypeScript")," \u4e2d\u6700\u7075\u6d3b\u7684\u7c7b\u578b\uff0c\u4f46\u662f\u6ee5\u7528\u5b83\u4f1a\u4e27\u5931 ",(0,a.kt)("strong",{parentName:"p"},"TypeScript")," \u5f3a\u5927\u7684\u7c7b\u578b\u63a8\u65ad\u80fd\u529b\u3002\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Object")," \u6216",(0,a.kt)("strong",{parentName:"p"},"\u590d\u6742\u7684 JSON")," \u4e2d\uff0c\u6709\u4e9b\u5c5e\u6027\u6211\u4eec\u5e76\u4e0d\u80fd\u786e\u5176\u7c7b\u578b\uff0c\u58f0\u660e\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," \u7c7b\u578b\u7684\u5c5e\u6027\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u8017\u8d39\u65f6\u95f4\u53bb\u63a8\u65ad\u3002")),(0,a.kt)("h2",{id:"\u672a\u6307\u5b9a\u7c7b\u578b\u7684\u53d8\u91cf"},"\u672a\u6307\u5b9a\u7c7b\u578b\u7684\u53d8\u91cf"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("strong",{parentName:"p"},"TypeScript")," \u4e2d\uff0c\u4e3a\u6307\u5b9a\u7c7b\u578b\u7684\u53d8\u91cf\u5c06\u81ea\u52a8\u58f0\u660e ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," \u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="TypeScript"',title:'"TypeScript"'},'let a = 123;\na = "123";\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0a\u8ff0\u53d8\u91cf ",(0,a.kt)("strong",{parentName:"p"},"a")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," \u7c7b\u578b\uff0c\u4e0e\u7528\u6cd5 ",(0,a.kt)("strong",{parentName:"p"},"JavaScript")," \u51e0\u4e4e\u65e0\u5f02\u3002")),(0,a.kt)("h2",{id:"\u68c0\u67e5\u9690\u5f0f\u58f0\u660e\u7684-any-\u7c7b\u578b"},"\u68c0\u67e5\u9690\u5f0f\u58f0\u660e\u7684 any \u7c7b\u578b"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u4e2d\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"noImplicitAny")," \u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON" {3}',title:'"JSON"',"{3}":!0},'{\n  "compilerOptions": {\n    "noImplicitAny": true\n  }\n}\n')))}y.isMDXComponent=!0}}]);