(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[9095],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98448:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},12168:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67294),o=n(90050),a=n(86010),s="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,l=e.values,m=e.groupId,d=e.className,f=(0,o.Z)(),y=f.tabGroupChoices,h=f.setTabGroupChoices,g=(0,r.useState)(p),v=g[0],b=g[1],k=r.Children.toArray(e.children),w=[];if(null!=m){var N=y[m];null!=N&&N!==v&&l.some((function(e){return e.value===N}))&&b(N)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),r=l[n].value;b(r),null!=m&&(h(m,r),setTimeout((function(){var e,n,r,o,a,s,c,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,s=window,c=s.innerHeight,u=s.innerWidth,n>=0&&a<=u&&o<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},d)},l.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,a.Z)("tabs__item",s,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},22713:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},90050:function(e,t,n){"use strict";var r=n(67294),o=n(22713);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},64150:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s=n(12168),i=n(98448),c=["components"],u={id:"typescript-support",title:"TypeScript Support"},p={unversionedId:"typescript-support",id:"typescript-support",isDocsHomePage:!1,title:"TypeScript Support",description:"Setup {#setup}",source:"@site/docs/typescript-support.md",sourceDirName:".",slug:"/typescript-support",permalink:"/zh-CN/docs/next/typescript-support",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"current",lastUpdatedBy:"Alexey Pyltsyn",lastUpdatedAt:1616148041,formattedLastUpdatedAt:"2021/3/19",frontMatter:{id:"typescript-support",title:"TypeScript Support"},sidebar:"docs",previous:{title:"Configuration",permalink:"/zh-CN/docs/next/configuration"},next:{title:"Creating Pages",permalink:"/zh-CN/docs/next/creating-pages"}},l=[{value:"Setup",id:"setup",children:[]},{value:"Swizzling TypeScript theme components",id:"swizzling-typescript-theme-components",children:[]}],m={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Docusaurus supports writing and using TypeScript theme components. To start using TypeScript, add ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/module-type-aliases")," and some ",(0,a.kt)("inlineCode",{parentName:"p"},"@types")," dependencies to your project:"),(0,a.kt)(s.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev typescript @docusaurus/module-type-aliases @types/react @types/react-router-dom @types/react-helmet @tsconfig/docusaurus\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev typescript @docusaurus/module-type-aliases @types/react @types/react-router-dom @types/react-helmet @tsconfig/docusaurus\n")))),(0,a.kt)("p",null,"Then add ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," to your project root with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "extends": "@tsconfig/docusaurus/tsconfig.json",\n  "include": ["src/"]\n}\n')),(0,a.kt)("p",null,"Docusaurus doesn't use this ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," to compile your project. It is added just for a nicer Editor experience, although you can choose to run ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," to type check your code for yourself or on CI."),(0,a.kt)("p",null,"Now you can start writing TypeScript theme components."),(0,a.kt)("h2",{id:"swizzling-typescript-theme-components"},"Swizzling TypeScript theme components"),(0,a.kt)("p",null,"For themes that supports TypeScript theme components, you can add the ",(0,a.kt)("inlineCode",{parentName:"p"},"--typescript")," flag to the end of swizzling command to get TypeScript source code. For example, the following command will generate ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"styles.module.css")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme/Footer"),"."),(0,a.kt)(s.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-classic Footer -- --typescript\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle @docusaurus/theme-classic Footer -- --typescript\n")))),(0,a.kt)("p",null,"At this moment, the only official Docusaurus theme that supports TypeScript theme components is ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),". If you are a Docusaurus theme package author who wants to add TypeScript support, see the ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/lifecycle-apis#gettypescriptthemepath"},"Lifecycle APIs docs"),"."))}d.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);