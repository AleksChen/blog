"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[5627],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=l,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const o={title:"\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6"},a=void 0,i={unversionedId:"algorithm/dataStructure/binary-tree/minimum-depth-of-binary-tree",id:"algorithm/dataStructure/binary-tree/minimum-depth-of-binary-tree",title:"\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",description:"111. \u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",source:"@site/docs/algorithm/dataStructure/binary-tree/minimum-depth-of-binary-tree.md",sourceDirName:"algorithm/dataStructure/binary-tree",slug:"/algorithm/dataStructure/binary-tree/minimum-depth-of-binary-tree",permalink:"/docs/algorithm/dataStructure/binary-tree/minimum-depth-of-binary-tree",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6"}},p={},u=[{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2},{value:"\u9012\u5f52\u5199\u6cd5 DFS",id:"\u9012\u5f52\u5199\u6cd5-dfs",level:2},{value:"\u975e\u9012\u5f52\u89e3\u6cd5 BFS",id:"\u975e\u9012\u5f52\u89e3\u6cd5-bfs",level:2}],c={toc:u};function m(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/minimum-depth-of-binary-tree/"},"111. \u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6")),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u627e\u51fa\u5176\u6700\u5c0f\u6df1\u5ea6\u3002"),(0,l.kt)("p",null,"\u6700\u5c0f\u6df1\u5ea6\u662f\u4ece\u6839\u8282\u70b9\u5230\u6700\u8fd1\u53f6\u5b50\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84\u4e0a\u7684\u8282\u70b9\u6570\u91cf\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a"),"\u53f6\u5b50\u8282\u70b9\u662f\u6307\u6ca1\u6709\u5b50\u8282\u70b9\u7684\u8282\u70b9\u3002"),(0,l.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,l.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(8177).Z,width:"432",height:"302"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1aroot = [3,9,20,null,null,15,7]\n\u8f93\u51fa\uff1a2\n")),(0,l.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1aroot = [2,null,3,null,4,null,5,null,6]\n\u8f93\u51fa\uff1a5\n")),(0,l.kt)("h2",{id:"\u9012\u5f52\u5199\u6cd5-dfs"},"\u9012\u5f52\u5199\u6cd5 DFS"),(0,l.kt)("p",null,"\u5bf9\u6bcf\u4e2a\u8282\u70b9\u90fd\u662f\u4e00\u81f4\u7684\u64cd\u4f5c\u3002\u5982\u679c\u8282\u70b9\u5b58\u5728\u5c31\u5148\u8bbf\u95ee\u8be5\u8282\u70b9\uff0c\u7136\u540e\u524d\u5e8f\u904d\u5386\u8bbf\u95ee\u5de6\u5b50\u8282\u70b9\uff0c\u518d\u524d\u5e8f\u904d\u5386\u53f3\u5b50\u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u65b9\u5f0f\u4e00\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var minDepth = function (root) {\n    const getDepth = (root, deep = 0) => {\n        if (root === null) {\n            return deep;\n        }\n        deep++;\n        // \u53ea\u5173\u6ce8\u5b58\u5728\u7684\u5b50\u8282\u70b9\n        if (root.left && root.right) {\n            const leftDepth = getDepth(root.left, deep);\n            const rightDepth = getDepth(root.right, deep);\n            return Math.min(leftDepth, rightDepth)\n        }\n        if (root.left) return getDepth(root.left, deep)\n        return getDepth(root.right, deep)\n    }\n    return getDepth(root)\n};\n")),(0,l.kt)("p",null,"\u65b9\u5f0f\u4e8c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var minDepth = function (root) {\n    if (root === null) {\n        return 0;\n    }\n    if (!root.left && !root.right) {\n        return 1\n    }\n    let result = Number.MAX_SAFE_INTEGER;\n    if (root.left) result = Math.min(minDepth(root.left), result)\n    if (root.right) result = Math.min(minDepth(root.right), result)\n    return result + 1\n};\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u590d\u6742\u5ea6\u5206\u6790")),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"O(N)"),"\uff0c\u5176\u4e2d N \u662f\u6811\u7684\u8282\u70b9\u6570\u3002\u5bf9\u6bcf\u4e2a\u8282\u70b9\u8bbf\u95ee\u4e00\u6b21\u3002"),(0,l.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"O(H)"),"\uff0c\u5176\u4e2d H \u662f\u6811\u7684\u9ad8\u5ea6\u3002\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3b\u8981\u53d6\u51b3\u4e8e\u9012\u5f52\u65f6\u6808\u7a7a\u95f4\u7684\u5f00\u9500\uff0c\u6700\u574f\u60c5\u51b5\u4e0b\uff0c\u6811\u5448\u73b0\u94fe\u72b6\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"O(N)"),"\u3002\u5e73\u5747\u60c5\u51b5\u4e0b\u6811\u7684\u9ad8\u5ea6\u4e0e\u8282\u70b9\u6570\u7684\u5bf9\u6570\u6b63\u76f8\u5173\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"}," O(log N)"),"\u3002"),(0,l.kt)("h2",{id:"\u975e\u9012\u5f52\u89e3\u6cd5-bfs"},"\u975e\u9012\u5f52\u89e3\u6cd5 BFS"),(0,l.kt)("p",null,"\u961f\u5217\u89e3\u6cd5\u3002\u6bcf\u4e2a\u8282\u70b9\u989d\u5916\u4f7f\u7528\u4e00\u4e2a\u5b57\u6bb5\u53bb\u8bb0\u5f55\u5f53\u524d\u8282\u70b9\u7684\u6df1\u5ea6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var minDepth = function (root) {\n    if (root === null) {\n        return 0;\n    }\n    const queue = [[root, 1]]\n    let result = 0;\n    while (queue.length) {\n        let [current, deep] = queue.shift(); // deep \u8868\u793a\u5f53\u524d\u8282\u70b9\u7684\u6df1\u5ea6\n        result = deep; // \u540c\u6b65\u5f53\u524d\u7684\u6700\u5927\u6df1\u5ea6\n        if (!current.left && !current.right) break; // \u5982\u679c\u6ca1\u6709\u5b50\u8282\u70b9\u4e86\uff0c\u8bf4\u660e\u5df2\u7ecf\u5230\u53f6\u5b50\u8282\u70b9\uff0c\u53ef\u4ee5\u5f53\u524d\u904d\u5386\uff0c\u53bb\u62ff\u65b0\u7684\u961f\u5217\u5143\u7d20\n        current.left && queue.push([current.left, deep + 1])\n        current.right && queue.push([current.right, deep + 1])\n    }\n    return result\n};\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u590d\u6742\u5ea6\u5206\u6790")),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"O(N)"),"\uff0c\u5176\u4e2d N \u662f\u6811\u7684\u8282\u70b9\u6570\u3002\u5bf9\u6bcf\u4e2a\u8282\u70b9\u8bbf\u95ee\u4e00\u6b21\u3002"),(0,l.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"O(N)"),"\uff0c\u5176\u4e2d N \u662f\u6811\u7684\u8282\u70b9\u6570\u3002\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3b\u8981\u53d6\u51b3\u4e8e\u961f\u5217\u7684\u5f00\u9500\uff0c\u961f\u5217\u4e2d\u7684\u5143\u7d20\u4e2a\u6570\u4e0d\u4f1a\u8d85\u8fc7\u6811\u7684\u8282\u70b9\u6570\u3002"))}m.isMDXComponent=!0},8177:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ex_depth-59a282e81be42e786b8ed750859e816c.jpg"}}]);