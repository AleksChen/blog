"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[5674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),v=i,m=d["".concat(c,".").concat(v)]||d[v]||u[v]||l;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6982:(e,t,r)=>{r.d(t,{Z:()=>a});var n,i=r(7294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}const a=e=>{let{title:t,titleId:r,...a}=e;return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:12,height:16,viewBox:"0 0 12 16",role:"img","aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,n||(n=i.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})))}},4998:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7294);const i="featureIconArea_kxlx",l="title_Utvl";var a=r(6010),o=r(941);function c(e){let{onClick:t,src:r,srcDark:c,title:s,wrapperClassName:p,wrapperStyle:u}=e;return n.createElement("div",{className:(0,a.Z)(i,p),style:u},n.createElement(o.Z,{sources:{light:r,dark:c||r},alt:s,loading:"lazy",onClick:t}),n.createElement("div",{className:l},s))}},3278:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294);const i="list_rgtH",l="item_i3mt";var a=r(6010),o=r(9960),c=r(941);function s(e){let{data:t=[],wrapperClassName:r,wrapperStyle:s}=e;return n.createElement("div",{style:s,className:(0,a.Z)(i,r)},t.map((e=>n.createElement("div",{key:e.title,className:l},n.createElement(o.Z,{to:e.link},n.createElement(c.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title)))))}},6231:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7294);const i="unorderedList_Bf_c",l="listItem_mbuj",a="titleArea_SAgt",o="title_RnVK",c="linkSVG_P7Tu";var s=r(6010),p=r(9960),u=r(941),d=r(6982);const v=r.p+"assets/images/chrome-fb03012f7168f90e8c56ea6703933408.png";function m(e){let{data:t=[],wrapperClassName:r,wrapperStyle:m}=e;return n.createElement("div",{style:m,className:(0,s.Z)(i,r)},n.createElement("ul",null,t.map(((e,t)=>n.createElement("li",{className:l,key:t},n.createElement(u.Z,{sources:{light:e.src||v,dark:e.srcDark?e.srcDark:e.src||v},alt:e.title,loading:"lazy"}),n.createElement(p.Z,{to:e.link,className:a},n.createElement("div",{className:o},e.title),n.createElement("div",{className:c},n.createElement(d.Z,null))))))))}},1707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>w,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var n=r(7462),i=(r(7294),r(3905)),l=r(4998),a=r(3278),o=r(9351),c=r(2639),s=r(6231);const p={title:"\u9762\u8bd5  - JavaScript",hide_title:!0},u=void 0,d={unversionedId:"interview/interview-questions/index",id:"interview/interview-questions/index",title:"\u9762\u8bd5  - JavaScript",description:"<LinkList",source:"@site/docs/interview/interview-questions/index.mdx",sourceDirName:"interview/interview-questions",slug:"/interview/interview-questions/",permalink:"/docs/interview/interview-questions/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u9762\u8bd5  - JavaScript",hide_title:!0},sidebar:"interview",previous:{title:"Interview Questions",permalink:"/docs/interview/"},next:{title:"\u8ba1\u7b97\u673a\u7f51\u7edc",permalink:"/docs/interview/interview-questions/network"}},v={},m=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"Job Model",id:"job-model",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],f={toc:m};function w(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{src:o.Z,title:"JavaScript",mdxType:"FeatureIcon"}),(0,i.kt)(a.Z,{data:[{title:"\u8ba1\u7b97\u673a\u7f51\u7edc",link:"/docs/interview/interview-questions/network",src:o.Z},{title:"\u6d4f\u89c8\u5668",link:"/docs/interview/interview-questions/broswer",src:o.Z},{title:"HTML&CSS",link:"/docs/interview/interview-questions/HTML&CSS",src:o.Z},{title:"JavaScript",link:"/docs/interview/interview-questions/JavaScript",src:o.Z},{title:"TypeScript",link:"/docs/interview/interview-questions/TypeScript",src:o.Z},{title:"Vue",link:"/docs/interview/interview-questions/Vue",src:o.Z},{title:"React",link:"/docs/interview/javascript/interview-questions/React",src:o.Z}],mdxType:"LinkList"}),(0,i.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"\u9762\u8bd5\u662f\u4e00\u4ef6\u5f88\u4e3b\u89c2\u5f88\u96be\u7684\u4e8b\u60c5\u3002 \u9762\u8bd5\u4e0d\u901a\u8fc7\u4e0d\u4ee3\u8868\u4f60\u5c31\u4e0d\u5408\u683c\uff0c\u540c\u6837\u5730\u5373\u4f7f\u9762\u8bd5\u901a\u8fc7\u4e5f\u4e0d\u610f\u5473\u7740\u4f60\u5c31\u5408\u683c\u4e86\u3002 \u4f5c\u4e3a\u5019\u9009\u4eba\uff0c\u901a\u5e38\u4f1a\u7ed9\u4f60 45 \u5206\u949f\u7684\u65f6\u95f4\u6765\u8ba9\u4f60\u5c55\u793a\u81ea\u5df1\u7684\u6280\u80fd\u3002 \u4f5c\u4e3a\u4e00\u540d\u9762\u8bd5\u5b98\uff0c\u540c\u6837\u96be\u4ee5\u5728\u8fd9\u4e48\u77ed\u7684\u65f6\u95f4\u91cc\u8bc4\u4f30\u8fd9\u4e2a\u4eba\u662f\u5426\u9002\u5408\u8fd9\u9879\u5de5\u4f5c\u3002 \u5bf9\u4e8e\u9762\u8bd5\u6765\u8bf4\uff0c\u6ca1\u6709\u4efb\u4f55\u4e00\u79cd\u6807\u51c6\u80fd\u591f\u9002\u5408\u6240\u6709\u4eba\uff0c\u9762\u8bd5\u5b98\u901a\u5e38\u4f1a\u8986\u76d6\u67d0\u4e00\u4e2a\u9886\u57df\uff0c\u4f46\u9664\u6b64\u4e4b\u5916\uff0c\u4ed6\u4eec\u4f1a\u81ea\u884c\u51b3\u5b9a\u5e94\u8be5\u95ee\u54ea\u4e9b\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u51c6\u5907\u9762\u8bd5\u9898\uff0c\u6211\u4eec\u4e0d\u662f\u7167\u5f20\u5168\u80cc\uff0c\u800c\u662f\u4f9d\u636e\u9762\u8bd5\u9898\u53bb\u6df1\u5165\u6316\u6398\u95ee\u9898\u80cc\u540e\u7684\u539f\u7406\uff0c\u77e5\u5176\u7136\u77e5\u5176\u6240\u4ee5\u7136\uff0c\u90fd\u53ea\u662f\u4e3a\u4e86\u66f4\u597d\u7684\u5b9e\u73b0 Coding \u5b9e\u73b0\u5bf9\u672a\u6765\u7684\u89e3\u7801\u3002\u6bcf\u4e2a\u9636\u6bb5\u7684\u53d1\u5c55\u6280\u672f\u7684\u4fa7\u91cd\u70b9\u4e0d\u540c\uff0c\u4e3b\u6d41\u9762\u8bd5\u8303\u56f4\u4e5f\u6709\u6240\u4e0d\u540c\uff0c\u5373\u4f7f\u4e1a\u52a1\u6709\u6240\u4e0d\u540c\u7684\u516c\u53f8\u4f46\u5bf9\u4e3b\u6d41\u6280\u672f\u7684\u8981\u6c42\u5927\u81f4\u76f8\u540c\u3002\u5bf9\u4e8e\u4e2a\u4eba\u7684\u8981\u6c42\u4e5f\u662f\u8981\u6309\u7167\u53d1\u5c55\u7684\u987a\u5e8f\uff0c\u6709\u8981\u6c42\u7684\u8ba9\u81ea\u6211\u63d0\u5347\uff0c\u4ece\u6700\u57fa\u7840\u7684\u7f16\u7801\u80fd\u529b\uff0c\u5b8c\u6210\u5de5\u4f5c\u4efb\u52a1\uff0c\u5b9e\u73b0\u6a21\u5757\u529f\u80fd\uff1b\u5230\u5b66\u4f1a\u63a2\u7a76\u539f\u7406\uff0c\u4ece\u5185\u5728\u5c42\u9762\u4e0a\u53bb\u4f18\u5316\u81ea\u5df1\u7684\u4ee3\u7801\uff0c\u5728\u7f16\u7801\u8fc7\u7a0b\u4e2d\u5c31\u6709\u610f\u8bc6\u7684\u53bb\u671d\u7740\u66f4\u9ad8\u8981\u6c42\u7684\u65b9\u5411\u53bb\u601d\u8003\uff1b\u5f53\u601d\u60f3\u6709\u6240\u8f6c\u53d8\u4e86\u4e4b\u540e\uff0c\u63a5\u6765\u4e0b\u5c31\u4f1a\u7ad9\u5728\u6574\u4e2a\u4ea7\u54c1\u7684\u89d2\u5ea6\u53bb\u770b\u5f85\u5de5\u4f5c\u4efb\u52a1\u548c\u529f\u80fd\u6a21\u5757\uff0c\u5c31\u8981\u5c1d\u8bd5\u7740\u4ece\u6574\u4f53\u7684\u4e00\u4e2a\u67b6\u6784\u4e0a\u53bb\u601d\u8003\u9879\u76ee\u7684\u642d\u5efa\u3001\u914d\u7f6e\u3001\u9009\u578b\u7b49\u7b49\u9ad8\u5c42\u6b21\u7684\u95ee\u9898\u3002\u968f\u7740\u8fd9\u6837\u4e00\u6761\u7ebf\u53bb\u5b66\u4e60\uff0c\u53bb\u5b9e\u8df5\uff0c\u90a3\u4e48\u5728\u9762\u8bd5\u7684\u65f6\u5019\uff0c\u4e5f\u5c31\u4e0d\u7528\u8fc7\u591a\u7684\u62c5\u5fc3\u4e86\u3002"),(0,i.kt)("p",null,"\u8fd9\u91cc\u6211\u6574\u7406\u7684\u6240\u6709\u7684\u9762\u8bd5\u9898\uff0c\u90fd\u53ea\u662f\u4f5c\u4e3a\u4e00\u4e2a\u5b66\u4e60\u7684\u8d44\u6599\uff0c\u800c\u4e0d\u662f\u9762\u8bd5\u7684\u6377\u5f84\uff0c\u4ec5\u4f9b\u5927\u5bb6\u53c2\u8003\uff0c\u6709\u9700\u8981\u8865\u5145\u548c\u9519\u8bef\u4e4b\u5904\uff0c\u8fd8\u671b\u7559\u8a00\uff0c\u4ee5\u4fbf\u66f4\u597d\u7684\u7ef4\u62a4\uff0c\u53bb\u5e2e\u52a9\u66f4\u591a\u7684\u4eba\u3002"),(0,i.kt)("h2",{id:"job-model"},"Job Model"),(0,i.kt)("p",null,"\u5728\u9762\u8bd5\u4e4b\u524d\u5927\u5bb6\u5e94\u8be5\u90fd\u5bf9\u81ea\u5df1\u6709\u4e86\u4e00\u4e2a\u5b9a\u4f4d\uff0c\u81ea\u5df1\u8981\u9762\u8bd5\u7684\u5c42\u7ea7\u662f\u4ec0\u4e48\u6837\u7684\uff0c \u9700\u8981\u4ec0\u4e48\u7684\u6280\u80fd\uff0c\u6709\u4ec0\u4e48\u8981\u6c42\u3002\u8fd9\u91cc\u6ca1\u6709\u9488\u5bf9\u95ee\u9898\u53bb\u533a\u5206\u539f\u7406\u65b9\u9762\u7684\u8fd8\u662f\u8868\u9762\u4e0a\u7684\uff0c\u4e5f\u662f\u5e0c\u671b\u5927\u5bb6\u90fd\u80fd\u770b\u7684\u61c2\uff0c\u6709\u6240\u4e86\u89e3\uff0c\u8fd9\u6837\u624d\u4f1a\u5bf9\u4f60\u81ea\u8eab\u7684\u63d0\u5347\u6709\u610f\u4e49\u3002"),(0,i.kt)("p",null,"Job Model \u662f \u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u53c2\u8003\u6807\u51c6\u3002 \u5f53\u7136\u6bcf\u4e2a\u516c\u53f8\u7684 Job Model \u90fd\u4f1a\u4e0d\u592a\u4e00\u6837\uff0c \u5927\u5bb6\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u5fc3\u4eea\u7684\u516c\u53f8\u7684 Job Model \u4f5c\u4e3a\u53c2\u8003\uff0c\u81ea\u68c0\u4e00\u4e0b\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\u6211\u60f3\u8981\u9762\u8bd5\u7684\u662f P7 \u7684\u5c97\u4f4d\uff0c\u90a3\u4e48 P7 \u7684 Job Model \u662f\u4ec0\u4e48\u5462\uff1f\u6211\u53ef\u80fd\u9700\u8981\u63d0\u524d\u4e86\u89e3\u4e00\u4e0b\u3002 \u4e00\u822c\u6765\u8bf4 P7 \u7684\u5c97\u4f4d\u8981\u6c42\u4f1a\u6709\uff1a"),(0,i.kt)("p",null,"\u57fa\u7840\u624e\u5b9e\u3002\u8ba1\u7b97\u673a\u7f51\u7edc/\u8bbe\u8ba1\u6a21\u5f0f/\u6b63\u5219/\u5b89\u5168\u7b49\uff0c\u5e76\u4e14\u8981\u6df1\u5165\u4e86\u89e3\u5404\u9879\u6280\u672f\u7684\u539f\u7406\u548c\u8bbe\u8ba1\uff0c\u800c\u4e0d\u53ea\u662f\u4f7f\u7528\u3002\n\u7ecf\u9a8c\u4e30\u5bcc\u3002\u719f\u6089\u4e1a\u5185\u4e0d\u540c\u6280\u672f\u65b9\u6848\u4ee5\u53ca\u4f18\u7f3a\u70b9\uff0c\u5e76\u4e14\u80fd\u9009\u62e9\u6700\u5207\u5408\u5f53\u524d\u4e1a\u52a1\u7684\u65b9\u6848\u3002\n\u6280\u672f\u9a71\u52a8\u3002\u63a2\u7d22\u65b0\u6280\u672f\uff0c\u5c06\u65b0\u6280\u672f\u5e26\u5165\u56e2\u961f\uff0c\u5e76\u8d4b\u80fd\u4e1a\u52a1\u3002\n\u8f6f\u6280\u80fd\u3002\u534f\u540c\u80fd\u529b\u5f3a\uff0c\u5e26\u9886\u56e2\u961f\u6216\u8005\u8de8\u56e2\u961f\u5b8c\u6210\u76ee\u6807\u7684\u80fd\u529b\u3002 ...\n\u5927\u5bb6\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u671f\u671b\u5c42\u7ea7\uff0c\u4ee5\u53ca\u5fc3\u4eea\u516c\u53f8\u7684 Job Model \u8fdb\u884c\u81ea\u6d4b\u3002"),(0,i.kt)("p",null,"\u6211\u5728\u8fd9\u91cc\u753b\u4e86\u4e00\u4e2a\u7b80\u5316\u7248\u672c\u7684 Job Modal\uff0c\u5927\u5bb6\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u60c5\u51b5\u627e\u81ea\u5df1\u7684\u76ee\u6807\uff0c \u4e0d\u540c\u5c42\u7ea7\u9700\u8981\u638c\u63e1\u7684\u6df1\u5ea6\u548c\u5e7f\u5ea6\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u5927\u5bb6\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u60c5\u51b5\u5b66\u4e60\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1b4706bdf274898ae08a6bc2524223d~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"})),(0,i.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)(s.Z,{data:[{title:"Github",link:"https://github.com/wxlvip/Interviewer",src:c.Z}],mdxType:"ReferenceList"}))}w.isMDXComponent=!0},9351:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/javascript-a10d37851dff846a8a9e32cd99965a46.png"},2639:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pokeball-6c6b4cb944d0eedc032f9e0e1cee0fad.png"}}]);