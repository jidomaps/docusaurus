(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[7622],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var u=2;u<i;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75149:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),l=["components"],r={id:"blog",title:"Blog"},s={unversionedId:"blog",id:"version-2.0.0-alpha.75/blog",isDocsHomePage:!1,title:"Blog",description:"Initial setup {#initial-setup}",source:"@site/versioned_docs/version-2.0.0-alpha.75/blog.md",sourceDirName:".",slug:"/blog",permalink:"/zh-CN/docs/2.0.0-alpha.75/blog",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-alpha.75",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619800915,formattedLastUpdatedAt:"2021/4/30",frontMatter:{id:"blog",title:"Blog"},sidebar:"version-2.0.0-alpha.75/docs",previous:{title:"Docs Multi-instance",permalink:"/zh-CN/docs/2.0.0-alpha.75/docs-multi-instance"},next:{title:"Markdown Features introduction",permalink:"/zh-CN/docs/2.0.0-alpha.75/markdown-features"}},u=[{value:"Initial setup",id:"initial-setup",children:[]},{value:"Adding posts",id:"adding-posts",children:[]},{value:"Header options",id:"header-options",children:[]},{value:"Summary truncation",id:"summary-truncation",children:[]},{value:"Feed",id:"feed",children:[]},{value:"Advanced topics",id:"advanced-topics",children:[{value:"Blog-only mode",id:"blog-only-mode",children:[]},{value:"Multiple blogs",id:"multiple-blogs",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"initial-setup"},"Initial setup"),(0,i.kt)("p",null,"To setup your site's blog, start by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,i.kt)("p",null,"Then, add an item link to your blog within ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    // ...\n    navbar: {\n      items: [\n        // ...\n        // highlight-next-line\n        {to: 'blog', label: 'Blog', position: 'left'}, // or position: 'right'\n      ],\n    },\n  },\n};\n")),(0,i.kt)("h2",{id:"adding-posts"},"Adding posts"),(0,i.kt)("p",null,"To publish in the blog, create a file within the blog directory with a formatted name of ",(0,i.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD-my-blog-post-title.md"),". The post date is extracted from the file name."),(0,i.kt)("p",null,"For example, at ",(0,i.kt)("inlineCode",{parentName:"p"},"my-website/blog/2019-09-05-hello-docusaurus-v2.md"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"---\ntitle: Welcome Docusaurus v2\nauthor: Joel Marcey\nauthor_title: Co-creator of Docusaurus 1\nauthor_url: https://github.com/JoelMarcey\nauthor_image_url: https://graph.facebook.com/611217057/picture/?height=200&width=200\ntags: [hello, docusaurus-v2]\ndescription: This is my first post on Docusaurus 2.\nimage: https://i.imgur.com/mErPwqL.png\nhide_table_of_contents: false\n---\nWelcome to this blog. This blog is created with [**Docusaurus 2 alpha**](https://docusaurus.io/).\n\n\x3c!--truncate--\x3e\n\nThis is my first post on Docusaurus 2.\n\nA whole bunch of exploration to follow.\n")),(0,i.kt)("h2",{id:"header-options"},"Header options"),(0,i.kt)("p",null,"The only required field is ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),"; however, we provide options to add author information to your blog post as well along with other options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"author")," - The author name to be displayed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"author_url")," - The URL that the author's name will be linked to. This could be a GitHub, Twitter, Facebook profile URL, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"author_image_url")," - The URL to the author's thumbnail image."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"author_title")," - A description of the author."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title")," - The blog post title."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tags")," - A list of strings to tag to your post."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"draft")," - A boolean flag to indicate that the blog post is work-in-progress and therefore should not be published yet. However, draft blog posts will be displayed during development."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": The description of your post, which will become the ",(0,i.kt)("inlineCode",{parentName:"li"},'<meta name="description" content="..."/>')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'<meta property="og:description" content="..."/>')," in ",(0,i.kt)("inlineCode",{parentName:"li"},"<head>"),", used by search engines. If this field is not present, it will default to the first line of the contents."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"image"),": Cover or thumbnail image that will be used when displaying the link to your post."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hide_table_of_contents"),": Whether to hide the table of contents to the right. By default it is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"summary-truncation"},"Summary truncation"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," marker in your blog post to represent what will be shown as the summary when viewing all published blog posts. Anything above ",(0,i.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," will be part of the summary. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"---\ntitle: Truncation Example\n---\nAll these will be part of the blog post summary.\n\nEven this.\n\n\x3c!--truncate--\x3e\n\nBut anything from here on down will not be.\n\nNot this.\n\nOr this.\n")),(0,i.kt)("h2",{id:"feed"},"Feed"),(0,i.kt)("p",null,"You can generate RSS/Atom feed by passing feedOptions. By default, RSS and Atom feeds are generated. To disable feed generation, set ",(0,i.kt)("inlineCode",{parentName:"p"},"feedOptions.type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"feedOptions?: {\n  type?: 'rss' | 'atom' | 'all' | null;\n  title?: string;\n  description?: string;\n  copyright: string;\n  language?: string; // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes\n};\n")),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{8-11} title="docusaurus.config.js"',"{8-11}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          feedOptions: {\n            type: 'all',\n            copyright: `Copyright \xa9 ${new Date().getFullYear()} Facebook, Inc.`,\n          },\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("p",null,"Accessing the feed:"),(0,i.kt)("p",null,"The feed for RSS can be found at:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://{your-domain}/blog/rss.xml\n")),(0,i.kt)("p",null,"and for Atom:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://{your-domain}/blog/atom.xml\n")),(0,i.kt)("h2",{id:"advanced-topics"},"Advanced topics"),(0,i.kt)("h3",{id:"blog-only-mode"},"Blog-only mode"),(0,i.kt)("p",null,"You can run your Docusaurus 2 site without a landing page and instead have your blog's post list page as the index page. Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"routeBasePath")," to be ",(0,i.kt)("inlineCode",{parentName:"p"},"'/'")," to indicate it's the root path."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{9} title="docusaurus.config.js"',"{9}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: false,\n        blog: {\n          path: './blog',\n          routeBasePath: '/', // Set this value to '/'.\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Don't forget to delete the existing homepage at ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/pages/index.js")," or else there will be two files mapping to the same route!"))),(0,i.kt)("p",null,"You can also add meta description to the blog list page for better SEO:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{8} title="docusaurus.config.js"',"{8}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          blogTitle: 'Docusaurus blog!',\n          blogDescription: 'A docusaurus powered blog!',\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("h3",{id:"multiple-blogs"},"Multiple blogs"),(0,i.kt)("p",null,"By default, the classic theme assumes only one blog per website and hence includes only one instance of the blog plugin. If you would like to have multiple blogs on a single website, it's possible too! You can add another blog by specifying another blog plugin in the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," option for ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"routeBasePath")," to the URL route that you want your second blog to be accessed on. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"routeBasePath")," here has to be different from the first blog or else there could be a collision of paths! Also, set ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," to the path to the directory containing your second blog's entries."),(0,i.kt)("p",null,"As documented for ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.75/using-plugins#multi-instance-plugins-and-plugin-ids"},"multi-instance plugins"),", you need to assign a unique id to the plugins."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    [\n      '@docusaurus/plugin-content-blog',\n      {\n        /**\n         * Required for any multi-instance plugin\n         */\n        id: 'second-blog',\n        /**\n         * URL route for the blog section of your site.\n         * *DO NOT* include a trailing slash.\n         */\n        routeBasePath: 'my-second-blog',\n        /**\n         * Path to data on filesystem relative to site dir.\n         */\n        path: './my-second-blog',\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("p",null,"As an example, we host a second blog ",(0,i.kt)("a",{parentName:"p",href:"/second-blog"},"here"),"."))}d.isMDXComponent=!0}}]);