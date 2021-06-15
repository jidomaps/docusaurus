(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[2139],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},24805:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],s={id:"introduction",title:"Markdown Features introduction",sidebar_label:"Introduction",description:"Docusaurus uses GitHub Flavored Markdown (GFM). Find out more about Docusaurus-specific features when writing Markdown.",slug:"/markdown-features"},u={unversionedId:"guides/markdown-features/introduction",id:"version-2.0.0-beta.0/guides/markdown-features/introduction",isDocsHomePage:!1,title:"Markdown Features introduction",description:"Docusaurus uses GitHub Flavored Markdown (GFM). Find out more about Docusaurus-specific features when writing Markdown.",source:"@site/versioned_docs/version-2.0.0-beta.0/guides/markdown-features/markdown-features-intro.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features",permalink:"/fr/docs/markdown-features",editUrl:"https://crowdin.com/project/docusaurus-v2/fr",version:"2.0.0-beta.0",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1620828435,formattedLastUpdatedAt:"12/05/2021",sidebar_label:"Introduction",frontMatter:{id:"introduction",title:"Markdown Features introduction",sidebar_label:"Introduction",description:"Docusaurus uses GitHub Flavored Markdown (GFM). Find out more about Docusaurus-specific features when writing Markdown.",slug:"/markdown-features"},sidebar:"version-2.0.0-beta.0/docs",previous:{title:"Blog",permalink:"/fr/docs/blog"},next:{title:"Using React",permalink:"/fr/docs/markdown-features/react"}},c=[],d={toc:c};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Documentation is one of your product's interfaces with your users. A well-written and well-organized set of docs helps your users understand your product quickly. Our aligned goal here is to help your users find and understand the information they need, as quickly as possible."),(0,a.kt)("p",null,"Docusaurus 2 uses modern tooling to help you compose your interactive documentations with ease. You may embed React components, or build live coding blocks where your users may play with the code on the spot. Start sharing your eureka moments with the code your audience cannot walk away from. It is perhaps the most effective way of attracting potential users."),(0,a.kt)("p",null,"In this section, we'd like to introduce you to the tools we've picked that we believe will help you build a powerful documentation. Let us walk you through with an example."),(0,a.kt)("p",null,"Markdown is a syntax that enables you to write formatted content in a readable syntax."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"standard Markdown syntax")," is supported, and we use ",(0,a.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," as the parsing engine, which can do much more than just parsing Markdown, like rendering React components inside your documents."),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This section assumes you are using the official Docusaurus content plugins."))))}l.isMDXComponent=!0}}]);