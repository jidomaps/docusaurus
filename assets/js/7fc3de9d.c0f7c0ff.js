(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[8184],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return t?i.createElement(f,r(r({ref:n},d),{},{components:t})):i.createElement(f,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98448:function(e,n,t){"use strict";var i=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},12168:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var i=t(67294),a=t(90050),o=t(86010),r="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var d=function(e){var n=e.lazy,t=e.block,d=e.defaultValue,c=e.values,p=e.groupId,m=e.className,f=(0,a.Z)(),h=f.tabGroupChoices,g=f.setTabGroupChoices,b=(0,i.useState)(d),k=b[0],v=b[1],y=i.Children.toArray(e.children),N=[];if(null!=p){var w=h[p];null!=w&&w!==k&&c.some((function(e){return e.value===w}))&&v(w)}var C=function(e){var n=e.currentTarget,t=N.indexOf(n),i=c[t].value;v(i),null!=p&&(g(p,i),setTimeout((function(){var e,t,i,a,o,r,l,u;(e=n.getBoundingClientRect(),t=e.top,i=e.left,a=e.bottom,o=e.right,r=window,l=r.innerHeight,u=r.innerWidth,t>=0&&o<=u&&a<=l&&i>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case u:var i=N.indexOf(e.target)+1;t=N[i]||N[0];break;case l:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},m)},c.map((function(e){var n=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":k===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:C,onClick:C},t)}))),n?(0,i.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},22713:function(e,n,t){"use strict";var i=(0,t(67294).createContext)(void 0);n.Z=i},90050:function(e,n,t){"use strict";var i=t(67294),a=t(22713);n.Z=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7158:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var i=t(22122),a=t(19756),o=(t(67294),t(3905)),r=t(12168),s=t(98448),l=["components"],u={id:"plugin-content-docs",title:"\ud83d\udce6 plugin-content-docs",slug:"/api/plugins/@docusaurus/plugin-content-docs"},d={unversionedId:"api/plugins/plugin-content-docs",id:"version-2.0.0-alpha.75/api/plugins/plugin-content-docs",isDocsHomePage:!1,title:"\ud83d\udce6 plugin-content-docs",description:"Provides the Docs functionality and is the default docs plugin for Docusaurus.",source:"@site/versioned_docs/version-2.0.0-alpha.75/api/plugins/plugin-content-docs.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-content-docs",permalink:"/docs/2.0.0-alpha.75/api/plugins/@docusaurus/plugin-content-docs",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/plugins/plugin-content-docs.md",version:"2.0.0-alpha.75",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619800915,formattedLastUpdatedAt:"4/30/2021",frontMatter:{id:"plugin-content-docs",title:"\ud83d\udce6 plugin-content-docs",slug:"/api/plugins/@docusaurus/plugin-content-docs"},sidebar:"version-2.0.0-alpha.75/api",previous:{title:"Docusaurus plugins",permalink:"/docs/2.0.0-alpha.75/api/plugins"},next:{title:"\ud83d\udce6 plugin-content-blog",permalink:"/docs/2.0.0-alpha.75/api/plugins/@docusaurus/plugin-content-blog"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Markdown Frontmatter",id:"markdown-frontmatter",children:[]},{value:"i18n",id:"i18n",children:[{value:"Translation files location",id:"translation-files-location",children:[]},{value:"Example file-system structure",id:"example-file-system-structure",children:[]}]}],p={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0.0-alpha.75/docs-introduction"},"Docs")," functionality and is the default docs plugin for Docusaurus."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(r.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-content-docs\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/plugin-content-docs\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have installed ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency. You can also configure it through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0.0-alpha.75/presets#docusauruspreset-classic"},"classic preset options")," instead of doing it like below."))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        /**\n         * Path to data on filesystem relative to site dir.\n         */\n        path: 'docs',\n        /**\n         * Base url to edit your site.\n         * Docusaurus will compute the final editUrl with \"editUrl + relativeDocPath\"\n         */\n        editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',\n        /**\n         * For advanced cases, compute the edit url for each markdown file yourself.\n         */\n        editUrl: function ({\n          locale,\n          version,\n          versionDocsDirPath,\n          docPath,\n          permalink,\n        }) {\n          return `https://github.com/facebook/docusaurus/edit/master/website/${versionDocsDirPath}/${docPath}`;\n        },\n        /**\n         * Useful if you commit localized files to git.\n         * When markdown files are localized, the edit url will target the localized file,\n         * instead of the original unlocalized file.\n         * Note: this option is ignored when editUrl is a function\n         */\n        editLocalizedFiles: false,\n        /**\n         * Useful if you don't want users to submit doc pull-requests to older versions.\n         * When docs are versioned, the edit url will link to the doc\n         * in current version, instead of the versioned doc.\n         * Note: this option is ignored when editUrl is a function\n         */\n        editCurrentVersion: false,\n        /**\n         * URL route for the docs section of your site.\n         * *DO NOT* include a trailing slash.\n         * INFO: It is possible to set just `/` for shipping docs without base path.\n         */\n        routeBasePath: 'docs',\n        include: ['**/*.md', '**/*.mdx'], // Extensions to include.\n        /**\n         * Path to sidebar configuration for showing a list of markdown pages.\n         */\n        sidebarPath: 'sidebars.js',\n        /**\n         * Function used to replace the sidebar items of type \"autogenerated\"\n         * by real sidebar items (docs, categories, links...)\n         */\n        sidebarItemsGenerator: async function ({\n          defaultSidebarItemsGenerator, // useful to re-use/enhance default sidebar generation logic from Docusaurus\n          numberPrefixParser, // numberPrefixParser configured for this plugin\n          item, // the sidebar item with type \"autogenerated\"\n          version, // the current version\n          docs, // all the docs of that version (unfiltered)\n        }) {\n          // Use the provided data to generate a custom sidebar slice\n          return [\n            {type: 'doc', id: 'intro'},\n            {\n              type: 'category',\n              label: 'Tutorials',\n              items: [\n                {type: 'doc', id: 'tutorial1'},\n                {type: 'doc', id: 'tutorial2'},\n              ],\n            },\n          ];\n        },\n        /**\n         * The Docs plugin supports number prefixes like \"01-My Folder/02.My Doc.md\".\n         * Number prefixes are extracted and used as position to order autogenerated sidebar items.\n         * For conveniency, number prefixes are automatically removed from the default doc id, name, title.\n         * This parsing logic is configurable to allow all possible usecases and filename patterns.\n         * Use \"false\" to disable this behavior and leave the docs untouched.\n         */\n        numberPrefixParser: function (filename) {\n          // Implement your own logic to extract a potential number prefix\n          const numberPrefix = findNumberPrefix(filename);\n          // Prefix found: return it with the cleaned filename\n          if (numberPrefix) {\n            return {\n              numberPrefix,\n              filename: filename.replace(prefix, ''),\n            };\n          }\n          // No number prefix found\n          return {numberPrefix: undefined, filename};\n        },\n        /**\n         * Theme components used by the docs pages\n         */\n        docLayoutComponent: '@theme/DocPage',\n        docItemComponent: '@theme/DocItem',\n        /**\n         * Remark and Rehype plugins passed to MDX\n         */\n        remarkPlugins: [\n          /* require('remark-math') */\n        ],\n        rehypePlugins: [],\n        /**\n         * Custom Remark and Rehype plugins passed to MDX before\n         * the default Docusaurus Remark and Rehype plugins.\n         */\n        beforeDefaultRemarkPlugins: [],\n        beforeDefaultRehypePlugins: [],\n        /**\n         * Whether to display the author who last updated the doc.\n         */\n        showLastUpdateAuthor: false,\n        /**\n         * Whether to display the last date the doc was updated.\n         */\n        showLastUpdateTime: false,\n        /**\n         * By default, versioning is enabled on versioned sites.\n         * This is a way to explicitly disable the versioning feature.\n         */\n        disableVersioning: false,\n        /**\n         * Skip the next release docs when versioning is enabled.\n         * This will not generate HTML files in the production build for documents\n         * in `/docs/next` directory, only versioned docs.\n         */\n        excludeNextVersionDocs: false,\n        /**\n         * The last version is the one we navigate to in priority on versioned sites\n         * It is the one displayed by default in docs navbar items\n         * By default, the last version is the first one to appear in versions.json\n         * By default, the last version is at the \"root\" (docs have path=/docs/myDoc)\n         * Note: it is possible to configure the path and label of the last version\n         * Tip: using lastVersion: 'current' make sense in many cases\n         */\n        lastVersion: undefined,\n        /**\n         * The docusaurus versioning defaults don't make sense for all projects\n         * This gives the ability customize the label and path of each version\n         * You may not like that default version\n         */\n        versions: {\n          /*\n          Example configuration: \n          current: {\n            label: 'Android SDK v2.0.0 (WIP)',\n            path: 'android-2.0.0',\n          },\n          '1.0.0': {\n            label: 'Android SDK v1.0.0',\n            path: 'android-1.0.0',\n          },\n          */\n        },\n        /**\n         * Sometimes you only want to include a subset of all available versions.\n         * Tip: limit to 2 or 3 versions to improve startup and build time in dev and deploy previews\n         */\n        onlyIncludeVersions: undefined, // ex: [\"current\", \"1.0.0\", \"2.0.0\"]\n      },\n    ],\n  ],\n};\n")),(0,o.kt)("h2",{id:"markdown-frontmatter"},"Markdown Frontmatter"),(0,o.kt)("p",null,"Markdown documents can use the following markdown frontmatter metadata fields, enclosed by a line ",(0,o.kt)("inlineCode",{parentName:"p"},"---")," on either side:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),": A unique document id. If this field is not present, the document's ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," will default to its file name (without the extension)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title"),": The title of your document. If this field is not present, the document's ",(0,o.kt)("inlineCode",{parentName:"li"},"title")," will default to its ",(0,o.kt)("inlineCode",{parentName:"li"},"id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hide_title"),": Whether to hide the title at the top of the doc. By default, it is ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hide_table_of_contents"),": Whether to hide the table of contents to the right. By default it is ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sidebar_label"),": The text shown in the document sidebar and in the next/previous button for this document. If this field is not present, the document's ",(0,o.kt)("inlineCode",{parentName:"li"},"sidebar_label")," will default to its ",(0,o.kt)("inlineCode",{parentName:"li"},"title")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sidebar_position"),": Permits to control the position of a doc inside the generated sidebar slice, when using ",(0,o.kt)("inlineCode",{parentName:"li"},"autogenerated")," sidebar items. Can be Int or Float."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parse_number_prefixes"),": When a document has a number prefix (",(0,o.kt)("inlineCode",{parentName:"li"},"001 - My Doc.md"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"2. MyDoc.md"),"...), it is automatically parsed and extracted by the plugin ",(0,o.kt)("inlineCode",{parentName:"li"},"numberPrefixParser"),", and the number prefix is used as ",(0,o.kt)("inlineCode",{parentName:"li"},"sidebar_position"),". Use ",(0,o.kt)("inlineCode",{parentName:"li"},"parse_number_prefixes: false")," to disable number prefix parsing on this doc"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"custom_edit_url"),": The URL for editing this document. If this field is not present, the document's edit URL will fall back to ",(0,o.kt)("inlineCode",{parentName:"li"},"editUrl")," from options fields passed to ",(0,o.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keywords"),": Keywords meta tag for the document page, for search engines"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description"),": The description of your document, which will become the ",(0,o.kt)("inlineCode",{parentName:"li"},'<meta name="description" content="..."/>')," and ",(0,o.kt)("inlineCode",{parentName:"li"},'<meta property="og:description" content="..."/>')," in ",(0,o.kt)("inlineCode",{parentName:"li"},"<head>"),", used by search engines. If this field is not present, it will default to the first line of the contents"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image"),": Cover or thumbnail image that will be used when displaying the link to your post"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"slug"),": Allows to customize the document url (",(0,o.kt)("inlineCode",{parentName:"li"},"/<routeBasePath>/<slug>"),"). Support multiple patterns: ",(0,o.kt)("inlineCode",{parentName:"li"},"slug: my-doc"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"slug: /my/path/myDoc"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"slug: /"))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"---\nid: doc-markdown\ntitle: Markdown Features\nhide_title: false\nhide_table_of_contents: false\nsidebar_label: Markdown :)\ncustom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md\ndescription: How do I find you when I cannot solve this problem\nkeywords:\n  - docs\n  - docusaurus\nimage: https://i.imgur.com/mErPwqL.png\nslug: /myDoc\n---\nMy Document Markdown content\n")),(0,o.kt)("h2",{id:"i18n"},"i18n"),(0,o.kt)("p",null,"Read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0.0-alpha.75/i18n/introduction"},"i18n introduction")," first."),(0,o.kt)("h3",{id:"translation-files-location"},"Translation files location"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Base path"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"website/i18n/<locale>/docusaurus-plugin-content-docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multi-instance path"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"website/i18n/<locale>/docusaurus-plugin-content-docs-<pluginId>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"JSON files"),": extracted with ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.0.0-alpha.75/cli#docusaurus-write-translations"},(0,o.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Markdown files"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"website/i18n/<locale>/docusaurus-plugin-content-docs/<version>"))),(0,o.kt)("h3",{id:"example-file-system-structure"},"Example file-system structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"website/i18n/<locale>/docusaurus-plugin-content-docs\n\u2502\n\u2502 # translations for website/docs\n\u251c\u2500\u2500 current\n\u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 config.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 getting-started.md\n\u251c\u2500\u2500 current.json\n\u2502\n\u2502 # translations for website/versioned_docs/version-1.0.0\n\u251c\u2500\u2500 version-1.0.0\n\u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 config.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 getting-started.md\n\u2514\u2500\u2500 version-1.0.0.json\n")))}m.isMDXComponent=!0},86010:function(e,n,t){"use strict";function i(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);