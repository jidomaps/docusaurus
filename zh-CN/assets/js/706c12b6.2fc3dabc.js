(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[7466],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98448:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},12168:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(67294),o=n(90050),i=n(86010),r="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var m=function(e){var t=e.lazy,n=e.block,m=e.defaultValue,p=e.values,c=e.groupId,d=e.className,h=(0,o.Z)(),g=h.tabGroupChoices,f=h.setTabGroupChoices,k=(0,a.useState)(m),v=k[0],y=k[1],N=a.Children.toArray(e.children),w=[];if(null!=c){var b=g[c];null!=b&&b!==v&&p.some((function(e){return e.value===b}))&&y(b)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;y(a),null!=c&&(f(c,a),setTimeout((function(){var e,n,a,o,i,r,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,i=e.right,r=window,s=r.innerHeight,u=r.innerWidth,n>=0&&i<=u&&o<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},z=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case s:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:z,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},22713:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},90050:function(e,t,n){"use strict";var a=n(67294),o=n(22713);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},56209:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r=n(12168),l=n(98448),s=["components"],u={id:"using-themes",title:"Themes"},m={unversionedId:"using-themes",id:"version-2.0.0-alpha.74/using-themes",isDocsHomePage:!1,title:"Themes",description:"Like plugins, themes are designed to add functionality to your Docusaurus site. As a good rule of thumb, themes are mostly focused on client-side, where plugins are more focused on server-side functionalities. Themes are also designed to be replace-able with other themes.",source:"@site/versioned_docs/version-2.0.0-alpha.74/using-themes.md",sourceDirName:".",slug:"/using-themes",permalink:"/zh-CN/docs/2.0.0-alpha.74/using-themes",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-alpha.74",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619534336,formattedLastUpdatedAt:"2021/4/27",frontMatter:{id:"using-themes",title:"Themes"},sidebar:"version-2.0.0-alpha.74/docs",previous:{title:"Plugins",permalink:"/zh-CN/docs/2.0.0-alpha.74/using-plugins"},next:{title:"Presets",permalink:"/zh-CN/docs/2.0.0-alpha.74/presets"}},p=[{value:"Available themes",id:"available-themes",children:[]},{value:"Using themes",id:"using-themes",children:[]},{value:"Theme components",id:"theme-components",children:[]},{value:"Wrapping your site with <code>&lt;Root&gt;</code>",id:"wrapper-your-site-with-root",children:[]},{value:"Swizzling theme components",id:"swizzling-theme-components",children:[]},{value:"Wrapping theme components",id:"wrapping-theme-components",children:[{value:"For site owners",id:"for-site-owners",children:[]},{value:"For plugin authors",id:"for-plugin-authors",children:[]}]},{value:"Themes design",id:"themes-design",children:[]},{value:"Writing customized Docusaurus themes",id:"writing-customized-docusaurus-themes",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Like plugins, themes are designed to add functionality to your Docusaurus site. As a good rule of thumb, themes are mostly focused on client-side, where plugins are more focused on server-side functionalities. Themes are also designed to be replace-able with other themes."),(0,i.kt)("h2",{id:"available-themes"},"Available themes"),(0,i.kt)("p",null,"We maintain a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.74/api/themes"},"list of official themes"),"."),(0,i.kt)("h2",{id:"using-themes"},"Using themes"),(0,i.kt)("p",null,"To use themes, specify the themes in your ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". You may use multiple themes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{3} title="docusaurus.config.js"',"{3}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themes: ['@docusaurus/theme-classic', '@docusaurus/theme-live-codeblock'],\n};\n")),(0,i.kt)("h2",{id:"theme-components"},"Theme components"),(0,i.kt)("p",null,"Most of the time, theme is used to provide a set of React components, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Navbar"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Footer"),"."),(0,i.kt)("p",null,"Users can use these components in their code by importing them using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme")," webpack alias:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Navbar from '@theme/Navbar';\n")),(0,i.kt)("p",null,"The alias ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme")," can refer to a few directories, in the following priority:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A user's ",(0,i.kt)("inlineCode",{parentName:"li"},"website/src/theme")," directory, which is a special directory that has the higher precedence."),(0,i.kt)("li",{parentName:"ol"},"A Docusaurus theme packages's ",(0,i.kt)("inlineCode",{parentName:"li"},"theme")," directory."),(0,i.kt)("li",{parentName:"ol"},"Fallback components provided by Docusaurus core (usually not needed).")),(0,i.kt)("p",null,"Given the following structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"website\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 docusaurus-theme\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n        \u2514\u2500\u2500 Navbar.js\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"website/src/theme/Navbar.js")," takes precedence whenever ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme/Navbar")," is imported. This behavior is called component swizzling. In iOS, method swizzling is the process of changing the implementation of an existing selector (method). In the context of a website, component swizzling means providing an alternative component that takes precedence over the component provided by the theme."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Themes are for providing UI components to present the content.")," Most content plugins need to be paired with a theme in order to be actually useful. The UI is a separate layer from the data schema, so it makes it easy to swap out the themes for other designs (i.e., Bootstrap)."),(0,i.kt)("p",null,"For example, a Docusaurus blog consists of a blog plugin and a blog theme."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"{\n  theme: ['theme-blog'],\n  plugins: ['plugin-content-blog'],\n}\n")),(0,i.kt)("p",null,"And if you want to use Bootstrap styling, you can swap out the theme with ",(0,i.kt)("inlineCode",{parentName:"p"},"theme-blog-bootstrap")," (fictitious non-existing theme):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"{\n  theme: ['theme-blog-bootstrap'],\n  plugins: ['plugin-content-blog'],\n}\n")),(0,i.kt)("h2",{id:"wrapper-your-site-with-root"},"Wrapping your site with ",(0,i.kt)("inlineCode",{parentName:"h2"},"<Root>")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"<Root>")," theme component is rendered at the very top of your Docusaurus site."),(0,i.kt)("p",null,"It allows you to wrap your site with additional logic, by creating a file at ",(0,i.kt)("inlineCode",{parentName:"p"},"src/theme/Root.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="website/src/theme/Root.js"',title:'"website/src/theme/Root.js"'},"import React from 'react';\n\n// Default implementation, that you can customize\nfunction Root({children}) {\n  return <>{children}</>;\n}\n\nexport default Root;\n")),(0,i.kt)("p",null,"This component is applied above the router and the theme ",(0,i.kt)("inlineCode",{parentName:"p"},"<Layout>"),", and will ",(0,i.kt)("strong",{parentName:"p"},"never unmount"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use this component to render React Context providers and global stateful logic."))),(0,i.kt)("h2",{id:"swizzling-theme-components"},"Swizzling theme components"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We would like to discourage swizzling of components until we've minimally reached a Beta stage. The components APIs have been changing rapidly and are likely to keep changing until we reach Beta. Stick with the default appearance for now if possible to save yourself some potential pain in future."))),(0,i.kt)("p",null,"Docusaurus Themes' components are designed to be replaceable. To make it easier for you, we created a command for you to replace theme components called ",(0,i.kt)("inlineCode",{parentName:"p"},"swizzle"),"."),(0,i.kt)("p",null,"To swizzle a component for a theme, run the following command in your doc site:"),(0,i.kt)(r.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle <theme name> [component name]\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle <theme name> [component name]\n")))),(0,i.kt)("p",null,"As an example, to swizzle the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Footer />")," component in ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")," for your site, run:"),(0,i.kt)(r.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-classic Footer\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle @docusaurus/theme-classic Footer\n")))),(0,i.kt)("p",null,"This will copy the current ",(0,i.kt)("inlineCode",{parentName:"p"},"<Footer />")," component used by the theme to a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/theme/Footer")," directory under the root of your site, which is where Docusaurus will look for swizzled components. Docusaurus will then use swizzled component in place of the original one from the theme."),(0,i.kt)("p",null,"Although we highly discourage swizzling of all components, if you wish to do that, run:"),(0,i.kt)(r.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-classic\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle @docusaurus/theme-classic\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": You need to restart your webpack dev server in order for Docusaurus to know about the new component."),(0,i.kt)("h2",{id:"wrapping-theme-components"},"Wrapping theme components"),(0,i.kt)("p",null,"Sometimes, you just want to wrap an existing theme component with additional logic, and it can be a pain to have to maintain an almost duplicate copy of the original theme component."),(0,i.kt)("p",null,"In such case, you should swizzle the component you want to wrap, but import the original theme component in your customized version to wrap it."),(0,i.kt)("h3",{id:"for-site-owners"},"For site owners"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme-original")," alias allows you to import the original theme component."),(0,i.kt)("p",null,"Here is an example to display some text just above the footer, with minimal code duplication."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/theme/Footer.js"',title:'"src/theme/Footer.js"'},"// Note: importing from \"@theme/Footer\" would fail due to the file importing itself\nimport OriginalFooter from '@theme-original/Footer';\nimport React from 'react';\n\nexport default function Footer(props) {\n  return (\n    <>\n      <div>Before footer</div>\n      <OriginalFooter {...props} />\n    </>\n  );\n}\n")),(0,i.kt)("h3",{id:"for-plugin-authors"},"For plugin authors"),(0,i.kt)("p",null,"One theme can wrap a component from another theme, by importing the component from the initial theme, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme-init")," import."),(0,i.kt)("p",null,"Here's an example of using this feature to enhance the default theme ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeBlock")," component with a ",(0,i.kt)("inlineCode",{parentName:"p"},"react-live")," playground feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import InitialCodeBlock from '@theme-init/CodeBlock';\nimport React from 'react';\n\nexport default function CodeBlock(props) {\n  return props.live ? (\n    <ReactLivePlayground {...props} />\n  ) : (\n    <InitialCodeBlock {...props} />\n  );\n}\n")),(0,i.kt)("p",null,"Check the code of ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-theme-live-codeblock")," for details."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Unless you want publish to npm a "theme enhancer" (like ',(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-theme-live-codeblock"),"), you likely don't need ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme-init"),"."))),(0,i.kt)("h2",{id:"themes-design"},"Themes design"),(0,i.kt)("p",null,"While themes share the exact same lifecycle methods with plugins, their implementations can look very different from those of plugins based on themes' designed objectives."),(0,i.kt)("p",null,"Themes are designed to complete the build of your Docusaurus site and supply the components used by your site, plugins, and the themes themselves. So a typical theme implementation would look like a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.js")," file that hooks it up to the lifecycle methods. Most likely they would not use ",(0,i.kt)("inlineCode",{parentName:"p"},"loadContent"),", which plugins would use. And it is typically accompanied by a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/theme")," directory full of components."),(0,i.kt)("p",null,"To summarize:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Themes share the same lifecycle methods with Plugins"),(0,i.kt)("li",{parentName:"ul"},"Themes are run after all existing Plugins"),(0,i.kt)("li",{parentName:"ul"},"Themes exist to add component aliases by extending the webpack config")),(0,i.kt)("h2",{id:"writing-customized-docusaurus-themes"},"Writing customized Docusaurus themes"),(0,i.kt)("p",null,"A Docusaurus theme normally includes an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," file where you hook up to the lifecycle methods, alongside with a ",(0,i.kt)("inlineCode",{parentName:"p"},"theme/")," directory of components. A typical Docusaurus ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," folder looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{5-7}","{5-7}":!0},"website\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.js\n    \u2514\u2500\u2500 theme\n        \u251c\u2500\u2500 MyThemeComponent\n        \u2514\u2500\u2500 AnotherThemeComponent.js\n")),(0,i.kt)("p",null,"There are two lifecycle methods that are essential to theme implementation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/lifecycle-apis#getthemepath"},(0,i.kt)("inlineCode",{parentName:"a"},"getThemePath()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/lifecycle-apis#getclientmodules"},(0,i.kt)("inlineCode",{parentName:"a"},"getClientModules()")))),(0,i.kt)("p",null,"These lifecycle method are not essential but recommended:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/lifecycle-apis#validatethemeconfigthemeconfig-validate"},(0,i.kt)("inlineCode",{parentName:"a"},"validateThemeConfig({themeConfig, validate})"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/lifecycle-apis#validateoptionsoptions-validate"},(0,i.kt)("inlineCode",{parentName:"a"},"validateOptions({options, validate})")))))}d.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);