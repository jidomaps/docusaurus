(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[7657],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98448:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},12168:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(67294),r=n(90050),i=n(86010),s="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,l=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,g=(0,r.Z)(),f=g.tabGroupChoices,h=g.setTabGroupChoices,v=(0,a.useState)(c),y=v[0],b=v[1],k=a.Children.toArray(e.children),w=[];if(null!=d){var N=f[d];null!=N&&N!==y&&p.some((function(e){return e.value===N}))&&b(N)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;b(a),null!=d&&(h(d,a),setTimeout((function(){var e,n,a,r,i,s,u,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,s=window,u=s.innerHeight,l=s.innerWidth,n>=0&&i<=l&&r<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case l:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case u:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},22713:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},90050:function(e,t,n){"use strict";var a=n(67294),r=n(22713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},19526:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),s=n(12168),o=n(98448),u=["components"],l={id:"plugin-content-pages",title:"\ud83d\udce6 plugin-content-pages",slug:"/api/plugins/@docusaurus/plugin-content-pages"},c={unversionedId:"api/plugins/plugin-content-pages",id:"api/plugins/plugin-content-pages",isDocsHomePage:!1,title:"\ud83d\udce6 plugin-content-pages",description:"The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides creating pages functionality.",source:"@site/docs/api/plugins/plugin-content-pages.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-content-pages",permalink:"/docusaurus/docs/next/api/plugins/@docusaurus/plugin-content-pages",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/plugins/plugin-content-pages.md",version:"current",lastUpdatedBy:"Alexey Pyltsyn",lastUpdatedAt:1616148041,formattedLastUpdatedAt:"3/19/2021",frontMatter:{id:"plugin-content-pages",title:"\ud83d\udce6 plugin-content-pages",slug:"/api/plugins/@docusaurus/plugin-content-pages"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-content-blog",permalink:"/docusaurus/docs/next/api/plugins/@docusaurus/plugin-content-blog"},next:{title:"\ud83d\udce6 plugin-client-redirects",permalink:"/docusaurus/docs/next/api/plugins/@docusaurus/plugin-client-redirects"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"i18n",id:"i18n",children:[{value:"Translation files location",id:"translation-files-location",children:[]},{value:"Example file-system structure",id:"example-file-system-structure",children:[]}]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/next/creating-pages"},"creating pages")," functionality."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(s.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-content-pages\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/plugin-content-pages\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have installed ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency. You can also configure it through the ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/next/presets#docusauruspreset-classic"},"classic preset options")," instead of doing it like below."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-pages',\n      {\n        /**\n         * Path to data on filesystem\n         * relative to site dir\n         * components in this directory will be automatically converted to pages\n         */\n        path: 'src/pages',\n        /**\n         * URL route for the page section of your site\n         * do not include trailing slash\n         */\n        routeBasePath: '',\n        include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],\n        /**\n         * No Route will be created for matching files\n         */\n        exclude: [\n          '**/_*.{js,jsx,ts,tsx,md,mdx}',\n          '**/*.test.{js,ts}',\n          '**/__tests__/**',\n        ],\n        /**\n         * Theme component used by markdown pages.\n         */\n        mdxPageComponent: '@theme/MDXPage',\n        /**\n         * Remark and Rehype plugins passed to MDX\n         */\n        remarkPlugins: [],\n        rehypePlugins: [],\n        /**\n         * Custom Remark and Rehype plugins passed to MDX before\n         * the default Docusaurus Remark and Rehype plugins.\n         */\n        beforeDefaultRemarkPlugins: [],\n        beforeDefaultRehypePlugins: [],\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("h2",{id:"i18n"},"i18n"),(0,i.kt)("p",null,"Read the ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/next/i18n/introduction"},"i18n introduction")," first."),(0,i.kt)("h3",{id:"translation-files-location"},"Translation files location"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Base path"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"website/i18n/<locale>/docusaurus-plugin-content-pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Multi-instance path"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"website/i18n/<locale>/docusaurus-plugin-content-pages-<pluginId>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"JSON files"),": extracted with ",(0,i.kt)("a",{parentName:"li",href:"/docusaurus/docs/next/cli#docusaurus-write-translations"},(0,i.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Markdown files"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"website/i18n/<locale>/docusaurus-plugin-content-pages"))),(0,i.kt)("h3",{id:"example-file-system-structure"},"Example file-system structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"website/i18n/<locale>/docusaurus-plugin-content-pages\n\u2502\n\u2502 # translations for website/src/pages\n\u251c\u2500\u2500 first-markdown-page.md\n\u2514\u2500\u2500 second-markdown-page.md\n")))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);