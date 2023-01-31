"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[7741],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=o,h=s["".concat(u,".").concat(f)]||s[f]||d[f]||i;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={title:"\u4e8c\u53c9\u6811\u7684\u57fa\u672c\u64cd\u4f5c"},a=void 0,l={unversionedId:"algorithm/dataStructure/binary-tree/basic-operation",id:"algorithm/dataStructure/binary-tree/basic-operation",title:"\u4e8c\u53c9\u6811\u7684\u57fa\u672c\u64cd\u4f5c",description:"\u6ee1\u4e8c\u53c9\u6811\u4e0e\u5b8c\u5168\u4e8c\u53c9\u6811",source:"@site/docs/algorithm/dataStructure/binary-tree/basic-operation.md",sourceDirName:"algorithm/dataStructure/binary-tree",slug:"/algorithm/dataStructure/binary-tree/basic-operation",permalink:"/cww/docs/algorithm/dataStructure/binary-tree/basic-operation",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e8c\u53c9\u6811\u7684\u57fa\u672c\u64cd\u4f5c"},sidebar:"algorithm",previous:{title:"\u4e8c\u53c9\u6811",permalink:"/cww/docs/algorithm/dataStructure/binary-tree/"},next:{title:"\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386",permalink:"/cww/docs/algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal"}},u={},c=[{value:"\u6ee1\u4e8c\u53c9\u6811\u4e0e\u5b8c\u5168\u4e8c\u53c9\u6811",id:"\u6ee1\u4e8c\u53c9\u6811\u4e0e\u5b8c\u5168\u4e8c\u53c9\u6811",level:2},{value:"\u4e8c\u53c9\u641c\u7d22\u6811\u57fa\u672c\u7ed3\u6784",id:"\u4e8c\u53c9\u641c\u7d22\u6811\u57fa\u672c\u7ed3\u6784",level:2}],p={toc:c};function d(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6ee1\u4e8c\u53c9\u6811\u4e0e\u5b8c\u5168\u4e8c\u53c9\u6811"},"\u6ee1\u4e8c\u53c9\u6811\u4e0e\u5b8c\u5168\u4e8c\u53c9\u6811"),(0,o.kt)("p",null,"\u6ee1\u4e8c\u53c9\u6811\uff1a\u9ad8\u5ea6\u4e3a h\uff0c\u7531 2",(0,o.kt)("sup",null,"h")," - 1 \u4e2a\u8282\u70b9\u6784\u6210\u7684\u4e8c\u53c9\u6811\u6210\u4e3a\u6ee1\u4e8c\u53c9\u6811\uff0c\u5373\u6bcf\u5c42\u8282\u70b9\u90fd\u662f\u6ee1\u7684\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(5117).Z,width:"388",height:"310"})),(0,o.kt)("p",null,"\u5b8c\u5168\u4e8c\u53c9\u6811\uff1a\u5b8c\u5168\u4e8c\u53c9\u6811\u662f\u7531\u6ee1\u4e8c\u53c9\u6811\u800c\u5f15\u51fa\u6765\u7684\uff0c\u82e5\u8bbe\u4e8c\u53c9\u6811\u7684\u6df1\u5ea6\u4e3a h\uff0c\u9664\u7b2c h \u5c42\u5916\uff0c\u5176\u5b83\u5404\u5c42 (1\uff5eh-1) \u7684\u8282\u70b9\u6570\u90fd\u8fbe\u5230\u6700\u5927\u4e2a\u6570(\u5373 1~h-1\u5c42\u4e3a\u4e00\u4e2a\u6ee1\u4e8c\u53c9\u6811)\uff0c\u7b2c h \u5c42\u6240\u6709\u7684\u8282\u70b9\u90fd\u8fde\u7eed\u96c6\u4e2d\u5728\u6700\u5de6\u8fb9\uff0c\u8fd9\u5c31\u662f\u5b8c\u5168\u4e8c\u53c9\u6811\u3002\u5806\u4e00\u822c\u90fd\u662f\u7528\u5b8c\u5168\u4e8c\u53c9\u6811\u6765\u5b9e\u73b0\u7684\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:t(1621).Z,width:"670",height:"309"})),(0,o.kt)("p",null,"\u5b8c\u5168\u4e8c\u53c9\u6811\u7684\u516c\u5f0f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7b2c n \u5c42\u7684\u8282\u70b9\u6570\u6700\u591a\u4e3a 2",(0,o.kt)("sup",null,"n")," \u4e2a\u8282\u70b9"),(0,o.kt)("li",{parentName:"ol"},"n \u5c42\u4e8c\u53c9\u6811\u6700\u591a\u6709 2",(0,o.kt)("sup",null,"0"),"+...+2",(0,o.kt)("sup",null,"n"),"=2",(0,o.kt)("sup",null,"n+1"),")-1 \u4e2a\u8282\u70b9"),(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2a\u975e\u53f6\u5b50\u8282\u70b9\uff1alength / 2"),(0,o.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8282\u70b9\u7684\u5b69\u5b50\u8282\u70b9\uff1a2n\u30012n+1")),(0,o.kt)("h2",{id:"\u4e8c\u53c9\u641c\u7d22\u6811\u57fa\u672c\u7ed3\u6784"},"\u4e8c\u53c9\u641c\u7d22\u6811\u57fa\u672c\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function Node(val, left, right) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n}\n\nNode.prototype = {\n    show: function () {\n        console.log(this.val);\n    }\n}\n\nfunction Tree() {\n    this.root = null;\n}\n\nTree.prototype = {\n    insert: function (val) {\n        var node = new Node(val, null, null);\n        if (!this.root) {\n            this.root = node;\n            return;\n        }\n        var current = this.root;\n        var parent = null;\n        while (current) {\n            parent = current;\n            if (val < parent.val) {\n                current = current.left;\n                if (!current) {\n                    parent.left = node;\n                    return;\n                }\n            } else {\n                current = current.right;\n                if (!current) {\n                    parent.right = node;\n                    return;\n                }\n            }\n\n        }\n    },\n    preOrder: function (node) {\n        if (node) {\n            node.show();\n            this.preOrder(node.left);\n            this.preOrder(node.right);\n        }\n    },\n    inOrder: function (node) {\n        if (node) {\n            this.middleOrder(node.left);\n            node.show();\n            this.middleOrder(node.right);\n        }\n    },\n    postOrder: function (node) {\n        if (node) {\n            this.laterOrder(node.left);\n            this.laterOrder(node.right);\n            node.show();\n        }\n    },\n    getMinValue: function () {\n        var current = this.root;\n        while (current) {\n            if (!current.left) {\n                return current;\n            }\n            current = current.left;\n        }\n    },\n    getMaxValue: function () {\n        var current = this.root;\n        while (current) {\n            if (!current.right) {\n                return current;\n            }\n            current = current.right;\n        }\n    },\n    getDeep: function (node, deep) {\n        deep = deep || 0;\n        if (node == null) {\n            return deep;\n        }\n        deep++;\n        var dleft = this.getDeep(node.left, deep);\n        var dright = this.getDeep(node.right, deep);\n        return Math.max(dleft, dright);\n    }\n}\n")))}d.isMDXComponent=!0},5117:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/2021070209105210-3d5ee9ee9139f1ac12f42903de3e7968.png"},1621:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/2021070209105211-9f5d9b33a23ff2f65b3805975b2ed3de.png"}}]);