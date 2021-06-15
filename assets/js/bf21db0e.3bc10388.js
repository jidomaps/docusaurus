(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[7337],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85670:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=["components"],l={id:"introduction",title:"i18n - Introduction",slug:"/i18n/introduction"},s={unversionedId:"i18n/introduction",id:"i18n/introduction",isDocsHomePage:!1,title:"i18n - Introduction",description:"It is easy to translate a Docusaurus website with its internationalization (i18n) support.",source:"@site/docs/i18n/i18n-introduction.md",sourceDirName:"i18n",slug:"/i18n/introduction",permalink:"/docusaurus/docs/next/i18n/introduction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/i18n/i18n-introduction.md",version:"current",lastUpdatedBy:"besemuna",lastUpdatedAt:1616767881,formattedLastUpdatedAt:"3/26/2021",frontMatter:{id:"introduction",title:"i18n - Introduction",slug:"/i18n/introduction"},sidebar:"docs",previous:{title:"Deployment",permalink:"/docusaurus/docs/next/deployment"},next:{title:"i18n - Tutorial",permalink:"/docusaurus/docs/next/i18n/tutorial"}},u=[{value:"Goals",id:"goals",children:[{value:"i18n goals",id:"i18n-goals",children:[]},{value:"i18n non-goals",id:"i18n-non-goals",children:[]}]},{value:"Translation workflow",id:"translation-workflow",children:[{value:"Overview",id:"overview",children:[]},{value:"Translation files",id:"translation-files",children:[]},{value:"Translation files location",id:"translation-files-location",children:[]}]}],p={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is ",(0,r.kt)("strong",{parentName:"p"},"easy to translate a Docusaurus website")," with its internationalization (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Internationalization_and_localization"},"i18n"),") support."),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("p",null,"It is important to understand the ",(0,r.kt)("strong",{parentName:"p"},"design decisions")," behind the Docusaurus i18n support."),(0,r.kt)("p",null,"For more context, you can read the initial ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/3317"},"RFC")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/pull/3325"},"PR"),"."),(0,r.kt)("h3",{id:"i18n-goals"},"i18n goals"),(0,r.kt)("p",null,"The goals of the Docusaurus i18n system are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simple"),": just put the translated files in the correct filesystem location"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flexible translation workflows"),": use Git (monorepo, forks, or submodules), SaaS software, FTP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flexible deployment options"),": single, multiple domains, or hybrid"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Modular"),": allow plugin authors to provide i18n support"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Low-overhead runtime"),": documentation is mostly static and does not require a heavy JS library or polyfills"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalable build-times"),": allow building and deploying localized sites independently"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Localize assets"),": an image of your site might contain text that should be translated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No coupling"),": not forced to use any SaaS, yet integrations are possible"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Easy to use with ",(0,r.kt)("a",{parentName:"strong",href:"https://crowdin.com/"},"Crowdin")),": multiple Docusaurus v1 sites use Crowdin, and should be able to migrate to v2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Good SEO defaults"),": we set useful SEO headers like ",(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/search/docs/advanced/crawling/localized-versions"},(0,r.kt)("inlineCode",{parentName:"a"},"hreflang"))," for you"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RTL support"),": locales reading right-to-left (Arabic, Hebrew, etc.) are supported and easy to implement"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default translations"),": classic theme labels are translated for you in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-theme-classic/codeTranslations"},"many languages"))),(0,r.kt)("h3",{id:"i18n-non-goals"},"i18n non-goals"),(0,r.kt)("p",null,"We don't provide support for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic locale detection"),": opinionated, and best done on the ",(0,r.kt)("a",{parentName:"li",href:"/docusaurus/docs/next/deployment"},"server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Translation SaaS software"),": you are responsible to understand the external tools of your choice"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Translation of slugs"),": technically complicated, little SEO value")),(0,r.kt)("h2",{id:"translation-workflow"},"Translation workflow"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Overview of the workflow to create a translated Docusaurus website:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Configure"),": declare the default locale and alternative locales in ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Translate"),": put the translation files at the correct filesystem location"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Deploy"),": build and deploy your site using a single or multi-domain strategy")),(0,r.kt)("h3",{id:"translation-files"},"Translation files"),(0,r.kt)("p",null,"You will have to work with 2 kind of translation files."),(0,r.kt)("h4",{id:"markdown-files"},"Markdown files"),(0,r.kt)("p",null,"This is the main content of your Docusaurus website."),(0,r.kt)("p",null,"Markdown and MDX documents are translated as a whole, to fully preserve the translation context, instead of splitting each sentence as a separate string."),(0,r.kt)("h4",{id:"json-files"},"JSON files"),(0,r.kt)("p",null,"JSON is used to translate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"your React code: using the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Translate>")," component"),(0,r.kt)("li",{parentName:"ul"},"your theme: the navbar, footer"),(0,r.kt)("li",{parentName:"ul"},"your plugins: the docs sidebar category labels")),(0,r.kt)("p",null,"The JSON format used is called ",(0,r.kt)("strong",{parentName:"p"},"Chrome i18n"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "myTranslationKey1": {\n    "message": "Translated message 1",\n    "description": "myTranslationKey1 is used on the homepage"\n  },\n  "myTranslationKey2": {\n    "message": "Translated message 2",\n    "description": "myTranslationKey2 is used on the FAQ page"\n  }\n}\n')),(0,r.kt)("p",null,"The choice was made for 2 reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description attribute"),": to help translators with additional context"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Widely supported"),": ",(0,r.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/extensions/mv2/i18n-messages/"},"Chrome extensions"),", ",(0,r.kt)("a",{parentName:"li",href:"https://support.crowdin.com/file-formats/chrome-json/"},"Crowdin"),", ",(0,r.kt)("a",{parentName:"li",href:"https://docs.transifex.com/formats/chrome-json"},"Transifex"),", ",(0,r.kt)("a",{parentName:"li",href:"https://help.phrase.com/help/chrome-json-messages"},"Phrase"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.applanga.com/docs/formats/chrome_i18n_json"},"Applanga"))),(0,r.kt)("h3",{id:"translation-files-location"},"Translation files location"),(0,r.kt)("p",null,"The translation files should be created at the correct filesystem location."),(0,r.kt)("p",null,"Each locale and plugin has its own ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n")," subfolder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"website/i18n/<locale>/<pluginName>/...\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For multi-instance plugins, the path is ",(0,r.kt)("inlineCode",{parentName:"p"},"website/i18n/<locale>/<pluginName>-<pluginId>/..."),"."))),(0,r.kt)("p",null,"Translating a very simple Docusaurus site in French would lead to the following tree:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"website/i18n\n\u2514\u2500\u2500 fr\n    \u251c\u2500\u2500 code.json\n    \u2502\n    \u251c\u2500\u2500 docusaurus-plugin-content-blog\n    \u2502\xa0\xa0 \u2514\u2500\u2500 2020-01-01-hello.md\n    \u2502\n    \u251c\u2500\u2500 docusaurus-plugin-content-docs\n    \u2502\xa0\xa0 \u251c\u2500\u2500 current #\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 doc1.md\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 doc2.mdx\n    \u2502\xa0\xa0 \u2514\u2500\u2500 current.json\n    \u2502\n    \u2514\u2500\u2500 docusaurus-theme-classic\n        \u251c\u2500\u2500 footer.json\n        \u2514\u2500\u2500 navbar.json\n")),(0,r.kt)("p",null,"The JSON files are initialized with the ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/next/cli#docusaurus-write-translations"},(0,r.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))," CLI command."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"code.json")," file is extracted from React components using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Translate>")," API."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Notice that the ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus-plugin-content-docs")," plugin has a ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," subfolder and a ",(0,r.kt)("inlineCode",{parentName:"p"},"current.json")," file, useful for the ",(0,r.kt)("strong",{parentName:"p"},"docs versioning feature"),"."))),(0,r.kt)("p",null,"Each content plugin or theme is different, and ",(0,r.kt)("strong",{parentName:"p"},"define its own translation files location"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docusaurus/docs/next/api/plugins/@docusaurus/plugin-content-docs#i18n"},"Docs i18n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docusaurus/docs/next/api/plugins/@docusaurus/plugin-content-blog#i18n"},"Blog i18n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docusaurus/docs/next/api/plugins/@docusaurus/plugin-content-pages#i18n"},"Pages i18n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docusaurus/docs/next/api/themes/configuration#i18n"},"Themes i18n"))))}c.isMDXComponent=!0}}]);