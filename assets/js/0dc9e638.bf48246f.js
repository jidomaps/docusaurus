(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[9010],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return g}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),o=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=o(t),g=i,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||s;return t?a.createElement(m,u(u({ref:n},p),{},{components:t})):a.createElement(m,u({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,u=new Array(s);u[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,u[1]=r;for(var o=2;o<s;o++)u[o]=t[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98448:function(e,n,t){"use strict";var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},12168:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var a=t(67294),i=t(90050),s=t(86010),u="tabItem_1uMI",r="tabItemActive_2DSg";var l=37,o=39;var p=function(e){var n=e.lazy,t=e.block,p=e.defaultValue,c=e.values,d=e.groupId,g=e.className,m=(0,i.Z)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,k=(0,a.useState)(p),v=k[0],b=k[1],y=a.Children.toArray(e.children),N=[];if(null!=d){var w=f[d];null!=w&&w!==v&&c.some((function(e){return e.value===w}))&&b(w)}var x=function(e){var n=e.currentTarget,t=N.indexOf(n),a=c[t].value;b(a),null!=d&&(h(d,a),setTimeout((function(){var e,t,a,i,s,u,l,o;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,s=e.right,u=window,l=u.innerHeight,o=u.innerWidth,t>=0&&s<=o&&i<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(r),setTimeout((function(){return n.classList.remove(r)}),2e3))}),150))},j=function(e){var n,t;switch(e.keyCode){case o:var a=N.indexOf(e.target)+1;t=N[a]||N[0];break;case l:var i=N.indexOf(e.target)-1;t=N[i]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},g)},c.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":v===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:x,onClick:x},t)}))),n?(0,a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},22713:function(e,n,t){"use strict";var a=(0,t(67294).createContext)(void 0);n.Z=a},90050:function(e,n,t){"use strict";var a=t(67294),i=t(22713);n.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},40963:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var a=t(22122),i=t(19756),s=(t(67294),t(3905)),u=t(12168),r=t(98448),l=["components"],o={id:"using-plugins",title:"Plugins"},p={unversionedId:"using-plugins",id:"version-2.0.0-alpha.75/using-plugins",isDocsHomePage:!1,title:"Plugins",description:"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of bundle via presets.",source:"@site/versioned_docs/version-2.0.0-alpha.75/using-plugins.md",sourceDirName:".",slug:"/using-plugins",permalink:"/docusaurus/docs/2.0.0-alpha.75/using-plugins",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/using-plugins.md",version:"2.0.0-alpha.75",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619800915,formattedLastUpdatedAt:"4/30/2021",frontMatter:{id:"using-plugins",title:"Plugins"},sidebar:"version-2.0.0-alpha.75/docs",previous:{title:"i18n - Using Crowdin",permalink:"/docusaurus/docs/2.0.0-alpha.75/i18n/crowdin"},next:{title:"Themes",permalink:"/docusaurus/docs/2.0.0-alpha.75/using-themes"}},c=[{value:"Available plugins",id:"available-plugins",children:[]},{value:"Installing a plugin",id:"installing-a-plugin",children:[]},{value:"Configuring plugins",id:"configuring-plugins",children:[]},{value:"Multi-instance plugins and plugin ids",id:"multi-instance-plugins-and-plugin-ids",children:[]},{value:"Plugins design",id:"plugins-design",children:[]},{value:"Creating plugins",id:"creating-plugins",children:[{value:"Module definition",id:"module-definition",children:[]}]}],d={toc:c};function g(e){var n=e.components,t=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of bundle via ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.75/presets"},"presets"),"."),(0,s.kt)("h2",{id:"available-plugins"},"Available plugins"),(0,s.kt)("p",null,"We maintain a ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.75/api/plugins"},"list of official plugins"),", but the community has also created some ",(0,s.kt)("a",{parentName:"p",href:"/community/resources#community-plugins"},"unofficial plugins"),"."),(0,s.kt)("h2",{id:"installing-a-plugin"},"Installing a plugin"),(0,s.kt)("p",null,"A plugin is usually a npm package, so you install them like other npm packages using npm."),(0,s.kt)(u.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save docusaurus-plugin-name\n"))),(0,s.kt)(r.Z,{value:"yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add docusaurus-plugin-name\n")))),(0,s.kt)("p",null,"Then you add it in your site's ",(0,s.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"'s ",(0,s.kt)("inlineCode",{parentName:"p"},"plugins")," option:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3} title="docusaurus.config.js"',"{3}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: ['@docusaurus/plugin-content-pages'],\n};\n")),(0,s.kt)("p",null,"Docusaurus can also load plugins from your local directory, you can do something like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{5} title="docusaurus.config.js"',"{5}":!0,title:'"docusaurus.config.js"'},"const path = require('path');\n\nmodule.exports = {\n  // ...\n  plugins: [path.resolve(__dirname, '/path/to/docusaurus-local-plugin')],\n};\n")),(0,s.kt)("h2",{id:"configuring-plugins"},"Configuring plugins"),(0,s.kt)("p",null,"For the most basic usage of plugins, you can provide just the plugin name or the absolute path to the plugin."),(0,s.kt)("p",null,"However, plugins can have options specified by wrapping the name and an options object in an array inside your config. This style is usually called ",(0,s.kt)("inlineCode",{parentName:"p"},"Babel Style"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'{4-9} title="docusaurus.config.js"',"{4-9}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    [\n      '@docusaurus/plugin-xxx',\n      {\n        /* options */\n      },\n    ],\n  ],\n};\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    // Basic usage.\n    '@docusaurus/plugin-google-analytics',\n\n    // With options object (babel style)\n    [\n      '@docusaurus/plugin-sitemap',\n      {\n        changefreq: 'weekly',\n      },\n    ],\n  ],\n};\n")),(0,s.kt)("h2",{id:"multi-instance-plugins-and-plugin-ids"},"Multi-instance plugins and plugin ids"),(0,s.kt)("p",null,"All Docusaurus content plugins can support multiple plugin instances."),(0,s.kt)("p",null,"The Docs plugin has ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.75/docs-multi-instance"},"additional multi-instance documentation")),(0,s.kt)("p",null,"It is required to assign a unique id to each plugin instance."),(0,s.kt)("p",null,"By default, the plugin id is ",(0,s.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'{6,13} title="docusaurus.config.js"',"{6,13}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-xxx',\n      {\n        id: 'plugin-xxx-1',\n        // other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-xxx',\n      {\n        id: 'plugin-xxx-2',\n        // other options\n      },\n    ],\n  ],\n};\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},'At most one plugin instance can be the "default plugin instance", by omitting the ',(0,s.kt)("inlineCode",{parentName:"p"},"id")," attribute, or using ",(0,s.kt)("inlineCode",{parentName:"p"},"id: 'default'"),"."))),(0,s.kt)("h2",{id:"plugins-design"},"Plugins design"),(0,s.kt)("p",null,"Docusaurus' implementation of the plugins system provides us with a convenient way to hook into the website's lifecycle to modify what goes on during development/build, which involves (but not limited to) extending the webpack config, modifying the data being loaded and creating new components to be used in a page."),(0,s.kt)("h2",{id:"creating-plugins"},"Creating plugins"),(0,s.kt)("p",null,"A plugin is a module which exports a function that takes two parameters and returns an object when executed."),(0,s.kt)("h3",{id:"module-definition"},"Module definition"),(0,s.kt)("p",null,"The exported modules for plugins are called with two parameters: ",(0,s.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"options")," and returns a JavaScript object with defining the ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.75/lifecycle-apis"},"lifecycle APIs"),"."),(0,s.kt)("p",null,"For example if you have a reference to a local folder such as this in your ",(0,s.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [path.resolve(__dirname, 'my-plugin')],\n};\n")),(0,s.kt)("p",null,"Then in the folder ",(0,s.kt)("inlineCode",{parentName:"p"},"my-plugin")," you can create an index.js such as this"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"module.exports = function (context, options) {\n  // ...\n  return {\n    name: 'my-docusaurus-plugin',\n    async loadContent() {\n      /* ... */\n    },\n    async contentLoaded({content, actions}) {\n      /* ... */\n    },\n    /* other lifecycle API */\n  };\n};\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"my-plugin")," folder could also be a fully fledged package with it's own package.json and a ",(0,s.kt)("inlineCode",{parentName:"p"},"src/index.js")," file for example"),(0,s.kt)("h4",{id:"context"},(0,s.kt)("inlineCode",{parentName:"h4"},"context")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"context")," is plugin-agnostic and the same object will be passed into all plugins used for a Docusaurus website. The ",(0,s.kt)("inlineCode",{parentName:"p"},"context")," object contains the following fields:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface LoadContext {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n}\n")),(0,s.kt)("h4",{id:"options"},(0,s.kt)("inlineCode",{parentName:"h4"},"options")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"options")," are the ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.75/using-plugins#configuring-plugins"},"second optional parameter when the plugins are used"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"options")," are plugin-specific and are specified by users when they use them in ",(0,s.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". Alternatively, if preset contains the plugin, the preset will then be in charge of passing the correct options into the plugin. It is up to individual plugin to define what options it takes."),(0,s.kt)("h4",{id:"return-value"},"Return value"),(0,s.kt)("p",null,"The returned object value should implement the ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.75/lifecycle-apis"},"lifecycle APIs"),"."))}g.isMDXComponent=!0},86010:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);