"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[979],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={title:"\u624b\u52a8\u5b9e\u73b0 ES5 \u7ee7\u627f"},l=void 0,i={unversionedId:"interview/hands-on-practice/es5-inheritance",id:"interview/hands-on-practice/es5-inheritance",title:"\u624b\u52a8\u5b9e\u73b0 ES5 \u7ee7\u627f",description:"\u6709\u4e0b\u9762\u4e24\u4e2a\u7c7b\uff0c\u4e0b\u9762\u5b9e\u73b0Man\u7ee7\u627fPeople\uff1a",source:"@site/docs/interview/hands-on-practice/es5-inheritance.mdx",sourceDirName:"interview/hands-on-practice",slug:"/interview/hands-on-practice/es5-inheritance",permalink:"/cww/docs/interview/hands-on-practice/es5-inheritance",draft:!1,tags:[],version:"current",frontMatter:{title:"\u624b\u52a8\u5b9e\u73b0 ES5 \u7ee7\u627f"},sidebar:"interview",previous:{title:"\u5b9e\u73b0\u5355\u4f8b\u6a21\u5f0f",permalink:"/cww/docs/interview/hands-on-practice/singleton"},next:{title:"\u5c06 Virtual Dom \u8f6c\u5316\u4e3a\u771f\u5b9e DOM \u7ed3\u6784",permalink:"/cww/docs/interview/hands-on-practice/vitual-dom"}},c={},p=[{value:"\u539f\u578b\u7ee7\u627f",id:"\u539f\u578b\u7ee7\u627f",level:2},{value:"\u6784\u9020\u7ee7\u627f",id:"\u6784\u9020\u7ee7\u627f",level:2},{value:"\u7ec4\u5408\u7ee7\u627f",id:"\u7ec4\u5408\u7ee7\u627f",level:2},{value:"\u5bc4\u751f\u7ec4\u5408\u7ee7\u627f",id:"\u5bc4\u751f\u7ec4\u5408\u7ee7\u627f",level:2},{value:"inherits \u51fd\u6570",id:"inherits-\u51fd\u6570",level:2}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6709\u4e0b\u9762\u4e24\u4e2a\u7c7b\uff0c\u4e0b\u9762\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"Man"),"\u7ee7\u627f",(0,a.kt)("inlineCode",{parentName:"p"},"People"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function People() {\n    this.type = 'prople'\n}\n\nPeople.prototype.eat = function () {\n    console.log('\u5403\u4e1c\u897f\u5566');\n}\n\nfunction Man(name) {\n    this.name = name;\n    this.color = 'black';\n}\n")),(0,a.kt)("h2",{id:"\u539f\u578b\u7ee7\u627f"},"\u539f\u578b\u7ee7\u627f"),(0,a.kt)("p",null,"\u5c06\u7236\u7c7b\u6307\u5411\u5b50\u7c7b\u7684\u539f\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Man.prototype = new People();\n")),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a\u539f\u578b\u662f\u6240\u6709\u5b50\u7c7b\u5b9e\u4f8b\u5171\u4eab\u7684\uff0c\u6539\u53d8\u4e00\u4e2a\u5176\u4ed6\u4e5f\u4f1a\u6539\u53d8\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u6784\u9020\u7ee7\u627f"},"\u6784\u9020\u7ee7\u627f"),(0,a.kt)("p",null,"\u5728\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528\u7236\u7c7b\u6784\u9020\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Man(name) {\n    People.call(this);\n}\n")),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a\u4e0d\u80fd\u7ee7\u627f\u7236\u7c7b\u539f\u578b\uff0c\u51fd\u6570\u5728\u6784\u9020\u51fd\u6570\u4e2d\uff0c\u6bcf\u4e2a\u5b50\u7c7b\u5b9e\u4f8b\u4e0d\u80fd\u5171\u4eab\u51fd\u6570\uff0c\u6d6a\u8d39\u5185\u5b58\u3002"),(0,a.kt)("h2",{id:"\u7ec4\u5408\u7ee7\u627f"},"\u7ec4\u5408\u7ee7\u627f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u6784\u9020\u7ee7\u627f\u7ee7\u627f\u7236\u7c7b\u53c2\u6570\uff0c\u4f7f\u7528\u539f\u578b\u7ee7\u627f\u7ee7\u627f\u7236\u7c7b\u51fd\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Man(name) {\n    People.call(this);\n}\n\nMan.prototype = People.prototype;\n")),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a\u7236\u7c7b\u539f\u578b\u548c\u5b50\u7c7b\u539f\u578b\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u65e0\u6cd5\u533a\u5206\u5b50\u7c7b\u771f\u6b63\u662f\u7531\u8c01\u6784\u9020\u3002"),(0,a.kt)("h2",{id:"\u5bc4\u751f\u7ec4\u5408\u7ee7\u627f"},"\u5bc4\u751f\u7ec4\u5408\u7ee7\u627f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u7ec4\u5408\u7ee7\u627f\u7684\u57fa\u7840\u4e0a\uff0c\u5b50\u7c7b\u7ee7\u627f\u4e00\u4e2a\u7531\u7236\u7c7b\u539f\u578b\u751f\u6210\u7684\u7a7a\u5bf9\u8c61\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Man(name) {\n    People.call(this);\n}\n\nMan.prototype = Object.create(People.prototype, {\n    constructor: {\n        value: Man\n    }\n})\n")),(0,a.kt)("h2",{id:"inherits-\u51fd\u6570"},"inherits \u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function inherits(ctor, superCtor) {\n  ctor.super_ = superCtor;\n  ctor.prototype = Object.create(superCtor.prototype, {\n    constructor: {\n      value: ctor,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n}; \n")),(0,a.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Man() {\n    People.call(this);\n    //...\n}\ninherits(Man, People);\n\nMan.prototype.fun = ...\n")))}s.isMDXComponent=!0}}]);