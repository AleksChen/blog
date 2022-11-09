"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[8673],{3905:(A,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>p});var n=t(7294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function g(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function r(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function s(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},g=Object.keys(A);for(n=0;n<g.length;n++)t=g[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(A);for(n=0;n<g.length;n++)t=g[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var c=n.createContext({}),o=function(A){var e=n.useContext(c),t=e;return A&&(t="function"==typeof A?A(e):r(r({},e),A)),t},i=function(A){var e=o(A.components);return n.createElement(c.Provider,{value:e},A.children)},B={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},E=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,g=A.originalType,c=A.parentName,i=s(A,["components","mdxType","originalType","parentName"]),E=o(t),p=a,d=E["".concat(c,".").concat(p)]||E[p]||B[p]||g;return t?n.createElement(d,r(r({ref:e},i),{},{components:t})):n.createElement(d,r({ref:e},i))}));function p(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var g=t.length,r=new Array(g);r[0]=E;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=A,s.mdxType="string"==typeof A?A:a,r[1]=s;for(var o=2;o<g;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}E.displayName="MDXCreateElement"},6663:(A,e,t)=>{t.d(e,{Z:()=>E});var n=t(7294);const a="listWrapper_JZ7x",g="cardWrapper_R0nX",r="image_O1GS",s="title_pahK",c="title_sm_CtYL",o="title_md_s7_s";var i=t(6010),B=t(9960);function E(A){let{data:e=[],wrapperClassName:t,wrapperStyle:E}=A;return n.createElement("div",{style:E,className:(0,i.Z)(a,t)},e.map((A=>n.createElement(B.Z,{key:A.title,className:g,to:A.link},n.createElement("img",{src:A.src,className:(0,i.Z)(r),alt:A.title}),n.createElement("div",{className:(0,i.Z)(s,"md"===A.fontSize&&o,"sm"===A.fontSize&&c)},A.title)))))}},5082:(A,e,t)=>{t.d(e,{qg:()=>Z,HA:()=>g,ZI:()=>s,Rc:()=>u,yb:()=>a,qT:()=>M,b6:()=>r});const n="GitHub",a={frontend:"Frontend",html:"HTML",css:"CSS",javascript:"JavaScript",typescript:"TypeScript",react:"React",rn:"React Native",vue:"Vue",tailwind:"Tailwind",webpack:"Webpack",npm:"npm",yarn:"Yarn",vite:"Vite",graphql:"GraphQL"},g={backend:"Backend",nodejs:"Node.js",mongodb:"MongoDB"},r={others:"Others",git:"Git",github:n},s={github:n,gmail:"GMail",githubLink:"https://github.com/ChenWenWu223/",gmailAddress:"wenwuchen1948@gmail.com"};var c=t(5560),o=t(2679),i=t(9351),B=t(7719),E=t(9195),p=t(8321),d=t(3246),m=t(6888),I=t(9674),l=t(9646),C=t(703),Q=t(3258),b=t(5177),S=t(5807);function f(A,e,t,n){return void 0===n&&(n="lg"),{title:A,link:e,src:t,fontSize:n}}const u=[f(a.html,"/docs/html",c.Z),f(a.css,"/docs/css",o.Z),f(a.javascript,"/docs/javascript",i.Z),f(a.typescript,"/docs/typescript",B.Z),f(a.react,"/docs/react",E.Z),f(a.rn,"/docs/rn",E.Z),f(a.vue,"/docs/vue",p.Z),f(a.webpack,"/docs/webpack",d.Z),f(a.vite,"/docs/vite",l.Z),f(a.yarn,"/docs/yarn",I.Z),f(a.npm,"/docs/npm",m.Z)],Z=[f(g.nodejs,"/docs/nodejs",Q.Z),f(g.mongodb,"/docs/mongodb",b.Z),f(a.graphql,"/docs/graphql",C.Z)],M=[f(r.git,"/docs/git",S.Z)]},7131:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>B});var n=t(7462),a=(t(7294),t(3905)),g=t(6663),r=t(5082);const s={title:"\u540e\u7aef",hide_title:!0,hide_table_of_contents:!0},c=void 0,o={unversionedId:"back-end",id:"back-end",title:"\u540e\u7aef",description:"",source:"@site/docs/back-end.mdx",sourceDirName:".",slug:"/back-end",permalink:"/docs/back-end",draft:!1,tags:[],version:"current",frontMatter:{title:"\u540e\u7aef",hide_title:!0,hide_table_of_contents:!0}},i={},B=[],E={toc:B};function p(A){let{components:e,...t}=A;return(0,a.kt)("wrapper",(0,n.Z)({},E,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(g.Z,{data:r.qg,wrapperStyle:{marginTop:"1rem"},mdxType:"GridList"}))}p.isMDXComponent=!0},2679:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/css-7cd3a363a3f794a19b2a456b4e81a4ac.png"},5807:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/git-0d190006bbd50b0681b5421d960913f0.png"},703:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/graphql-855cd26331fd597ef9060ae687049066.png"},5560:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/html-35c6607db36364e3f8bbbb94c0610939.png"},9351:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/javascript-a10d37851dff846a8a9e32cd99965a46.png"},5177:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/mongodb-16c8d28aecda2fd6aa4be6595b09edf5.png"},3258:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/nodejs-b508473ad71a31ce2fae7ed21e4942a4.png"},6888:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKk0lEQVR42u3Yvy5DYRzH4d6VugMM2GsxYFGLNqHFxAXYGfyZhDvQ3oBFE9IIjU0TkqaJRWI42kvQyE/Pe54n+c5NX29PP1UqAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQMHclWcyMzMzK9YEgJmZmQAwMzMzAWBmZmYCwMzMzASAmZmZCQAzMzMTAGZmZiYAzMzMTACYmZmZADAzMzMBYGZmZgLAzMzMBICZmZkJADMzMxMAZmZmJgDMzMxMAJiZmZkAMDMzEwBmZmYmAMzMzEwAmJmZmQAwMzMzAWBmZmYCwMzMzASAmZmZCQAzMzMTAGZmZpZ6AHSWl7Lewb7lfJ2lxfDL6tzzv+76Wvi96W6sO3vzXJ2GAOg1mxn512s2Yh/ks2WHnoBB6zY8AAbttoMnF152dwQAAkAACAABgAAQAAgAASAABAACQAAgABAAAgABIAAQAAgAAYAAEAAIAASAAEAACAAEAALAwSMABAACAAEAAkAAIAAQACAABAACAAEAAkAAIAAQACAABAACAAEAAkAACAABgAAAASAABIAAQACAABAAAkAAIABAAAgAASAAEAAgAPyVBYAAEAACAAQAAkAACAABAAIAASAABIAAQAAIAASAABAAAgABIAAQAAgAAYAAEAAIAASAAEAACAAEAAJAACAABAACAAEgABAAAgABgAAAASAAEAAIABAAAgABgAAAASAAEAAIABAAAuBXnuv10Wph61+cC4BE9M/PQu+OAMi/z04n9M6MN37N+Odq7HvsX14IAAHwe+Mvq9gzbQgAvwAmmgBI4b8qrfgzHb1m+HM1+rtqr5n8518ACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAiDI+8119np0GDYBIAAEgAAQAAJAACAABIAAEAACQAAIAASAABAAAkAACAABgAAQAAJAAAgAASAAEAACQAAIAAEgAAQAAkAACAABIAAEgABAAAgAASAABIAAEAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAIgmQC4X5jPnraqSa8IZzp+TQHw995OT5L+bDxUKuGfj8eVStpnuhJ/pg/RZ1rdLMZzdX4u7QAwEwDT8wvAzIo7AWACQACYmQAwEwACwMwEgJkAEABmJgDMBIAAMDMBYCYABICZCQAzASAAzEwAmAkAAWBmAsBMAAgAMxMAZgJAAJiZADATAALAzASAmQAwMxMAZgLAzEwAmAAQAGZmAsAEgAAwMxMAJgAEgJmZADABIADMzASACQABYGYmAEwACAAzEwBmAkAAmJkAMBMAAsDMBICZABAAZiYAzASAADAzAWAmAASAmQkAMwEgAMxMAJgJAAFgZgLATAAIADP7/wD4MJtgX9EB8D0cJr/n2nb0Q8BdNivoSjCJ0eW5UtAJ/AIAAAEgAABAAAgAABAAAgAAASAABAAAAsAEAAACwAQAAALABAAAAsAEAAACwAQAAALABAAAAsAEAAACwAQAAALABAAAAsAEAAACwAQAAALABAAAAsAEAAACQAAAgAAQAAAgAAQAAAgAAQCAADABAIAAMAEAgAAwAQCAADABAIAAMAEAgAAwAQDAVAdAeXX0BXJs+Z6bDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBR/AB9M4XfiyNwBwAAAABJRU5ErkJggg=="},9195:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/react-222b46ec12ee705ead716d594add0e11.png"},7719:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/typescript-af108db04a54d784da9bf75244a6daf5.png"},9646:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/vite-2c4ee4208716a42d02b381ba490f9981.png"},8321:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/vue-c5e198013b9c2e123a6c5083990b265d.png"},3246:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/webpack-bcf4578f43d8fcf4cf2556916253b859.png"},9674:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/yarn-6afbcfb45a85d324ac13fe3880a42b36.png"}}]);