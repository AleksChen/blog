"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[4614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"110. \u5e73\u8861\u4e8c\u53c9\u6811"},l=void 0,c={unversionedId:"algorithm/leetcode/record/110balanced-binary-tree",id:"algorithm/leetcode/record/110balanced-binary-tree",title:"110. \u5e73\u8861\u4e8c\u53c9\u6811",description:"110. \u5e73\u8861\u4e8c\u53c9\u6811",source:"@site/docs/algorithm/leetcode/record/110balanced-binary-tree.md",sourceDirName:"algorithm/leetcode/record",slug:"/algorithm/leetcode/record/110balanced-binary-tree",permalink:"/blog/docs/algorithm/leetcode/record/110balanced-binary-tree",draft:!1,tags:[],version:"current",frontMatter:{title:"110. \u5e73\u8861\u4e8c\u53c9\u6811"}},i={},p=[{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2}],u={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/balanced-binary-tree/"},"110. \u5e73\u8861\u4e8c\u53c9\u6811")),(0,o.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u5224\u65ad\u5b83\u662f\u5426\u662f\u9ad8\u5ea6\u5e73\u8861\u7684\u4e8c\u53c9\u6811\u3002"),(0,o.kt)("p",null,"\u672c\u9898\u4e2d\uff0c\u4e00\u68f5\u9ad8\u5ea6\u5e73\u8861\u4e8c\u53c9\u6811\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("p",null,"\u4e00\u4e2a\u4e8c\u53c9\u6811\u6bcf\u4e2a\u8282\u70b9 \u7684\u5de6\u53f3\u4e24\u4e2a\u5b50\u6811\u7684\u9ad8\u5ea6\u5dee\u7684\u7edd\u5bf9\u503c\u4e0d\u8d85\u8fc7 1 \u3002"),(0,o.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,o.kt)("p",null,"\u6df1\u5ea6\u4f18\u5148 + \u5206\u6cbb\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u540e\u5e8f\u904d\u5386\u4e8c\u53c9\u6811\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u5de6\u53f3\u5b50\u6811\u8fdb\u884c\u5224\u65ad\u3002\u5982\u679c\u5de6\u53f3\u5b50\u6811\u6709\u4e00\u4e2a\u662f\u4e0d\u5e73\u8861\u7684\u6216\u8005\u5de6\u53f3\u5b50\u6811\u7684\u6df1\u5ea6\u5dee\u5927\u4e8e 1 \uff0c\u90a3\u4e48\u8fd4\u56de -1 \u8868\u793a\u5f53\u524d\u5b50\u6811\u662f\u4e0d\u5e73\u8861\u7684\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u5de6\u53f3\u5b50\u6811\u5e73\u8861\uff0c\u8fd4\u56de\u5f53\u524d\u8282\u70b9\u7684\u6df1\u5ea6\uff08\u5de6\u53f3\u5b50\u6811\u6df1\u5ea6\u6700\u5927\u503c + 1\uff09\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u6700\u540e\u7ed3\u679c\u4e0d\u7b49\u4e8e -1 \u8bf4\u660e\u662f\u4e00\u68f5\u5e73\u8861\u4e8c\u53c9\u6811\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var isBalanced = function (root) {\n  const getDeepth = (root) => {\n    if (!root) {\n      return 0;\n    }\n    const leftDeepth = getDeepth(root.left);\n    const rightDeepth = getDeepth(root.right);\n    if (\n      leftDeepth === -1 ||\n      rightDeepth === -1 ||\n      Math.abs(leftDeepth - rightDeepth) > 1\n    ) {\n      return -1;\n    }\n    return Math.max(leftDeepth, rightDeepth) + 1;\n  };\n  return getDeepth(root) !== -1;\n};\n")))}f.isMDXComponent=!0}}]);