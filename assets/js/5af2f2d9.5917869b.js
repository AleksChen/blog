"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[4536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),v=n,m=u["".concat(o,".").concat(v)]||u[v]||d[v]||l;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6982:(e,t,r)=>{r.d(t,{Z:()=>i});var a,n=r(7294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}const i=e=>{let{title:t,titleId:r,...i}=e;return n.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:12,height:16,viewBox:"0 0 12 16",role:"img","aria-labelledby":r},i),t?n.createElement("title",{id:r},t):null,a||(a=n.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})))}},4998:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const n="featureIconArea_kxlx",l="title_Utvl";var i=r(6010),c=r(941);function o(e){let{onClick:t,src:r,srcDark:o,title:s,wrapperClassName:p,wrapperStyle:d}=e;return a.createElement("div",{className:(0,i.Z)(n,p),style:d},a.createElement(c.Z,{sources:{light:r,dark:o||r},alt:s,loading:"lazy",onClick:t}),a.createElement("div",{className:l},s))}},3278:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294);const n="list_rgtH",l="item_i3mt";var i=r(6010),c=r(9960),o=r(941);function s(e){let{data:t=[],wrapperClassName:r,wrapperStyle:s}=e;return a.createElement("div",{style:s,className:(0,i.Z)(n,r)},t.map((e=>a.createElement("div",{key:e.title,className:l},a.createElement(c.Z,{to:e.link},a.createElement(o.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title)))))}},6231:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(7294);const n="unorderedList_Bf_c",l="listItem_mbuj",i="titleArea_SAgt",c="title_RnVK",o="linkSVG_P7Tu";var s=r(6010),p=r(9960),d=r(941),u=r(6982);const v=r.p+"assets/images/chrome-fb03012f7168f90e8c56ea6703933408.png";function m(e){let{data:t=[],wrapperClassName:r,wrapperStyle:m}=e;return a.createElement("div",{style:m,className:(0,s.Z)(n,r)},a.createElement("ul",null,t.map(((e,t)=>a.createElement("li",{className:l,key:t},a.createElement(d.Z,{sources:{light:e.src||v,dark:e.srcDark?e.srcDark:e.src||v},alt:e.title,loading:"lazy"}),a.createElement(p.Z,{to:e.link,className:i},a.createElement("div",{className:c},e.title),a.createElement("div",{className:o},a.createElement(u.Z,null))))))))}},2806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>v});var a=r(7462),n=(r(7294),r(3905)),l=r(4998),i=r(3278),c=r(9195),o=r(6231);const s={title:"React Native",hide_title:!0},p=void 0,d={unversionedId:"rn/index",id:"rn/index",title:"React Native",description:"\u7531\u4e8e React Native \u63d0\u4f9b\u7684\u7ec4\u4ef6\u662f\u5bf9\u539f\u751f API \u7684\u66b4\u9732\uff0c\u867d\u7136\u6211\u4eec\u4f7f\u7528\u7684\u662f JavaScript \u8bed\u8a00\u7f16\u5199\u7684\u4ee3\u7801\uff0c\u4f46\u662f\u5b9e\u9645\u4e0a\u662f\u8c03\u7528\u4e86\u539f\u751f\u7684 API \u548c\u539f\u751f\u7684 UI \u7ec4\u4ef6\u3002\u56e0\u6b64\uff0c\u4f53\u9a8c\u548c\u6027\u80fd\u8db3\u4ee5\u5ab2\u7f8e\u539f\u751f\u5e94\u7528\u3002",source:"@site/docs/rn/index.mdx",sourceDirName:"rn",slug:"/rn/",permalink:"/blog/docs/rn/",draft:!1,tags:[],version:"current",frontMatter:{title:"React Native",hide_title:!0},sidebar:"rn"},u={},v=[{value:"React Native \u539f\u7406",id:"react-native-\u539f\u7406",level:2},{value:"<strong>JavaScriptCore</strong>",id:"javascriptcore",level:3},{value:"<strong>Bridge</strong>",id:"bridge",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:v};function g(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{src:c.Z,title:"React Native",mdxType:"FeatureIcon"}),(0,n.kt)(i.Z,{data:[],mdxType:"LinkList"}),(0,n.kt)("p",null,"\u7531\u4e8e React Native \u63d0\u4f9b\u7684\u7ec4\u4ef6\u662f\u5bf9\u539f\u751f API \u7684\u66b4\u9732\uff0c\u867d\u7136\u6211\u4eec\u4f7f\u7528\u7684\u662f JavaScript \u8bed\u8a00\u7f16\u5199\u7684\u4ee3\u7801\uff0c\u4f46\u662f\u5b9e\u9645\u4e0a\u662f\u8c03\u7528\u4e86\u539f\u751f\u7684 API \u548c\u539f\u751f\u7684 UI \u7ec4\u4ef6\u3002\u56e0\u6b64\uff0c\u4f53\u9a8c\u548c\u6027\u80fd\u8db3\u4ee5\u5ab2\u7f8e\u539f\u751f\u5e94\u7528\u3002"),(0,n.kt)("h2",{id:"react-native-\u539f\u7406"},"React Native \u539f\u7406"),(0,n.kt)("h3",{id:"javascriptcore"},(0,n.kt)("strong",{parentName:"h3"},"JavaScriptCore")),(0,n.kt)("p",null,"JavaScriptCore \u662f JavaScript \u5f15\u64ce\uff0c\u901a\u5e38\u4f1a\u88ab\u53eb\u505a\u865a\u62df\u673a\uff0c\u4e13\u95e8\u8bbe\u8ba1\u6765\u89e3\u91ca\u548c\u6267\u884c JavaScript \u4ee3\u7801\u3002\u5728 React Native \u91cc\u9762\uff0cJavaScriptCore \u8d1f\u8d23 bundle \u4ea7\u51fa\u7684 JS \u4ee3\u7801\u7684\u89e3\u6790\u548c\u6267\u884c\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"JS Engine")),(0,n.kt)("p",null,"React Native \u9700\u8981\u4e00\u4e2a JS \u7684\u8fd0\u884c\u73af\u5883\uff0c\u56e0\u4e3a React Native \u4f1a\u628a\u5e94\u7528\u7684 JS \u4ee3\u7801\u7f16\u8bd1\u6210\u4e00\u4e2a JS \u6587\u4ef6\uff08x x.bundle\uff09\uff0cReact Native \u6846\u67b6\u7684\u76ee\u6807\u5c31\u662f\u89e3\u91ca\u8fd0\u884c\u8fd9\u4e2a JS \u811a\u672c\u6587\u4ef6\uff0c\u5982\u679c\u662f Native \u62d3\u5c55\u7684 API\uff0c\u5219\u76f4\u63a5\u901a\u8fc7 bridge \u8c03\u7528 Native \u65b9\u6cd5\uff0c\u6700\u57fa\u7840\u7684\u6bd4\u5982\u7ed8\u5236 UI \u754c\u9762\uff0c\u6620\u5c04 Virtual DOM \u5230\u771f\u5b9e\u7684 UI \u7ec4\u4ef6\u4e2d\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(552).Z,width:"720",height:"540"})),(0,n.kt)("p",null,"\u7eff\u8272\u7684\u662f\u6211\u4eec\u5e94\u7528\u5f00\u53d1\u7684\u90e8\u5206\uff0c\u6211\u4eec\u5199\u7684\u4ee3\u7801\u57fa\u672c\u4e0a\u90fd\u662f\u5728\u8fd9\u4e00\u5c42\u3002"),(0,n.kt)("p",null,"\u84dd\u8272\u4ee3\u8868\u516c\u7528\u7684\u8de8\u5e73\u53f0\u7684\u4ee3\u7801\u548c\u5de5\u5177\u5f15\u64ce\uff0c\u4e00\u822c\u6211\u4eec\u4e0d\u4f1a\u52a8\u84dd\u8272\u90e8\u5206\u7684\u4ee3\u7801\u3002"),(0,n.kt)("p",null,"\u9ec4\u8272\u4ee3\u8868\u5e73\u53f0\u76f8\u5173\u7684 bridge \u4ee3\u7801\uff0c\u505a\u5b9a\u5236\u5316\u7684\u65f6\u5019\u4f1a\u6dfb\u52a0\u4fee\u6539\u4ee3\u7801\u3002"),(0,n.kt)("p",null,"\u7ea2\u8272\u4ee3\u8868\u7cfb\u7edf\u5e73\u53f0\u7684\u529f\u80fd\uff0c\u53e6\u5916\u7ea2\u8272\u4e0a\u9762\u6709\u4e00\u4e2a\u865a\u7ebf\uff0c\u8868\u793a\u6240\u6709\u5e73\u53f0\u76f8\u5173\u7684\u4e1c\u897f\u90fd\u901a\u8fc7 bridge \u9694\u79bb\u5f00\u6765\u4e86\uff0c\u7ea2\u8272\u90e8\u5206\u662f\u72ec\u7acb\u4e8e React Native \u7684\u3002"),(0,n.kt)("h3",{id:"bridge"},(0,n.kt)("strong",{parentName:"h3"},"Bridge")),(0,n.kt)("p",null,"\u5728 React Native \u4e2d\uff0c\u539f\u751f\u7aef\u548c JavaScript \u4ea4\u4e92\u662f\u901a\u8fc7 Bridge \u8fdb\u884c\u7684\uff0cBridge \u7684\u4f5c\u7528\u5c31\u662f\u7ed9 React Native \u5185\u5d4c\u7684 JS Engine \u63d0\u4f9b\u539f\u751f\u63a5\u53e3\u7684\u6269\u5c55\u4f9b JS \u8c03\u7528\u3002\u6240\u6709\u7684\u672c\u5730\u5b58\u50a8\u3001\u56fe\u7247\u8d44\u6e90\u8bbf\u95ee\u3001\u56fe\u5f62\u56fe\u50cf\u7ed8\u5236\u30013D \u52a0\u901f\u3001\u7f51\u7edc\u8bbf\u95ee\u3001\u9707\u52a8\u6548\u679c\u3001NFC\u3001\u539f\u751f\u63a7\u4ef6\u7ed8\u5236\u3001\u5730\u56fe\u3001\u5b9a\u4f4d\u3001\u901a\u77e5\u7b49\u90fd\u662f\u901a\u8fc7 Bridge \u5c01\u88c5\u6210 JS \u63a5\u53e3\u4ee5\u540e\u6ce8\u5165 JS Engine \u4f9b JS \u8c03\u7528\u3002\u7406\u8bba\u4e0a\uff0c\u4efb\u4f55\u539f\u751f\u4ee3\u7801\u80fd\u5b9e\u73b0\u7684\u6548\u679c\u90fd\u53ef\u4ee5\u901a\u8fc7 Bridge \u5c01\u88c5\u6210 JS \u53ef\u4ee5\u8c03\u7528\u7684\u7ec4\u4ef6\u548c\u65b9\u6cd5, \u4ee5 JS \u6a21\u5757\u7684\u5f62\u5f0f\u63d0\u4f9b\u7ed9 RN \u4f7f\u7528\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(8746).Z,width:"497",height:"312"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4e09\u4e2a\u7ebf\u7a0b")),(0,n.kt)("p",null,"\u5728 React Native \u91cc\u9762\uff0c\u771f\u6b63\u6709\u4e09\u4e2a\u91cd\u8981\u7684\u7ebf\u7a0b\u5728\u6267\u884c\uff0c\u4ed6\u4eec\u5206\u522b\u662f Shadow thread\u3001UI thread \u548c JS thread\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"JS thread\uff1a")," \u5176\u5b9e\u662f JavaScript \u7ebf\u7a0b\uff0c\u8d1f\u8d23 JS \u548c\u539f\u751f\u4ee3\u7801\u7684\u4ea4\u4e92\u7ebf\u7a0b\uff0c\u56e0\u4e3a JS \u662f\u5355\u7ebf\u7a0b\u6a21\u578b\uff0c\u6240\u4ee5\u9700\u8981\u4e00\u4e2a\u5355\u72ec\u7684\u7ebf\u7a0b\u6765\u9a71\u52a8\uff0c\u5e76\u4e14 JS \u548c Native \u4ea4\u4e92\u662f\u5f02\u6b65\u7684\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Shadow thread"),": \u8fd9\u4e2a\u7ebf\u7a0b\u662f\u8d1f\u8d23 Native \u5e03\u5c40\uff0c\u63d0\u4f9b\u7ed9 yoga \u5f15\u64ce\u4f7f\u7528\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"UI thread"),"\uff1a\u8fd9\u4e2a\u53ef\u4ee5\u770b\u4f5c\u662f\u4e3b\u7ebf\u7a0b\uff0c\u53ef\u4ee5\u770b\u4f5c\u662f UI Manager \u7ebf\u7a0b\uff0c\u8d1f\u8d23\u9875\u9762\u7684\u4ea4\u4e92\u548c\u63a7\u4ef6\u7ed8\u5236\u903b\u8f91\u3002"),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)(o.Z,{data:[{title:"React Native \u4e2d\u6587\u6587\u6863",link:"https://www.reactnative.cn/",src:c.Z},{title:"React Native \u539f\u7406",link:"https://zhuanlan.zhihu.com/p/343519887",src:c.Z}],mdxType:"ReferenceList"}))}g.isMDXComponent=!0},9195:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/react-222b46ec12ee705ead716d594add0e11.png"},552:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/v2-349367c8b1f7aa118672f848861c006e_720w-599822edcb7bea799c126609e545ae69.webp"},8746:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/v2-5a5d563a8ee46f8ee2e0b85c48169ab2_720w-cdc97a58d792a83d0c081cd0fdbe508b.webp"}}]);