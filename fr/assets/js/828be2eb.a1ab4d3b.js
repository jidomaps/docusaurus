(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[6523],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98448:function(e,n,t){"use strict";var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},12168:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(67294),i=t(90050),o=t(86010),s="tabItem_1uMI",r="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,p=e.groupId,m=e.className,h=(0,i.Z)(),v=h.tabGroupChoices,g=h.setTabGroupChoices,k=(0,a.useState)(c),f=k[0],N=k[1],b=a.Children.toArray(e.children),y=[];if(null!=p){var w=v[p];null!=w&&w!==f&&d.some((function(e){return e.value===w}))&&N(w)}var x=function(e){var n=e.currentTarget,t=y.indexOf(n),a=d[t].value;N(a),null!=p&&(g(p,a),setTimeout((function(){var e,t,a,i,o,s,l,u;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,o=e.right,s=window,l=s.innerHeight,u=s.innerWidth,t>=0&&o<=u&&i<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(r),setTimeout((function(){return n.classList.remove(r)}),2e3))}),150))},T=function(e){var n,t;switch(e.keyCode){case u:var a=y.indexOf(e.target)+1;t=y[a]||y[0];break;case l:var i=y.indexOf(e.target)-1;t=y[i]||y[y.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},m)},d.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":f===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:T,onFocus:x,onClick:x},t)}))),n?(0,a.cloneElement)(b.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},22713:function(e,n,t){"use strict";var a=(0,t(67294).createContext)(void 0);n.Z=a},90050:function(e,n,t){"use strict";var a=t(67294),i=t(22713);n.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},59413:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(22122),i=t(19756),o=(t(67294),t(3905)),s=t(12168),r=t(98448),l=["components"],u={id:"multi-instance",title:"Docs Multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},c={unversionedId:"guides/docs/multi-instance",id:"guides/docs/multi-instance",isDocsHomePage:!1,title:"Docs Multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",source:"@site/docs/guides/docs/docs-multi-instance.mdx",sourceDirName:"guides/docs",slug:"/docs-multi-instance",permalink:"/fr/docs/next/docs-multi-instance",editUrl:"https://crowdin.com/project/docusaurus-v2/fr",version:"current",lastUpdatedBy:"aehrea",lastUpdatedAt:1616432231,formattedLastUpdatedAt:"22/03/2021",frontMatter:{id:"multi-instance",title:"Docs Multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},sidebar:"docs",previous:{title:"Docs Markdown Features",permalink:"/fr/docs/next/docs-markdown-features"},next:{title:"Blog",permalink:"/fr/docs/next/blog"}},d=[{value:"Use-cases",id:"use-cases",children:[{value:"Mobile SDKs documentation",id:"mobile-sdks-documentation",children:[]},{value:"Versioned and unversioned doc",id:"versioned-and-unversioned-doc",children:[]}]},{value:"Setup",id:"setup",children:[]},{value:"Versioned paths",id:"versioned-paths",children:[]},{value:"Tagging new versions",id:"tagging-new-versions",children:[]},{value:"Docs navbar items",id:"docs-navbar-items",children:[]}],p={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs")," plugin can support ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/using-plugins#multi-instance-plugins-and-plugin-ids"},"multi-instance"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This feature is only useful for ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/versioning"},"versioned documentations"),". It is recommended to be familiar with docs versioning before reading this page."))),(0,o.kt)("h2",{id:"use-cases"},"Use-cases"),(0,o.kt)("p",null,"Sometimes you want a Docusaurus site to host 2 distinct sets of documentation (or more)."),(0,o.kt)("p",null,"These documentations may even have different versioning/release lifecycles."),(0,o.kt)("h3",{id:"mobile-sdks-documentation"},"Mobile SDKs documentation"),(0,o.kt)("p",null,"If you build a cross-platform mobile SDK, you may have 2 documentations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android SDK documentation (",(0,o.kt)("inlineCode",{parentName:"li"},"v1.0"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"v1.1"),")"),(0,o.kt)("li",{parentName:"ul"},"iOS SDK documentation (",(0,o.kt)("inlineCode",{parentName:"li"},"v1.0"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"v2.0"),")")),(0,o.kt)("p",null,"In such case, you can use a distinct docs plugin instance per mobile SDK documentation."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If each documentation instance is very large, you should rather create 2 distinct Docusaurus sites."),(0,o.kt)("p",{parentName:"div"},"If someone edits the iOS documentation, is it really useful to rebuild everything, including the whole Android documentation that did not change?"))),(0,o.kt)("h3",{id:"versioned-and-unversioned-doc"},"Versioned and unversioned doc"),(0,o.kt)("p",null,'Sometimes, you want some documents to be versioned, while other documents are more "global", and it feels useless to version them.'),(0,o.kt)("p",null,"We use this pattern on the Docusaurus website itself:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/docs"},"/docs/","*")," section is versioned"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/community/support"},"/community/","*")," section is unversioned")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Suppose you have 2 documentations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Product: some versioned doc about your product"),(0,o.kt)("li",{parentName:"ul"},"Community: some unversioned doc about the community around your product")),(0,o.kt)("p",null,"In this case, you should use the same plugin twice in your site configuration."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," already includes a docs plugin instance for you!"))),(0,o.kt)("p",null,"When using the preset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          // id: 'product', // omitted => default instance\n          // highlight-end\n          path: 'product',\n          routeBasePath: 'product',\n          sidebarPath: require.resolve('./sidebarsProduct.js'),\n          // ... other options\n        },\n      },\n    ],\n  ],\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: require.resolve('./sidebarsCommunity.js'),\n        // ... other options\n      },\n    ],\n  ],\n};\n")),(0,o.kt)("p",null,"When not using the preset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        // id: 'product', // omitted => default instance\n        // highlight-end\n        path: 'product',\n        routeBasePath: 'product',\n        sidebarPath: require.resolve('./sidebarsProduct.js'),\n        // ... other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: require.resolve('./sidebarsCommunity.js'),\n        // ... other options\n      },\n    ],\n  ],\n};\n")),(0,o.kt)("p",null,"Don't forget to assign a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute to plugin instances."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We consider that the ",(0,o.kt)("inlineCode",{parentName:"p"},"product"),' instance is the most important one, and make it the "default" instance by not assigning any id.'))),(0,o.kt)("h2",{id:"versioned-paths"},"Versioned paths"),(0,o.kt)("p",null,"Each plugin instance will store versioned docs in a distinct folder."),(0,o.kt)("p",null,"The default plugin instance will use these paths:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"website/versions.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"website/versioned_docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"website/versioned_sidebars"))),(0,o.kt)("p",null,"The other plugin instances (with an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute) will use these paths:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"website/<pluginId>_versions.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"website/<pluginId>_versioned_docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"website/<pluginId>_versioned_sidebars"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute (defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),") for one of the docs plugin instances."),(0,o.kt)("p",{parentName:"div"},"The instance paths will be simpler, and retro-compatible with a single-instance setup."))),(0,o.kt)("h2",{id:"tagging-new-versions"},"Tagging new versions"),(0,o.kt)("p",null,"Each plugin instance will have its own cli command to tag a new version. They will be displayed if you run:"),(0,o.kt)(s.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus -- --help\n"))),(0,o.kt)(r.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run docusaurus -- --help\n")))),(0,o.kt)("p",null,"To version the product/default docs plugin instance:"),(0,o.kt)(s.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0.0\n"))),(0,o.kt)(r.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run docusaurus docs:version 1.0.0\n")))),(0,o.kt)("p",null,"To version the non-default/community docs plugin instance:"),(0,o.kt)(s.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version:community 1.0.0\n"))),(0,o.kt)(r.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run docusaurus docs:version:community 1.0.0\n")))),(0,o.kt)("h2",{id:"docs-navbar-items"},"Docs navbar items"),(0,o.kt)("p",null,"Each docs-related ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/api/themes/configuration#navbar"},"theme navbar items")," take an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"docsPluginId")," attribute."),(0,o.kt)("p",null,"For example, if you want to have one version dropdown for each mobile SDK (iOS and Android), you could do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'ios',\n          // highlight-end\n        },\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'android',\n          // highlight-end\n        },\n      ],\n    },\n  },\n};\n")))}m.isMDXComponent=!0},86010:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);