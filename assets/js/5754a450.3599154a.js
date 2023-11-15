"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[7482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,v=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5713:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const a="highlightArea__DwO";var o=r(6010),c=r(838);function i(e){let{children:t,bgColor:r,wrapperClassName:i,wrapperStyle:l}=e;const s={backgroundColor:`${(0,c.yz)(r)}`},p=Object.assign(s,l);return n.createElement("span",{className:(0,o.Z)(a,i),style:p},t)}},838:(e,t,r)=>{let n;function a(){const e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}r.d(t,{tq:()=>a,yz:()=>c}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(n||(n={}));var o;function c(e){switch(e){case o.Primary:case"":case void 0:case null:return"#25c2a0";case o.Red:return"#e53935";case o.Pink:return"#d81b60";case o.Blue:return"#1e88e5";case o.Purple:return"#ba68c8";case o.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(o||(o={}))},7733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(5713);const o={title:"\u4ee3\u7801\u89c4\u8303"},c=void 0,i={unversionedId:"javascript/code-specification",id:"javascript/code-specification",title:"\u4ee3\u7801\u89c4\u8303",description:"\u58f0\u660e\u53d8\u91cf",source:"@site/docs/javascript/code-specification.mdx",sourceDirName:"javascript",slug:"/javascript/code-specification",permalink:"/blog/docs/javascript/code-specification",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4ee3\u7801\u89c4\u8303"},sidebar:"javascript",previous:{title:"JavaScript",permalink:"/blog/docs/javascript/"},next:{title:"\u53d8\u91cf",permalink:"/blog/docs/javascript/variable"}},l={},s=[{value:"\u58f0\u660e\u53d8\u91cf",id:"\u58f0\u660e\u53d8\u91cf",level:2},{value:"\u4e0d\u4f7f\u7528 var",id:"\u4e0d\u4f7f\u7528-var",level:3},{value:"\u4f18\u5148\u4f7f\u7528 const\uff0clet \u6b21\u4e4b",id:"\u4f18\u5148\u4f7f\u7528-constlet-\u6b21\u4e4b",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u58f0\u660e\u53d8\u91cf"},"\u58f0\u660e\u53d8\u91cf"),(0,a.kt)("h3",{id:"\u4e0d\u4f7f\u7528-var"},"\u4e0d\u4f7f\u7528 var"),(0,a.kt)("p",null,"\u9650\u5236\u81ea\u5df1\u53ea\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," \u6709\u52a9\u4e8e\u63d0\u5347\u4ee3\u7801\u8d28\u91cf\uff0c\u56e0\u4e3a\u53d8\u91cf\u6709\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u660e\u786e\u7684\u4f5c\u7528\u57df\u3001\u58f0\u660e\u4f4d\u7f6e"),"\uff0c\u4ee5\u53ca\u4e0d\u53d8\u7684\u503c\u3002"),(0,a.kt)("h3",{id:"\u4f18\u5148\u4f7f\u7528-constlet-\u6b21\u4e4b"},"\u4f18\u5148\u4f7f\u7528 const\uff0clet \u6b21\u4e4b"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," \u58f0\u660e\u53ef\u4ee5\u8ba9\u6d4f\u89c8\u5668\u8fd0\u884c\u65f6\u5f3a\u5236\u4fdd\u6301\u53d8\u91cf\u4e0d\u53d8\uff0c\u4e5f\u53ef\u4ee5\u8ba9\u9759\u6001\u4ee3\u7801\u5206\u6790\u5de5\u5177\u63d0\u524d\u53d1\u73b0\u4e0d\u5408\u6cd5\u7684\u8d4b\u503c\u64cd\u4f5c\u3002\u53ea\u5728",(0,a.kt)("strong",{parentName:"p"},"\u63d0\u524d\u77e5\u9053\u672a\u6765\u4f1a\u6709\u4fee\u6539"),"\u65f6\uff0c\u518d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),"\u3002"))}u.isMDXComponent=!0}}]);