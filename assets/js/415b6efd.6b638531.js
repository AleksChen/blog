"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[2083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5713:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const r="highlightArea__DwO";var l=n(6010),i=n(838);function o(e){let{children:t,bgColor:n,wrapperClassName:o,wrapperStyle:p}=e;const s={backgroundColor:`${(0,i.yz)(n)}`},c=Object.assign(s,p);return a.createElement("span",{className:(0,l.Z)(r,o),style:c},t)}},838:(e,t,n)=>{let a;function r(){const e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}function l(e){navigator.clipboard.writeText(e)}n.d(t,{tq:()=>r,Vf:()=>l,yz:()=>o}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(a||(a={}));var i;function o(e){switch(e){case i.Primary:case"":case void 0:case null:return"#25c2a0";case i.Red:return"#e53935";case i.Pink:return"#d81b60";case i.Blue:return"#1e88e5";case i.Purple:return"#ba68c8";case i.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(i||(i={}))},5230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(5713);const i={title:"\u7c7b\u578b\u8f6c\u6362"},o=void 0,p={unversionedId:"javascript/data-type/type-conversion",id:"javascript/data-type/type-conversion",title:"\u7c7b\u578b\u8f6c\u6362",description:"String \u8f6c Number",source:"@site/docs/javascript/data-type/type-conversion.mdx",sourceDirName:"javascript/data-type",slug:"/javascript/data-type/type-conversion",permalink:"/blog/docs/javascript/data-type/type-conversion",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7c7b\u578b\u8f6c\u6362"},sidebar:"javascript",previous:{title:"String",permalink:"/blog/docs/javascript/data-type/string"},next:{title:"\u8fd0\u7b97\u7b26\u548c\u8868\u8fbe\u5f0f",permalink:"/blog/docs/javascript/operators-and-expressions/"}},s={},c=[{value:"String \u8f6c Number",id:"string-\u8f6c-number",level:2},{value:"parseInt",id:"parseint",level:3},{value:"\u8fd4\u56de NaN",id:"\u8fd4\u56de-nan",level:4},{value:"\u53c2\u6570 radix \u662f undefined\u30010 \u6216\u672a\u6307\u5b9a\u65f6",id:"\u53c2\u6570-radix-\u662f-undefined0-\u6216\u672a\u6307\u5b9a\u65f6",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:4},{value:"\u4f7f\u7528<strong>\u6b63\u5219\u8868\u8fbe\u5f0f</strong>\u7684\u89e3\u6790\u51fd\u6570\uff08\u66f4\u4e25\u683c\uff09",id:"\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u89e3\u6790\u51fd\u6570\u66f4\u4e25\u683c",level:4},{value:"\u89e3\u6790 BigInt",id:"\u89e3\u6790-bigint",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:4},{value:"parseFloat",id:"parsefloat",level:3},{value:"\u9519\u8bef\u60c5\u51b5",id:"\u9519\u8bef\u60c5\u51b5",level:4},{value:"\u89e3\u6790 BigInt",id:"\u89e3\u6790-bigint-1",level:4},{value:"Number()",id:"number",level:3},{value:"\u7279\u70b9",id:"\u7279\u70b9-1",level:4},{value:"~~num",id:"num",level:3},{value:"\u7279\u70b9",id:"\u7279\u70b9-2",level:4},{value:"\u4e00\u5143\u8fd0\u7b97\u7b26",id:"\u4e00\u5143\u8fd0\u7b97\u7b26",level:3},{value:"\u7279\u70b9",id:"\u7279\u70b9-3",level:4}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"string-\u8f6c-number"},"String \u8f6c Number"),(0,r.kt)("h3",{id:"parseint"},"parseInt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'parseInt("123"); // no radix\nparseInt("123", 10); // with radix\nparseInt("0xF", 16); // \u6307\u5b9a\u4e3a 16 \u5219\u88ab\u89e3\u6790\u7684\u503c\u662f 16\u8fdb\u5236\u6574\u6570\nconsole.log(parseInt("0xF", 16)); // expected: 15\n')),(0,r.kt)("h4",{id:"\u8fd4\u56de-nan"},"\u8fd4\u56de NaN"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u9009\u53c2\u6570 radix ",(0,r.kt)(l.Z,{mdxType:"TH"},"\u5c0f\u4e8e 2 \u6216\u5927\u4e8e 36"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a",(0,r.kt)(l.Z,{mdxType:"TH"},"\u975e\u7a7a\u683c\u5b57\u7b26"),"\u4e0d\u80fd\u8f6c\u6362\u4e3a\u6570\u5b57\u3002")),(0,r.kt)("h4",{id:"\u53c2\u6570-radix-\u662f-undefined0-\u6216\u672a\u6307\u5b9a\u65f6"},"\u53c2\u6570 radix \u662f undefined\u30010 \u6216\u672a\u6307\u5b9a\u65f6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u82e5\u8f93\u5165\u7684 string \u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"0x")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"0X")," \u5f00\u5934\uff0c\u90a3\u4e48 radix \u88ab\u5047\u5b9a\u4e3a 16\uff0c\u5b57\u7b26\u4e32\u7684\u5176\u4f59\u90e8\u5206\u88ab\u5f53\u505a\u5341\u516d\u8fdb\u5236\u6570\u53bb\u89e3\u6790\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u8f93\u5165\u7684 string \u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," \u5f00\u5934\uff0cradix \u4f1a\u88ab\u5047\u5b9a\u4e3a 8 \u6216 10\uff0cECMAScript5 \u6f84\u6e05\u4e86\u5e94\u8be5\u4f7f\u7528\u5341\u8fdb\u5236\uff0c\u4f46\u5e76\u975e\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u652f\u6301\u3002\u56e0\u6b64\uff0c",(0,r.kt)(l.Z,{mdxType:"TH"},"\u4efb\u4f55\u65f6\u5019\u90fd\u9700\u8981\u6307\u5b9a\u4e00\u4e2a radix"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u8f93\u5165\u7684 string \u4ee5\u4efb\u4f55\u5176\u4ed6\u503c\u5f00\u5934\uff0c\u4f1a\u628a\u5b57\u7b26\u4e32\u5f53\u505a\u5341\u8fdb\u5236\u6570\u53bb\u89e3\u6790\u3002")),(0,r.kt)("admonition",{title:"\u8b66\u544a",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u53c2\u6570 radix \u867d\u4e3a\u53ef\u9009\u4f46\u9ed8\u8ba4\u5e76\u975e\u4e3a\u89e3\u6790\u5341\u8fdb\u5236\u6574\u6570.")),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4f8b\u5b50\u5747\u8fd4\u56de ",(0,r.kt)("strong",{parentName:"p"},"15"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u5341\u516d\u8fdb\u5236\nparseInt("0xF", 16);\nparseInt("F", 16);\n// \u5c0f\u6570\u70b9\u540e\u7cbe\u5ea6\u4f1a\u4e22\u5931\nparseInt("15.99", 10);\n// \u9047\u5230 , \u4e4b\u7c7b\u65e0\u6cd5\u89e3\u6790\u7684\u5b57\u7b26\u4f1a\u4e22\u6389\u540e\u9762\u5185\u5bb9\nparseInt("15,123", 10);\nparseInt("15 * 3", 10);\nparseInt("15e2", 10);\nparseInt("15px", 10);\n')),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4f8b\u5b50\u5747\u8fd4\u56de ",(0,r.kt)("strong",{parentName:"p"},"NaN"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'parseInt("Hello", 8); // \u975e\u6570\u503c\nparseInt("546", 2); // \u4e0d\u662f\u6709\u6548\u4e8c\u8fdb\u5236\u6570\u5b57\n')),(0,r.kt)("h4",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u6548\u7387\u8f83\u9ad8")),(0,r.kt)("h4",{id:"\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u89e3\u6790\u51fd\u6570\u66f4\u4e25\u683c"},"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"h4"},"\u6b63\u5219\u8868\u8fbe\u5f0f"),"\u7684\u89e3\u6790\u51fd\u6570\uff08\u66f4\u4e25\u683c\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'filterInt = function (value) {\n  if (/^(\\-|\\+)?([0-9]+|Infinity)$/.test(value)) {\n    return Number(value);\n  }\n  return NaN;\n};\n\nconsole.log(filterInt("421")); // 421\nconsole.log(filterInt("-421")); // -421\nconsole.log(filterInt("+421")); // 421\nconsole.log(filterInt("Infinity")); // Infinity\nconsole.log(filterInt("421e+0")); // NaN\nconsole.log(filterInt("421hop")); // NaN\nconsole.log(filterInt("hop1.61803398875")); // NaN\nconsole.log(filterInt("1.61803398875")); // NaN\n')),(0,r.kt)("h4",{id:"\u89e3\u6790-bigint"},"\u89e3\u6790 BigInt"),(0,r.kt)("p",null,"parseInt \u89e3\u6790 BigInt \u7c7b\u578b\u65f6\uff0c\u4f1a\u4e22\u5931\u7cbe\u5ea6\uff0cBigInt \u672b\u4f4d ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u5b57\u7b26\u4f1a\u88ab\u4e22\u5f03\u3002"),(0,r.kt)("h4",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("p",null,"MDN Web Docs:",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt"},"Javascript parseInt()")),(0,r.kt)("h3",{id:"parsefloat"},"parseFloat"),(0,r.kt)("p",null,"MDN Web Docs:",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat"},"Javascript parseFloat()")),(0,r.kt)("h4",{id:"\u9519\u8bef\u60c5\u51b5"},"\u9519\u8bef\u60c5\u51b5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'parseFloat("-0xFF"); // excepted: 0\n')),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5b57\u7b26\u4e32\u4e2d\u7684\u8d1f\u5341\u516d\u8fdb\u5236\u6570\u5b57\u662f\u4e00\u4e2a\u7279\u6b8a\u60c5\u51b5\uff0c\u5982\u679c\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"parseFloat")," \u89e3\u6790\uff0c\u7ed3\u679c\u662f\u4e0d\u6b63\u786e\u7684\u3002\u4e3a\u4e86\u907f\u514d\u7a0b\u5e8f\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," \u7684\u60c5\u51b5\uff0c\u5e94\u8be5\u68c0\u67e5\u8f6c\u5316\u540e\u7684\u503c\u3002")),(0,r.kt)("h4",{id:"\u89e3\u6790-bigint-1"},"\u89e3\u6790 BigInt"),(0,r.kt)("p",null,"parseFloat \u89e3\u6790 BigInt \u7c7b\u578b\u65f6\uff0c\u4f1a\u4e22\u5931\u7cbe\u5ea6\uff0cBigInt \u672b\u4f4d ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u5b57\u7b26\u4f1a\u88ab\u4e22\u5f03\u3002"),(0,r.kt)("h3",{id:"number"},"Number()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'Number("023"); // expected: 23\nNumber(023); // expected: 19\n// 023\u4e3a\u516b\u8fdb\u5236\u6570\uff0c\u6240\u4ee5\u4f1a\u88ab\u89e3\u6790\u4e3a 19\n')),(0,r.kt)("h4",{id:"\u7279\u70b9-1"},"\u7279\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u6548\u7387\u4f4e\uff0c\u51e0\u4e4e\u4e0d\u7528\u6765\u8f6c\u6362\u7c7b\u578b\u3002")),(0,r.kt)("h3",{id:"num"},"~~num"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/javascript/operators/bitwise-not"},"\u6309\u4f4d\u975e"),"\u4e24\u6b21\uff0c\u53cd\u8f6c\u4e24\u6b21\u64cd\u4f5c\u6570\uff0c\u5f97\u5230\u8be5\u5b57\u7b26\u4e32\u5bf9\u5e94\u7684 number\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'~~1.23; // expected: 1\n~~"1.23"; // expected: 1\n~~"23"; // expected: 23\n~~"Hello world"; // expected: 0\n')),(0,r.kt)("h4",{id:"\u7279\u70b9-2"},"\u7279\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u6d6e\u70b9\u6570"),(0,r.kt)("li",{parentName:"ol"},"\u5305\u542b\u5b57\u7b26\u4e32\u5c06\u8fd4\u56de 0\uff08\u53ef\u7528\u4e8e\u9a8c\u8bc1\u6574\u6570\u7684\u5b57\u7b26\u4e32\u4e2d\u662f\u5426\u542b\u5b57\u7b26\uff09")),(0,r.kt)("h3",{id:"\u4e00\u5143\u8fd0\u7b97\u7b26"},"\u4e00\u5143\u8fd0\u7b97\u7b26"),(0,r.kt)("p",null,"\u4e00\u5143\u8fd0\u7b97\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"num*1"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"num-0"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"num/1"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"+num")," \u90fd\u53ef\u4ee5\u7528\u6765\u505a\u5b57\u7b26\u4e32\u5230\u6570\u5b57\u7684\u7c7b\u578b\u8f6c\u6362\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let a = "1.23" * 1; // expected: 1.23\nlet b = "0xFF" - 0; // expected: 255\nlet c = "0xFF.jpg" / 1; // expected: NaN\nlet d = +"023"; // expected: 23\n')),(0,r.kt)("h4",{id:"\u7279\u70b9-3"},"\u7279\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f02\u5e38\u65f6\u4f1a\u629b\u51fa NaN"),(0,r.kt)("li",{parentName:"ol"},"\u89e3\u6790\u4efb\u4f55\u5b57\u7b26\u4e32\u90fd\u4e0d\u4f1a\u88ab\u89c6\u4e3a 0")))}d.isMDXComponent=!0}}]);