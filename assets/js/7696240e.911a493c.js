(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[4188],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98448:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},12168:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),o=n(90050),a=n(86010),i="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,u=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,m=e.groupId,p=e.className,f=(0,o.Z)(),v=f.tabGroupChoices,h=f.setTabGroupChoices,b=(0,r.useState)(s),y=b[0],g=b[1],k=r.Children.toArray(e.children),O=[];if(null!=m){var w=v[m];null!=w&&w!==y&&d.some((function(e){return e.value===w}))&&g(w)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=d[n].value;g(r),null!=m&&(h(m,r),setTimeout((function(){var e,n,r,o,a,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case l:var o=O.indexOf(e.target)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},22713:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},90050:function(e,t,n){"use strict";var r=n(67294),o=n(22713);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},76535:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=n(12168),c=n(98448),l=["components"],u={id:"theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",slug:"/api/themes/@docusaurus/theme-live-codeblock"},s={unversionedId:"api/themes/theme-live-codeblock",id:"version-2.0.0-alpha.73/api/themes/theme-live-codeblock",isDocsHomePage:!1,title:"\ud83d\udce6 theme-live-codeblock",description:"This theme provides a @theme/CodeBlock component that is powered by react-live. You can read more on interactive code editor documentation.",source:"@site/versioned_docs/version-2.0.0-alpha.73/api/themes/theme-live-codeblock.md",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-live-codeblock",permalink:"/docs/2.0.0-alpha.73/api/themes/@docusaurus/theme-live-codeblock",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/themes/theme-live-codeblock.md",version:"2.0.0-alpha.73",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1618570090,formattedLastUpdatedAt:"4/16/2021",frontMatter:{id:"theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",slug:"/api/themes/@docusaurus/theme-live-codeblock"},sidebar:"version-2.0.0-alpha.73/api",previous:{title:"\ud83d\udce6 theme-bootstrap",permalink:"/docs/2.0.0-alpha.73/api/themes/@docusaurus/theme-bootstrap"},next:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/docs/2.0.0-alpha.73/api/themes/@docusaurus/theme-search-algolia"}},d=[{value:"Configuration",id:"configuration",children:[]}],m={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This theme provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," component that is powered by react-live. You can read more on ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.0.0-alpha.73/markdown-features/code-blocks#interactive-code-editor"},"interactive code editor")," documentation."),(0,a.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/theme-live-codeblock\n"))),(0,a.kt)(c.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/theme-live-codeblock\n")))),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: ['@docusaurus/theme-live-codeblock'],\n  themeConfig: {\n    liveCodeBlock: {\n      /**\n       * The position of the live playground, above or under the editor\n       * Possible values: \"top\" | \"bottom\"\n       */\n      playgroundPosition: 'bottom',\n    },\n  },\n};\n")))}p.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);