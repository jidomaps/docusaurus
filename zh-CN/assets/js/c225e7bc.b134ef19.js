(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[9372],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(t),d=a,f=g["".concat(o,".").concat(d)]||g[d]||c[d]||u;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=t.length,i=new Array(u);i[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<u;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},10061:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var r=t(22122),a=t(19756),u=(t(67294),t(3905)),i=["components"],l={id:"plugins-overview",title:"Docusaurus plugins",sidebar_label:"Plugins overview",slug:"/api/plugins"},o={unversionedId:"api/plugins/plugins-overview",id:"version-2.0.0-alpha.74/api/plugins/plugins-overview",isDocsHomePage:!1,title:"Docusaurus plugins",description:"We provide official Docusaurus plugins.",source:"@site/versioned_docs/version-2.0.0-alpha.74/api/plugins/overview.md",sourceDirName:"api/plugins",slug:"/api/plugins",permalink:"/zh-CN/docs/2.0.0-alpha.74/api/plugins",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-alpha.74",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619534336,formattedLastUpdatedAt:"2021/4/27",sidebar_label:"Plugins overview",frontMatter:{id:"plugins-overview",title:"Docusaurus plugins",sidebar_label:"Plugins overview",slug:"/api/plugins"},sidebar:"version-2.0.0-alpha.74/api",previous:{title:"Lifecycle APIs",permalink:"/zh-CN/docs/2.0.0-alpha.74/lifecycle-apis"},next:{title:"\ud83d\udce6 plugin-content-docs",permalink:"/zh-CN/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-content-docs"}},s=[{value:"Content plugins",id:"content-plugins",children:[]},{value:"Behavior plugins",id:"behavior-plugins",children:[]}],p={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,u.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"We provide official Docusaurus plugins."),(0,u.kt)("h2",{id:"content-plugins"},"Content plugins"),(0,u.kt)("p",null,"These plugins are responsible to load your site's content, and create pages for your theme to render."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-content-docs"},"@docusaurus/plugin-content-docs")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-content-blog"},"@docusaurus/plugin-content-blog")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-content-pages"},"@docusaurus/plugin-content-pages"))),(0,u.kt)("h2",{id:"behavior-plugins"},"Behavior plugins"),(0,u.kt)("p",null,"These plugins will add a useful behavior to your Docusaurus site."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-debug"},"@docusaurus/plugin-debug")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-sitemap"},"@docusaurus/plugin-sitemap")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-pwa"},"@docusaurus/plugin-pwa")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-client-redirects"},"@docusaurus/plugin-client-redirects")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-ideal-image"},"@docusaurus/plugin-ideal-image")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-google-analytics"},"@docusaurus/plugin-google-analytics")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-google-gtag"},"@docusaurus/plugin-google-gtag"))))}c.isMDXComponent=!0}}]);