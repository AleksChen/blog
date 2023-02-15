"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[440],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3809:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={title:"\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"},l=void 0,i={unversionedId:"algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal",id:"algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal",title:"\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386",description:"144. \u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386",source:"@site/docs/algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal.md",sourceDirName:"algorithm/dataStructure/binary-tree",slug:"/algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal",permalink:"/blog/docs/algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"},sidebar:"algorithm",previous:{title:"\u4e8c\u53c9\u6811\u7684\u57fa\u672c\u64cd\u4f5c",permalink:"/blog/docs/algorithm/dataStructure/binary-tree/basic-operation"},next:{title:"\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",permalink:"/blog/docs/algorithm/dataStructure/binary-tree/binary-tree-inorder-traversal"}},c={},u=[{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2},{value:"\u9012\u5f52\u5199\u6cd5",id:"\u9012\u5f52\u5199\u6cd5",level:2},{value:"\u975e\u9012\u5f52\u89e3\u6cd5",id:"\u975e\u9012\u5f52\u89e3\u6cd5",level:2}],p={toc:u};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/binary-tree-preorder-traversal/"},"144. \u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386")),(0,a.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,a.kt)("p",null,"\u4ece\u6839\u8282\u70b9\u5f00\u59cb\uff0c\u6309\u7167 ",(0,a.kt)("strong",{parentName:"p"},"\u6839\u8282\u70b9->\u5de6\u5b50\u8282\u70b9->\u53f3\u5b50\u8282\u70b9")," \u7684\u987a\u5e8f\u8fdb\u884c\u904d\u5386\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8f93\u5165: [1,null,2,3]  \n   1\n    \\\n     2\n    /\n   3 \n\u8f93\u51fa: [1,2,3]\n")),(0,a.kt)("h2",{id:"\u9012\u5f52\u5199\u6cd5"},"\u9012\u5f52\u5199\u6cd5"),(0,a.kt)("p",null,"\u5bf9\u6bcf\u4e2a\u8282\u70b9\u90fd\u662f\u4e00\u81f4\u7684\u64cd\u4f5c\u3002\u5982\u679c\u8282\u70b9\u5b58\u5728\u5c31\u5148\u8bbf\u95ee\u8be5\u8282\u70b9\uff0c\u7136\u540e\u524d\u5e8f\u904d\u5386\u8bbf\u95ee\u5de6\u5b50\u8282\u70b9\uff0c\u518d\u524d\u5e8f\u904d\u5386\u53f3\u5b50\u8282\u70b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var preorderTraversal = function(root) {\n    const result = [];\n    const preorderTraverse = (root) => {\n        if(root) {\n            result.push(root.val)\n            preorderTraverse(root.left);\n            preorderTraverse(root.right);\n        }\n    }\n    preorderTraverse(root)\n    return result\n};\n")),(0,a.kt)("h2",{id:"\u975e\u9012\u5f52\u89e3\u6cd5"},"\u975e\u9012\u5f52\u89e3\u6cd5"),(0,a.kt)("p",null,"\u53d6\u6839\u8282\u70b9\u4e3a\u76ee\u6807\u8282\u70b9\u5f00\u59cb\u904d\u5386\u3002\u4e0d\u7406\u89e3\u53ef\u4ee5\u753b\u56fe\u6765\u770b\u6267\u884c\u987a\u5e8f\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u76ee\u6807\u8282\u70b9"),(0,a.kt)("li",{parentName:"ol"},"\u5de6\u5b50\u8282\u70b9\u5165\u6808 -> \u76f4\u5230\u5de6\u5b50\u8282\u70b9\u4e3a\u7a7a"),(0,a.kt)("li",{parentName:"ol"},"\u8282\u70b9\u51fa\u6808\uff0c\u4ee5\u53f3\u5b50\u8282\u70b9\u4e3a\u76ee\u6807\u8282\u70b9\uff0c\u518d\u6b21\u6267\u884c 1\u30012\u30013 \u6b65\u9aa4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var preorderTraversal = function (root) {\n    const result = [];\n    const stack = [];\n    let current = root;\n    while (current || stack.length > 0) {\n        // \u8bbf\u95ee\u5230\u5de6\u5b50\u6811\u7684\u53f6\u5b50\u8282\u70b9\n        while (current) {\n            // \u5148\u8bbf\u95ee\u6839\u8282\u70b9\u7684\u503c\n            result.push(current.val);\n            stack.push(current);\n            current = current.left;\n        }\n        current = stack.pop(); // \u6839\u8282\u70b9\u5f39\u51fa\n        current = current.right;\n    }\n    return result\n};\n")))}s.isMDXComponent=!0}}]);