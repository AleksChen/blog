"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[2267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=n,g=m["".concat(s,".").concat(f)]||m[f]||i[f]||a;return r?o.createElement(g,l(l({ref:t},p),{},{components:r})):o.createElement(g,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8642:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>i,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={slug:"mdx-blog-post",title:"MDX Blog Post",tags:["docusaurus"]},l=void 0,c={permalink:"/blog/mdx-blog-post",source:"@site/blog/2021-08-01-mdx-blog-post.mdx",title:"MDX Blog Post",description:"Blog posts support Docusaurus Markdown features, such as MDX.",date:"2021-08-01T00:00:00.000Z",formattedDate:"2021\u5e748\u67081\u65e5",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.11666666666666667,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",tags:["docusaurus"]},prevItem:{title:"Welcome",permalink:"/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/blog/long-blog-post"}},s={authorsImageUrls:[]},u=[],p={toc:u};function i(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Blog posts support ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,n.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},'<button onClick={() => alert("button clicked!")}>Click me!</button>\n')),(0,n.kt)("button",{onClick:()=>alert("button clicked!")},"Click me!")))}i.isMDXComponent=!0}}]);