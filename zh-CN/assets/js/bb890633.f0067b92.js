(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[827],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,r(r({ref:t},l),{},{components:n})):o.createElement(f,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68921:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(67294),a=n(86010),i="tableOfContentsInline_3fWc";function r(e){var t=e.toc,n=e.isChild;return t.length?o.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(r,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return o.createElement("div",{className:(0,a.Z)(i)},o.createElement(r,{toc:t}))}},29889:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),r=n(68921),s=["components"],u={id:"configuration",title:"Configuration"},c={unversionedId:"configuration",id:"version-2.0.0-beta.0/configuration",isDocsHomePage:!1,title:"Configuration",description:"Docusaurus has a unique take on configurations. We encourage you to congregate information of your site into one place. We guard the fields of this file, and facilitate making this data object accessible across your site.",source:"@site/versioned_docs/version-2.0.0-beta.0/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/zh-CN/docs/configuration",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-beta.0",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1620828435,formattedLastUpdatedAt:"2021/5/12",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"version-2.0.0-beta.0/docs",previous:{title:"Installation",permalink:"/zh-CN/docs/installation"},next:{title:"TypeScript Support",permalink:"/zh-CN/docs/typescript-support"}},l=[{value:"What goes into a <code>docusaurus.config.js</code>?",id:"what-goes-into-a-docusaurusconfigjs",children:[{value:"Site metadata",id:"site-metadata",children:[]},{value:"Deployment configurations",id:"deployment-configurations",children:[]},{value:"Theme, plugin, and preset configurations",id:"theme-plugin-and-preset-configurations",children:[]},{value:"Custom configurations",id:"custom-configurations",children:[]}]},{value:"Accessing configuration from components",id:"accessing-configuration-from-components",children:[]},{value:"Customizing Babel Configuration",id:"customizing-babel-configuration",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Docusaurus has a unique take on configurations. We encourage you to congregate information of your site into one place. We guard the fields of this file, and facilitate making this data object accessible across your site."),(0,i.kt)("p",null,"Keeping a well-maintained ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," helps you, your collaborators, and your open source contributors be able to focus on documentation while still being able to customize the site."),(0,i.kt)("h2",{id:"what-goes-into-a-docusaurusconfigjs"},"What goes into a ",(0,i.kt)("inlineCode",{parentName:"h2"},"docusaurus.config.js"),"?"),(0,i.kt)("p",null,"You should not have to write your ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from scratch even if you are developing your site. All templates come with a ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," that includes defaults for the common options."),(0,i.kt)("p",null,"However, it can be helpful if you have a high-level understanding of how the configurations are designed and implemented."),(0,i.kt)("p",null,"The high-level overview of Docusaurus configuration can be categorized into:"),(0,i.kt)(r.Z,{toc:l[0].children,mdxType:"TOCInline"}),(0,i.kt)("p",null,"For exact reference to each of the configurable fields, you may refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/docusaurus.config.js"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"docusaurus.config.js")," API reference")),"."),(0,i.kt)("h3",{id:"site-metadata"},"Site metadata"),(0,i.kt)("p",null,"Site metadata contains the essential global metadata such as ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"baseUrl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"favicon"),"."),(0,i.kt)("p",null,"They are used in a number of places such as your site's title and headings, browser tab icon, social sharing (Facebook, Twitter) information or even to generate the correct path to serve your static files."),(0,i.kt)("h3",{id:"deployment-configurations"},"Deployment configurations"),(0,i.kt)("p",null,"Deployment configurations such as ",(0,i.kt)("inlineCode",{parentName:"p"},"projectName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"organizationName")," are used when you deploy your site with the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," command."),(0,i.kt)("p",null,"It is recommended to check the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/deployment"},"deployment docs")," for more information."),(0,i.kt)("h3",{id:"theme-plugin-and-preset-configurations"},"Theme, plugin, and preset configurations"),(0,i.kt)("p",null,"List the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/using-themes"},"theme"),", ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/using-plugins"},"plugins"),", and ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/presets"},"presets")," for your site in the ",(0,i.kt)("inlineCode",{parentName:"p"},"themes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"presets")," fields, respectively. These are typically npm packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    '@docusaurus/plugin-content-blog',\n    '@docusaurus/plugin-content-pages',\n  ],\n  themes: ['@docusaurus/theme-classic'],\n};\n")),(0,i.kt)("p",null,"They can also be loaded from local directories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const path = require('path');\n\nmodule.exports = {\n  // ...\n  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],\n};\n")),(0,i.kt)("p",null,"To specify options for a plugin or theme, replace the name of the plugin or theme in the config file with an array containing the name and an options object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    [\n      '@docusaurus/plugin-content-blog',\n      {\n        path: 'blog',\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        // ...\n      },\n    ],\n    '@docusaurus/plugin-content-pages',\n  ],\n};\n")),(0,i.kt)("p",null,"To specify options for a plugin or theme that is bundled in a preset, pass the options through the ",(0,i.kt)("inlineCode",{parentName:"p"},"presets")," field. In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," refers to ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," refers to ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n        theme: {\n          customCss: [require.resolve('./src/css/custom.css')],\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("p",null,"For further help configuring themes, plugins, and presets, see ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/using-themes"},"Using Themes"),", ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/using-plugins"},"Using Plugins"),", and ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/presets"},"Using Presets"),"."),(0,i.kt)("h3",{id:"custom-configurations"},"Custom configurations"),(0,i.kt)("p",null,"Docusaurus guards ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from unknown fields. To add custom fields, define them in ",(0,i.kt)("inlineCode",{parentName:"p"},"customFields"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  // highlight-start\n  customFields: {\n    image: '',\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n")),(0,i.kt)("h2",{id:"accessing-configuration-from-components"},"Accessing configuration from components"),(0,i.kt)("p",null,"Your configuration object will be made available to all the components of your site. And you may access them via React context as ",(0,i.kt)("inlineCode",{parentName:"p"},"siteConfig"),"."),(0,i.kt)("p",null,"Basic example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// highlight-next-line\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Hello = () => {\n  // highlight-start\n  const {siteConfig} = useDocusaurusContext();\n  // highlight-end\n  const {title, tagline} = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you just want to use those fields on the client side, you could create your own JS files and import them as ES6 modules, there is no need to put them in ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."))),(0,i.kt)("h2",{id:"customizing-babel-configuration"},"Customizing Babel Configuration"),(0,i.kt)("p",null,"For new Docusaurus projects, we automatically generated a ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.js")," in project root."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = {\n  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],\n};\n")),(0,i.kt)("p",null,"Most of the times, this configuration will work just fine. If you want to customize it, you can directly edit this file to customize babel configuration. For your changes to take effect, you need to restart Docusaurus devserver."))}d.isMDXComponent=!0},86010:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);