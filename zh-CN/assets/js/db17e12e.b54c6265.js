(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[5983],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return g}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),u=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=a,m=d["".concat(o,".").concat(g)]||d[g]||p[g]||r;return t?i.createElement(m,s(s({ref:n},c),{},{components:t})):i.createElement(m,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<r;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98448:function(e,n,t){"use strict";var i=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},12168:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(67294),a=t(90050),r=t(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var o=37,u=39;var c=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,p=e.values,d=e.groupId,g=e.className,m=(0,a.Z)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,k=(0,i.useState)(c),v=k[0],b=k[1],y=i.Children.toArray(e.children),N=[];if(null!=d){var w=f[d];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&b(w)}var x=function(e){var n=e.currentTarget,t=N.indexOf(n),i=p[t].value;b(i),null!=d&&(h(d,i),setTimeout((function(){var e,t,i,a,r,s,o,u;(e=n.getBoundingClientRect(),t=e.top,i=e.left,a=e.bottom,r=e.right,s=window,o=s.innerHeight,u=s.innerWidth,t>=0&&r<=u&&a<=o&&i>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},C=function(e){var n,t;switch(e.keyCode){case u:var i=N.indexOf(e.target)+1;t=N[i]||N[0];break;case o:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},g)},p.map((function(e){var n=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:(0,r.Z)("tabs__item",s,{"tabs__item--active":v===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:x,onClick:x},t)}))),n?(0,i.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},22713:function(e,n,t){"use strict";var i=(0,t(67294).createContext)(void 0);n.Z=i},90050:function(e,n,t){"use strict";var i=t(67294),a=t(22713);n.Z=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},86662:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var i=t(22122),a=t(19756),r=(t(67294),t(3905)),s=t(12168),l=t(98448),o=["components"],u={id:"using-plugins",title:"Plugins"},c={unversionedId:"using-plugins",id:"version-2.0.0-beta.0/using-plugins",isDocsHomePage:!1,title:"Plugins",description:"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of bundle via presets.",source:"@site/versioned_docs/version-2.0.0-beta.0/using-plugins.md",sourceDirName:".",slug:"/using-plugins",permalink:"/zh-CN/docs/using-plugins",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-beta.0",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1620828435,formattedLastUpdatedAt:"2021/5/12",frontMatter:{id:"using-plugins",title:"Plugins"},sidebar:"version-2.0.0-beta.0/docs",previous:{title:"i18n - Using Crowdin",permalink:"/zh-CN/docs/i18n/crowdin"},next:{title:"Themes",permalink:"/zh-CN/docs/using-themes"}},p=[{value:"Available plugins",id:"available-plugins",children:[]},{value:"Installing a plugin",id:"installing-a-plugin",children:[]},{value:"Configuring plugins",id:"configuring-plugins",children:[]},{value:"Multi-instance plugins and plugin ids",id:"multi-instance-plugins-and-plugin-ids",children:[]},{value:"Plugins design",id:"plugins-design",children:[]},{value:"Creating plugins",id:"creating-plugins",children:[{value:"Module definition",id:"module-definition",children:[]}]}],d={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of bundle via ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/presets"},"presets"),"."),(0,r.kt)("h2",{id:"available-plugins"},"Available plugins"),(0,r.kt)("p",null,"We maintain a ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/api/plugins"},"list of official plugins"),", but the community has also created some ",(0,r.kt)("a",{parentName:"p",href:"/community/resources#community-plugins"},"unofficial plugins"),"."),(0,r.kt)("h2",{id:"installing-a-plugin"},"Installing a plugin"),(0,r.kt)("p",null,"A plugin is usually a npm package, so you install them like other npm packages using npm."),(0,r.kt)(s.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save docusaurus-plugin-name\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add docusaurus-plugin-name\n")))),(0,r.kt)("p",null,"Then you add it in your site's ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3} title="docusaurus.config.js"',"{3}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: ['@docusaurus/plugin-content-pages'],\n};\n")),(0,r.kt)("p",null,"Docusaurus can also load plugins from your local directory, you can do something like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{5} title="docusaurus.config.js"',"{5}":!0,title:'"docusaurus.config.js"'},"const path = require('path');\n\nmodule.exports = {\n  // ...\n  plugins: [path.resolve(__dirname, '/path/to/docusaurus-local-plugin')],\n};\n")),(0,r.kt)("h2",{id:"configuring-plugins"},"Configuring plugins"),(0,r.kt)("p",null,"For the most basic usage of plugins, you can provide just the plugin name or the absolute path to the plugin."),(0,r.kt)("p",null,"However, plugins can have options specified by wrapping the name and an options object in an array inside your config. This style is usually called ",(0,r.kt)("inlineCode",{parentName:"p"},"Babel Style"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{4-9} title="docusaurus.config.js"',"{4-9}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    [\n      '@docusaurus/plugin-xxx',\n      {\n        /* options */\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    // Basic usage.\n    '@docusaurus/plugin-google-analytics',\n\n    // With options object (babel style)\n    [\n      '@docusaurus/plugin-sitemap',\n      {\n        changefreq: 'weekly',\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("h2",{id:"multi-instance-plugins-and-plugin-ids"},"Multi-instance plugins and plugin ids"),(0,r.kt)("p",null,"All Docusaurus content plugins can support multiple plugin instances."),(0,r.kt)("p",null,"The Docs plugin has ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/docs-multi-instance"},"additional multi-instance documentation")),(0,r.kt)("p",null,"It is required to assign a unique id to each plugin instance."),(0,r.kt)("p",null,"By default, the plugin id is ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{6,13} title="docusaurus.config.js"',"{6,13}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-xxx',\n      {\n        id: 'plugin-xxx-1',\n        // other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-xxx',\n      {\n        id: 'plugin-xxx-2',\n        // other options\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'At most one plugin instance can be the "default plugin instance", by omitting the ',(0,r.kt)("inlineCode",{parentName:"p"},"id")," attribute, or using ",(0,r.kt)("inlineCode",{parentName:"p"},"id: 'default'"),"."))),(0,r.kt)("h2",{id:"plugins-design"},"Plugins design"),(0,r.kt)("p",null,"Docusaurus' implementation of the plugins system provides us with a convenient way to hook into the website's lifecycle to modify what goes on during development/build, which involves (but not limited to) extending the webpack config, modifying the data being loaded and creating new components to be used in a page."),(0,r.kt)("h2",{id:"creating-plugins"},"Creating plugins"),(0,r.kt)("p",null,"A plugin is a module which exports a function that takes two parameters and returns an object when executed."),(0,r.kt)("h3",{id:"module-definition"},"Module definition"),(0,r.kt)("p",null,"The exported modules for plugins are called with two parameters: ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," and returns a JavaScript object with defining the ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/lifecycle-apis"},"lifecycle APIs"),"."),(0,r.kt)("p",null,"For example if you have a reference to a local folder such as this in your ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [path.resolve(__dirname, 'my-plugin')],\n};\n")),(0,r.kt)("p",null,"Then in the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"my-plugin")," you can create an index.js such as this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"module.exports = function (context, options) {\n  // ...\n  return {\n    name: 'my-docusaurus-plugin',\n    async loadContent() {\n      /* ... */\n    },\n    async contentLoaded({content, actions}) {\n      /* ... */\n    },\n    /* other lifecycle API */\n  };\n};\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"my-plugin")," folder could also be a fully fledged package with it's own package.json and a ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.js")," file for example"),(0,r.kt)("h4",{id:"context"},(0,r.kt)("inlineCode",{parentName:"h4"},"context")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"context")," is plugin-agnostic and the same object will be passed into all plugins used for a Docusaurus website. The ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," object contains the following fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface LoadContext {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n}\n")),(0,r.kt)("h4",{id:"options"},(0,r.kt)("inlineCode",{parentName:"h4"},"options")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"options")," are the ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/using-plugins#configuring-plugins"},"second optional parameter when the plugins are used"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," are plugin-specific and are specified by users when they use them in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". Alternatively, if preset contains the plugin, the preset will then be in charge of passing the correct options into the plugin. It is up to individual plugin to define what options it takes."),(0,r.kt)("h4",{id:"return-value"},"Return value"),(0,r.kt)("p",null,"The returned object value should implement the ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/lifecycle-apis"},"lifecycle APIs"),"."))}g.isMDXComponent=!0},86010:function(e,n,t){"use strict";function i(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);