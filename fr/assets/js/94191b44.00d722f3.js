(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[7544],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=u(r),p=o,m=f["".concat(s,".").concat(p)]||f[p]||l[p]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76634:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],c={id:"markdown-features",title:"Docs Markdown Features",description:"Docusaurus Markdown features that are specific to the docs plugin",slug:"/docs-markdown-features"},s={unversionedId:"guides/docs/markdown-features",id:"version-2.0.0-alpha.74/guides/docs/markdown-features",isDocsHomePage:!1,title:"Docs Markdown Features",description:"Docusaurus Markdown features that are specific to the docs plugin",source:"@site/versioned_docs/version-2.0.0-alpha.74/guides/docs/docs-markdown-features.mdx",sourceDirName:"guides/docs",slug:"/docs-markdown-features",permalink:"/fr/docs/2.0.0-alpha.74/docs-markdown-features",editUrl:"https://crowdin.com/project/docusaurus-v2/fr",version:"2.0.0-alpha.74",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619534336,formattedLastUpdatedAt:"27/04/2021",frontMatter:{id:"markdown-features",title:"Docs Markdown Features",description:"Docusaurus Markdown features that are specific to the docs plugin",slug:"/docs-markdown-features"},sidebar:"version-2.0.0-alpha.74/docs",previous:{title:"Versioning",permalink:"/fr/docs/2.0.0-alpha.74/versioning"},next:{title:"Docs Multi-instance",permalink:"/fr/docs/2.0.0-alpha.74/docs-multi-instance"}},u=[{value:"Markdown frontmatter",id:"markdown-frontmatter",children:[]},{value:"Referencing other documents",id:"referencing-other-documents",children:[]}],d={toc:u};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docs can use any ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/2.0.0-alpha.74/markdown-features"},"Markdown feature"),", and have a few additional Docs-specific markdown features."),(0,a.kt)("h2",{id:"markdown-frontmatter"},"Markdown frontmatter"),(0,a.kt)("p",null,"Markdown docs have their own ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter"},"Markdown frontmatter")),(0,a.kt)("h2",{id:"referencing-other-documents"},"Referencing other documents"),(0,a.kt)("p",null,"If you want to reference another document file, you could use the name of the document you want to reference. Docusaurus will convert the file path to be the final website path (and remove the ",(0,a.kt)("inlineCode",{parentName:"p"},".md"),")."),(0,a.kt)("p",null,"For example, if you are in ",(0,a.kt)("inlineCode",{parentName:"p"},"doc2.md")," and you want to reference ",(0,a.kt)("inlineCode",{parentName:"p"},"doc1.md")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"folder/doc3.md"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"I am referencing a [document](doc1.md). Reference to another [document in a folder](folder/doc3.md).\n\n[Relative document](../doc2.md) referencing works as well.\n")),(0,a.kt)("p",null,"One benefit of this approach is that the links to external files will still work if you are viewing the file on GitHub."),(0,a.kt)("p",null,"Another benefit, for versioned docs, is that one versioned doc will link to another doc of the exact same version."))}l.isMDXComponent=!0}}]);