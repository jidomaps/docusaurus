(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[9708],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98448:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},12168:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67294),a=n(90050),i=n(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,l=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,g=(0,a.Z)(),f=g.tabGroupChoices,h=g.setTabGroupChoices,v=(0,r.useState)(c),y=v[0],k=v[1],b=r.Children.toArray(e.children),N=[];if(null!=d){var w=f[d];null!=w&&w!==y&&p.some((function(e){return e.value===w}))&&k(w)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;k(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,a,i,o,u,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,u=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},P=function(e){var t,n;switch(e.keyCode){case l:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case u:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},22713:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},90050:function(e,t,n){"use strict";var r=n(67294),a=n(22713);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},34929:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(12168),s=n(98448),u=["components"],l={id:"plugin-client-redirects",title:"\ud83d\udce6 plugin-client-redirects",slug:"/api/plugins/@docusaurus/plugin-client-redirects"},c={unversionedId:"api/plugins/plugin-client-redirects",id:"version-2.0.0-alpha.75/api/plugins/plugin-client-redirects",isDocsHomePage:!1,title:"\ud83d\udce6 plugin-client-redirects",description:"Docusaurus Plugin to generate client-side redirects.",source:"@site/versioned_docs/version-2.0.0-alpha.75/api/plugins/plugin-client-redirects.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-client-redirects",permalink:"/docs/2.0.0-alpha.75/api/plugins/@docusaurus/plugin-client-redirects",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/plugins/plugin-client-redirects.md",version:"2.0.0-alpha.75",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619800915,formattedLastUpdatedAt:"4/30/2021",frontMatter:{id:"plugin-client-redirects",title:"\ud83d\udce6 plugin-client-redirects",slug:"/api/plugins/@docusaurus/plugin-client-redirects"},sidebar:"version-2.0.0-alpha.75/api",previous:{title:"\ud83d\udce6 plugin-content-pages",permalink:"/docs/2.0.0-alpha.75/api/plugins/@docusaurus/plugin-content-pages"},next:{title:"\ud83d\udce6 plugin-debug",permalink:"/docs/2.0.0-alpha.75/api/plugins/@docusaurus/plugin-debug"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Docusaurus Plugin to generate ",(0,i.kt)("strong",{parentName:"p"},"client-side redirects"),"."),(0,i.kt)("p",null,"This plugin will write additional HTML pages to your static site, that redirects the user to your existing Docusaurus pages with JavaScript."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This plugin only create redirects for the production build."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is better to use server-side redirects whenever possible."),(0,i.kt)("p",{parentName:"div"},"Before using this plugin, you should look if your hosting provider doesn't offer this feature."))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-client-redirects\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/plugin-client-redirects\n")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Main usecase: you have ",(0,i.kt)("inlineCode",{parentName:"p"},"/myDocusaurusPage"),", and you want to redirect to this page from ",(0,i.kt)("inlineCode",{parentName:"p"},"/myDocusaurusPage.html"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-client-redirects',\n      {\n        fromExtensions: ['html'],\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("p",null,"Second usecase: you have ",(0,i.kt)("inlineCode",{parentName:"p"},"/myDocusaurusPage.html"),", and you want to redirect to this page from ",(0,i.kt)("inlineCode",{parentName:"p"},"/myDocusaurusPage"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-client-redirects',\n      {\n        toExtensions: ['html'],\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("p",null,"For custom redirect logic, provide your own ",(0,i.kt)("inlineCode",{parentName:"p"},"createRedirects")," function."),(0,i.kt)("p",null,"Let's imagine you change the url of an existing page, you might want to make sure the old url still works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-client-redirects',\n      {\n        redirects: [\n          {\n            to: '/docs/newDocPath', // string\n            from: ['/docs/oldDocPathFrom2019', '/docs/legacyDocPathFrom2016'], // string | string[]\n          },\n        ],\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("p",null,"It's possible to use a function to create the redirects for each existing path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-client-redirects',\n      {\n        createRedirects: function (existingPath) {\n          if (existingPath === '/docs/newDocPath') {\n            return ['/docs/oldDocPathFrom2019', '/docs/legacyDocPathFrom2016']; // string | string[]\n          }\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("p",null,"Finally, it's possible to use all options at the same time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-client-redirects',\n      {\n        fromExtensions: ['html', 'htm'],\n        toExtensions: ['exe', 'zip'],\n        redirects: [\n          {\n            to: '/docs/newDocPath',\n            from: '/docs/oldDocPath',\n          },\n        ],\n        createRedirects: function (existingPath) {\n          if (existingPath === '/docs/newDocPath2') {\n            return ['/docs/oldDocPath2'];\n          }\n        },\n      },\n    ],\n  ],\n};\n")))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);