"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[3933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(a),u=n,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||c;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<c;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6982:(e,t,a)=>{a.d(t,{Z:()=>o});var r,n=a(7294);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}const o=e=>{let{title:t,titleId:a,...o}=e;return n.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:12,height:16,viewBox:"0 0 12 16",role:"img","aria-labelledby":a},o),t?n.createElement("title",{id:a},t):null,r||(r=n.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})))}},4998:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294);const n="featureIconArea_kxlx",c="title_Utvl";var o=a(6010),l=a(941);function s(e){let{onClick:t,src:a,srcDark:s,title:i,wrapperClassName:p,wrapperStyle:m}=e;return r.createElement("div",{className:(0,o.Z)(n,p),style:m},r.createElement(l.Z,{sources:{light:a,dark:s||a},alt:i,loading:"lazy",onClick:t}),r.createElement("div",{className:c},i))}},3278:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294);const n="list_rgtH",c="item_i3mt";var o=a(6010),l=a(9960),s=a(941);function i(e){let{data:t=[],wrapperClassName:a,wrapperStyle:i}=e;return r.createElement("div",{style:i,className:(0,o.Z)(n,a)},t.map((e=>r.createElement("div",{key:e.title,className:c},r.createElement(l.Z,{to:e.link},r.createElement(s.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title)))))}},6231:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(7294);const n="unorderedList_Bf_c",c="listItem_mbuj",o="titleArea_SAgt",l="title_RnVK",s="linkSVG_P7Tu";var i=a(6010),p=a(9960),m=a(941),d=a(6982);const u=a.p+"assets/images/chrome-fb03012f7168f90e8c56ea6703933408.png";function k(e){let{data:t=[],wrapperClassName:a,wrapperStyle:k}=e;return r.createElement("div",{style:k,className:(0,i.Z)(n,a)},r.createElement("ul",null,t.map(((e,t)=>r.createElement("li",{className:c,key:t},r.createElement(m.Z,{sources:{light:e.src||u,dark:e.srcDark?e.srcDark:e.src||u},alt:e.title,loading:"lazy"}),r.createElement(p.Z,{to:e.link,className:o},r.createElement("div",{className:l},e.title),r.createElement("div",{className:s},r.createElement(d.Z,null))))))))}},8480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>v,frontMatter:()=>k,metadata:()=>g,toc:()=>N});var r=a(7462),n=(a(7294),a(3905)),c=a(4998),o=a(3278),l=a(6231),s=a(9195),i=a(4327),p=a(6347),m=a(3575),d=a(310),u=a(7719);const k={title:"React",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},h=void 0,g={unversionedId:"react/index",id:"react/index",title:"React",description:"",source:"@site/docs/react/index.mdx",sourceDirName:"react",slug:"/react/",permalink:"/blog/docs/react/",draft:!1,tags:[{label:"React",permalink:"/blog/docs/tags/react"}],version:"current",frontMatter:{title:"React",hide_title:!0,description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},sidebar:"react",next:{title:"Hooks",permalink:"/blog/docs/react/hooks/"}},f={},N=[{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:2},{value:"Fiber\u662f\u4ec0\u4e48\uff1f",id:"fiber\u662f\u4ec0\u4e48",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2}],b={toc:N};function v(e){let{components:t,...k}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,k,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c.Z,{src:s.Z,title:"React",mdxType:"FeatureIcon"}),(0,n.kt)("h2",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"},"React \u751f\u547d\u5468\u671f"),"\u6307\u7684\u662f\u7ec4\u4ef6\u4ece\u521b\u5efa\u5230\u5378\u8f7d\u7684\u6574\u4e2a\u8fc7\u7a0b\u6bcf\u4e2a\u8fc7\u7a0b\u90fd\u6709\u5bf9\u5e94\u7684\u94a9\u5b50\u51fd\u6570\u5b83\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u9636\u6bb5\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6302\u8f7d\u9636\u6bb5\u7ec4\u4ef6\u5b9e\u4f8b\u88ab\u521b\u5efa\u548c\u63d2\u5165 DOM \u6811\u7684\u8fc7\u7a0b\uff0c\u5176\u751f\u547d\u5468\u671f\u8c03\u7528\u987a\u5e8f\u5982\u4e0b\uff1a",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#constructor"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"constructor()")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops"},(0,n.kt)("inlineCode",{parentName:"a"},"static getDerivedStateFromProps()"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#render"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"render()")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#componentdidmount"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"componentDidMount()")))))),(0,n.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u9636\u6bb5\u7ec4\u4ef6\u88ab\u91cd\u65b0\u6e32\u67d3\u7684\u8fc7\u7a0b\u3002\u5f53\u7ec4\u4ef6\u7684 props \u6216 state \u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u89e6\u53d1\u66f4\u65b0\u3002\u7ec4\u4ef6\u66f4\u65b0\u7684\u751f\u547d\u5468\u671f\u8c03\u7528\u987a\u5e8f\u5982\u4e0b\uff1a",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops"},(0,n.kt)("inlineCode",{parentName:"a"},"static getDerivedStateFromProps()"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate"},(0,n.kt)("inlineCode",{parentName:"a"},"shouldComponentUpdate()"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#render"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"render()")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate"},(0,n.kt)("inlineCode",{parentName:"a"},"getSnapshotBeforeUpdate()"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"componentDidUpdate()")))))),(0,n.kt)("li",{parentName:"ol"},"\u5378\u8f7d\u9636\u6bb5\u7ec4\u4ef6\u4eceDom\u6811\u4e2d\u88ab\u5220\u9664\u7684\u8fc7\u7a0b\u3002\u5f53\u7ec4\u4ef6\u4ece DOM \u4e2d\u79fb\u9664\u65f6\u4f1a\u8c03\u7528\u5982\u4e0b\u65b9\u6cd5\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#componentwillunmount"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"componentWillUnmount()")))))),(0,n.kt)("li",{parentName:"ol"},"\u9519\u8bef\u5904\u7406\u3002\u5f53\u6e32\u67d3\u8fc7\u7a0b\uff0c\u751f\u547d\u5468\u671f\uff0c\u6216\u5b50\u7ec4\u4ef6\u7684\u6784\u9020\u51fd\u6570\u4e2d\u629b\u51fa\u9519\u8bef\u65f6\uff0c\u4f1a\u8c03\u7528\u5982\u4e0b\u65b9\u6cd5\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromerror"},(0,n.kt)("inlineCode",{parentName:"a"},"static getDerivedStateFromError()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/react-component.html#componentdidcatch"},(0,n.kt)("inlineCode",{parentName:"a"},"componentDidCatch()")))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20221027132604772",src:a(346).Z,width:"1751",height:"1018"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20221027132634066",src:a(9217).Z,width:"1738",height:"1019"})),(0,n.kt)("h2",{id:"fiber\u662f\u4ec0\u4e48"},"Fiber\u662f\u4ec0\u4e48\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fiber \u5c31\u662f\u91cd\u65b0\u5b9e\u73b0\u7684\u5806\u6808\u5e27\uff0c\u672c\u8d28\u4e0a Fiber \u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u4e00\u4e2a\u865a\u62df\u7684\u5806\u6808\u5e27\uff0c\u5c06\u53ef\u4e2d\u65ad\u7684\u4efb\u52a1\u62c6\u5206\u6210\u591a\u4e2a\u5b50\u4efb\u52a1\uff0c\u901a\u8fc7\u6309\u7167\u4f18\u5148\u7ea7\u6765\u81ea\u7531\u8c03\u5ea6\u5b50\u4efb\u52a1\uff0c\u5206\u6bb5\u66f4\u65b0\uff0c\u4ece\u800c\u5c06\u4e4b\u524d\u7684\u540c\u6b65\u6e32\u67d3\u6539\u4e3a\u5f02\u6b65\u6e32\u67d3\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u8bf4 Fiber \u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784(\u5806\u6808\u5e27)\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u662f\u4e00\u79cd\u89e3\u51b3\u53ef\u4e2d\u65ad\u7684\u8c03\u7528\u4efb\u52a1\u7684\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\uff0c\u5b83\u7684\u7279\u6027\u5c31\u662f\u65f6\u95f4\u5206\u7247(time slicing)\u548c\u6682\u505c(supense)\u3002")),(0,n.kt)(o.Z,{data:[{title:"Hooks",link:"/docs/react/hooks",src:s.Z},{title:"DOM",link:"/docs/react/dom",src:s.Z},{title:"\u6837\u5f0f\u548c CSS",link:"/docs/react/style-and-css",src:s.Z},{title:"\u7ec4\u4ef6\u4ea4\u4e92",link:"/docs/react/components-interaction",src:s.Z},{title:"\u89e3\u51b3\u65b9\u6848",link:"/docs/react/solutions",src:s.Z},{title:"\u6700\u4f73\u5b9e\u8df5",link:"/docs/react/best-practice",src:s.Z},{title:"Create React App",link:"/docs/react/create-react-app",src:i.Z},{title:"React Router",link:"/docs/react/react-router",src:p.Z},{title:"React i18next",link:"/docs/react/react-i18next",src:m.Z},{title:"Redux",link:"/docs/react/redux",src:d.Z},{title:"\u4f7f\u7528 TypeScript",link:"/docs/react/use-typescript",src:u.Z}],mdxType:"LinkList"}),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)(l.Z,{data:[{title:"React Docs",link:"https://reactjs.org/",src:s.Z},{title:"New React Docs (Beta)",link:"https://beta.reactjs.org/",src:s.Z}],mdxType:"ReferenceList"}),(0,n.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,n.kt)(l.Z,{data:[{title:"React Resource",link:"https://reactresources.com/",src:s.Z}],mdxType:"ReferenceList"}))}v.isMDXComponent=!0},4327:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_react_app-266146ffd60070d2d3a33bbdfd40514e.png"},3575:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/i18next-c0a46524e30577f0acf5320721cd8d5b.png"},9195:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/react-222b46ec12ee705ead716d594add0e11.png"},6347:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/react_router-9356026c61db842d0f2509f01796488a.png"},310:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/redux-7fec6369cecd1cbd44d6b36083f86c17.png"},7719:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/typescript-af108db04a54d784da9bf75244a6daf5.png"},346:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20221027132604772-b79d3a70a80d6accc6911ffaced0a4a7.png"},9217:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-20221027132634066-7581748b085c1fbe2787429034ec880f.png"}}]);