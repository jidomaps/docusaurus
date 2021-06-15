(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[1985],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(a),c=i,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90635:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),o=["components"],l={id:"migration-automated",title:"Automated migration",slug:"/migration/automated"},s={unversionedId:"migration/migration-automated",id:"version-2.0.0-alpha.74/migration/migration-automated",isDocsHomePage:!1,title:"Automated migration",description:"The migration CLI automatically migrates your v1 website to a v2 website.",source:"@site/versioned_docs/version-2.0.0-alpha.74/migration/migration-automated.md",sourceDirName:"migration",slug:"/migration/automated",permalink:"/fr/docs/2.0.0-alpha.74/migration/automated",editUrl:"https://crowdin.com/project/docusaurus-v2/fr",version:"2.0.0-alpha.74",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619534336,formattedLastUpdatedAt:"27/04/2021",frontMatter:{id:"migration-automated",title:"Automated migration",slug:"/migration/automated"},sidebar:"version-2.0.0-alpha.74/docs",previous:{title:"Migration overview",permalink:"/fr/docs/2.0.0-alpha.74/migration"},next:{title:"Manual migration",permalink:"/fr/docs/2.0.0-alpha.74/migration/manual"}},m=[],p={toc:m};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The migration CLI automatically migrates your v1 website to a v2 website."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Manual work is still required after using the migration CLI, as we can't automate a full migration"))),(0,r.kt)("p",null,"The migration CLI migrates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Site configurations (from ",(0,r.kt)("inlineCode",{parentName:"li"},"siteConfig.js")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sidebars.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/blog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/static")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"versioned_sidebar.json")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"/versioned_docs")," if your site uses versioning")),(0,r.kt)("p",null,"To use the migration CLI, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Before using the migration CLI, ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/static"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"siteConfig.js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," follow the ",(0,r.kt)("a",{parentName:"p",href:"#"},"structure")," shown at the start of this page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To migrate your v1 website, run the migration CLI with the appropriate filesystem paths:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# migration command format\nnpx @docusaurus/migrate migrate <v1 website directory> <desired v2 website directory>\n\n# example\nnpx @docusaurus/migrate migrate ./v1-website ./v2-website\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"To view your new website locally, go into your v2 website's directory and start your development server.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./v2-website\nyarn install\nyarn start\n")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The migration CLI updates existing files. Be sure to have committed them first!"))),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("p",null,"You can add option flags to the migration CLI to automatically migrate Markdown content and pages to v2. It is likely that you will still need to make some manual changes to achieve your desired result."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--mdx")),(0,r.kt)("td",{parentName:"tr",align:null},"Add this flag to convert Markdown to MDX automatically")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--page")),(0,r.kt)("td",{parentName:"tr",align:null},"Add this flag to migrate pages automatically")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# example using options\nnpx @docusaurus/migrate migrate --mdx --page ./v1-website ./v2-website\n")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The migration of pages and MDX is still a work in progress."),(0,r.kt)("p",{parentName:"div"},"We recommend you to try to run the pages without these options, commit, and then try to run the migration again with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--page")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--mdx")," options."),(0,r.kt)("p",{parentName:"div"},"This way, you'd be able to easily inspect and fix the diff."))))}d.isMDXComponent=!0}}]);