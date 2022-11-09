"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[1453],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={title:"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217"},l=void 0,i={unversionedId:"algorithm/algorithm/dp/longest-increasing-subsequence",id:"algorithm/algorithm/dp/longest-increasing-subsequence",title:"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",description:"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",source:"@site/docs/algorithm/algorithm/dp/longest-increasing-subsequence.mdx",sourceDirName:"algorithm/algorithm/dp",slug:"/algorithm/algorithm/dp/longest-increasing-subsequence",permalink:"/docs/algorithm/algorithm/dp/longest-increasing-subsequence",draft:!1,tags:[],version:"current",frontMatter:{title:"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217"},sidebar:"algorithm",previous:{title:"1143. \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217",permalink:"/docs/algorithm/algorithm/dp/longest-common-subsequence"},next:{title:"53. \u6700\u5927\u5b50\u6570\u7ec4\u548c",permalink:"/docs/algorithm/algorithm/dp/maximum-subarray"}},p={},c=[{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:2}],u={toc:c};function s(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/longest-increasing-subsequence/"},"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217")),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u627e\u5230\u5176\u4e2d\u6700\u957f\u4e25\u683c\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002"),(0,a.kt)("p",null,"\u5b50\u5e8f\u5217\xa0\u662f\u7531\u6570\u7ec4\u6d3e\u751f\u800c\u6765\u7684\u5e8f\u5217\uff0c\u5220\u9664\uff08\u6216\u4e0d\u5220\u9664\uff09\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u800c\u4e0d\u6539\u53d8\u5176\u4f59\u5143\u7d20\u7684\u987a\u5e8f\u3002\u4f8b\u5982\uff0c","[3,6,2,7]"," \u662f\u6570\u7ec4 ","[0,3,1,6,2,2,7]"," \u7684\u5b50\u5e8f\u5217\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\xa01\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1anums = [10,9,2,5,3,7,101,18]\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u662f [2,3,7,101]\uff0c\u56e0\u6b64\u957f\u5ea6\u4e3a 4 \u3002\n")),(0,a.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1anums = [0,1,0,3,2,3]\n\u8f93\u51fa\uff1a4\n")),(0,a.kt)("p",null,"\u793a\u4f8b 3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1anums = [7,7,7,7,7,7,7]\n\u8f93\u51fa\uff1a1\n")),(0,a.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dp")," \u6570\u7ec4\u7684\u5b9a\u4e49\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"dp[i]")," \u8868\u793a\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"nums[i]")," \u8fd9\u4e2a\u6570\u7ed3\u5c3e\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48 ",(0,a.kt)("inlineCode",{parentName:"p"},"dp")," \u6570\u7ec4\u4e2d\u6700\u5927\u7684\u90a3\u4e2a\u503c\u5c31\u662f\u6700\u957f\u7684\u9012\u589e\u5b50\u5e8f\u5217\u957f\u5ea6\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5df2\u7ecf\u77e5\u9053\u4e86 dp","[0..4]"," \u7684\u6240\u6709\u7ed3\u679c\uff0c\u6211\u4eec\u5982\u4f55\u901a\u8fc7\u8fd9\u4e9b\u5df2\u77e5\u7ed3\u679c\u63a8\u51fa dp","[5]"," \u5462\uff1f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221027125958131",src:t(9567).Z,width:"904",height:"456"})),(0,a.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar lengthOfLIS = function (nums) {\n    const dp = new Array(nums.length).fill(1);\n    for (let i = 0; i < nums.length; i++) {\n        // i\u4e0ei\u524d\u9762\u7684\u5143\u7d20\u6bd4\u8f83\n        for (let j = 0; j < i; j++) {\n            // \u627e\u6bd4i\u5c0f\u7684\u5143\u7d20\uff0c\u627e\u5230\u4e00\u4e2a\uff0c\u5c31\u8ba9\u5f53\u524d\u5e8f\u5217\u7684\u6700\u957f\u5b50\u5e8f\u5217\u957f\u5ea6\u52a01\n            if (nums[i] > nums[j]) {\n                dp[i] = Math.max(dp[i], dp[j] + 1);\n            }\n        }\n    }\n    // \u627e\u51fa\u6700\u5927\u7684\u5b50\u5e8f\u5217\n    return Math.max(...dp);\n};\n")))}s.isMDXComponent=!0},9567:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-20221027125958131-ad7c3c54f4c056ae157e685cbb679fbe.png"}}]);