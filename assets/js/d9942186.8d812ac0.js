(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[7569],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67509:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),s=["components"],i={id:"browser-support",title:"Browser support"},l={unversionedId:"browser-support",id:"browser-support",isDocsHomePage:!1,title:"Browser support",description:"Docusaurus allows sites to define the list of supported browsers through a browserslist configuration.",source:"@site/docs/browser-support.md",sourceDirName:".",slug:"/browser-support",permalink:"/docusaurus/docs/next/browser-support",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/browser-support.md",version:"current",lastUpdatedBy:"Joshua Chen",lastUpdatedAt:1620723785,formattedLastUpdatedAt:"5/11/2021",frontMatter:{id:"browser-support",title:"Browser support"},sidebar:"docs",previous:{title:"Search",permalink:"/docusaurus/docs/next/search"},next:{title:"Deployment",permalink:"/docusaurus/docs/next/deployment"}},u=[{value:"Purpose",id:"purpose",children:[]},{value:"Default values",id:"default-values",children:[]},{value:"Read more",id:"read-more",children:[]}],p={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docusaurus allows sites to define the list of supported browsers through a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist"},"browserslist configuration"),"."),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"Websites need to balance between backward compatibility and bundle size. As old browsers do not support modern APIs or syntax, more code is needed to implement the same functionality, penalizing all other users with increased site load time. As a tradeoff, the Docusaurus bundler only supports browser versions defined in the browser list."),(0,a.kt)("p",null,"The browser list by default is provided through the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file as a root ",(0,a.kt)("inlineCode",{parentName:"p"},"browserslist")," field."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"On old browsers, the compiled output will use unsupported (too recent) JS syntax, causing React to fail to initialize and ending up with a static website with only HTML/CSS and no JS."))),(0,a.kt)("h2",{id:"default-values"},"Default values"),(0,a.kt)("p",null,"Websites initialized with the default classic template has the following in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'{4-11} title="package.json"',"{4-11}":!0,title:'"package.json"'},'{\n  "name": "docusaurus",\n  // ...\n  "browserslist": {\n    "production": [">0.5%", "not dead", "not op_mini all"],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  }\n  // ...\n}\n')),(0,a.kt)("p",null,"Explained in natural language, the browsers supported in production are those:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With more than 0.5% of market share; ",(0,a.kt)("em",{parentName:"li"},"and")),(0,a.kt)("li",{parentName:"ul"},'Has official support or updates in the past 24 months (the opposite of "dead"); ',(0,a.kt)("em",{parentName:"li"},"and")),(0,a.kt)("li",{parentName:"ul"},"Is not Opera Mini.")),(0,a.kt)("p",null,"And browsers used in development are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The latest version of Chrome ",(0,a.kt)("em",{parentName:"li"},"or")," Firefox ",(0,a.kt)("em",{parentName:"li"},"or")," Safari.")),(0,a.kt)("p",null,'You can "evaluate" any config with the ',(0,a.kt)("inlineCode",{parentName:"p"},"browserlist")," cli to obtain the actual list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'npx browserslist --env="production"\n')),(0,a.kt)("p",null,"The output are all browsers supported in production. Below is the output in May, 2021:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"and_chr 89\nand_uc 12.12\nchrome 89\nchrome 88\nchrome 87\nedge 89\nedge 88\nfirefox 86\nie 11\nios_saf 14.0-14.5\nios_saf 13.4-13.7\nsafari 14\nsafari 13.1\nsamsung 13.0\n")),(0,a.kt)("h2",{id:"read-more"},"Read more"),(0,a.kt)("p",null,"You may wish to visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist/blob/main/README.md"},"browserslist documentation")," for more specifications, especially the accepted ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist/blob/main/README.md#queries"},"query values")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist/blob/main/README.md#best-practices"},"best practices"),"."))}c.isMDXComponent=!0}}]);