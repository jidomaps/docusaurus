(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[8738],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return c},kt:function(){return g}});var i=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},s=Object.keys(n);for(i=0;i<s.length;i++)t=s[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)t=s[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var r=i.createContext({}),o=function(n){var e=i.useContext(r),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=o(n.components);return i.createElement(r.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,s=n.originalType,r=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),d=o(t),g=a,m=d["".concat(r,".").concat(g)]||d[g]||p[g]||s;return t?i.createElement(m,l(l({ref:e},c),{},{components:t})):i.createElement(m,l({ref:e},c))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var s=t.length,l=new Array(s);l[0]=d;var u={};for(var r in e)hasOwnProperty.call(e,r)&&(u[r]=e[r]);u.originalType=n,u.mdxType="string"==typeof n?n:a,l[1]=u;for(var o=2;o<s;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98448:function(n,e,t){"use strict";var i=t(67294);e.Z=function(n){var e=n.children,t=n.hidden,a=n.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}},12168:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var i=t(67294),a=t(90050),s=t(86010),l="tabItem_1uMI",u="tabItemActive_2DSg";var r=37,o=39;var c=function(n){var e=n.lazy,t=n.block,c=n.defaultValue,p=n.values,d=n.groupId,g=n.className,m=(0,a.Z)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,k=(0,i.useState)(c),v=k[0],y=k[1],b=i.Children.toArray(n.children),N=[];if(null!=d){var x=f[d];null!=x&&x!==v&&p.some((function(n){return n.value===x}))&&y(x)}var w=function(n){var e=n.currentTarget,t=N.indexOf(e),i=p[t].value;y(i),null!=d&&(h(d,i),setTimeout((function(){var n,t,i,a,s,l,r,o;(n=e.getBoundingClientRect(),t=n.top,i=n.left,a=n.bottom,s=n.right,l=window,r=l.innerHeight,o=l.innerWidth,t>=0&&s<=o&&a<=r&&i>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(u),setTimeout((function(){return e.classList.remove(u)}),2e3))}),150))},j=function(n){var e,t;switch(n.keyCode){case o:var i=N.indexOf(n.target)+1;t=N[i]||N[0];break;case r:var a=N.indexOf(n.target)-1;t=N[a]||N[N.length-1]}null==(e=t)||e.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},g)},p.map((function(n){var e=n.value,t=n.label;return i.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":v===e}),key:e,ref:function(n){return N.push(n)},onKeyDown:j,onFocus:w,onClick:w},t)}))),e?(0,i.cloneElement)(b.filter((function(n){return n.props.value===v}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map((function(n,e){return(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==v})}))))}},22713:function(n,e,t){"use strict";var i=(0,t(67294).createContext)(void 0);e.Z=i},90050:function(n,e,t){"use strict";var i=t(67294),a=t(22713);e.Z=function(){var n=(0,i.useContext)(a.Z);if(null==n)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return n}},40570:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var i=t(22122),a=t(19756),s=(t(67294),t(3905)),l=t(12168),u=t(98448),r=["components"],o={id:"using-plugins",title:"Plugins"},c={unversionedId:"using-plugins",id:"using-plugins",isDocsHomePage:!1,title:"Plugins",description:"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of bundle via presets.",source:"@site/docs/using-plugins.md",sourceDirName:".",slug:"/using-plugins",permalink:"/fr/docs/next/using-plugins",editUrl:"https://crowdin.com/project/docusaurus-v2/fr",version:"current",lastUpdatedBy:"silva-nick",lastUpdatedAt:1622903085,formattedLastUpdatedAt:"05/06/2021",frontMatter:{id:"using-plugins",title:"Plugins"},sidebar:"docs",previous:{title:"i18n - Using Crowdin",permalink:"/fr/docs/next/i18n/crowdin"},next:{title:"Themes",permalink:"/fr/docs/next/using-themes"}},p=[{value:"Available plugins",id:"available-plugins",children:[]},{value:"Installing a plugin",id:"installing-a-plugin",children:[]},{value:"Configuring plugins",id:"configuring-plugins",children:[]},{value:"Multi-instance plugins and plugin ids",id:"multi-instance-plugins-and-plugin-ids",children:[]},{value:"Plugins design",id:"plugins-design",children:[]},{value:"Creating plugins",id:"creating-plugins",children:[{value:"Functional definition",id:"functional-definition",children:[]},{value:"Module definition",id:"module-definition",children:[]}]}],d={toc:p};function g(n){var e=n.components,t=(0,a.Z)(n,r);return(0,s.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of bundle via ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/presets"},"presets"),"."),(0,s.kt)("h2",{id:"available-plugins"},"Available plugins"),(0,s.kt)("p",null,"We maintain a ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/api/plugins"},"list of official plugins"),", but the community has also created some ",(0,s.kt)("a",{parentName:"p",href:"/community/resources#community-plugins"},"unofficial plugins"),"."),(0,s.kt)("h2",{id:"installing-a-plugin"},"Installing a plugin"),(0,s.kt)("p",null,"A plugin is usually a npm package, so you install them like other npm packages using npm."),(0,s.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save docusaurus-plugin-name\n"))),(0,s.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add docusaurus-plugin-name\n")))),(0,s.kt)("p",null,"Then you add it in your site's ",(0,s.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"'s ",(0,s.kt)("inlineCode",{parentName:"p"},"plugins")," option:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3} title="docusaurus.config.js"',"{3}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: ['@docusaurus/plugin-content-pages'],\n};\n")),(0,s.kt)("p",null,"Docusaurus can also load plugins from your local directory, you can do something like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{5} title="docusaurus.config.js"',"{5}":!0,title:'"docusaurus.config.js"'},"const path = require('path');\n\nmodule.exports = {\n  // ...\n  plugins: [path.resolve(__dirname, '/path/to/docusaurus-local-plugin')],\n};\n")),(0,s.kt)("h2",{id:"configuring-plugins"},"Configuring plugins"),(0,s.kt)("p",null,"For the most basic usage of plugins, you can provide just the plugin name or the absolute path to the plugin."),(0,s.kt)("p",null,"However, plugins can have options specified by wrapping the name and an options object in an array inside your config. This style is usually called ",(0,s.kt)("inlineCode",{parentName:"p"},"Babel Style"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'{4-9} title="docusaurus.config.js"',"{4-9}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    [\n      '@docusaurus/plugin-xxx',\n      {\n        /* options */\n      },\n    ],\n  ],\n};\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    // Basic usage.\n    '@docusaurus/plugin-google-analytics',\n\n    // With options object (babel style)\n    [\n      '@docusaurus/plugin-sitemap',\n      {\n        changefreq: 'weekly',\n      },\n    ],\n  ],\n};\n")),(0,s.kt)("h2",{id:"multi-instance-plugins-and-plugin-ids"},"Multi-instance plugins and plugin ids"),(0,s.kt)("p",null,"All Docusaurus content plugins can support multiple plugin instances."),(0,s.kt)("p",null,"The Docs plugin has ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/docs-multi-instance"},"additional multi-instance documentation")),(0,s.kt)("p",null,"It is required to assign a unique id to each plugin instance."),(0,s.kt)("p",null,"By default, the plugin id is ",(0,s.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'{6,13} title="docusaurus.config.js"',"{6,13}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-xxx',\n      {\n        id: 'plugin-xxx-1',\n        // other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-xxx',\n      {\n        id: 'plugin-xxx-2',\n        // other options\n      },\n    ],\n  ],\n};\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},'At most one plugin instance can be the "default plugin instance", by omitting the ',(0,s.kt)("inlineCode",{parentName:"p"},"id")," attribute, or using ",(0,s.kt)("inlineCode",{parentName:"p"},"id: 'default'"),"."))),(0,s.kt)("h2",{id:"plugins-design"},"Plugins design"),(0,s.kt)("p",null,"Docusaurus' implementation of the plugins system provides us with a convenient way to hook into the website's lifecycle to modify what goes on during development/build, which involves (but not limited to) extending the webpack config, modifying the data being loaded and creating new components to be used in a page."),(0,s.kt)("h2",{id:"creating-plugins"},"Creating plugins"),(0,s.kt)("p",null,"A plugin is a function that takes two parameters: ",(0,s.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"options"),"."),(0,s.kt)("p",null,"It returns a plugin instance object, containing plugin ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/lifecycle-apis"},"lifecycle APIs"),"."),(0,s.kt)("p",null,"It can be defined as a function or a module."),(0,s.kt)("h3",{id:"functional-definition"},"Functional definition"),(0,s.kt)("p",null,"You can use a plugin as a function, directly in the Docusaurus config file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    // highligh-start\n    function myPlugin(context, options) {\n      // ...\n      return {\n        name: 'my-plugin',\n        async loadContent() {\n          // ...\n        },\n        async contentLoaded({content, actions}) {\n          // ...\n        },\n        /* other lifecycle API */\n      };\n    },\n    // highlight-end\n  ],\n};\n")),(0,s.kt)("h3",{id:"module-definition"},"Module definition"),(0,s.kt)("p",null,"You can use a plugin as a module, loading it from a separate file or NPM package:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    // without options:\n    './my-plugin',\n    // or with options:\n    ['./my-plugin', options],\n  ],\n};\n")),(0,s.kt)("p",null,"Then in the folder ",(0,s.kt)("inlineCode",{parentName:"p"},"my-plugin")," you can create an index.js such as this"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-plugin.js"',title:'"my-plugin.js"'},"module.exports = function myPlugin(context, options) {\n  // ...\n  return {\n    name: 'my-plugin',\n    async loadContent() {\n      /* ... */\n    },\n    async contentLoaded({content, actions}) {\n      /* ... */\n    },\n    /* other lifecycle API */\n  };\n};\n")),(0,s.kt)("h4",{id:"context"},(0,s.kt)("inlineCode",{parentName:"h4"},"context")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"context")," is plugin-agnostic, and the same object will be passed into all plugins used for a Docusaurus website. The ",(0,s.kt)("inlineCode",{parentName:"p"},"context")," object contains the following fields:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface LoadContext {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n}\n")),(0,s.kt)("h4",{id:"options"},(0,s.kt)("inlineCode",{parentName:"h4"},"options")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"options")," are the ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/using-plugins#configuring-plugins"},"second optional parameter when the plugins are used"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"options")," are plugin-specific and are specified by users when they use them in ",(0,s.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". Alternatively, if preset contains the plugin, the preset will then be in charge of passing the correct options into the plugin. It is up to individual plugin to define what options it takes."),(0,s.kt)("h4",{id:"return-value"},"Return value"),(0,s.kt)("p",null,"The returned object value should implement the ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/lifecycle-apis"},"lifecycle APIs"),"."))}g.isMDXComponent=!0},86010:function(n,e,t){"use strict";function i(n){var e,t,a="";if("string"==typeof n||"number"==typeof n)a+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=i(n[e]))&&(a&&(a+=" "),a+=t);else for(e in n)n[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var n,e,t=0,a="";t<arguments.length;)(n=arguments[t++])&&(e=i(n))&&(a&&(a+=" "),a+=e);return a}t.d(e,{Z:function(){return a}})}}]);