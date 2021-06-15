(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[4191],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35432:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(67294),a="browserWindow_25XZ",o="browserWindowHeader_KqAw",i="buttons_1hjc",s="browserWindowAddressBar_3kU8",c="dot_3vUt",l="browserWindowMenuIcon_62Vr",d="bar_1GUQ",u="browserWindowBody_2pXR";var m=function(e){var t=e.children,n=e.minHeight,m=e.url;return r.createElement("div",{className:a,style:{minHeight:n}},r.createElement("div",{className:o},r.createElement("div",{className:i},r.createElement("span",{className:c,style:{background:"#f25f58"}}),r.createElement("span",{className:c,style:{background:"#fbbe3c"}}),r.createElement("span",{className:c,style:{background:"#58cb42"}})),r.createElement("div",{className:s},m),r.createElement("div",{className:l},r.createElement("div",null,r.createElement("span",{className:d}),r.createElement("span",{className:d}),r.createElement("span",{className:d})))),r.createElement("div",{className:u},t))}},69221:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d},Highlight:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=n(35432),s=["components"],c={id:"react",title:"Using React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",slug:"/markdown-features/react"},l={unversionedId:"guides/markdown-features/react",id:"version-2.0.0-alpha.73/guides/markdown-features/react",isDocsHomePage:!1,title:"Using React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",source:"@site/versioned_docs/version-2.0.0-alpha.73/guides/markdown-features/markdown-features-react.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/react",permalink:"/docs/2.0.0-alpha.73/markdown-features/react",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/markdown-features/markdown-features-react.mdx",version:"2.0.0-alpha.73",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1618570090,formattedLastUpdatedAt:"4/16/2021",frontMatter:{id:"react",title:"Using React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",slug:"/markdown-features/react"},sidebar:"version-2.0.0-alpha.73/docs",previous:{title:"Markdown Features introduction",permalink:"/docs/2.0.0-alpha.73/markdown-features"},next:{title:"Tabs",permalink:"/docs/2.0.0-alpha.73/markdown-features/tabs"}},d=[],u=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},m={toc:d,Highlight:u};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docusaurus has built-in support for ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),", which allows you to write JSX within your Markdown files and render them as React components."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"While both ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," files are parsed using MDX, some of the syntax are treated slightly differently. For the most accurate parsing and better editor support, we recommend using the ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," extension for files containing MDX syntax."))),(0,o.kt)("p",null,"Try this block here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n\nI can write **Markdown** alongside my _JSX_!\n")),(0,o.kt)("p",null,"Notice how it renders both the markup from your React component and the Markdown syntax:"),(0,o.kt)(i.Z,{minHeight:240,url:"http://localhost:3000",mdxType:"BrowserWindow"},(0,o.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," ","and ",(0,o.kt)(u,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,o.kt)("p",null,"I can write ",(0,o.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,o.kt)("em",{parentName:"p"},"JSX"),"!")),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can also import your own components defined in other files or third-party components installed via npm! Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX docs")," to see what other fancy stuff you can do with MDX."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since all doc files are parsed using MDX, any HTML is treated as JSX. Therefore, if you need to inline-style a component, follow JSX flavor and provide style objects. This behavior is different from Docusaurus 1. See also ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0.0-alpha.73/migration/manual#convert-style-attributes-to-style-objects-in-mdx"},"Migrating from v1 to v2"),"."))))}p.isMDXComponent=!0}}]);