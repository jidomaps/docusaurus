(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[3664],{3905:function(e,u,n){"use strict";n.d(u,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,u,n){return u in e?Object.defineProperty(e,u,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[u]=n,e}function t(e,u){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);u&&(r=r.filter((function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var u=1;u<arguments.length;u++){var n=null!=arguments[u]?arguments[u]:{};u%2?t(Object(n),!0).forEach((function(u){a(e,u,n[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(u){Object.defineProperty(e,u,Object.getOwnPropertyDescriptor(n,u))}))}return e}function s(e,u){if(null==e)return{};var n,r,a=function(e,u){if(null==e)return{};var n,r,a={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],u.indexOf(n)>=0||(a[n]=e[n]);return a}(e,u);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],u.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var u=r.useContext(l),n=u;return e&&(n="function"==typeof e?e(u):i(i({},u),e)),n},p=function(e){var u=o(e.components);return r.createElement(l.Provider,{value:u},e.children)},c={inlineCode:"code",wrapper:function(e){var u=e.children;return r.createElement(r.Fragment,{},u)}},d=r.forwardRef((function(e,u){var n=e.components,a=e.mdxType,t=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(n),g=a,f=d["".concat(l,".").concat(g)]||d[g]||c[g]||t;return n?r.createElement(f,i(i({ref:u},p),{},{components:n})):r.createElement(f,i({ref:u},p))}));function g(e,u){var n=arguments,a=u&&u.mdxType;if("string"==typeof e||a){var t=n.length,i=new Array(t);i[0]=d;var s={};for(var l in u)hasOwnProperty.call(u,l)&&(s[l]=u[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<t;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61151:function(e,u,n){"use strict";n.r(u),n.d(u,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return o},default:function(){return c}});var r=n(22122),a=n(19756),t=(n(67294),n(3905)),i=["components"],s={id:"plugins-overview",title:"Docusaurus plugins",sidebar_label:"Plugins overview",slug:"/api/plugins"},l={unversionedId:"api/plugins/plugins-overview",id:"version-2.0.0-alpha.73/api/plugins/plugins-overview",isDocsHomePage:!1,title:"Docusaurus plugins",description:"We provide official Docusaurus plugins.",source:"@site/versioned_docs/version-2.0.0-alpha.73/api/plugins/overview.md",sourceDirName:"api/plugins",slug:"/api/plugins",permalink:"/docusaurus/docs/2.0.0-alpha.73/api/plugins",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/plugins/overview.md",version:"2.0.0-alpha.73",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1618570090,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"Plugins overview",frontMatter:{id:"plugins-overview",title:"Docusaurus plugins",sidebar_label:"Plugins overview",slug:"/api/plugins"},sidebar:"version-2.0.0-alpha.73/api",previous:{title:"Lifecycle APIs",permalink:"/docusaurus/docs/2.0.0-alpha.73/lifecycle-apis"},next:{title:"\ud83d\udce6 plugin-content-docs",permalink:"/docusaurus/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-content-docs"}},o=[{value:"Content plugins",id:"content-plugins",children:[]},{value:"Behavior plugins",id:"behavior-plugins",children:[]}],p={toc:o};function c(e){var u=e.components,n=(0,a.Z)(e,i);return(0,t.kt)("wrapper",(0,r.Z)({},p,n,{components:u,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"We provide official Docusaurus plugins."),(0,t.kt)("h2",{id:"content-plugins"},"Content plugins"),(0,t.kt)("p",null,"These plugins are responsible to load your site's content, and create pages for your theme to render."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docusaurus/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-content-docs"},"@docusaurus/plugin-content-docs")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docusaurus/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-content-blog"},"@docusaurus/plugin-content-blog")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docusaurus/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-content-pages"},"@docusaurus/plugin-content-pages"))),(0,t.kt)("h2",{id:"behavior-plugins"},"Behavior plugins"),(0,t.kt)("p",null,"These plugins will add a useful behavior to your Docusaurus site."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docusaurus/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-debug"},"@docusaurus/plugin-debug")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docusaurus/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-sitemap"},"@docusaurus/plugin-sitemap")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docusaurus/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-pwa"},"@docusaurus/plugin-pwa")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docusaurus/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-client-redirects"},"@docusaurus/plugin-client-redirects")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docusaurus/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-ideal-image"},"@docusaurus/plugin-ideal-image")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docusaurus/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-google-analytics"},"@docusaurus/plugin-google-analytics")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docusaurus/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-google-gtag"},"@docusaurus/plugin-google-gtag"))))}c.isMDXComponent=!0}}]);