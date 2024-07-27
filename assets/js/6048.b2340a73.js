"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[6048],{9058:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(7294),n=a(6010),r=a(13),o=a(7524),s=a(9960),c=a(5999);const m="sidebar_re4s",i="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function h(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var E=a(3102);function f(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return l.createElement(E.Zo,{component:f,props:e})}function v(e){let{sidebar:t}=e;const a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(h,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:o,...s}=e,c=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},390:(e,t,a)=>{a.d(t,{Z:()=>x});var l=a(7294),n=a(6010),r=a(9460),o=a(4996);function s(e){let{children:t,className:a}=e;const{frontMatter:n,assets:s}=(0,r.C)(),{withBaseUrl:c}=(0,o.C)(),m=s.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&l.createElement("meta",{itemProp:"image",content:c(m,{absolute:!0})}),t)}var c=a(9960);const m="title_f1Hy";function i(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:s,title:i}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(m,t),itemProp:"headline"},o?i:l.createElement(c.Z,{itemProp:"url",to:s},i))}var u=a(5999),d=a(8824);const g="container_mt6G";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function f(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:s,readingTime:c}=a;return l.createElement("div",{className:(0,n.Z)(g,"margin-vert--md",t)},l.createElement(h,{date:o,formattedDate:s}),void 0!==c&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(p,{readingTime:c})))}function b(e){return e.href?l.createElement(c.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:c,email:m}=t,i=s||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},c&&l.createElement(b,{href:i,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:c,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:i,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const N="authorCol_Hf19",P="imageOnlyAuthorRow_pa_O",_="imageOnlyAuthorCol_G86a";function Z(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?P:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?_:N),key:t},l.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function k(){return l.createElement("header",null,l.createElement(i,null),l.createElement(f,null),l.createElement(Z,null))}var w=a(8780),C=a(7383);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return l.createElement("div",{id:o?w.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(C.Z,null,t))}var y=a(4881),B=a(1526),I=a(7462);function F(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function M(e){const{blogPostTitle:t,...a}=e;return l.createElement(c.Z,(0,I.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(F,null))}const L="blogPostFooterDetailsFull_mRVl";function R(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:c}=e,m=!t&&c,i=a.length>0;return i||m||s?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&L)},i&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":m})},l.createElement(B.Z,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(y.Z,{editUrl:s})),m&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":i})},l.createElement(M,{blogPostTitle:o,to:e.permalink}))):null}function x(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,n.Z)(o,a)},l.createElement(k,null),l.createElement(T,null,t),l.createElement(R,null))}},9460:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var l=a(7294),n=a(902);const r=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},8824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(7294),n=a(2263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function m(){const e=c();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);