(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[7954],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98448:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},12168:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(67294),r=n(90050),i=n(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=(0,r.Z)(),f=h.tabGroupChoices,g=h.setTabGroupChoices,k=(0,a.useState)(c),v=k[0],N=k[1],y=a.Children.toArray(e.children),b=[];if(null!=d){var w=f[d];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&N(w)}var T=function(e){var t=e.currentTarget,n=b.indexOf(t),a=p[n].value;N(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,r,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case l:var r=b.indexOf(e.target)-1;n=b[r]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:C,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},22713:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},90050:function(e,t,n){"use strict";var a=n(67294),r=n(22713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},17047:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=n(12168),s=n(98448),l=["components"],u={id:"git",title:"i18n - Using git",slug:"/i18n/git"},c={unversionedId:"i18n/git",id:"version-2.0.0-alpha.73/i18n/git",isDocsHomePage:!1,title:"i18n - Using git",description:"A possible translation strategy is to version control the translation files to Git (or any other VCS).",source:"@site/versioned_docs/version-2.0.0-alpha.73/i18n/i18n-git.md",sourceDirName:"i18n",slug:"/i18n/git",permalink:"/zh-CN/docs/2.0.0-alpha.73/i18n/git",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-alpha.73",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1618570090,formattedLastUpdatedAt:"2021/4/16",frontMatter:{id:"git",title:"i18n - Using git",slug:"/i18n/git"},sidebar:"version-2.0.0-alpha.73/docs",previous:{title:"i18n - Tutorial",permalink:"/zh-CN/docs/2.0.0-alpha.73/i18n/tutorial"},next:{title:"i18n - Using Crowdin",permalink:"/zh-CN/docs/2.0.0-alpha.73/i18n/crowdin"}},p=[{value:"Tradeoffs",id:"tradeoffs",children:[]},{value:"Git tutorial",id:"git-tutorial",children:[{value:"Prepare the Docusaurus site",id:"prepare-the-docusaurus-site",children:[]},{value:"Initialize the <code>i18n</code> folder",id:"initialize-the-i18n-folder",children:[]},{value:"Translate the files",id:"translate-the-files",children:[]},{value:"Repeat",id:"repeat",children:[]}]},{value:"Maintain the translations",id:"maintain-the-translations",children:[{value:"Markdown translations",id:"markdown-translations",children:[]},{value:"JSON translations",id:"json-translations",children:[]},{value:"Localize edit urls",id:"localize-edit-urls",children:[]}]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"possible translation strategy")," is to ",(0,i.kt)("strong",{parentName:"p"},"version control the translation files")," to Git (or any other ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Version_control"},"VCS"),")."),(0,i.kt)("h2",{id:"tradeoffs"},"Tradeoffs"),(0,i.kt)("p",null,"This strategy has advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Easy to get started"),": just add the ",(0,i.kt)("inlineCode",{parentName:"li"},"i18n")," folder to Git"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Easy for developers"),": Git, GitHub and pull requests are mainstream developer tools"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Free")," (or without any additional cost, assuming you already use Git)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Low friction"),": does not require signing-up to an external tool"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rewarding"),": contributors are happy to have a nice contribution history")),(0,i.kt)("p",null,"Using Git also present some shortcomings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hard for non-developers"),": they do not master Git and pull-requests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hard for professional translations"),": they are used to SaaS translation softwares and advanced features"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hard to maintain"),": you have to keep the translated files ",(0,i.kt)("strong",{parentName:"li"},"in sync")," with the untranslated files")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some ",(0,i.kt)("strong",{parentName:"p"},"large-scale technical projects")," (React, Vue.js, MDN, TypeScript, Nuxt.js, etc.) use Git for translations."),(0,i.kt)("p",{parentName:"div"},"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/3317"},"Docusaurus i18n RFC")," for our notes and links studying these systems."))),(0,i.kt)("h2",{id:"git-tutorial"},"Git tutorial"),(0,i.kt)("p",null,"This is a walk-through of using Git to translate a newly initialized English Docusaurus website into French, and assume you already followed the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.73/i18n/tutorial"},"i18n tutorial"),"."),(0,i.kt)("h3",{id:"prepare-the-docusaurus-site"},"Prepare the Docusaurus site"),(0,i.kt)("p",null,"Initialize a new Docusaurus site:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx @docusaurus/init@latest init website classic\n")),(0,i.kt)("p",null,"Add the site configuration for the French language:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n  themeConfig: {\n    navbar: {\n      items: [\n        // ...\n        {\n          type: 'localeDropdown',\n          position: 'left',\n        },\n        // ...\n      ],\n    },\n  },\n  // ...\n};\n")),(0,i.kt)("p",null,"Translate the homepage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/index.js"',title:'"src/pages/index.js"'},"import React from 'react';\nimport Translate from '@docusaurus/Translate';\nimport Layout from '@theme/Layout';\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1 style={{margin: 20}}>\n        <Translate description=\"The homepage main heading\">\n          Welcome to my Docusaurus translated site!\n        </Translate>\n      </h1>\n    </Layout>\n  );\n}\n")),(0,i.kt)("h3",{id:"initialize-the-i18n-folder"},"Initialize the ",(0,i.kt)("inlineCode",{parentName:"h3"},"i18n")," folder"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.73/cli#docusaurus-write-translations"},"write-translations")," CLI command to initialize the JSON translation files for the French locale:"),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run write-translations -- --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run write-translations -- --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--messagePrefix '(fr) '")," option to make the untranslated strings stand out."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Hello")," will appear as ",(0,i.kt)("inlineCode",{parentName:"p"},"(fr) Hello")," and makes it clear a translation is missing."))),(0,i.kt)("p",null,"Copy your untranslated Markdown files to the French folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current\n\nmkdir -p i18n/fr/docusaurus-plugin-content-blog\ncp -r blog/** i18n/fr/docusaurus-plugin-content-blog\n\nmkdir -p i18n/fr/docusaurus-plugin-content-pages\ncp -r pages/**.md i18n/fr/docusaurus-plugin-content-pages\ncp -r pages/**.mdx i18n/fr/docusaurus-plugin-content-pages\n")),(0,i.kt)("p",null,"Add all these files to Git."),(0,i.kt)("h3",{id:"translate-the-files"},"Translate the files"),(0,i.kt)("p",null,"Translate the Markdown and JSON files in ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n/fr")," and commit the translation."),(0,i.kt)("p",null,"You should now be able to start your site in French and see the translations:"),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start -- --locale fr\n")))),(0,i.kt)("p",null,"You can also build the site locally or on your CI:"),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n# or\nnpm run build -- --locale fr\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run build\n# or\nyarn run build -- --locale fr\n")))),(0,i.kt)("h3",{id:"repeat"},"Repeat"),(0,i.kt)("p",null,"Follow the same process for each locale you need to support."),(0,i.kt)("h2",{id:"maintain-the-translations"},"Maintain the translations"),(0,i.kt)("p",null,"Keeping translated files ",(0,i.kt)("strong",{parentName:"p"},"consistent")," with the originals ",(0,i.kt)("strong",{parentName:"p"},"can be challenging"),", in particular for Markdown documents."),(0,i.kt)("h3",{id:"markdown-translations"},"Markdown translations"),(0,i.kt)("p",null,"When an untranslated Markdown document is edited, it is ",(0,i.kt)("strong",{parentName:"p"},"your responsibility to maintain the respective translated files"),", and we unfortunately don't have a good way to help you do so."),(0,i.kt)("p",null,"To keep your translated sites consistent, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"website/docs/doc1.md")," doc is edited, you need ",(0,i.kt)("strong",{parentName:"p"},"backport these edits")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"),"."),(0,i.kt)("h3",{id:"json-translations"},"JSON translations"),(0,i.kt)("p",null,"To help you maintain the JSON translation files, it is possible to run again the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.73/cli#docusaurus-write-translations"},"write-translations")," CLI command:"),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run write-translations -- --locale fr\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run write-translations -- --locale fr\n")))),(0,i.kt)("p",null,"New translation will be appended, and existing ones will not be overridden."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Reset your translations with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--override")," option."))),(0,i.kt)("h3",{id:"localize-edit-urls"},"Localize edit urls"),(0,i.kt)("p",null,"When the user is browsing a page at ",(0,i.kt)("inlineCode",{parentName:"p"},"/fr/doc1"),", the edit button will link by default to the unlocalized doc at ",(0,i.kt)("inlineCode",{parentName:"p"},"website/docs/doc1.md"),"."),(0,i.kt)("p",null,"Your translations are on Git, and you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"editLocalizedFiles: true")," option of the docs and blog plugins."),(0,i.kt)("p",null,"The edit button will link to the localized doc at ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"),"."))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);