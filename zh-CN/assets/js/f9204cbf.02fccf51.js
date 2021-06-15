(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[7820],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88931:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r=["components"],s={id:"theme-configuration",title:"Theme configuration",slug:"/api/themes/configuration"},l={unversionedId:"api/themes/theme-configuration",id:"version-2.0.0-alpha.74/api/themes/theme-configuration",isDocsHomePage:!1,title:"Theme configuration",description:"This configuration applies to all main themes.",source:"@site/versioned_docs/version-2.0.0-alpha.74/api/themes/theme-configuration.md",sourceDirName:"api/themes",slug:"/api/themes/configuration",permalink:"/zh-CN/docs/2.0.0-alpha.74/api/themes/configuration",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-alpha.74",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619534336,formattedLastUpdatedAt:"2021/4/27",frontMatter:{id:"theme-configuration",title:"Theme configuration",slug:"/api/themes/configuration"},sidebar:"version-2.0.0-alpha.74/api",previous:{title:"Docusaurus themes",permalink:"/zh-CN/docs/2.0.0-alpha.74/api/themes"},next:{title:"\ud83d\udce6 theme-classic",permalink:"/zh-CN/docs/2.0.0-alpha.74/api/themes/@docusaurus/theme-classic"}},c=[{value:"Common",id:"common",children:[{value:"Color mode - dark mode",id:"color-mode---dark-mode",children:[]},{value:"Meta image",id:"meta-image",children:[]},{value:"Metadatas",id:"metadatas",children:[]},{value:"Announcement bar",id:"announcement-bar",children:[]}]},{value:"i18n",id:"i18n",children:[{value:"Translation files location",id:"translation-files-location",children:[]},{value:"Example file-system structure",id:"example-file-system-structure",children:[]}]},{value:"Hooks",id:"hooks",children:[{value:"<code>useThemeContext</code>",id:"usethemecontext",children:[]}]},{value:"Navbar",id:"navbar",children:[{value:"Navbar title &amp; logo",id:"navbar-title--logo",children:[]},{value:"Navbar items",id:"navbar-items",children:[]},{value:"Navbar dropdown",id:"navbar-dropdown",children:[]},{value:"Navbar doc link",id:"navbar-doc-link",children:[]},{value:"Navbar docs version dropdown",id:"navbar-docs-version-dropdown",children:[]},{value:"Navbar docs version",id:"navbar-docs-version",children:[]},{value:"Navbar locale dropdown",id:"navbar-locale-dropdown",children:[]},{value:"Navbar search",id:"navbar-search",children:[]},{value:"Auto-hide sticky navbar",id:"auto-hide-sticky-navbar",children:[]},{value:"Navbar style",id:"navbar-style",children:[]}]},{value:"CodeBlock",id:"codeblock",children:[{value:"Theme",id:"theme",children:[]},{value:"Default language",id:"default-language",children:[]}]},{value:"Footer",id:"footer-1",children:[]},{value:"Footer Links",id:"footer-links",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This configuration applies to all ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.74/api/themes"},"main themes"),"."),(0,i.kt)("h2",{id:"common"},"Common"),(0,i.kt)("h3",{id:"color-mode---dark-mode"},"Color mode - dark mode"),(0,i.kt)("p",null,"The classic theme provides by default light and dark mode support, with a navbar switch for the user."),(0,i.kt)("p",null,"It is possible to customize the color mode support with the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{6-35} title="docusaurus.config.js"',"{6-35}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    // ...\n    colorMode: {\n      // \"light\" | \"dark\"\n      defaultMode: 'light',\n\n      // Hides the switch in the navbar\n      // Useful if you want to support a single color mode\n      disableSwitch: false,\n\n      // Should we use the prefers-color-scheme media-query,\n      // using user system preferences, instead of the hardcoded defaultMode\n      respectPrefersColorScheme: false,\n\n      // Dark/light switch icon options\n      switchConfig: {\n        // Icon for the switch while in dark mode\n        darkIcon: '\ud83c\udf19',\n\n        // CSS to apply to dark icon,\n        // React inline style object\n        // see https://reactjs.org/docs/dom-elements.html#style\n        darkIconStyle: {\n          marginLeft: '2px',\n        },\n\n        // Unicode icons such as '\\u2600' will work\n        // Unicode with 5 chars require brackets: '\\u{1F602}'\n        lightIcon: '\\u{1F602}',\n\n        lightIconStyle: {\n          marginLeft: '1px',\n        },\n      },\n    },\n    // ...\n  },\n  // ...\n};\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"With ",(0,i.kt)("inlineCode",{parentName:"p"},"respectPrefersColorScheme: true"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultMode")," is overridden by user system preferences."),(0,i.kt)("p",{parentName:"div"},"If you only want to support one color mode, you likely want to ignore user system preferences."))),(0,i.kt)("h3",{id:"meta-image"},"Meta image"),(0,i.kt)("p",null,"You can configure a default image that will be used for your meta tag, in particular ",(0,i.kt)("inlineCode",{parentName:"p"},"og:image")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"twitter:image"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{4-6} title="docusaurus.config.js"',"{4-6}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    // Relative to your site's \"static\" directory.\n    // Cannot be SVGs. Can be external URLs too.\n    image: 'img/docusaurus.png',\n    // ...\n  },\n};\n")),(0,i.kt)("h3",{id:"metadatas"},"Metadatas"),(0,i.kt)("p",null,"You can configure additional html metadatas (and override existing ones)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{4} title="docusaurus.config.js"',"{4}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    metadatas: [{name: 'twitter:card', content: 'summary'}],\n    // ...\n  },\n};\n")),(0,i.kt)("h3",{id:"announcement-bar"},"Announcement bar"),(0,i.kt)("p",null,"Sometimes you want to announce something in your website. Just for such a case, you can add an announcement bar. This is a non-fixed and optionally dismissable panel above the navbar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{4-11} title="docusaurus.config.js"',"{4-11}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    announcementBar: {\n      id: 'support_us', // Any value that will identify this message.\n      content:\n        'We are looking to revamp our docs, please fill <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"#\">this survey</a>',\n      backgroundColor: '#fafbfc', // Defaults to `#fff`.\n      textColor: '#091E42', // Defaults to `#000`.\n      isCloseable: false, // Defaults to `true`.\n    },\n    // ...\n  },\n};\n")),(0,i.kt)("h2",{id:"i18n"},"i18n"),(0,i.kt)("p",null,"Read the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.74/i18n/introduction"},"i18n introduction")," first."),(0,i.kt)("h3",{id:"translation-files-location"},"Translation files location"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Base path"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"website/i18n/<locale>/docusaurus-theme-<themeName>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Multi-instance path"),": N/A"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"JSON files"),": extracted with ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.0.0-alpha.74/cli#docusaurus-write-translations"},(0,i.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Markdown files"),": `N/A")),(0,i.kt)("h3",{id:"example-file-system-structure"},"Example file-system structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"website/i18n/<locale>/docusaurus-theme-classic\n\u2502\n\u2502 # translations for the theme\n\u251c\u2500\u2500 navbar.json\n\u2514\u2500\u2500 footer.json\n")),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("h3",{id:"usethemecontext"},(0,i.kt)("inlineCode",{parentName:"h3"},"useThemeContext")),(0,i.kt)("p",null,"React hook to access theme context. This context contains functions for setting light and dark mode and boolean property, indicating which mode is currently in use."),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// highlight-next-line\nimport useThemeContext from '@theme/hooks/useThemeContext';\n\nconst Example = () => {\n  // highlight-next-line\n  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();\n\n  return <h1>Dark mode is now {isDarkTheme ? 'on' : 'off'}</h1>;\n};\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The component calling ",(0,i.kt)("inlineCode",{parentName:"p"},"useThemeContext")," must be a child of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Layout")," component."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function ExamplePage() {\n  return (\n    <Layout>\n      <Example />\n    </Layout>\n  );\n}\n")))),(0,i.kt)("h2",{id:"navbar"},"Navbar"),(0,i.kt)("h3",{id:"navbar-title--logo"},"Navbar title & logo"),(0,i.kt)("p",null,"You can add a logo and title to the navbar via ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig.navbar"),". Logo can be placed in ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.74/static-assets"},"static folder"),". Logo URL is set to base URL of your site by default. Although you can specify your own URL for the logo, if it is an external link, it will open in a new tab. In addition, you can override a value for the target attribute of logo link, it can come in handy if you are hosting docs website in a subdirectory of your main website, and in which case you probably do not need a link in the logo to the main website will open in a new tab."),(0,i.kt)("p",null,"To improve dark mode support, you can also set a different logo for this mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5-11} title="docusaurus.config.js"',"{5-11}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    navbar: {\n      title: 'Site Title',\n      logo: {\n        alt: 'Site Logo',\n        src: 'img/logo.svg',\n        srcDark: 'img/logo_dark.svg', // Default to `logo.src`.\n        href: 'https://docusaurus.io/', // Default to `siteConfig.baseUrl`.\n        target: '_self', // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).\n      },\n    },\n    // ...\n  },\n};\n")),(0,i.kt)("h3",{id:"navbar-items"},"Navbar items"),(0,i.kt)("p",null,"You can add items to the navbar via ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig.navbar.items"),"."),(0,i.kt)("p",null,"By default, Navbar items are regular links (internal or external)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    navbar: {\n      // highlight-start\n      items: [\n        {\n          // Client-side routing, used for navigating within the website.\n          // The baseUrl will be automatically prepended to this value.\n          to: 'docs/introduction',\n          // A full-page navigation, used for navigating outside of the website.\n          // You should only use either `to` or `href`.\n          href: 'https://www.facebook.com',\n          // Prepends the baseUrl to href values.\n          prependBaseUrlToHref: true,\n          // The string to be shown.\n          label: 'Introduction',\n          // Left or right side of the navbar.\n          position: 'left', // or 'right'\n          // To apply the active class styling on all\n          // routes starting with this path.\n          // This usually isn't necessary\n          activeBasePath: 'docs',\n          // Alternative to activeBasePath if required.\n          activeBaseRegex: 'docs/(next|v8)',\n          // Custom CSS class (for styling any item).\n          className: '',\n        },\n        // ... other items\n      ],\n      // highlight-end\n    },\n    // ...\n  },\n};\n")),(0,i.kt)("p",null,"React Router should automatically apply active link styling to links, but you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"activeBasePath")," in edge cases. For cases in which a link should be active on several different paths (such as when you have multiple doc folders under the same sidebar), you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"activeBaseRegex"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"activeBaseRegex")," is a more flexible alternative to ",(0,i.kt)("inlineCode",{parentName:"p"},"activeBasePath")," and takes precedence over it -- Docusaurus parses it into a regular expression that is tested against the current URL."),(0,i.kt)("p",null,"Outbound (external) links automatically get ",(0,i.kt)("inlineCode",{parentName:"p"},'target="_blank" rel="noopener noreferrer"')," attributes."),(0,i.kt)("h3",{id:"navbar-dropdown"},"Navbar dropdown"),(0,i.kt)("p",null,"Navbar items can also be dropdown items by specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"items"),", an inner array of navbar items."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{9-19} title="docusaurus.config.js"',"{9-19}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          label: 'Community',\n          position: 'left', // or 'right'\n          items: [\n            {\n              label: 'Facebook',\n              href: '...',\n            },\n            {\n              label: 'GitHub',\n              href: '...',\n            },\n            // ... more items\n          ],\n        },\n      ],\n    },\n    // ...\n  },\n};\n")),(0,i.kt)("h3",{id:"navbar-doc-link"},"Navbar doc link"),(0,i.kt)("p",null,"If you want to link to a specific doc, this special navbar item type will render the link to the doc of the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"docId"),". It will get the class ",(0,i.kt)("inlineCode",{parentName:"p"},"navbar__link--active")," as long as you browse a doc of the same sidebar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'doc',\n          docId: 'introduction',\n\n          //// Optional\n          position: 'left',\n          label: 'Docs',\n          activeSidebarClassName: 'navbar__link--active',\n          docsPluginId: 'default',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,i.kt)("h3",{id:"navbar-docs-version-dropdown"},"Navbar docs version dropdown"),(0,i.kt)("p",null,"If you use docs with versioning, this special navbar item type that will render a dropdown with all your site's available versions."),(0,i.kt)("p",null,"The user will be able to switch from one version to another, while staying on the same doc (as long as the doc id is constant across versions)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5-8} title="docusaurus.config.js"',"{5-8}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          type: 'docsVersionDropdown',\n\n          //// Optional\n          position: 'left',\n          // Add additional dropdown items at the beginning/end of the dropdown.\n          dropdownItemsBefore: [],\n          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],\n          // Do not add the link active class when browsing docs.\n          dropdownActiveClassDisabled: true,\n          docsPluginId: 'default',\n        },\n      ],\n    },\n  },\n};\n")),(0,i.kt)("h3",{id:"navbar-docs-version"},"Navbar docs version"),(0,i.kt)("p",null,"If you use docs with versioning, this special navbar item type will link to the active/browsed version of your doc (depends on the current url), and fallback to the latest version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersion',\n\n          //// Optional\n          position: 'left',\n          to: '/path', // by default, link to active/latest version\n          label: 'label', // by default, show active/latest version label\n          docsPluginId: 'default',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,i.kt)("h3",{id:"navbar-locale-dropdown"},"Navbar locale dropdown"),(0,i.kt)("p",null,"If you use the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.74/i18n/introduction"},"i18n feature"),", this special navbar item type will render a dropdown with all your site's available locales."),(0,i.kt)("p",null,"The user will be able to switch from one locale to another, while staying on the same page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5-8} title="docusaurus.config.js"',"{5-8}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          type: 'localeDropdown',\n\n          //// Optional\n          position: 'left',\n          // Add additional dropdown items at the beginning/end of the dropdown.\n          dropdownItemsBefore: [],\n          dropdownItemsAfter: [\n            {\n              to: 'https://my-site.com/help-us-translate',\n              label: 'Help us translate',\n            },\n          ],\n        },\n      ],\n    },\n  },\n};\n")),(0,i.kt)("h3",{id:"navbar-search"},"Navbar search"),(0,i.kt)("p",null,"If you use the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.74/search"},"search"),", the search bar will be the rightmost element in the navbar."),(0,i.kt)("p",null,"However, with this special navbar item type, you can change the default location."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5-8} title="docusaurus.config.js"',"{5-8}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          type: 'search',\n          position: 'right',\n        },\n      ],\n    },\n  },\n};\n")),(0,i.kt)("h3",{id:"auto-hide-sticky-navbar"},"Auto-hide sticky navbar"),(0,i.kt)("p",null,"You can enable this cool UI feature that automatically hides the navbar when a user starts scrolling down the page, and show it again when the user scrolls up."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5} title="docusaurus.config.js"',"{5}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    navbar: {\n      hideOnScroll: true,\n    },\n    // ...\n  },\n};\n")),(0,i.kt)("h3",{id:"navbar-style"},"Navbar style"),(0,i.kt)("p",null,"You can set the static Navbar style without disabling the theme switching ability. The selected style will always apply no matter which theme user have selected."),(0,i.kt)("p",null,"Currently, there are two possible style options: ",(0,i.kt)("inlineCode",{parentName:"p"},"dark")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"primary")," (based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ifm-color-primary")," color). You can see the styles preview in the ",(0,i.kt)("a",{parentName:"p",href:"https://infima.dev/docs/components/navbar/"},"Infima documentation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5} title="docusaurus.config.js"',"{5}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    navbar: {\n      style: 'primary',\n    },\n    // ...\n  },\n};\n")),(0,i.kt)("h2",{id:"codeblock"},"CodeBlock"),(0,i.kt)("p",null,"Docusaurus uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer"},"Prism React Renderer")," to highlight code blocks."),(0,i.kt)("h3",{id:"theme"},"Theme"),(0,i.kt)("p",null,"By default, we use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/palenight.js"},"Palenight")," as syntax highlighting theme. You can specify a custom theme from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes"},"list of available themes"),". If you want to use a different syntax highlighting theme when the site is in dark mode, you may also do so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5-6} title="docusaurus.config.js"',"{5-6}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    prism: {\n      theme: require('prism-react-renderer/themes/github'),\n      darkTheme: require('prism-react-renderer/themes/dracula'),\n    },\n    // ...\n  },\n};\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you use the line highlighting Markdown syntax, you might need to specify a different highlight background color for the dark mode syntax highlighting theme. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.74/markdown-features/code-blocks#line-highlighting"},"docs for guidance"),"."))),(0,i.kt)("h3",{id:"default-language"},"Default language"),(0,i.kt)("p",null,"You can set a default language for code blocks if no language is added after the opening triple backticks (i.e. ```). Note that a valid ",(0,i.kt)("a",{parentName:"p",href:"https://prismjs.com/#supported-languages"},"language name")," must be passed, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5} title="docusaurus.config.js"',"{5}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    prism: {\n      defaultLanguage: 'javascript',\n    },\n    // ...\n  },\n};\n")),(0,i.kt)("h2",{id:"footer-1"},"Footer"),(0,i.kt)("p",null,"You can add logo and a copyright to the footer via ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig.footer"),". Logo can be placed in ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.0.0-alpha.74/static-assets"},"static folder"),". Logo URL works in the same way of the navbar logo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5-15} title="docusaurus.config.js"',"{5-15}":!0,title:'"docusaurus.config.js"'},"  // ...\n  footer: {\n    logo: {\n      alt: 'Facebook Open Source Logo',\n      src: 'img/oss_logo.png',\n      href: 'https://opensource.facebook.com',\n    },\n    copyright: `Copyright \xa9 ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,\n  }\n")),(0,i.kt)("h2",{id:"footer-links"},"Footer Links"),(0,i.kt)("p",null,"You can add links to the footer via ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig.footer.links"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5-15} title="docusaurus.config.js"',"{5-15}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  footer: {\n    links: [\n      {\n        // Label of the section of these links\n        title: 'Docs',\n        items: [\n          {\n            // Label of the link\n            label: 'Style Guide',\n            // Client-side routing, used for navigating within the website.\n            // The baseUrl will be automatically prepended to this value.\n            to: 'docs/',\n          },\n          {\n            label: 'Second Doc',\n            to: 'docs/doc2/',\n          },\n        ],\n      },\n      {\n        title: 'Community',\n        items: [\n          {\n            label: 'Stack Overflow',\n            // A full-page navigation, used for navigating outside of the website.\n            href: 'https://stackoverflow.com/questions/tagged/docusaurus',\n          },\n          {\n            label: 'Discord',\n            href: 'https://discordapp.com/invite/docusaurus',\n          },\n          {\n            label: 'Twitter',\n            href: 'https://twitter.com/docusaurus',\n          },\n          {\n            //Renders the html pass-through instead of a simple link\n            html: `\n                <a href=\"https://www.netlify.com\" target=\"_blank\" rel=\"noreferrer noopener\" aria-label=\"Deploys by Netlify\">\n                  <img src=\"https://www.netlify.com/img/global/badges/netlify-color-accent.svg\" alt=\"Deploys by Netlify\" />\n                </a>\n              `,\n          },\n        ],\n      },\n    ],\n  },\n};\n")))}u.isMDXComponent=!0}}]);