(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[3445],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25109:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=a(22122),n=a(19756),o=(a(67294),a(3905)),i=["components"],s={id:"migration-overview",title:"Migration overview",slug:"/migration"},u={unversionedId:"migration/migration-overview",id:"version-2.0.0-alpha.73/migration/migration-overview",isDocsHomePage:!1,title:"Migration overview",description:"This doc guides you through migrating an existing Docusaurus 1 site to Docusaurus 2.",source:"@site/versioned_docs/version-2.0.0-alpha.73/migration/migration-overview.md",sourceDirName:"migration",slug:"/migration",permalink:"/fr/docs/2.0.0-alpha.73/migration",editUrl:"https://crowdin.com/project/docusaurus-v2/fr",version:"2.0.0-alpha.73",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1618570090,formattedLastUpdatedAt:"16/04/2021",frontMatter:{id:"migration-overview",title:"Migration overview",slug:"/migration"},sidebar:"version-2.0.0-alpha.73/docs",previous:{title:"Presets",permalink:"/fr/docs/2.0.0-alpha.73/presets"},next:{title:"Automated migration",permalink:"/fr/docs/2.0.0-alpha.73/migration/automated"}},l=[{value:"Docusaurus 1 structure",id:"docusaurus-1-structure",children:[]},{value:"Docusaurus 2 structure",id:"docusaurus-2-structure",children:[]},{value:"Migration process",id:"migration-process",children:[]},{value:"Automated migration process",id:"automated-migration-process",children:[]},{value:"Manual migration process",id:"manual-migration-process",children:[]},{value:"Support",id:"support",children:[]},{value:"Example migration PRs",id:"example-migration-prs",children:[]}],c={toc:l};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This doc guides you through migrating an existing Docusaurus 1 site to Docusaurus 2."),(0,o.kt)("p",null,"We try to make this as easy as possible, and provide a migration cli."),(0,o.kt)("h2",{id:"docusaurus-1-structure"},"Docusaurus 1 structure"),(0,o.kt)("p",null,"Your Docusaurus 1 site should have the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 docs\n\u2514\u2500\u2500 website\n    \u251c\u2500\u2500 blog\n    \u251c\u2500\u2500 core\n    \u2502   \u2514\u2500\u2500 Footer.js\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 pages\n    \u251c\u2500\u2500 sidebars.json\n    \u251c\u2500\u2500 siteConfig.js\n    \u2514\u2500\u2500 static\n")),(0,o.kt)("h2",{id:"docusaurus-2-structure"},"Docusaurus 2 structure"),(0,o.kt)("p",null,"After the migration, your Docusaurus 2 site could look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 docs\n\u2514\u2500\u2500 website\n    \u251c\u2500\u2500 blog\n    \u251c\u2500\u2500 src\n    \u2502   \u251c\u2500\u2500 components\n    \u2502   \u251c\u2500\u2500 css\n    \u2502   \u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 static\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 sidebars.json\n    \u251c\u2500\u2500 docusaurus.config.js\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This migration does not change the ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs")," folder location, but Docusaurus v2 sites generally have the ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs")," folder inside ",(0,o.kt)("inlineCode",{parentName:"p"},"/website")),(0,o.kt)("p",{parentName:"div"},"You are free to put the ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs")," folder anywhere you want after having migrated to v2."))),(0,o.kt)("h2",{id:"migration-process"},"Migration process"),(0,o.kt)("p",null,"There are multiple things to migrate to obtain a fully functional Docusaurus 2 website:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"packages"),(0,o.kt)("li",{parentName:"ul"},"cli commands"),(0,o.kt)("li",{parentName:"ul"},"site configuration"),(0,o.kt)("li",{parentName:"ul"},"markdown files"),(0,o.kt)("li",{parentName:"ul"},"sidebars file"),(0,o.kt)("li",{parentName:"ul"},"pages, components and CSS"),(0,o.kt)("li",{parentName:"ul"},"versioned docs"),(0,o.kt)("li",{parentName:"ul"},"i18n support \ud83d\udea7")),(0,o.kt)("h2",{id:"automated-migration-process"},"Automated migration process"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/2.0.0-alpha.73/migration/automated"},"migration cli")," will handle many things of the migration for you."),(0,o.kt)("p",null,"However, some parts can't easily be automated, and you will have to fallback to the manual process."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend running the migration cli, and complete the missing parts thanks to the manual migration process."))),(0,o.kt)("h2",{id:"manual-migration-process"},"Manual migration process"),(0,o.kt)("p",null,"Some parts of the migration can't be automated (particularly the pages), and you will have to migrate them manually."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/2.0.0-alpha.73/migration/manual"},"manual migration guide")," will give you all the manual steps."),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"For any questions, you can ask in the ",(0,o.kt)("a",{parentName:"p",href:"https://discordapp.com/invite/kYaNd6V"},(0,o.kt)("inlineCode",{parentName:"a"},"#docusaurus-1-to-2-migration")," Discord channel"),"."),(0,o.kt)("p",null,"Feel free to tag ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/slorber"},"@slorber")," in any migration PRs if you would like us to have a look."),(0,o.kt)("p",null,"We also have volunteers willing to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/1834"},"help you migrate your v1 site"),"."),(0,o.kt)("h2",{id:"example-migration-prs"},"Example migration PRs"),(0,o.kt)("p",null,"You might want to refer to our migration PRs for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/pull/7785"},"Create React App")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/flux/pull/471"},"Flux")," as examples of how a migration for a basic Docusaurus v1 site can be done."))}p.isMDXComponent=!0}}]);