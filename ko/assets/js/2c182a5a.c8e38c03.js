(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[199],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=i(n),m=s,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98448:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:s},t)}},12168:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(67294),s=n(90050),r=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,i=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,d=e.values,c=e.groupId,m=e.className,g=(0,s.Z)(),f=g.tabGroupChoices,k=g.setTabGroupChoices,h=(0,a.useState)(p),b=h[0],N=h[1],v=a.Children.toArray(e.children),y=[];if(null!=c){var w=f[c];null!=w&&w!==b&&d.some((function(e){return e.value===w}))&&N(w)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),a=d[n].value;N(a),null!=c&&(k(c,a),setTimeout((function(){var e,n,a,s,r,o,u,i;(e=t.getBoundingClientRect(),n=e.top,a=e.left,s=e.bottom,r=e.right,o=window,u=o.innerHeight,i=o.innerWidth,n>=0&&r<=i&&s<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case i:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case u:var s=y.indexOf(e.target)-1;n=y[s]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:j,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},22713:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},90050:function(e,t,n){"use strict";var a=n(67294),s=n(22713);t.Z=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},70192:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(22122),s=n(19756),r=(n(67294),n(3905)),o=n(12168),l=n(98448),u=["components"],i={id:"presets",title:"Presets"},p={unversionedId:"presets",id:"version-2.0.0-alpha.75/presets",isDocsHomePage:!1,title:"Presets",description:"Presets are collections of plugins and themes.",source:"@site/versioned_docs/version-2.0.0-alpha.75/presets.md",sourceDirName:".",slug:"/presets",permalink:"/ko/docs/2.0.0-alpha.75/presets",editUrl:"https://crowdin.com/project/docusaurus-v2/ko",version:"2.0.0-alpha.75",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619800915,formattedLastUpdatedAt:"2021. 4. 30.",frontMatter:{id:"presets",title:"Presets"},sidebar:"version-2.0.0-alpha.75/docs",previous:{title:"Themes",permalink:"/ko/docs/2.0.0-alpha.75/using-themes"},next:{title:"Migration overview",permalink:"/ko/docs/2.0.0-alpha.75/migration"}},d=[{value:"Using presets",id:"using-presets",children:[]},{value:"Presets -&gt; themes and plugins",id:"presets---themes-and-plugins",children:[]},{value:"Official presets",id:"official-presets",children:[{value:"<code>@docusaurus/preset-classic</code>",id:"docusauruspreset-classic",children:[]},{value:"<code>@docusaurus/preset-bootstrap</code>",id:"docusauruspreset-bootstrap",children:[]}]}],c={toc:d};function m(e){var t=e.components,n=(0,s.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Presets are collections of plugins and themes."),(0,r.kt)("h2",{id:"using-presets"},"Using presets"),(0,r.kt)("p",null,"A preset is usually a npm package, so you install them like other npm packages using npm."),(0,r.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save docusaurus-preset-name\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add docusaurus-preset-name\n")))),(0,r.kt)("p",null,"Then, add it in your site's ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"presets")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3} title="docusaurus.config.js"',"{3}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: ['@docusaurus/preset-xxxx'],\n};\n")),(0,r.kt)("p",null,"To load presets from your local directory, specify how to resolve them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{5} title="docusaurus.config.js"',"{5}":!0,title:'"docusaurus.config.js"'},"const path = require('path');\n\nmodule.exports = {\n  // ...\n  presets: [path.resolve(__dirname, '/path/to/docusaurus-local-presets')],\n};\n")),(0,r.kt)("h2",{id:"presets---themes-and-plugins"},"Presets -> themes and plugins"),(0,r.kt)("p",null,"Presets in some way are a shorthand function to add plugins and themes to your docusaurus config. For example, you can specify a preset that includes the following themes and plugins,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function preset(context, opts = {}) {\n  return {\n    themes: [\n      require.resolve('@docusaurus/themes-cool'),\n      require.resolve('@docusaurus/themes-bootstrap'),\n    ],\n    plugins: [require.resolve('@docusaurus/plugin-blog')],\n  };\n};\n")),(0,r.kt)("p",null,"then in your Docusaurus config, you may configure the preset instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3} title="docusaurus.config.js"',"{3}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: ['@docusaurus/preset-my-own'],\n};\n")),(0,r.kt)("p",null,"This is equivalent of doing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themes: ['@docusaurus/themes-cool', '@docusaurus/themes-bootstrap'],\n  plugins: ['@docusaurus/plugin-blog'],\n};\n")),(0,r.kt)("p",null,"This is especially useful when some plugins and themes are intended to be used together."),(0,r.kt)("h2",{id:"official-presets"},"Official presets"),(0,r.kt)("h3",{id:"docusauruspreset-classic"},(0,r.kt)("inlineCode",{parentName:"h3"},"@docusaurus/preset-classic")),(0,r.kt)("p",null,"The classic preset that is usually shipped by default to new docusaurus website. It is a set of plugins and themes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Themes"),(0,r.kt)("th",{parentName:"tr",align:null},"Plugins"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/theme-classic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/plugin-content-docs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/theme-search-algolia")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/plugin-content-blog"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/plugin-content-pages"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/plugin-debug"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/plugin-google-analytics"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/plugin-google-gtag"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/plugin-sitemap"))))),(0,r.kt)("p",null,"To specify plugin options individually, you can provide the necessary fields to certain plugins, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"customCss")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),", pass them in the preset field, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // Debug defaults to true in dev, false in prod\n        debug: undefined,\n        // Will be passed to @docusaurus/theme-classic.\n        theme: {\n          customCss: [require.resolve('./src/css/custom.css')],\n        },\n        // Will be passed to @docusaurus/plugin-content-docs (false to disable)\n        docs: {},\n        // Will be passed to @docusaurus/plugin-content-blog (false to disable)\n        blog: {},\n        // Will be passed to @docusaurus/plugin-content-pages (false to disable)\n        pages: {},\n        // Will be passed to @docusaurus/plugin-content-sitemap (false to disable)\n        sitemap: {},\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("p",null,"In addition to these plugins and themes, ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")," adds ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/elviswolcott/remark-admonitions"},(0,r.kt)("inlineCode",{parentName:"a"},"remark-admonitions"))," as a remark plugin to ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-blog")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"admonitions")," key will be passed as the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/elviswolcott/remark-admonitions#options"},"options")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"remark-admonitions"),". Passing ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," will prevent the plugin from being added to MDX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // options for remark-admonitions\n          admonitions: {},\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("h3",{id:"docusauruspreset-bootstrap"},(0,r.kt)("inlineCode",{parentName:"h3"},"@docusaurus/preset-bootstrap")),(0,r.kt)("p",null,"The classic preset that is usually shipped by default to new docusaurus website. It is a set of plugins and themes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Themes"),(0,r.kt)("th",{parentName:"tr",align:null},"Plugins"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/theme-bootstrap")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/plugin-content-docs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/plugin-content-blog"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/plugin-content-pages"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@docusaurus/plugin-debug"))))),(0,r.kt)("p",null,"To specify plugin options individually, you can provide the necessary fields to certain plugins, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-bootstrap"),", pass them in the preset field, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-bootstrap',\n      {\n        // Debug defaults to true in dev, false in prod\n        debug: undefined,\n        // Will be passed to @docusaurus/plugin-content-docs (false to disable)\n        docs: {},\n        // Will be passed to @docusaurus/plugin-content-blog (false to disable)\n        blog: {},\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This preset is work in progress"))))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(s&&(s+=" "),s+=t);return s}n.d(t,{Z:function(){return s}})}}]);