(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[2504],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67066:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o=["components"],l={id:"docusaurus-core",title:"Docusaurus Client API",sidebar_label:"Client API"},s={unversionedId:"docusaurus-core",id:"version-2.0.0-alpha.73/docusaurus-core",isDocsHomePage:!1,title:"Docusaurus Client API",description:"Docusaurus provides some APIs on the clients that can be helpful to you when building your site.",source:"@site/versioned_docs/version-2.0.0-alpha.73/docusaurus-core.md",sourceDirName:".",slug:"/docusaurus-core",permalink:"/docusaurus/docs/2.0.0-alpha.73/docusaurus-core",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docusaurus-core.md",version:"2.0.0-alpha.73",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1618570090,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"Client API",frontMatter:{id:"docusaurus-core",title:"Docusaurus Client API",sidebar_label:"Client API"},sidebar:"version-2.0.0-alpha.73/api",previous:{title:"CLI",permalink:"/docusaurus/docs/2.0.0-alpha.73/cli"},next:{title:"docusaurus.config.js",permalink:"/docusaurus/docs/2.0.0-alpha.73/docusaurus.config.js"}},p=[{value:"Components",id:"components",children:[{value:"<code>&lt;Head/&gt;</code>",id:"head",children:[]},{value:"<code>&lt;Link/&gt;</code>",id:"link",children:[]},{value:"<code>&lt;Redirect/&gt;</code>",id:"redirect",children:[]},{value:"<code>&lt;BrowserOnly/&gt;</code>",id:"browseronly",children:[]},{value:"<code>&lt;Interpolate/&gt;</code>",id:"interpolate",children:[]},{value:"<code>&lt;Translate/&gt;</code>",id:"translate",children:[]}]},{value:"Hooks",id:"hooks",children:[{value:"<code>useDocusaurusContext</code>",id:"usedocusauruscontext",children:[]},{value:"<code>useBaseUrl</code>",id:"usebaseurl",children:[]},{value:"<code>useBaseUrlUtils</code>",id:"usebaseurlutils",children:[]},{value:"<code>useGlobalData</code>",id:"useglobaldata",children:[]},{value:"<code>usePluginData</code>",id:"useplugindata",children:[]},{value:"<code>useAllPluginInstancesData</code>",id:"useallplugininstancesdata",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<code>interpolate</code>",id:"interpolate-1",children:[]},{value:"<code>translate</code>",id:"translate-1",children:[]}]},{value:"Modules",id:"modules",children:[{value:"<code>ExecutionEnvironment</code>",id:"executionenvironment",children:[]},{value:"<code>constants</code>",id:"constants",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Docusaurus provides some APIs on the clients that can be helpful to you when building your site."),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("h3",{id:"head"},(0,r.kt)("inlineCode",{parentName:"h3"},"<Head/>")),(0,r.kt)("p",null,"This reusable React component will manage all of your changes to the document head. It takes plain HTML tags and outputs plain HTML tags and is beginner-friendly. It is a wrapper around ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nfl/react-helmet"},"React Helmet"),"."),(0,r.kt)("p",null,"Usage Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,5,10}","{2,5,10}":!0},'import React from \'react\';\nimport Head from \'@docusaurus/Head\';\n\nconst MySEO = () => (\n  <Head>\n    <meta property="og:description" content="My custom description" />\n    <meta charSet="utf-8" />\n    <title>My Title</title>\n    <link rel="canonical" href="http://mysite.com/example" />\n  </Head>\n);\n')),(0,r.kt)("p",null,"Nested or latter components will override duplicate usages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,5,8,11}","{2,5,8,11}":!0},'<Parent>\n  <Head>\n    <title>My Title</title>\n    <meta name="description" content="Helmet application" />\n  </Head>\n  <Child>\n    <Head>\n      <title>Nested Title</title>\n      <meta name="description" content="Nested component" />\n    </Head>\n  </Child>\n</Parent>\n')),(0,r.kt)("p",null,"Outputs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <title>Nested Title</title>\n  <meta name="description" content="Nested component" />\n</head>\n')),(0,r.kt)("h3",{id:"link"},(0,r.kt)("inlineCode",{parentName:"h3"},"<Link/>")),(0,r.kt)("p",null,"This component enables linking to internal pages as well as a powerful performance feature called preloading. Preloading is used to prefetch resources so that the resources are fetched by the time the user navigates with this component. We use an ",(0,r.kt)("inlineCode",{parentName:"p"},"IntersectionObserver")," to fetch a low-priority request when the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Link>")," is in the viewport and then use an ",(0,r.kt)("inlineCode",{parentName:"p"},"onMouseOver")," event to trigger a high-priority request when it is likely that a user will navigate to the requested resource."),(0,r.kt)("p",null,"The component is a wrapper around react-router\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"<Link>")," component that adds useful enhancements specific to Docusaurus. All props are passed through to react-router\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"<Link>")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,7}","{2,7}":!0},"import React from 'react';\nimport Link from '@docusaurus/Link';\n\nconst Page = () => (\n  <div>\n    <p>\n      Check out my <Link to=\"/blog\">blog</Link>!\n    </p>\n    <p>\n      {/* Note that external links still use `a` tags, but automatically opens in new tab. */}\n      Follow me on <a href=\"https://twitter.com/docusaurus\">Twitter</a>!\n    </p>\n  </div>\n);\n")),(0,r.kt)("h4",{id:"to-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"to"),": string"),(0,r.kt)("p",null,"The target location to navigate to. Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/introduction"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Link to="/courses" />\n')),(0,r.kt)("h3",{id:"redirect"},(0,r.kt)("inlineCode",{parentName:"h3"},"<Redirect/>")),(0,r.kt)("p",null,"Rendering a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Redirect>")," will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do. You can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://reacttraining.com/react-router/web/api/Redirect"},"React Router's Redirect documentation")," for more info on available props."),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,5}","{2,5}":!0},"import React from 'react';\nimport {Redirect} from '@docusaurus/router';\n\nconst Home = () => {\n  return <Redirect to=\"/docs/test\" />;\n};\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/router")," implements ",(0,r.kt)("a",{parentName:"p",href:"https://reacttraining.com/react-router/web/guides/quick-start"},"React Router")," and supports its features."))),(0,r.kt)("h3",{id:"browseronly"},(0,r.kt)("inlineCode",{parentName:"h3"},"<BrowserOnly/>")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<BrowserOnly>")," component accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," prop, a render function which will not be executed during the pre-rendering phase of the build process. This is useful for hiding code that is only meant to run in the browsers (e.g. where the ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"document")," objects are being accessed). To improve SEO, you can also provide fallback content using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback")," prop, which will be prerendered until in the build process and replaced with the client-side only contents when viewed in the browser."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,5-10}","{1,5-10}":!0},"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nconst MyComponent = () => {\n  return (\n    <BrowserOnly\n      fallback={<div>The fallback content to display on prerendering</div>}>\n      {() => {\n        // Something that should be excluded during build process prerendering.\n      }}\n    </BrowserOnly>\n  );\n};\n")),(0,r.kt)("h3",{id:"interpolate"},(0,r.kt)("inlineCode",{parentName:"h3"},"<Interpolate/>")),(0,r.kt)("p",null,"A simple interpolation component for text containing dynamic placeholders."),(0,r.kt)("p",null,"The placeholders will be replaced with the provided dynamic values and JSX elements of your choice (strings, links, styled elements...)."),(0,r.kt)("h4",{id:"props"},"Props"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"children"),": text containing interpolation placeholders like ",(0,r.kt)("inlineCode",{parentName:"li"},"{placeholderName}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"values"),": object containing interpolation placeholder values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Link from '@docusaurus/Link';\nimport Interpolate from '@docusaurus/Interpolate';\n\nexport default function VisitMyWebsiteMessage() {\n  return (\n    // highlight-start\n    <Interpolate\n      values={{\n        firstName: 'S\xe9bastien',\n        website: (\n          <Link to=\"https://docusaurus.io\" className=\"my-website-class\">\n            website\n          </Link>\n        ),\n      }}>\n      {'Hello, {firstName}! How are you? Take a look at my {website}'}\n    </Interpolate>\n    // highlight-end\n  );\n}\n")),(0,r.kt)("h3",{id:"translate"},(0,r.kt)("inlineCode",{parentName:"h3"},"<Translate/>")),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.73/i18n/introduction"},"localizing your site"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Translate/>")," component will allow providing ",(0,r.kt)("strong",{parentName:"p"},"translation support to React components"),", such as your homepage. The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Translate>")," component supports ",(0,r.kt)("a",{parentName:"p",href:"#interpolate"},"interpolation"),"."),(0,r.kt)("p",null,"The translation strings will be extracted from your code with the ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.73/cli#docusaurus-write-translations"},(0,r.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))," CLI and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"code.json")," translation file in ",(0,r.kt)("inlineCode",{parentName:"p"},"website/i18n/<locale>"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Translate/>")," props ",(0,r.kt)("strong",{parentName:"p"},"must be hardcoded strings"),"."),(0,r.kt)("p",{parentName:"div"},"Apart the ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," prop used for interpolation, it is ",(0,r.kt)("strong",{parentName:"p"},"not possible to use variables"),", or the static extraction wouldn't work."))),(0,r.kt)("h4",{id:"props-1"},"Props"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"children"),": untranslated string in the default site locale (can contain ",(0,r.kt)("a",{parentName:"li",href:"#interpolate"},"interpolation placeholders"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": optional value to use as key in JSON translation files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description"),": optional text to help the translator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"values"),": optional object containing interpolation placeholder values")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/index.js"',title:'"src/pages/index.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\n// highlight-start\nimport Translate from '@docusaurus/Translate';\n// highlight-end\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1>\n        {/* highlight-start */}\n        <Translate\n          id=\"homepage.title\"\n          description=\"The homepage welcome message\">\n          Welcome to my website\n        </Translate>\n        {/* highlight-end */}\n      </h1>\n      <main>\n        {/* highlight-start */}\n        <Translate values={{firstName: 'S\xe9bastien'}}>\n          {'Welcome, {firstName}! How are you?'}\n        </Translate>\n        {/* highlight-end */}\n      </main>\n    </Layout>\n  );\n}\n")),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("h3",{id:"usedocusauruscontext"},(0,r.kt)("inlineCode",{parentName:"h3"},"useDocusaurusContext")),(0,r.kt)("p",null,"React hook to access Docusaurus Context. Context contains ",(0,r.kt)("inlineCode",{parentName:"p"},"siteConfig")," object from ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.73/docusaurus.config.js"},"docusaurus.config.js"),", and some additional site metadata."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type DocusaurusPluginVersionInformation =\n  | {readonly type: 'package'; readonly version?: string}\n  | {readonly type: 'project'}\n  | {readonly type: 'local'}\n  | {readonly type: 'synthetic'};\n\ninterface DocusaurusSiteMetadata {\n  readonly docusaurusVersion: string;\n  readonly siteVersion?: string;\n  readonly pluginVersions: Record<string, DocusaurusPluginVersionInformation>;\n}\n\ninterface DocusaurusContext {\n  siteConfig: DocusaurusConfig;\n  siteMetadata: DocusaurusSiteMetadata;\n}\n")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5,8-10}","{5,8-10}":!0},"import React from 'react';\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst MyComponent = () => {\n  const {siteConfig, siteMetadata} = useDocusaurusContext();\n  return (\n    <div>\n      <h1>{siteConfig.title}</h1>\n      <div>{siteMetadata.siteVersion}</div>\n      <div>{siteMetadata.docusaurusVersion}</div>\n    </div>\n  );\n};\n")),(0,r.kt)("h3",{id:"usebaseurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"useBaseUrl")),(0,r.kt)("p",null,"React hook to prepend your site ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl")," to a string."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Don't use it for regular links!")),(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/baseUrl/")," prefix is automatically added to all ",(0,r.kt)("strong",{parentName:"p"},"absolute paths")," by default:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Markdown: ",(0,r.kt)("inlineCode",{parentName:"li"},"[link](/my/path)")," will link to ",(0,r.kt)("inlineCode",{parentName:"li"},"/baseUrl/my/path")),(0,r.kt)("li",{parentName:"ul"},"React: ",(0,r.kt)("inlineCode",{parentName:"li"},'<Link to="/my/path/">link</Link>')," will link to ",(0,r.kt)("inlineCode",{parentName:"li"},"/baseUrl/my/path"))))),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type BaseUrlOptions = {\n  forcePrependBaseUrl: boolean;\n  absolute: boolean;\n};\n")),(0,r.kt)("h4",{id:"example-usage"},"Example usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n\nconst SomeImage = () => {\n  // highlight-start\n  const imgSrc = useBaseUrl('/img/myImage.png');\n  // highlight-end\n  return <img src={imgSrc} />;\n};\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In most cases, you don't need ",(0,r.kt)("inlineCode",{parentName:"p"},"useBaseUrl"),"."),(0,r.kt)("p",{parentName:"div"},"Prefer a ",(0,r.kt)("inlineCode",{parentName:"p"},"require()")," call for ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/2.0.0-alpha.73/markdown-features/assets"},"assets"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<img src={require('@site/static/img/myImage.png').default} />\n")))),(0,r.kt)("h3",{id:"usebaseurlutils"},(0,r.kt)("inlineCode",{parentName:"h3"},"useBaseUrlUtils")),(0,r.kt)("p",null,"Sometimes ",(0,r.kt)("inlineCode",{parentName:"p"},"useBaseUrl")," is not good enough. This hook return additional utils related to your site's base url."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withBaseUrl"),": useful if you need to add base urls to multiple urls at once.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport {useBaseUrlUtils} from '@docusaurus/useBaseUrl';\n\nconst Component = () => {\n  const urls = ['/a', '/b'];\n  // highlight-start\n  const {withBaseUrl} = useBaseUrlUtils();\n  const urlsWithBaseUrl = urls.map(withBaseUrl);\n  // highlight-end\n  return <div>{/* ... */}</div>;\n};\n")),(0,r.kt)("h3",{id:"useglobaldata"},(0,r.kt)("inlineCode",{parentName:"h3"},"useGlobalData")),(0,r.kt)("p",null,"React hook to access Docusaurus global data created by all the plugins."),(0,r.kt)("p",null,"Global data is namespaced by plugin name, and plugin id."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Plugin id is only useful when a plugin is used multiple times on the same site. Each plugin instance is able to create its own global data."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type GlobalData = Record<\n  PluginName,\n  Record<\n    PluginId, // "default" by default\n    any // plugin-specific data\n  >\n>;\n')),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,5-7}","{2,5-7}":!0},"import React from 'react';\nimport useGlobalData from '@docusaurus/useGlobalData';\n\nconst MyComponent = () => {\n  const globalData = useGlobalData();\n  const myPluginData = globalData['my-plugin']['default'];\n  return <div>{myPluginData.someAttribute}</div>;\n};\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Inspect your site's global data at ",(0,r.kt)("inlineCode",{parentName:"p"},"./docusaurus/globalData.json")))),(0,r.kt)("h3",{id:"useplugindata"},(0,r.kt)("inlineCode",{parentName:"h3"},"usePluginData")),(0,r.kt)("p",null,"Access global data created by a specific plugin instance."),(0,r.kt)("p",null,"This is the most convenient hook to access plugin global data, and should be used most of the time."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pluginId")," is optional if you don't use multi-instance plugins."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"usePluginData(pluginName: string, pluginId?: string)\n")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,5-6}","{2,5-6}":!0},"import React from 'react';\nimport {usePluginData} from '@docusaurus/useGlobalData';\n\nconst MyComponent = () => {\n  const myPluginData = usePluginData('my-plugin');\n  return <div>{myPluginData.someAttribute}</div>;\n};\n")),(0,r.kt)("h3",{id:"useallplugininstancesdata"},(0,r.kt)("inlineCode",{parentName:"h3"},"useAllPluginInstancesData")),(0,r.kt)("p",null,"Access global data created by a specific plugin. Given a plugin name, it returns the data of all the plugins instances of that name, by plugin id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"useAllPluginInstancesData(pluginName: string)\n")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,5-7}","{2,5-7}":!0},"import React from 'react';\nimport {useAllPluginInstancesData} from '@docusaurus/useGlobalData';\n\nconst MyComponent = () => {\n  const allPluginInstancesData = useAllPluginInstancesData('my-plugin');\n  const myPluginData = allPluginInstancesData['default'];\n  return <div>{myPluginData.someAttribute}</div>;\n};\n")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"interpolate-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"interpolate")),(0,r.kt)("p",null,"The imperative counterpart of the ",(0,r.kt)("a",{parentName:"p",href:"#interpolate"},(0,r.kt)("inlineCode",{parentName:"a"},"<Interpolate>"))," component."),(0,r.kt)("h4",{id:"signature"},"Signature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Simple string interpolation\nfunction interpolate(text: string, values: Record<string, string>): string;\n\n// JSX interpolation\nfunction interpolate(\n  text: string,\n  values: Record<string, ReactNode>,\n): ReactNode;\n")),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// highlight-start\nimport {interpolate} from '@docusaurus/Interpolate';\n// highlight-end\n\nconst message = interpolate('Welcome {firstName}', {firstName: 'S\xe9bastien'});\n")),(0,r.kt)("h3",{id:"translate-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"translate")),(0,r.kt)("p",null,"The imperative counterpart of the ",(0,r.kt)("a",{parentName:"p",href:"#translate"},(0,r.kt)("inlineCode",{parentName:"a"},"<Translate>"))," component. Also supporting ",(0,r.kt)("a",{parentName:"p",href:"#interpolate"},"placeholders interpolation"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use the imperative API for the ",(0,r.kt)("strong",{parentName:"p"},"rare cases")," where a ",(0,r.kt)("strong",{parentName:"p"},"component cannot be used"),", such as:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"the page ",(0,r.kt)("inlineCode",{parentName:"li"},"title")," metadata"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"placeholder")," props of form inputs"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-label")," props for accessibility")))),(0,r.kt)("h4",{id:"signature-1"},"Signature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function translate(\n  translation: {message: string; id?: string; description?: string},\n  values: Record<string, string>,\n): string;\n")),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/index.js"',title:'"src/pages/index.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\n// highlight-start\nimport {translate} from '@docusaurus/Translate';\n// highlight-end\n\nexport default function Home() {\n  return (\n    <Layout\n      // highlight-start\n      title={translate({message: 'My page meta title'})}\n      // highlight-end\n    >\n      <img\n        src={'https://docusaurus.io/logo.png'}\n        aria-label={\n          // highlight-start\n          translate(\n            {\n              message: 'The logo of site {siteName}',\n              // Optional\n              id: 'homepage.logo.ariaLabel',\n              description: 'The home page logo aria label',\n            },\n            {siteName: 'Docusaurus'},\n          )\n          // highlight-end\n        }\n      />\n    </Layout>\n  );\n}\n")),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("h3",{id:"executionenvironment"},(0,r.kt)("inlineCode",{parentName:"h3"},"ExecutionEnvironment")),(0,r.kt)("p",null,"A module which exposes a few boolean variables to check the current rendering environment. Useful if you want to only run certain code on client/server or need to write server-side rendering compatible code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,5}","{2,5}":!0},"import React from 'react';\nimport ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';\n\nconst MyPage = () => {\n  const location = ExecutionEnvironment.canUseDOM ? window.location.href : null;\n  return <div>{location}</div>;\n};\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ExecutionEnvironment.canUseDOM")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if on client, ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," if prerendering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ExecutionEnvironment.canUseEventListeners")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if on client and has ",(0,r.kt)("inlineCode",{parentName:"td"},"window.addEventListener"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ExecutionEnvironment.canUseIntersectionObserver")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if on client and has ",(0,r.kt)("inlineCode",{parentName:"td"},"IntersectionObserver"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ExecutionEnvironment.canUseViewport")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if on client and has ",(0,r.kt)("inlineCode",{parentName:"td"},"window.screen"),".")))),(0,r.kt)("h3",{id:"constants"},(0,r.kt)("inlineCode",{parentName:"h3"},"constants")),(0,r.kt)("p",null,"A module exposing useful constants to client-side theme code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import {DEFAULT_PLUGIN_ID} from '@docusaurus/constants';\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Named export"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT_PLUGIN_ID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default"))))))}d.isMDXComponent=!0}}]);