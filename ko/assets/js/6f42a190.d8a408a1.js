(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[336],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98448:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},12168:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(67294),o=n(90050),r=n(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,g=e.className,m=(0,o.Z)(),f=m.tabGroupChoices,b=m.setTabGroupChoices,h=(0,a.useState)(c),v=h[0],k=h[1],y=a.Children.toArray(e.children),w=[];if(null!=d){var N=f[d];null!=N&&N!==v&&p.some((function(e){return e.value===N}))&&k(N)}var P=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;k(a),null!=d&&(b(d,a),setTimeout((function(){var e,n,a,o,r,i,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&r<=u&&o<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case s:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},g)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:P,onClick:P},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},22713:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},90050:function(e,t,n){"use strict";var a=n(67294),o=n(22713);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},12692:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=n(12168),l=n(98448),s=["components"],u={id:"plugin-content-blog",title:"\ud83d\udce6 plugin-content-blog",slug:"/api/plugins/@docusaurus/plugin-content-blog"},c={unversionedId:"api/plugins/plugin-content-blog",id:"version-2.0.0-alpha.74/api/plugins/plugin-content-blog",isDocsHomePage:!1,title:"\ud83d\udce6 plugin-content-blog",description:"Provides the Blog feature and is the default blog plugin for Docusaurus.",source:"@site/versioned_docs/version-2.0.0-alpha.74/api/plugins/plugin-content-blog.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-content-blog",permalink:"/ko/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-content-blog",editUrl:"https://crowdin.com/project/docusaurus-v2/ko",version:"2.0.0-alpha.74",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619534336,formattedLastUpdatedAt:"2021. 4. 27.",frontMatter:{id:"plugin-content-blog",title:"\ud83d\udce6 plugin-content-blog",slug:"/api/plugins/@docusaurus/plugin-content-blog"},sidebar:"version-2.0.0-alpha.74/api",previous:{title:"\ud83d\udce6 plugin-content-docs",permalink:"/ko/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-content-docs"},next:{title:"\ud83d\udce6 plugin-content-pages",permalink:"/ko/docs/2.0.0-alpha.74/api/plugins/@docusaurus/plugin-content-pages"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"i18n",id:"i18n",children:[{value:"Translation files location",id:"translation-files-location",children:[]},{value:"Example file-system structure",id:"example-file-system-structure",children:[]}]}],d={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Provides the ",(0,r.kt)("a",{parentName:"p",href:"/ko/docs/2.0.0-alpha.74/blog"},"Blog")," feature and is the default blog plugin for Docusaurus."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-content-blog\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/plugin-content-blog\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have installed ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency. You can also configure it through the ",(0,r.kt)("a",{parentName:"p",href:"/ko/docs/2.0.0-alpha.74/presets#docusauruspreset-classic"},"classic preset options")," instead of doing it like below."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-blog',\n      {\n        /**\n         * Path to data on filesystem relative to site dir.\n         */\n        path: 'blog',\n        /**\n         * Base url to edit your site.\n         * Docusaurus will compute the final editUrl with \"editUrl + relativeDocPath\"\n         */\n        editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',\n        /**\n         * For advanced cases, compute the edit url for each markdown file yourself.\n         */\n        editUrl: ({locale, blogDirPath, blogPath, permalink}) => {\n          return `https://github.com/facebook/docusaurus/edit/master/website/${blogDirPath}/${blogPath}`;\n        },\n        /**\n         * Useful if you commit localized files to git.\n         * When markdown files are localized, the edit url will target the localized file,\n         * instead of the original unlocalized file.\n         * Note: this option is ignored when editUrl is a function\n         */\n        editLocalizedFiles: false,\n        /**\n         * Blog page title for better SEO\n         */\n        blogTitle: 'Blog title',\n        /**\n         * Blog page meta description for better SEO\n         */\n        blogDescription: 'Blog',\n        /**\n         * Number of blog post elements to show in the blog sidebar\n         * 'ALL' to show all blog posts\n         * 0 to disable\n         */\n        blogSidebarCount: 5,\n        /**\n         * Title of the blog sidebar\n         */\n        blogSidebarTitle: 'All our posts',\n        /**\n         * URL route for the blog section of your site.\n         * *DO NOT* include a trailing slash.\n         */\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        postsPerPage: 10,\n        /**\n         * Theme components used by the blog pages.\n         */\n        blogListComponent: '@theme/BlogListPage',\n        blogPostComponent: '@theme/BlogPostPage',\n        blogTagsListComponent: '@theme/BlogTagsListPage',\n        blogTagsPostsComponent: '@theme/BlogTagsPostsPage',\n        /**\n         * Remark and Rehype plugins passed to MDX.\n         */\n        remarkPlugins: [\n          /* require('remark-math') */\n        ],\n        rehypePlugins: [],\n        /**\n         * Custom Remark and Rehype plugins passed to MDX before\n         * the default Docusaurus Remark and Rehype plugins.\n         */\n        beforeDefaultRemarkPlugins: [],\n        beforeDefaultRehypePlugins: [],\n        /**\n         * Truncate marker, can be a regex or string.\n         */\n        truncateMarker: /\x3c!--\\s*(truncate)\\s*--\x3e/,\n        /**\n         * Show estimated reading time for the blog post.\n         */\n        showReadingTime: true,\n        /**\n         * Blog feed.\n         * If feedOptions is undefined, no rss feed will be generated.\n         */\n        feedOptions: {\n          type: '', // required. 'rss' | 'feed' | 'all'\n          title: '', // default to siteConfig.title\n          description: '', // default to  `${siteConfig.title} Blog`\n          copyright: '',\n          language: undefined, // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("h2",{id:"i18n"},"i18n"),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"/ko/docs/2.0.0-alpha.74/i18n/introduction"},"i18n introduction")," first."),(0,r.kt)("h3",{id:"translation-files-location"},"Translation files location"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Base path"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"website/i18n/<locale>/docusaurus-plugin-content-blog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multi-instance path"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"website/i18n/<locale>/docusaurus-plugin-content-blog-<pluginId>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JSON files"),": N/A"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Markdown files"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"website/i18n/<locale>/docusaurus-plugin-content-blog"))),(0,r.kt)("h3",{id:"example-file-system-structure"},"Example file-system structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"website/i18n/<locale>/docusaurus-plugin-content-blog\n\u2502\n\u2502 # translations for website/blog\n\u251c\u2500\u2500 first-blog-post.md\n\u2514\u2500\u2500 second-blog-post.md\n")))}g.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);