(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[6707],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},98448:function(e,t,r){"use strict";var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},12168:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(67294),o=r(90050),a=r(86010),i="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,u=39;var s=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=(0,o.Z)(),v=f.tabGroupChoices,h=f.setTabGroupChoices,b=(0,n.useState)(s),y=b[0],g=b[1],k=n.Children.toArray(e.children),O=[];if(null!=p){var w=v[p];null!=w&&w!==y&&d.some((function(e){return e.value===w}))&&g(w)}var C=function(e){var t=e.currentTarget,r=O.indexOf(t),n=d[r].value;g(n),null!=p&&(h(p,n),setTimeout((function(){var e,r,n,o,a,i,l,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,u=i.innerWidth,r>=0&&a<=u&&o<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case u:var n=O.indexOf(e.target)+1;r=O[n]||O[0];break;case l:var o=O.indexOf(e.target)-1;r=O[o]||O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},m)},d.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:C,onClick:C},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},22713:function(e,t,r){"use strict";var n=(0,r(67294).createContext)(void 0);t.Z=n},90050:function(e,t,r){"use strict";var n=r(67294),o=r(22713);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},11830:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=r(12168),c=r(98448),l=["components"],u={id:"theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",slug:"/api/themes/@docusaurus/theme-live-codeblock"},s={unversionedId:"api/themes/theme-live-codeblock",id:"version-2.0.0-alpha.75/api/themes/theme-live-codeblock",isDocsHomePage:!1,title:"\ud83d\udce6 theme-live-codeblock",description:"This theme provides a @theme/CodeBlock component that is powered by react-live. You can read more on interactive code editor documentation.",source:"@site/versioned_docs/version-2.0.0-alpha.75/api/themes/theme-live-codeblock.md",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-live-codeblock",permalink:"/fr/docs/2.0.0-alpha.75/api/themes/@docusaurus/theme-live-codeblock",editUrl:"https://crowdin.com/project/docusaurus-v2/fr",version:"2.0.0-alpha.75",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619800915,formattedLastUpdatedAt:"30/04/2021",frontMatter:{id:"theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",slug:"/api/themes/@docusaurus/theme-live-codeblock"},sidebar:"version-2.0.0-alpha.75/api",previous:{title:"\ud83d\udce6 theme-bootstrap",permalink:"/fr/docs/2.0.0-alpha.75/api/themes/@docusaurus/theme-bootstrap"},next:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/fr/docs/2.0.0-alpha.75/api/themes/@docusaurus/theme-search-algolia"}},d=[{value:"Configuration",id:"configuration",children:[]}],p={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This theme provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," component that is powered by react-live. You can read more on ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/2.0.0-alpha.75/markdown-features/code-blocks#interactive-code-editor"},"interactive code editor")," documentation."),(0,a.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/theme-live-codeblock\n"))),(0,a.kt)(c.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/theme-live-codeblock\n")))),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: ['@docusaurus/theme-live-codeblock'],\n  themeConfig: {\n    liveCodeBlock: {\n      /**\n       * The position of the live playground, above or under the editor\n       * Possible values: \"top\" | \"bottom\"\n       */\n      playgroundPosition: 'bottom',\n    },\n  },\n};\n")))}m.isMDXComponent=!0},86010:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);