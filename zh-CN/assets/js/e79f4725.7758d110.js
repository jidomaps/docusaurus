(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[4411],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98448:function(e,n,t){"use strict";var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},12168:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(67294),a=t(90050),i=t(86010),s="tabItem_1uMI",u="tabItemActive_2DSg";var o=37,l=39;var c=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=(0,a.Z)(),g=f.tabGroupChoices,h=f.setTabGroupChoices,k=(0,r.useState)(c),y=k[0],v=k[1],b=r.Children.toArray(e.children),w=[];if(null!=m){var x=g[m];null!=x&&x!==y&&p.some((function(e){return e.value===x}))&&v(x)}var N=function(e){var n=e.currentTarget,t=w.indexOf(n),r=p[t].value;v(r),null!=m&&(h(m,r),setTimeout((function(){var e,t,r,a,i,s,o,l;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,s=window,o=s.innerHeight,l=s.innerWidth,t>=0&&i<=l&&a<=o&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},j=function(e){var n,t;switch(e.keyCode){case l:var r=w.indexOf(e.target)+1;t=w[r]||w[0];break;case o:var a=w.indexOf(e.target)-1;t=w[a]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:N,onClick:N},t)}))),n?(0,r.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},22713:function(e,n,t){"use strict";var r=(0,t(67294).createContext)(void 0);n.Z=r},90050:function(e,n,t){"use strict";var r=t(67294),a=t(22713);n.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},67036:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),s=t(12168),u=t(98448),o=["components"],l={id:"plugins",title:"Plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},c={unversionedId:"guides/markdown-features/plugins",id:"guides/markdown-features/plugins",isDocsHomePage:!1,title:"Plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",source:"@site/docs/guides/markdown-features/markdown-features-plugins.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/plugins",permalink:"/zh-CN/docs/next/markdown-features/plugins",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"current",lastUpdatedBy:"Alexey Pyltsyn",lastUpdatedAt:1616148041,formattedLastUpdatedAt:"2021/3/19",frontMatter:{id:"plugins",title:"Plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},sidebar:"docs",previous:{title:"Assets",permalink:"/zh-CN/docs/next/markdown-features/assets"},next:{title:"Math Equations",permalink:"/zh-CN/docs/next/markdown-features/math-equations"}},p=[{value:"Configuring plugins",id:"configuring-plugins",children:[]},{value:"Configuring plugin options",id:"configuring-plugin-options",children:[]}],m={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can expand the MDX functionalities, using plugins."),(0,i.kt)("p",null,"Docusaurus content plugins support both ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/remark"},"Remark")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rehypejs/rehype"},"Rehype")," plugins that work with MDX."),(0,i.kt)("h2",{id:"configuring-plugins"},"Configuring plugins"),(0,i.kt)("p",null,"An MDX plugin is usually a npm package, so you install them like other npm packages using npm."),(0,i.kt)("p",null,"First, install your ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins"},"Remark")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins"},"Rehype")," plugins."),(0,i.kt)("p",null,"For example:"),(0,i.kt)(s.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save remark-images\nnpm install --save rehype-truncate\n"))),(0,i.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add remark-images\nyarn add rehype-truncate\n")))),(0,i.kt)("p",null,"Next, import the plugins:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const remarkImages = require('remark-images');\nconst rehypeTruncate = require('rehype-truncate');\n")),(0,i.kt)("p",null,"Finally, add them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," options in ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{10,11} title="docusaurus.config.js"',"{10,11}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n          // ...\n          remarkPlugins: [remarkImages],\n          rehypePlugins: [rehypeTruncate],\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("h2",{id:"configuring-plugin-options"},"Configuring plugin options"),(0,i.kt)("p",null,"Some plugins can be configured and accept their own options. In that case, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"[plugin, pluginOptions]")," syntax, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{10-13} title="docusaurus.config.js"',"{10-13}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n          // ...\n          remarkPlugins: [\n            plugin1,\n            [plugin2, {option1: {...}}],\n          ],\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("p",null,"See more information in the ",(0,i.kt)("a",{parentName:"p",href:"https://mdxjs.com/advanced/plugins"},"MDX documentation"),"."))}d.isMDXComponent=!0},86010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);