(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[6373],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68921:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),i="tableOfContentsInline_3fWc";function l(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(l,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return n.createElement("div",{className:(0,r.Z)(i)},n.createElement(l,{toc:t}))}},98448:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},12168:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(67294),r=a(90050),i=a(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var d=function(e){var t=e.lazy,a=e.block,d=e.defaultValue,p=e.values,m=e.groupId,c=e.className,k=(0,r.Z)(),h=k.tabGroupChoices,N=k.setTabGroupChoices,g=(0,n.useState)(d),f=g[0],v=g[1],b=n.Children.toArray(e.children),y=[];if(null!=m){var w=h[m];null!=w&&w!==f&&p.some((function(e){return e.value===w}))&&v(w)}var C=function(e){var t=e.currentTarget,a=y.indexOf(t),n=p[a].value;v(n),null!=m&&(N(m,n),setTimeout((function(){var e,a,n,r,i,l,s,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,u=l.innerWidth,a>=0&&i<=u&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},z=function(e){var t,a;switch(e.keyCode){case u:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case s:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},c)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:z,onFocus:C,onClick:C},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},22713:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},90050:function(e,t,a){"use strict";var n=a(67294),r=a(22713);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},50033:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),l=a(12168),o=a(98448),s=a(68921),u=["components"],d={id:"cli"},p={unversionedId:"cli",id:"version-2.0.0-alpha.75/cli",isDocsHomePage:!1,title:"CLI",description:"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website.",source:"@site/versioned_docs/version-2.0.0-alpha.75/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docusaurus/docs/2.0.0-alpha.75/cli",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cli.md",version:"2.0.0-alpha.75",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619800915,formattedLastUpdatedAt:"4/30/2021",frontMatter:{id:"cli"},sidebar:"version-2.0.0-alpha.75/api",next:{title:"Docusaurus Client API",permalink:"/docusaurus/docs/2.0.0-alpha.75/docusaurus-core"}},m=[{value:"Index",id:"index",children:[]},{value:"Docusaurus CLI commands",id:"docusaurus-cli-commands",children:[{value:"<code>docusaurus start [siteDir]</code>",id:"docusaurus-start-sitedir",children:[]},{value:"<code>docusaurus build [siteDir]</code>",id:"docusaurus-build-sitedir",children:[]},{value:"<code>docusaurus swizzle [siteDir]</code>",id:"docusaurus-swizzle-sitedir",children:[]},{value:"<code>docusaurus deploy [siteDir]</code>",id:"docusaurus-deploy-sitedir",children:[]},{value:"<code>docusaurus serve [siteDir]</code>",id:"docusaurus-serve-sitedir",children:[]},{value:"<code>docusaurus clear [siteDir]</code>",id:"docusaurus-clear-sitedir",children:[]},{value:"<code>docusaurus write-translations [siteDir]</code>",id:"docusaurus-write-translations-sitedir",children:[]},{value:"<code>docusaurus write-heading-ids [siteDir]</code>",id:"docusaurus-write-heading-ids-sitedir",children:[]}]}],c={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."),(0,i.kt)("p",null,"Once your website is bootstrapped, the website source will contain the Docusaurus scripts that you can invoke with your package manager:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ...\n  "scripts": {\n    "docusaurus": "docusaurus",\n    "start": "docusaurus start",\n    "build": "docusaurus build",\n    "swizzle": "docusaurus swizzle",\n    "deploy": "docusaurus deploy",\n    "clear": "docusaurus clear",\n    "serve": "docusaurus serve",\n    "write-translations": "docusaurus write-translations",\n    "write-heading-ids": "docusaurus write-heading-ids"\n  }\n}\n')),(0,i.kt)("h2",{id:"index"},"Index"),(0,i.kt)(s.Z,{toc:m[1].children,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"docusaurus-cli-commands"},"Docusaurus CLI commands"),(0,i.kt)("p",null,"Below is a list of Docusaurus CLI commands and their usages:"),(0,i.kt)("h3",{id:"docusaurus-start-sitedir"},(0,i.kt)("inlineCode",{parentName:"h3"},"docusaurus start [siteDir]")),(0,i.kt)("p",null,"Builds and serves a preview of your site locally with ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server"},"Webpack Dev Server"),"."),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--port")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3000")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the port of the dev server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--host")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"localhost")),(0,i.kt)("td",{parentName:"tr",align:null},"Specify a host to use. For example, if you want your server to be accessible externally, you can use ",(0,i.kt)("inlineCode",{parentName:"td"},"--host 0.0.0.0"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--hot-only")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Enables Hot Module Replacement without page refresh as fallback in case of build failures. More information ",(0,i.kt)("a",{parentName:"td",href:"https://webpack.js.org/configuration/dev-server/#devserverhotonly"},"here"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--no-open")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Do not open automatically the page in the browser.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--config")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to docusaurus config file, default to ",(0,i.kt)("inlineCode",{parentName:"td"},"[siteDir]/docusaurus.config.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--poll [optionalIntervalMs]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Use polling of files rather than watching for live reload as a fallback in environments where watching doesn't work. More information ",(0,i.kt)("a",{parentName:"td",href:"https://webpack.js.org/configuration/watch/#watchoptionspoll"},"here"),".")))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please note that some functionality (for example, anchor links) will not work in development. The functionality will work as expected in production."))),(0,i.kt)("h4",{id:"enabling-https"},"Enabling HTTPS`"),(0,i.kt)("p",null,"There are multiple ways to obtain a certificate. We will use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/mkcert"},"mkcert")," as an example."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"mkcert localhost")," to generate ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost.pem")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost-key.pem"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"mkcert -install")," to install the cert in your trust store, and restart your browser")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the app with Docusaurus HTTPS env variables:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTPS=true SSL_CRT_FILE=localhost.pem SSL_KEY_FILE=localhost-key.pem yarn start\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"https://localhost:3000/"))),(0,i.kt)("h3",{id:"docusaurus-build-sitedir"},(0,i.kt)("inlineCode",{parentName:"h3"},"docusaurus build [siteDir]")),(0,i.kt)("p",null,"Compiles your site for production."),(0,i.kt)("h4",{id:"options-1"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--bundle-analyzer")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Analyze your bundle with the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"},"webpack bundle analyzer"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--out-dir")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"build")),(0,i.kt)("td",{parentName:"tr",align:null},"The full path for the new output directory, relative to the current workspace.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--config")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to docusaurus config file, default to ",(0,i.kt)("inlineCode",{parentName:"td"},"[siteDir]/docusaurus.config.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--no-minify")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Build website without minimizing JS/CSS bundles.")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For advanced minification of CSS bundle, we use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-advanced"},"advanced cssnano preset")," (along with additional several PostCSS plugins) and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jakubpawlowicz/clean-css#level-2-optimizations"},"level 2 optimization of clean-css"),". If as a result of this advanced CSS minification you find broken CSS, build your website with the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"USE_SIMPLE_CSS_MINIFIER=true")," to minify CSS with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-default"},"default cssnano preset"),". ",(0,i.kt)("strong",{parentName:"p"},"Please ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/facebook/docusaurus/issues/new?labels=bug%2C+needs+triage&template=bug.md"},"fill out an issue")," if you experience CSS minification bugs.")))),(0,i.kt)("h3",{id:"docusaurus-swizzle-sitedir"},(0,i.kt)("inlineCode",{parentName:"h3"},"docusaurus swizzle [siteDir]")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We highly discourage swizzling of components until we've reached a Beta stage. The components APIs have been changing rapidly and are likely to keep changing until we reach Beta. Stick with the default appearance for now if possible to save yourself some potential pain in future."))),(0,i.kt)("p",null,"Change any Docusaurus theme components to your liking with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run swizzle"),"."),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\nnpm run swizzle @docusaurus/theme-classic DocSidebar\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\nyarn run swizzle @docusaurus/theme-classic DocSidebar\n")))),(0,i.kt)("p",null,"Running the command will copy the relevant theme files to your site folder. You may then make any changes to it and Docusaurus will use it instead of the one provided from the theme."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run swizzle")," without ",(0,i.kt)("inlineCode",{parentName:"p"},"themeName")," lists all the themes available for swizzling; similarly, ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run swizzle <themeName>")," without ",(0,i.kt)("inlineCode",{parentName:"p"},"componentName")," lists all the components available for swizzling."),(0,i.kt)("h4",{id:"options-2"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"themeName")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the theme you are using.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"swizzleComponent")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the component to swizzle.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--danger")),(0,i.kt)("td",{parentName:"tr",align:null},"Allow swizzling of unstable components")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--typescript")),(0,i.kt)("td",{parentName:"tr",align:null},"Swizzle TypeScript components")))),(0,i.kt)("p",null,"An example to use ",(0,i.kt)("inlineCode",{parentName:"p"},"--danger")," flag let's consider the below code:"),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-classic Logo -- --danger\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle @docusaurus/theme-classic Logo -- --danger\n")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Unstable Components: components that have a higher risk of breaking changes due to internal refactorings."))),(0,i.kt)("p",null,"To unswizzle a component, simply delete the files of the swizzled component."),(0,i.kt)("h3",{id:"docusaurus-deploy-sitedir"},(0,i.kt)("inlineCode",{parentName:"h3"},"docusaurus deploy [siteDir]")),(0,i.kt)("p",null,"Deploys your site with ",(0,i.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub Pages"),". Check out the docs on ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.75/deployment#deploying-to-github-pages"},"deployment")," for more details."),(0,i.kt)("h4",{id:"options-3"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--out-dir")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"build")),(0,i.kt)("td",{parentName:"tr",align:null},"The full path for the new output directory, relative to the current workspace.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--skip-build")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Deploy website without building it. This may be useful when using custom deploy script.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--config")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to docusaurus config file, default to ",(0,i.kt)("inlineCode",{parentName:"td"},"[siteDir]/docusaurus.config.js"))))),(0,i.kt)("h3",{id:"docusaurus-serve-sitedir"},(0,i.kt)("inlineCode",{parentName:"h3"},"docusaurus serve [siteDir]")),(0,i.kt)("p",null,"Serve your built website locally."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--port")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3000")),(0,i.kt)("td",{parentName:"tr",align:null},"Use specified port")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--dir")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"build")),(0,i.kt)("td",{parentName:"tr",align:null},"The full path for the output directory, relative to the current workspace")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--build")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Build website before serving")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--config")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to docusaurus config file, default to ",(0,i.kt)("inlineCode",{parentName:"td"},"[siteDir]/docusaurus.config.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--host")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"localhost")),(0,i.kt)("td",{parentName:"tr",align:null},"Specify a host to use. For example, if you want your server to be accessible externally, you can use ",(0,i.kt)("inlineCode",{parentName:"td"},"--host 0.0.0.0"),".")))),(0,i.kt)("h3",{id:"docusaurus-clear-sitedir"},(0,i.kt)("inlineCode",{parentName:"h3"},"docusaurus clear [siteDir]")),(0,i.kt)("p",null,"Clear a Docusaurus site's generated assets, caches, build artifacts."),(0,i.kt)("p",null,"We recommend running this command before reporting bugs, after upgrading versions, or anytime you have issues with your Docusaurus site."),(0,i.kt)("h3",{id:"docusaurus-write-translations-sitedir"},(0,i.kt)("inlineCode",{parentName:"h3"},"docusaurus write-translations [siteDir]")),(0,i.kt)("p",null,"Write the JSON translation files that you will have to translate."),(0,i.kt)("p",null,"By default, the files are written in ",(0,i.kt)("inlineCode",{parentName:"p"},"website/i18n/<defaultLocale>/..."),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--locale")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<defaultLocale>")),(0,i.kt)("td",{parentName:"tr",align:null},"Define which locale folder you want to write translations the JSON files in")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--override")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Override existing translation messages")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--config")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to docusaurus config file, default to ",(0,i.kt)("inlineCode",{parentName:"td"},"[siteDir]/docusaurus.config.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--messagePrefix")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''")),(0,i.kt)("td",{parentName:"tr",align:null},"Allows to add a prefix to each translation message, to help you highlight untranslated strings")))),(0,i.kt)("h3",{id:"docusaurus-write-heading-ids-sitedir"},(0,i.kt)("inlineCode",{parentName:"h3"},"docusaurus write-heading-ids [siteDir]")),(0,i.kt)("p",null,"Add ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.75/markdown-features/headings#explicit-ids"},"explicit heading ids")," to the Markdown documents of your site."))}k.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);