(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[9294],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98448:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},12168:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(67294),r=n(90050),i=n(86010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=37,l=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,g=(0,r.Z)(),f=g.tabGroupChoices,v=g.setTabGroupChoices,h=(0,a.useState)(c),b=h[0],y=h[1],k=a.Children.toArray(e.children),N=[];if(null!=d){var w=f[d];null!=w&&w!==b&&p.some((function(e){return e.value===w}))&&y(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;y(a),null!=d&&(v(d,a),setTimeout((function(){var e,n,a,r,i,o,s,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case l:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},22713:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},90050:function(e,t,n){"use strict";var a=n(67294),r=n(22713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},11369:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=n(12168),u=n(98448),s=["components"],l={id:"plugin-debug",title:"\ud83d\udce6 plugin-debug",slug:"/api/plugins/@docusaurus/plugin-debug"},c={unversionedId:"api/plugins/plugin-debug",id:"version-2.0.0-alpha.75/api/plugins/plugin-debug",isDocsHomePage:!1,title:"\ud83d\udce6 plugin-debug",description:"The debug plugin will display useful debug information at http3000/\\\\docusaurus/debug.",source:"@site/versioned_docs/version-2.0.0-alpha.75/api/plugins/plugin-debug.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-debug",permalink:"/zh-CN/docs/2.0.0-alpha.75/api/plugins/@docusaurus/plugin-debug",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-alpha.75",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619800915,formattedLastUpdatedAt:"2021/4/30",frontMatter:{id:"plugin-debug",title:"\ud83d\udce6 plugin-debug",slug:"/api/plugins/@docusaurus/plugin-debug"},sidebar:"version-2.0.0-alpha.75/api",previous:{title:"\ud83d\udce6 plugin-client-redirects",permalink:"/zh-CN/docs/2.0.0-alpha.75/api/plugins/@docusaurus/plugin-client-redirects"},next:{title:"\ud83d\udce6 plugin-google-analytics",permalink:"/zh-CN/docs/2.0.0-alpha.75/api/plugins/@docusaurus/plugin-google-analytics"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The debug plugin will display useful debug information at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/__docusaurus/debug"},"http://localhost:3000/","_","_","docusaurus/debug"),"."),(0,i.kt)("p",null,"It is mostly useful for plugin authors, that will be able to inspect more easily the content of the ",(0,i.kt)("inlineCode",{parentName:"p"},".docusaurus")," folder (like the creates routes), but also be able to inspect data structures that are never written to disk, like the plugin data loaded through the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentLoaded")," lifecycle."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you report a bug, we will probably ask you to have this plugin turned on in the production, so that we can inspect your deployment config more easily."),(0,i.kt)("p",{parentName:"div"},"If you don't have any sensitive information, you can keep it on in production ",(0,i.kt)("a",{parentName:"p",href:"http://docusaurus.io/__docusaurus/debug"},"like we do"),"."))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-debug\n"))),(0,i.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/plugin-debug\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have installed ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency. You can also configure it through the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.75/presets#docusauruspreset-classic"},"classic preset options")," instead of doing it like below."),(0,i.kt)("p",{parentName:"div"},"By default, it's enabled in dev, and disabled in prod, to avoid exposing potentially sensitive information."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: ['@docusaurus/plugin-debug'],\n};\n")))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);