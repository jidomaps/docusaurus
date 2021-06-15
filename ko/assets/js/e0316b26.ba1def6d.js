(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[6579],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35432:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67294),o="browserWindow_25XZ",a="browserWindowHeader_KqAw",l="buttons_1hjc",i="browserWindowAddressBar_3kU8",c="dot_3vUt",s="browserWindowMenuIcon_62Vr",u="bar_1GUQ",d="browserWindowBody_2pXR";var p=function(e){var t=e.children,n=e.minHeight,p=e.url;return r.createElement("div",{className:o,style:{minHeight:n}},r.createElement("div",{className:a},r.createElement("div",{className:l},r.createElement("span",{className:c,style:{background:"#f25f58"}}),r.createElement("span",{className:c,style:{background:"#fbbe3c"}}),r.createElement("span",{className:c,style:{background:"#58cb42"}})),r.createElement("div",{className:i},p),r.createElement("div",{className:s},r.createElement("div",null,r.createElement("span",{className:u}),r.createElement("span",{className:u}),r.createElement("span",{className:u})))),r.createElement("div",{className:d},t))}},52774:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),l=n(35432),i=["components"],c={id:"create-doc",title:"Create a doc",description:"Create a Markdown Document",slug:"/create-doc"},s={unversionedId:"guides/docs/create-doc",id:"version-2.0.0-beta.0/guides/docs/create-doc",isDocsHomePage:!1,title:"Create a doc",description:"Create a Markdown Document",source:"@site/versioned_docs/version-2.0.0-beta.0/guides/docs/docs-create-doc.mdx",sourceDirName:"guides/docs",slug:"/create-doc",permalink:"/ko/docs/create-doc",editUrl:"https://crowdin.com/project/docusaurus-v2/ko",version:"2.0.0-beta.0",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1620828435,formattedLastUpdatedAt:"2021. 5. 12.",frontMatter:{id:"create-doc",title:"Create a doc",description:"Create a Markdown Document",slug:"/create-doc"},sidebar:"version-2.0.0-beta.0/docs",previous:{title:"Docs Introduction",permalink:"/ko/docs/docs-introduction"},next:{title:"Sidebar",permalink:"/ko/docs/sidebar"}},u=[],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a markdown file, ",(0,a.kt)("inlineCode",{parentName:"p"},"greeting.md"),", and place it under the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"website # root directory of your site\n\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u2514\u2500\u2500 greeting.md\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2514\u2500\u2500 pages\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n")),(0,a.kt)("p",null,"At the top of the file, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," in the front matter, so that Docusaurus will pick them up correctly when generating your site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"---\nid: greeting\ntitle: Hello\n---\n\n## Hello from Docusaurus\n\nAre you ready to create the documentation site for your open source project?\n\n### Headers\n\nwill show up on the table of contents on the upper right\n\nSo that your users will know what this page is all about without scrolling down or even without reading too much.\n\n### Only h2 and h3 will be in the toc\n\nThe headers are well-spaced so that the hierarchy is clear.\n\n- lists will help you\n- present the key points\n- that you want your users to remember\n  - and you may nest them\n    - multiple times\n\n### Custom id headers {#custom-id}\n\nWith `{#custom-id}` syntax you can set your own header id.\n")),(0,a.kt)("p",null,"This will render in the browser as follows:"),(0,a.kt)(l.Z,{url:"http://localhost:3000",mdxType:"BrowserWindow"},(0,a.kt)("h2",null,"Hello from Docusaurus"),(0,a.kt)("p",null,"Are you ready to create the documentation site for your open source project?"),(0,a.kt)("h3",null,"Headers"),(0,a.kt)("p",null,"will show up on the table of contents on the upper right"),(0,a.kt)("p",null,"So that your users will know what this page is all about without scrolling down or even without reading too much."),(0,a.kt)("h3",null,"Only h2 and h3 will be in the toc"),(0,a.kt)("p",null,"The headers are well-spaced so that the hierarchy is clear."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lists will help you"),(0,a.kt)("li",{parentName:"ul"},"present the key points"),(0,a.kt)("li",{parentName:"ul"},"that you want your users to remember",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"and you may nest them",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"multiple times"))))))))}p.isMDXComponent=!0}}]);