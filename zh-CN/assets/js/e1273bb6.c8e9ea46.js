(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[6688],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72677:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r=["components"],l={id:"docusaurus.config.js",title:"docusaurus.config.js",description:"API reference for Docusaurus configuration file.",slug:"/docusaurus.config.js"},s={unversionedId:"api/docusaurus.config.js",id:"version-2.0.0-alpha.73/api/docusaurus.config.js",isDocsHomePage:!1,title:"docusaurus.config.js",description:"API reference for Docusaurus configuration file.",source:"@site/versioned_docs/version-2.0.0-alpha.73/api/docusaurus.config.js.md",sourceDirName:"api",slug:"/docusaurus.config.js",permalink:"/zh-CN/docs/2.0.0-alpha.73/docusaurus.config.js",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-alpha.73",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1618570090,formattedLastUpdatedAt:"2021/4/16",frontMatter:{id:"docusaurus.config.js",title:"docusaurus.config.js",description:"API reference for Docusaurus configuration file.",slug:"/docusaurus.config.js"},sidebar:"version-2.0.0-alpha.73/api",previous:{title:"Docusaurus Client API",permalink:"/zh-CN/docs/2.0.0-alpha.73/docusaurus-core"},next:{title:"Lifecycle APIs",permalink:"/zh-CN/docs/2.0.0-alpha.73/lifecycle-apis"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Required fields",id:"required-fields",children:[{value:"<code>title</code>",id:"title",children:[]},{value:"<code>favicon</code>",id:"favicon",children:[]},{value:"<code>url</code>",id:"url",children:[]},{value:"<code>baseUrl</code>",id:"baseurl",children:[]}]},{value:"Optional fields",id:"optional-fields",children:[{value:"<code>i18n</code>",id:"i18n",children:[]},{value:"<code>noIndex</code>",id:"noindex",children:[]},{value:"<code>onBrokenLinks</code>",id:"onbrokenlinks",children:[]},{value:"<code>onBrokenMarkdownLinks</code>",id:"onbrokenmarkdownlinks",children:[]},{value:"<code>onDuplicateRoutes</code>",id:"onduplicateroutes",children:[]},{value:"<code>tagline</code>",id:"tagline",children:[]},{value:"<code>organizationName</code>",id:"organizationname",children:[]},{value:"<code>projectName</code>",id:"projectname",children:[]},{value:"<code>githubHost</code>",id:"githubhost",children:[]},{value:"<code>githubPort</code>",id:"githubPort",children:[]},{value:"<code>themeConfig</code>",id:"themeconfig",children:[]},{value:"<code>plugins</code>",id:"plugins",children:[]},{value:"<code>themes</code>",id:"themes",children:[]},{value:"<code>presets</code>",id:"presets",children:[]},{value:"<code>customFields</code>",id:"customfields",children:[]},{value:"<code>scripts</code>",id:"scripts",children:[]},{value:"<code>clientModules</code>",id:"clientmodules",children:[]},{value:"<code>ssrTemplate</code>",id:"ssrtemplate",children:[]},{value:"<code>stylesheets</code>",id:"stylesheets",children:[]},{value:"<code>titleDelimiter</code>",id:"titledelimiter",children:[]},{value:"<code>baseUrlIssueBanner</code>",id:"baseurlissuebanner",children:[]}]}],c={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," contains configurations for your site and is placed in the root directory of your site."),(0,o.kt)("h2",{id:"required-fields"},"Required fields"),(0,o.kt)("h3",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h3"},"title")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"Title for your website."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  title: 'Docusaurus',\n};\n")),(0,o.kt)("h3",{id:"favicon"},(0,o.kt)("inlineCode",{parentName:"h3"},"favicon")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"URL for site favicon. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  favicon: 'https://docusaurus.io/favicon.ico',\n};\n")),(0,o.kt)("p",null,"You can also use the favicon URL relative to the ",(0,o.kt)("inlineCode",{parentName:"p"},"static")," directory of your site. For example, your site has the following directory structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 README.md\n\u251c # ... other files in root directory\n\u2514\u2500 static\n    \u2514\u2500\u2500 img\n        \u2514\u2500\u2500 favicon.ico\n")),(0,o.kt)("p",null,"So you can refer it like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  favicon: 'img/favicon.ico',\n};\n")),(0,o.kt)("h3",{id:"url"},(0,o.kt)("inlineCode",{parentName:"h3"},"url")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"URL for your website. This can also be considered the top-level hostname. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"https://facebook.github.io")," is the URL of ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro/"},"https://facebook.github.io/metro/"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"https://docusaurus.io")," is the URL for ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io."},"https://docusaurus.io.")," This field is related to the ",(0,o.kt)("a",{parentName:"p",href:"#baseurl"},"baseUrl")," field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  url: 'https://docusaurus.io',\n};\n")),(0,o.kt)("h3",{id:"baseurl"},(0,o.kt)("inlineCode",{parentName:"h3"},"baseUrl")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"Base URL for your site. This can also be considered the path after the host. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/metro/")," is the baseUrl of ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro/"},"https://facebook.github.io/metro/"),". For URLs that have no path, the baseUrl should be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),". This field is related to the ",(0,o.kt)("a",{parentName:"p",href:"#url"},"url")," field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  baseUrl: '/',\n};\n")),(0,o.kt)("h2",{id:"optional-fields"},"Optional fields"),(0,o.kt)("h3",{id:"i18n"},(0,o.kt)("inlineCode",{parentName:"h3"},"i18n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object"))),(0,o.kt)("p",null,"The i18n configuration object to ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.73/i18n/introduction"},"localize your site"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n    localeConfigs: {\n      en: {\n        label: 'English',\n        direction: 'ltr',\n      },\n      fr: {\n        label: 'Fran\xe7ais',\n        direction: 'ltr',\n      },\n    },\n  },\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"label"),": the label to use for this locale"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"direction"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"ltr")," (default) or ",(0,o.kt)("inlineCode",{parentName:"li"},"rtl")," (for ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/rtl"},"right-to-left languages")," like Araric, Hebrew, etc.)")),(0,o.kt)("h3",{id:"noindex"},(0,o.kt)("inlineCode",{parentName:"h3"},"noIndex")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,o.kt)("p",null,"This option adds ",(0,o.kt)("inlineCode",{parentName:"p"},'<meta name="robots" content="noindex, nofollow">')," in pages, to tell search engines to avoid indexing your site (more information ",(0,o.kt)("a",{parentName:"p",href:"https://moz.com/learn/seo/robots-meta-directives"},"here"),")."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  noIndex: true, // Defaults to `false`\n};\n")),(0,o.kt)("h3",{id:"onbrokenlinks"},(0,o.kt)("inlineCode",{parentName:"h3"},"onBrokenLinks")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"'ignore' | 'log' | 'warn' | 'error' | 'throw'"))),(0,o.kt)("p",null,"The behavior of Docusaurus, when it detects any broken link."),(0,o.kt)("p",null,"By default, it throws an error, to ensure you never ship any broken link, but you can lower this security if needed."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The broken links detection is only available for a production build (",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus build"),")."))),(0,o.kt)("h3",{id:"onbrokenmarkdownlinks"},(0,o.kt)("inlineCode",{parentName:"h3"},"onBrokenMarkdownLinks")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"'ignore' | 'log' | 'warn' | 'error' | 'throw'"))),(0,o.kt)("p",null,"The behavior of Docusaurus, when it detects any broken markdown link."),(0,o.kt)("p",null,"By default, it prints a warning, to let you know about your broken markdown link, but you can change this security if needed."),(0,o.kt)("h3",{id:"onduplicateroutes"},(0,o.kt)("inlineCode",{parentName:"h3"},"onDuplicateRoutes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"'ignore' | 'log' | 'warn' | 'error' | 'throw'"))),(0,o.kt)("p",null,"The behavior of Docusaurus when it detects any ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.73/creating-pages#duplicate-routes"},"duplicate routes"),"."),(0,o.kt)("p",null,"By default, it displays a warning after you run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build"),"."),(0,o.kt)("h3",{id:"tagline"},(0,o.kt)("inlineCode",{parentName:"h3"},"tagline")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"The tagline for your website."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  tagline:\n    'Docusaurus makes it easy to maintain Open Source documentation websites.',\n};\n")),(0,o.kt)("h3",{id:"organizationname"},(0,o.kt)("inlineCode",{parentName:"h3"},"organizationName")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"The GitHub user or organization that owns the repository. Used by the deployment command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // Docusaurus' organization is facebook\n  organizationName: 'facebook',\n};\n")),(0,o.kt)("h3",{id:"projectname"},(0,o.kt)("inlineCode",{parentName:"h3"},"projectName")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"The name of the GitHub repository. Used by the deployment command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  projectName: 'docusaurus',\n};\n")),(0,o.kt)("h3",{id:"githubhost"},(0,o.kt)("inlineCode",{parentName:"h3"},"githubHost")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"The hostname of your server. Useful if you are using GitHub Enterprise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  githubHost: 'github.com',\n};\n")),(0,o.kt)("h3",{id:"githubPort"},(0,o.kt)("inlineCode",{parentName:"h3"},"githubPort")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"The port of your server. Useful if you are using GitHub Enterprise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  githubPort: '22',\n};\n")),(0,o.kt)("h3",{id:"themeconfig"},(0,o.kt)("inlineCode",{parentName:"h3"},"themeConfig")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object"))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.73/api/themes/configuration"},"theme configuration")," object, to customize your site UI like navbar, footer."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    hideableSidebar: false,\n    colorMode: {\n      defaultMode: 'light',\n      disableSwitch: false,\n      respectPrefersColorScheme: true,\n      switchConfig: {\n        darkIcon: '\ud83c\udf19',\n        lightIcon: '\\u2600',\n        // React inline style object\n        // see https://reactjs.org/docs/dom-elements.html#style\n        darkIconStyle: {\n          marginLeft: '2px',\n        },\n        lightIconStyle: {\n          marginLeft: '1px',\n        },\n      },\n    },\n    navbar: {\n      title: 'Site Title',\n      logo: {\n        alt: 'Site Logo',\n        src: 'img/logo.svg',\n      },\n      items: [\n        {\n          to: 'docs/docusaurus.config.js',\n          activeBasePath: 'docs',\n          label: 'docusaurus.config.js',\n          position: 'left',\n        },\n        // ... other links\n      ],\n    },\n    footer: {\n      style: 'dark',\n      links: [\n        {\n          title: 'Docs',\n          items: [\n            {\n              label: 'Docs',\n              to: 'docs/doc1',\n            },\n          ],\n        },\n        // ... other links\n      ],\n      logo: {\n        alt: 'Facebook Open Source Logo',\n        src: 'https://docusaurus.io/img/oss_logo.png',\n      },\n      copyright: `Copyright \xa9 ${new Date().getFullYear()} Facebook, Inc.`, // You can also put own HTML here\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"plugins"},(0,o.kt)("inlineCode",{parentName:"h3"},"plugins")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"any[]"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [],\n};\n")),(0,o.kt)("h3",{id:"themes"},(0,o.kt)("inlineCode",{parentName:"h3"},"themes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"any[]"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themes: [],\n};\n")),(0,o.kt)("h3",{id:"presets"},(0,o.kt)("inlineCode",{parentName:"h3"},"presets")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"any[]"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [],\n};\n")),(0,o.kt)("h3",{id:"customfields"},(0,o.kt)("inlineCode",{parentName:"h3"},"customFields")),(0,o.kt)("p",null,"Docusaurus guards ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from unknown fields. To add a custom field, define it on ",(0,o.kt)("inlineCode",{parentName:"p"},"customFields"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  customFields: {\n    admin: 'endi',\n    superman: 'lol',\n  },\n};\n")),(0,o.kt)("p",null,"Attempting to add unknown field in the config will lead to error in build time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Error: The field(s) 'foo', 'bar' are not recognized in docusaurus.config.js\n")),(0,o.kt)("h3",{id:"scripts"},(0,o.kt)("inlineCode",{parentName:"h3"},"scripts")),(0,o.kt)("p",null,"An array of scripts to load. The values can be either strings or plain objects of attribute-value maps. The ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tags will be inserted in the HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>"),"."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," added here are render-blocking so you might want to add ",(0,o.kt)("inlineCode",{parentName:"p"},"async: true"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"defer: true")," to the objects."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"(string | Object)[]"))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  scripts: [\n    // String format.\n    'https://docusaurus.io/script.js',\n    // Object format.\n    {\n      src:\n        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',\n      async: true,\n    },\n  ],\n};\n")),(0,o.kt)("h3",{id:"clientmodules"},(0,o.kt)("inlineCode",{parentName:"h3"},"clientModules")),(0,o.kt)("p",null,"An array of client modules to load globally on your site:"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  clientModules: [\n    require.resolve('./mySiteGlobalJs.js'),\n    require.resolve('./mySiteGlobalCss.css'),\n  ],\n};\n")),(0,o.kt)("p",null,"See also: ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.73/lifecycle-apis#getclientmodules"},(0,o.kt)("inlineCode",{parentName:"a"},"getClientModules()")),"."),(0,o.kt)("h3",{id:"ssrtemplate"},(0,o.kt)("inlineCode",{parentName:"h3"},"ssrTemplate")),(0,o.kt)("p",null,"An HTML template written in ",(0,o.kt)("a",{parentName:"p",href:"https://eta.js.org/docs/syntax#syntax-overview"},"Eta's syntax")," that will be used to render your application. This can be used to set custom attributes on the ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," tags, additional ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," tags, customize the ",(0,o.kt)("inlineCode",{parentName:"p"},"viewport"),", etc. Please note that Docusaurus will rely on the template to be correctly structured in order to function properly, once you do customize it, you will have to make sure that your template is compliant with the requirements from ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  ssrTemplate: `<!DOCTYPE html>\n<html <%~ it.htmlAttributes %>>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86">\n    <meta name="generator" content="Docusaurus v<%= it.version %>">\n    <%~ it.headTags %>\n    <% it.metaAttributes.forEach((metaAttribute) => { %>\n      <%~ metaAttribute %>\n    <% }); %>\n    <% it.stylesheets.forEach((stylesheet) => { %>\n      <link rel="stylesheet" type="text/css" href="<%= it.baseUrl %><%= stylesheet %>" />\n    <% }); %>\n    <% it.scripts.forEach((script) => { %>\n      <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">\n    <% }); %>\n  </head>\n  <body <%~ it.bodyAttributes %> itemscope="" itemtype="http://schema.org/Organization">\n    <%~ it.preBodyTags %>\n    <div id="__docusaurus">\n      <%~ it.appHtml %>\n    </div>\n    <div id="outside-docusaurus">\n      <span>Custom markup</span>\n    </div>\n    <% it.scripts.forEach((script) => { %>\n      <script type="text/javascript" src="<%= it.baseUrl %><%= script %>"><\/script>\n    <% }); %>\n    <%~ it.postBodyTags %>\n  </body>\n</html>\n};\n')),(0,o.kt)("h3",{id:"stylesheets"},(0,o.kt)("inlineCode",{parentName:"h3"},"stylesheets")),(0,o.kt)("p",null,"An array of CSS sources to load. The values can be either strings or plain objects of attribute-value maps. The ",(0,o.kt)("inlineCode",{parentName:"p"},"<link>")," tags will be inserted in the HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"(string | Object)[]"))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  stylesheets: [\n    // String format.\n    'https://docusaurus.io/style.css',\n    // Object format.\n    {\n      href: 'http://mydomain.com/style.css',\n      type: 'text/css',\n    },\n  ],\n};\n")),(0,o.kt)("h3",{id:"titledelimiter"},(0,o.kt)("inlineCode",{parentName:"h3"},"titleDelimiter")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"A string that will be used as title delimiter in the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"<title>")," tag."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  titleDelimiter: '\ud83e\udd96', // Defaults to `|`\n};\n")),(0,o.kt)("h3",{id:"baseurlissuebanner"},(0,o.kt)("inlineCode",{parentName:"h3"},"baseUrlIssueBanner")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,o.kt)("p",null,"When enabled, will show a banner in case your site can't load its CSS or JavaScript files, which is a very common issue, often related to a wrong ",(0,o.kt)("inlineCode",{parentName:"p"},"baseUrl")," in site config."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  baseUrlIssueBanner: true, // Defaults to `true`\n};\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"baseUrlIssueBanner",src:n(28166).Z})),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This banner need to inline CSS / JS."),(0,o.kt)("p",{parentName:"div"},"If you have a strict ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"Content Security Policy"),", you should rather disable it."))))}d.isMDXComponent=!0},28166:function(e,t,n){"use strict";t.Z=n.p+"assets/images/baseUrlIssueBanner-3292a9164bf77c06a723e8d3ddfe66c0.png"}}]);