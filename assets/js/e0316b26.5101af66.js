(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[6579],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},35432:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(67294),o="browserWindow_25XZ",a="browserWindowHeader_KqAw",s="buttons_1hjc",c="browserWindowAddressBar_3kU8",i="dot_3vUt",l="browserWindowMenuIcon_62Vr",u="bar_1GUQ",d="browserWindowBody_2pXR";var p=function(e){var t=e.children,r=e.minHeight,p=e.url;return n.createElement("div",{className:o,style:{minHeight:r}},n.createElement("div",{className:a},n.createElement("div",{className:s},n.createElement("span",{className:i,style:{background:"#f25f58"}}),n.createElement("span",{className:i,style:{background:"#fbbe3c"}}),n.createElement("span",{className:i,style:{background:"#58cb42"}})),n.createElement("div",{className:c},p),n.createElement("div",{className:l},n.createElement("div",null,n.createElement("span",{className:u}),n.createElement("span",{className:u}),n.createElement("span",{className:u})))),n.createElement("div",{className:d},t))}},52774:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),s=r(35432),c=["components"],i={id:"create-doc",title:"Create a doc",description:"Create a Markdown Document",slug:"/create-doc"},l={unversionedId:"guides/docs/create-doc",id:"version-2.0.0-beta.0/guides/docs/create-doc",isDocsHomePage:!1,title:"Create a doc",description:"Create a Markdown Document",source:"@site/versioned_docs/version-2.0.0-beta.0/guides/docs/docs-create-doc.mdx",sourceDirName:"guides/docs",slug:"/create-doc",permalink:"/docs/create-doc",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/docs/docs-create-doc.mdx",version:"2.0.0-beta.0",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1620828435,formattedLastUpdatedAt:"5/12/2021",frontMatter:{id:"create-doc",title:"Create a doc",description:"Create a Markdown Document",slug:"/create-doc"},sidebar:"version-2.0.0-beta.0/docs",previous:{title:"Docs Introduction",permalink:"/docs/docs-introduction"},next:{title:"Sidebar",permalink:"/docs/sidebar"}},u=[],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a markdown file, ",(0,a.kt)("inlineCode",{parentName:"p"},"greeting.md"),", and place it under the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"website # root directory of your site\n\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u2514\u2500\u2500 greeting.md\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2514\u2500\u2500 pages\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n")),(0,a.kt)("p",null,"At the top of the file, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," in the front matter, so that Docusaurus will pick them up correctly when generating your site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"---\nid: greeting\ntitle: Hello\n---\n\n## Hello from Docusaurus\n\nAre you ready to create the documentation site for your open source project?\n\n### Headers\n\nwill show up on the table of contents on the upper right\n\nSo that your users will know what this page is all about without scrolling down or even without reading too much.\n\n### Only h2 and h3 will be in the toc\n\nThe headers are well-spaced so that the hierarchy is clear.\n\n- lists will help you\n- present the key points\n- that you want your users to remember\n  - and you may nest them\n    - multiple times\n\n### Custom id headers {#custom-id}\n\nWith `{#custom-id}` syntax you can set your own header id.\n")),(0,a.kt)("p",null,"This will render in the browser as follows:"),(0,a.kt)(s.Z,{url:"http://localhost:3000",mdxType:"BrowserWindow"},(0,a.kt)("h2",null,"Hello from Docusaurus"),(0,a.kt)("p",null,"Are you ready to create the documentation site for your open source project?"),(0,a.kt)("h3",null,"Headers"),(0,a.kt)("p",null,"will show up on the table of contents on the upper right"),(0,a.kt)("p",null,"So that your users will know what this page is all about without scrolling down or even without reading too much."),(0,a.kt)("h3",null,"Only h2 and h3 will be in the toc"),(0,a.kt)("p",null,"The headers are well-spaced so that the hierarchy is clear."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lists will help you"),(0,a.kt)("li",{parentName:"ul"},"present the key points"),(0,a.kt)("li",{parentName:"ul"},"that you want your users to remember",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"and you may nest them",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"multiple times"))))))))}p.isMDXComponent=!0}}]);