(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[689],{6482:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var a=s(67294),n=s(6767),r=s.n(n),l=s(4226),i="color_v9Dy",o="input_2PU5",c={"--ifm-color-primary":{adjustment:0,adjustmentInput:0,displayOrder:3,codeOrder:0},"--ifm-color-primary-dark":{adjustment:.1,adjustmentInput:"10",displayOrder:4,codeOrder:1},"--ifm-color-primary-darker":{adjustment:.15,adjustmentInput:"15",displayOrder:5,codeOrder:2},"--ifm-color-primary-darkest":{adjustment:.3,adjustmentInput:"30",displayOrder:6,codeOrder:3},"--ifm-color-primary-light":{adjustment:-.1,adjustmentInput:"-10",displayOrder:2,codeOrder:4},"--ifm-color-primary-lighter":{adjustment:-.15,adjustmentInput:"-15",displayOrder:1,codeOrder:5},"--ifm-color-primary-lightest":{adjustment:-.3,adjustmentInput:"-30",displayOrder:0,codeOrder:6}};var u=function(e){e.children,e.minHeight,e.url;var t=(0,a.useState)("3578e5"),s=t[0],n=t[1],u=(0,a.useState)(c),m=u[0],d=u[1],p=r()("#"+s),g=Object.keys(m).map((function(e){return Object.assign({},m[e],{variableName:e})})).map((function(e){return Object.assign({},e,{hex:p.darken(e.adjustment).hex()})}));return a.createElement("div",null,a.createElement("p",null,a.createElement("label",{htmlFor:"primary_color"},a.createElement("strong",{className:"margin-right--sm"},"Primary Color:"))," ",a.createElement("input",{id:"primary_color",className:o,defaultValue:s,onChange:function(e){var t=e.target.value;try{r()("#"+t),n(t)}catch(s){}}})),a.createElement("div",null,a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"CSS Variable Name"),a.createElement("th",null,"Hex"),a.createElement("th",null,"Adjustment"))),a.createElement("tbody",null,g.sort((function(e,t){return e.displayOrder-t.displayOrder})).map((function(e){var t=e.variableName,s=e.adjustment,n=e.adjustmentInput,r=e.hex;return a.createElement("tr",{key:t},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,a.createElement("span",{className:i,style:{backgroundColor:r}}),a.createElement("code",{className:"margin-left--sm"},r.toLowerCase())),a.createElement("td",null,"--ifm-color-primary"===t?0:a.createElement("input",{"aria-label":t+" CSS variable name",className:o,type:"number",value:n,onChange:function(e){var a,n=parseFloat(e.target.value);d(Object.assign({},m,((a={})[t]=Object.assign({},m[t],{adjustmentInput:e.target.value,adjustment:isNaN(n)?s:n/100}),a)))}})))}))))),a.createElement("p",null,"Replace the variables in ",a.createElement("code",null,"src/css/custom.css")," with these new variables."),a.createElement(l.Z,{className:"css"},g.sort((function(e,t){return e.codeOrder-t.codeOrder})).map((function(e){return e.variableName+": "+e.hex.toLowerCase()+";"})).join("\n")))}},52227:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var a={};s.r(a),s.d(a,{ButtonExample:function(){return l}});var n=s(67294),r=s(22122),l=function(e){return n.createElement("button",(0,r.Z)({},e,{style:Object.assign({backgroundColor:"white",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))},i=Object.assign({React:n},n,a)},79570:function(e,t,s){"use strict";s.r(t),s.d(t,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return g},default:function(){return y}});var a=s(22122),n=s(19756),r=(s(67294),s(3905)),l=s(12168),i=s(98448),o=s(6482),c=s(27872),u=s(4226),m=["components"],d={id:"styling-layout",title:"Styling and Layout",description:"A Docusaurus site is a pre-rendered single-page React application. You can style it the way you style React apps."},p={unversionedId:"styling-layout",id:"version-2.0.0-beta.0/styling-layout",isDocsHomePage:!1,title:"Styling and Layout",description:"A Docusaurus site is a pre-rendered single-page React application. You can style it the way you style React apps.",source:"@site/versioned_docs/version-2.0.0-beta.0/styling-layout.md",sourceDirName:".",slug:"/styling-layout",permalink:"/fr/docs/styling-layout",editUrl:"https://crowdin.com/project/docusaurus-v2/fr",version:"2.0.0-beta.0",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1620828435,formattedLastUpdatedAt:"12/05/2021",frontMatter:{id:"styling-layout",title:"Styling and Layout",description:"A Docusaurus site is a pre-rendered single-page React application. You can style it the way you style React apps."},sidebar:"version-2.0.0-beta.0/docs",previous:{title:"Plugins",permalink:"/fr/docs/markdown-features/plugins"},next:{title:"Static Assets",permalink:"/fr/docs/static-assets"}},g=[{value:"Traditional CSS",id:"traditional-css",children:[]},{value:"Styling your site with Infima",id:"styling-your-site-with-infima",children:[{value:"Dark Mode",id:"dark-mode",children:[]}]},{value:"Styling approaches",id:"styling-approaches",children:[{value:"Global styles",id:"global-styles",children:[]},{value:"CSS modules",id:"css-modules",children:[]},{value:"CSS-in-JS",id:"css-in-js",children:[]},{value:"Sass/SCSS",id:"sassscss",children:[]}]}],h={toc:g};function y(e){var t=e.components,s=(0,n.Z)(e,m);return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"traditional-css"},"Traditional CSS"),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you can create your own CSS files (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/css/custom.css"),") and import them globally by passing it as an option into the preset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        theme: {\n          customCss: [require.resolve('./src/css/custom.css')],\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("p",null,"Any CSS you write within that file will be available globally and can be referenced directly using string literals. This is the most traditional approach to writing CSS and is fine for small websites that do not have much customization."),(0,r.kt)("h2",{id:"styling-your-site-with-infima"},"Styling your site with Infima"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," uses ",(0,r.kt)("a",{parentName:"p",href:"https://infima.dev/"},"Infima")," as the underlying styling framework. Infima provides flexible layout and common UI components styling suitable for content-centric websites (blogs, documentation, landing pages). For more details, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://infima.dev/"},"Infima website"),"."),(0,r.kt)("p",null,"When you ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," your Docusaurus 2 project, the website will be generated with basic Infima stylesheets and default styling. You may customize the styling by editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/css/custom.css")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="/src/css/custom.css"',title:'"/src/css/custom.css"'},"/**\n * You can override the default Infima variables here.\n * Note: this is not a complete list of --ifm- variables.\n */\n:root {\n  --ifm-color-primary: #25c2a0;\n  --ifm-color-primary-dark: rgb(33, 175, 144);\n  --ifm-color-primary-darker: rgb(31, 165, 136);\n  --ifm-color-primary-darkest: rgb(26, 136, 112);\n  --ifm-color-primary-light: rgb(70, 203, 174);\n  --ifm-color-primary-lighter: rgb(102, 212, 189);\n  --ifm-color-primary-lightest: rgb(146, 224, 208);\n  --ifm-code-font-size: 95%;\n}\n")),(0,r.kt)("p",null,"Infima uses 7 shades of each color. We recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://www.colorbox.io/"},"ColorBox")," to find the different shades of colors for your chosen primary color."),(0,r.kt)("p",null,"Alternatively, use the following tool to generate the different shades for your website and copy the variables into ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/css/custom.css"),"."),(0,r.kt)(o.Z,{mdxType:"ColorGenerator"}),(0,r.kt)("h3",{id:"dark-mode"},"Dark Mode"),(0,r.kt)("p",null,"To customize the Infima variables for dark mode you can add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/css/custom.css"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="/src/css/custom.css"',title:'"/src/css/custom.css"'},"html[data-theme='dark'] {\n  --ifm-color-primary: #4e89e8;\n  --ifm-color-primary-dark: #5a91ea;\n  /* any other colors you wish to overwrite */\n}\n")),(0,r.kt)("h2",{id:"styling-approaches"},"Styling approaches"),(0,r.kt)("p",null,"A Docusaurus site is a single-page React application. You can style it the way you style React apps."),(0,r.kt)("p",null,"There are a few approaches/frameworks which will work, depending on your preferences and the type of website you are trying to build. Websites that are highly interactive and behave more like web apps will benefit from a more modern styling approaches that co-locate styles with the components. Component styling can also be particularly useful when you wish to customize or swizzle a component."),(0,r.kt)("h3",{id:"global-styles"},"Global styles"),(0,r.kt)("p",null,"This is the most traditional way of styling that most developers (including non-front end developers) would be familiar with."),(0,r.kt)("p",null,"Assuming you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/css/custom.css")," was passed in to the preset config, styles inside that file would be available globally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="/src/css/custom.css"',title:'"/src/css/custom.css"'},".purple-text {\n  color: rebeccapurple;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function MyComponent() {\n  return (\n    <main>\n      <h1 className="purple-text">Purple Heading!</h1>\n    </main>\n  );\n}\n')),(0,r.kt)("h4",{id:"theme-class-names"},"Theme Class Names"),(0,r.kt)("p",null,"We provide some predefined CSS class names to provide access for developers to style layout of a page globally in Docusaurus. The purpose is to have stable classnames shared by all themes that are meant to be targeted by custom CSS."),(0,r.kt)(u.Z,{className:"language-ts",mdxType:"CodeBlock"},c.Z.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,"").trim()),(0,r.kt)("h3",{id:"css-modules"},"CSS modules"),(0,r.kt)("p",null,"To style your components using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules"),", name your stylesheet files with the ",(0,r.kt)("inlineCode",{parentName:"p"},".module.css")," suffix (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"welcome.module.css"),"). webpack will load such CSS files as CSS modules and you have to reference the class names from the imported CSS module (as opposed to using plain strings). This is similar to the convention used in ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet"},"Create React App"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles.module.css"',title:'"styles.module.css"'},".main {\n  padding: 12px;\n}\n\n.heading {\n  font-weight: bold;\n}\n\n.contents {\n  color: #ccc;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import styles from './styles.module.css';\n\nfunction MyComponent() {\n  return (\n    <main className={styles.main}>\n      <h1 className={styles.heading}>Hello!</h1>\n      <article className={styles.contents}>Lorem Ipsum</article>\n    </main>\n  );\n}\n")),(0,r.kt)("p",null,"The class names which will be processed by webpack into a globally unique class name during build."),(0,r.kt)("h3",{id:"css-in-js"},"CSS-in-JS"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This section is a work in progress. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/1640"},"Welcoming PRs"),"."))),(0,r.kt)("h3",{id:"sassscss"},"Sass/SCSS"),(0,r.kt)("p",null,"To use Sass/SCSS as your CSS preprocessor, install the unofficial Docusaurus 2 plugin ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rlamana/docusaurus-plugin-sass"},(0,r.kt)("inlineCode",{parentName:"a"},"docusaurus-plugin-sass")),". This plugin works for both global styles and the CSS modules approach:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rlamana/docusaurus-plugin-sass"},(0,r.kt)("inlineCode",{parentName:"a"},"docusaurus-plugin-sass")),":")),(0,r.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save docusaurus-plugin-sass\n"))),(0,r.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add docusaurus-plugin-sass\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Include the plugin in your ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3} title="docusaurus.config.js"',"{3}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: ['docusaurus-plugin-sass'],\n  // ...\n};\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Write and import your stylesheets in Sass/SCSS as normal.")),(0,r.kt)("h4",{id:"global-styles-using-sassscss"},"Global styles using Sass/SCSS"),(0,r.kt)("p",null,"You can now set the ",(0,r.kt)("inlineCode",{parentName:"p"},"customCss")," property of ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," to point to your Sass/SCSS file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{8} title="docusaurus.config.js"',"{8}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // ...\n        theme: {\n          customCss: [require.resolve('./src/css/custom.scss')],\n        },\n        // ...\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("h4",{id:"modules-using-sassscss"},"Modules using Sass/SCSS"),(0,r.kt)("p",null,"Name your stylesheet files with the ",(0,r.kt)("inlineCode",{parentName:"p"},".module.scss")," suffix (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"welcome.module.scss"),") instead of ",(0,r.kt)("inlineCode",{parentName:"p"},".css"),". Webpack will use ",(0,r.kt)("inlineCode",{parentName:"p"},"sass-loader")," to preprocess your stylesheets and load them as CSS modules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="styles.module.scss"',title:'"styles.module.scss"'},".main {\n  padding: 12px;\n\n  article {\n    color: #ccc;\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import styles from './styles.module.scss';\n\nfunction MyComponent() {\n  return (\n    <main className={styles.main}>\n      <article>Lorem Ipsum</article>\n    </main>\n  );\n}\n")))}y.isMDXComponent=!0},27872:function(e,t){"use strict";t.Z="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// These class names are used to style page layouts in Docusaurus\nexport const ThemeClassNames = {\n  page: {\n    blogListPage: 'blog-list-page',\n    blogPostPage: 'blog-post-page',\n    blogTagsListPage: 'blog-tags-list-page',\n    blogTagsPostPage: 'blog-tags-post-page',\n    docPage: 'doc-page',\n    mdxPage: 'mdx-page',\n  },\n  wrapper: {\n    main: 'main-wrapper',\n    blogPages: 'blog-wrapper',\n    docPages: 'docs-wrapper',\n    mdxPages: 'mdx-wrapper',\n  },\n};\n"}}]);