(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[7963],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return u},kt:function(){return p}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(t),p=r,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return t?n.createElement(m,i(i({ref:a},u),{},{components:t})):n.createElement(m,i({ref:a},u))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},98448:function(e,a,t){"use strict";var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},12168:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var n=t(67294),r=t(90050),o=t(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,l=39;var u=function(e){var a=e.lazy,t=e.block,u=e.defaultValue,d=e.values,h=e.groupId,p=e.className,m=(0,r.Z)(),g=m.tabGroupChoices,f=m.setTabGroupChoices,v=(0,n.useState)(u),k=v[0],y=v[1],b=n.Children.toArray(e.children),w=[];if(null!=h){var N=g[h];null!=N&&N!==k&&d.some((function(e){return e.value===N}))&&y(N)}var C=function(e){var a=e.currentTarget,t=w.indexOf(a),n=d[t].value;y(n),null!=h&&(f(h,n),setTimeout((function(){var e,t,n,r,o,i,c,l;(e=a.getBoundingClientRect(),t=e.top,n=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,t>=0&&o<=l&&r<=c&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s),setTimeout((function(){return a.classList.remove(s)}),2e3))}),150))},x=function(e){var a,t;switch(e.keyCode){case l:var n=w.indexOf(e.target)+1;t=w[n]||w[0];break;case c:var r=w.indexOf(e.target)-1;t=w[r]||w[w.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},p)},d.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:k===a?0:-1,"aria-selected":k===a,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":k===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:C,onClick:C},t)}))),a?(0,n.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==k})}))))}},22713:function(e,a,t){"use strict";var n=(0,t(67294).createContext)(void 0);a.Z=n},90050:function(e,a,t){"use strict";var n=t(67294),r=t(22713);a.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},52582:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=t(22122),r=t(19756),o=(t(67294),t(3905)),i=t(12168),s=t(98448),c=["components"],l={id:"search",title:"Search",keywords:["algolia","search"]},u={unversionedId:"search",id:"version-2.0.0-alpha.75/search",isDocsHomePage:!1,title:"Search",description:"Docusaurus' own @docusaurus/preset-classic supports a search integration.",source:"@site/versioned_docs/version-2.0.0-alpha.75/search.md",sourceDirName:".",slug:"/search",permalink:"/zh-CN/docs/2.0.0-alpha.75/search",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-alpha.75",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1623261579,formattedLastUpdatedAt:"2021/6/9",frontMatter:{id:"search",title:"Search",keywords:["algolia","search"]},sidebar:"version-2.0.0-alpha.75/docs",previous:{title:"Static Assets",permalink:"/zh-CN/docs/2.0.0-alpha.75/static-assets"},next:{title:"Deployment",permalink:"/zh-CN/docs/2.0.0-alpha.75/deployment"}},d=[{value:"Using Algolia DocSearch",id:"using-algolia-docsearch",children:[{value:"Connecting Algolia",id:"connecting-algolia",children:[]},{value:"Contextual search",id:"contextual-search",children:[]},{value:"Custom Application ID",id:"custom-application-id",children:[]},{value:"Styling your Algolia search",id:"styling-your-algolia-search",children:[]},{value:"Customizing the Algolia search behavior",id:"customizing-the-algolia-search-behavior",children:[]},{value:"Editing the Algolia search component",id:"editing-the-algolia-search-component",children:[]}]},{value:"Using your own search",id:"using-your-own-search",children:[]}],h={toc:d};function p(e){var a=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docusaurus' own ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," supports a search integration."),(0,o.kt)("p",null,"There are two main options, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com"},"Algolia DocSearch")," or bring in your own ",(0,o.kt)("inlineCode",{parentName:"p"},"SearchBar")," component."),(0,o.kt)("h2",{id:"using-algolia-docsearch"},"Using Algolia DocSearch"),(0,o.kt)("p",null,"Algolia DocSearch works by crawling the content of your website every 24 hours and putting all the content in an Algolia index. This content is then queried directly from your front-end using the Algolia API. Note that your website needs to be publicly available for this to work (i.e., not behind a firewall). The service is free."),(0,o.kt)("p",null,"If your website is ",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/who-can-apply"},"not eligible")," for the free, hosted version of DocSearch, or if your website sits behind a firewall, then you can ",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/run-your-own/"},"run your own")," DocSearch crawler. For best results, you may want to use a config file based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/algolia/docsearch-configs/blob/master/configs/docusaurus-2.json"},"Docusaurus 2 config"),"."),(0,o.kt)("h3",{id:"connecting-algolia"},"Connecting Algolia"),(0,o.kt)("p",null,"To connect your docs with Algolia, add an ",(0,o.kt)("inlineCode",{parentName:"p"},"algolia")," field in your ",(0,o.kt)("inlineCode",{parentName:"p"},"themeConfig"),". ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docsearch.algolia.com/apply/"},"Apply for DocSearch"))," to get your Algolia index and API key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      apiKey: 'YOUR_API_KEY',\n      indexName: 'YOUR_INDEX_NAME',\n\n      // Optional: see doc section below\n      contextualSearch: true,\n\n      // Optional: see doc section below\n      appId: 'YOUR_APP_ID',\n\n      // Optional: Algolia search parameters\n      searchParameters: {},\n\n      //... other Algolia params\n    },\n    // highlight-end\n  },\n};\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"searchParameters")," option used to be named ",(0,o.kt)("inlineCode",{parentName:"p"},"algoliaOptions")," in Docusaurus v1."))),(0,o.kt)("h3",{id:"contextual-search"},"Contextual search"),(0,o.kt)("p",null,"Contextual search is mostly useful for versioned Docusaurus sites."),(0,o.kt)("p",null,"Let's consider you have 2 docs versions, v1 and v2. When you are browsing v2 docs, it would be odd to return search results for the v1 documentation. Sometimes v1 and v2 docs are quite similar, and you would end up with duplicate search results for the same query (one result per version)."),(0,o.kt)("p",null,"To solve this problem, the contextual search feature understands that you are browsing a specific docs version, and will create the search query filters dynamically."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"browsing ",(0,o.kt)("inlineCode",{parentName:"li"},"/docs/v1/myDoc"),", search results will only include ",(0,o.kt)("strong",{parentName:"li"},"v1")," docs (+ other unversioned pages)"),(0,o.kt)("li",{parentName:"ul"},"browsing ",(0,o.kt)("inlineCode",{parentName:"li"},"/docs/v2/myDoc"),", search results will only include ",(0,o.kt)("strong",{parentName:"li"},"v2")," docs (+ other unversioned pages)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      contextualSearch: true,\n    },\n    // highlight-end\n  },\n};\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"contextualSearch: true"),", the contextual facet filters will be merged with the ones provided with ",(0,o.kt)("inlineCode",{parentName:"p"},"algolia.searchParameters.facetFilters"),"."))),(0,o.kt)("h3",{id:"custom-application-id"},"Custom Application ID"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/run-your-own/"},"running your own")," DocSearch crawler, it is ",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/behavior/#appid"},"required to set the ",(0,o.kt)("inlineCode",{parentName:"a"},"appId")," configuration key")," to your own Application ID. If left unset, the ",(0,o.kt)("inlineCode",{parentName:"p"},"appId")," will fallback to the one used with the free, hosted version of Algolia DocSearch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      appId: 'YOUR_APP_ID',\n    },\n    // highlight-end\n  },\n};\n")),(0,o.kt)("h3",{id:"styling-your-algolia-search"},"Styling your Algolia search"),(0,o.kt)("p",null,"By default, DocSearch comes with a fine-tuned theme that was designed for accessibility, making sure that colors and contrasts respect standards."),(0,o.kt)("p",null,"Still, you can reuse the ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.75/styling-layout#styling-your-site-with-infima"},"Infima CSS variables")," from Docusaurus to style DocSearch by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/css/custom.css")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="/src/css/custom.css"',title:'"/src/css/custom.css"'},"html[data-theme='light'] .DocSearch {\n  /* --docsearch-primary-color: var(--ifm-color-primary); */\n  /* --docsearch-text-color: var(--ifm-font-color-base); */\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(94, 100, 112, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-color-secondary-lighter);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-color-secondary);\n  --docsearch-searchbox-focus-background: var(--ifm-color-white);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-white);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-color-white);\n}\n\nhtml[data-theme='dark'] .DocSearch {\n  --docsearch-text-color: var(--ifm-font-color-base);\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(47, 55, 69, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-background-color);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-background-color);\n  --docsearch-searchbox-focus-background: var(--ifm-color-black);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-emphasis-100);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-background-surface-color);\n  --docsearch-key-gradient: linear-gradient(\n    -26.5deg,\n    var(--ifm-color-emphasis-200) 0%,\n    var(--ifm-color-emphasis-100) 100%\n  );\n}\n")),(0,o.kt)("h3",{id:"customizing-the-algolia-search-behavior"},"Customizing the Algolia search behavior"),(0,o.kt)("p",null,"Algolia DocSearch supports a ",(0,o.kt)("a",{parentName:"p",href:"https://autocomplete-experimental.netlify.app/docs/DocSearchModal#reference"},"list of options")," that you can pass to the ",(0,o.kt)("inlineCode",{parentName:"p"},"algolia")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    // ...\n    algolia: {\n      apiKey: 'YOUR_API_KEY',\n      indexName: 'YOUR_INDEX_NAME',\n      // Options...\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"editing-the-algolia-search-component"},"Editing the Algolia search component"),(0,o.kt)("p",null,"If you prefer to edit the Algolia search React component, swizzle the ",(0,o.kt)("inlineCode",{parentName:"p"},"SearchBar")," component in ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-search-algolia"),":"),(0,o.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-search-algolia SearchBar\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle @docusaurus/theme-search-algolia SearchBar\n")))),(0,o.kt)("h2",{id:"using-your-own-search"},"Using your own search"),(0,o.kt)("p",null,"To use your own search, swizzle the ",(0,o.kt)("inlineCode",{parentName:"p"},"SearchBar")," component in ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")),(0,o.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-classic SearchBar\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle @docusaurus/theme-classic SearchBar\n")))),(0,o.kt)("p",null,"This will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/themes/SearchBar")," file in your project folder. Restart your dev server and edit the component, you will see that Docusaurus uses your own ",(0,o.kt)("inlineCode",{parentName:"p"},"SearchBar")," component now."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notes"),": You can alternatively ",(0,o.kt)("a",{parentName:"p",href:"#editing-the-algolia-search-component"},"swizzle from Algolia SearchBar")," and create your own search component from there."))}p.isMDXComponent=!0},86010:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function r(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}t.d(a,{Z:function(){return r}})}}]);