(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[3485],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98448:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},12168:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(67294),r=n(90050),i=n(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=(0,r.Z)(),g=h.tabGroupChoices,k=h.setTabGroupChoices,f=(0,a.useState)(c),b=f[0],v=f[1],y=a.Children.toArray(e.children),N=[];if(null!=d){var w=g[d];null!=w&&w!==b&&p.some((function(e){return e.value===w}))&&v(w)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;v(a),null!=d&&(k(d,a),setTimeout((function(){var e,n,a,r,i,l,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},22713:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},90050:function(e,t,n){"use strict";var a=n(67294),r=n(22713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},89132:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l=n(12168),o=n(98448),s=["components"],u={id:"code-blocks",title:"Code blocks",description:"Handling code blocks in Docusaurus Markdown",slug:"/markdown-features/code-blocks"},c={unversionedId:"guides/markdown-features/code-blocks",id:"guides/markdown-features/code-blocks",isDocsHomePage:!1,title:"Code blocks",description:"Handling code blocks in Docusaurus Markdown",source:"@site/docs/guides/markdown-features/markdown-features-code-blocks.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/code-blocks",permalink:"/docusaurus/docs/next/markdown-features/code-blocks",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/markdown-features/markdown-features-code-blocks.mdx",version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1621356015,formattedLastUpdatedAt:"5/18/2021",frontMatter:{id:"code-blocks",title:"Code blocks",description:"Handling code blocks in Docusaurus Markdown",slug:"/markdown-features/code-blocks"},sidebar:"docs",previous:{title:"Tabs",permalink:"/docusaurus/docs/next/markdown-features/tabs"},next:{title:"Admonitions",permalink:"/docusaurus/docs/next/markdown-features/admonitions"}},p=[{value:"Code title",id:"code-title",children:[]},{value:"Syntax highlighting",id:"syntax-highlighting",children:[]},{value:"Line highlighting",id:"line-highlighting",children:[]},{value:"Interactive code editor",id:"interactive-code-editor",children:[{value:"Imports",id:"imports",children:[]}]},{value:"Multi-language support code blocks",id:"multi-language-support-code-blocks",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Code blocks within documentation are super-powered \ud83d\udcaa."),(0,i.kt)("h2",{id:"code-title"},"Code title"),(0,i.kt)("p",null,"You can add a title to the code block by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," key after the language (leave a space between them)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```jsx title="/src/components/HelloCodeTitle.js"\nfunction HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),(0,i.kt)("h2",{id:"syntax-highlighting"},"Syntax highlighting"),(0,i.kt)("p",null,"Code blocks are text blocks wrapped around by strings of 3 backticks. You may check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mdx-js/specification"},"this reference")," for specifications of MDX."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```jsx\nconsole.log('Every repo must come with a mascot.');\n```\n")),(0,i.kt)("p",null,"Use the matching language meta string for your code block, and Docusaurus will pick up syntax highlighting automatically, powered by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer"},"Prism React Renderer"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"console.log('Every repo must come with a mascot.');\n")),(0,i.kt)("p",null,"By default, the Prism ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer#theming"},"syntax highlighting theme")," we use is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/palenight.js"},"Palenight"),". You can change this to another theme by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"prism")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig")," in your docusaurus.config.js."),(0,i.kt)("p",null,"For example, if you prefer to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dracula")," highlighting theme:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{4} title="docusaurus.config.js"',"{4}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    prism: {\n      theme: require('prism-react-renderer/themes/dracula'),\n    },\n  },\n};\n")),(0,i.kt)("p",null,"By default, Docusaurus comes with a subset of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"},"commonly used languages"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some popular languages like Java, C#, or PHP are not enabled by default."))),(0,i.kt)("p",null,"To add syntax highlighting for any of the other ",(0,i.kt)("a",{parentName:"p",href:"https://prismjs.com/#supported-languages"},"Prism supported languages"),", define it in an array of additional languages."),(0,i.kt)("p",null,"For example, if you want to add highlighting for the ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell")," language:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5} title="docusaurus.config.js"',"{5}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    prism: {\n      additionalLanguages: ['powershell'],\n    },\n    // ...\n  },\n};\n")),(0,i.kt)("p",null,"If you want to add highlighting for languages not yet supported by Prism, you can swizzle ",(0,i.kt)("inlineCode",{parentName:"p"},"prism-include-languages"),":"),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-classic prism-include-languages\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle @docusaurus/theme-classic prism-include-languages\n")))),(0,i.kt)("p",null,"It will produce ",(0,i.kt)("inlineCode",{parentName:"p"},"prism-include-languages.js")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"src/theme")," folder. You can add highlighting support for custom languages by editing ",(0,i.kt)("inlineCode",{parentName:"p"},"prism-include-languages.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{8} title="src/theme/prism-include-languages.js"',"{8}":!0,title:'"src/theme/prism-include-languages.js"'},"const prismIncludeLanguages = (Prism) => {\n  // ...\n\n  additionalLanguages.forEach((lang) => {\n    require(`prismjs/components/prism-${lang}`); // eslint-disable-line\n  });\n\n  require('/path/to/your/prism-language-definition');\n\n  // ...\n};\n")),(0,i.kt)("p",null,"You can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PrismJS/prism/tree/master/components"},"Prism's official language definitions")," when you are writing your own language definitions."),(0,i.kt)("h2",{id:"line-highlighting"},"Line highlighting"),(0,i.kt)("p",null,"You can bring emphasis to certain lines of code by specifying line ranges after the language meta string (leave a space after the language)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```jsx {3}\nfunction HighlightSomeText(highlight) {\n  if (highlight) {\n    return 'This text is highlighted!';\n  }\n\n  return 'Nothing highlighted';\n}\n```\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3}","{3}":!0},"function HighlightSomeText(highlight) {\n  if (highlight) {\n    return 'This text is highlighted!';\n  }\n\n  return 'Nothing highlighted';\n}\n")),(0,i.kt)("p",null,"To accomplish this, Docusaurus adds the ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-highlight-code-line")," class to the highlighted lines. You will need to define your own styling for this CSS, possibly in your ",(0,i.kt)("inlineCode",{parentName:"p"},"src/css/custom.css")," with a custom background color which is dependent on your selected syntax highlighting theme. The color given below works for the default highlighting theme (Palenight), so if you are using another theme, you will have to tweak the color accordingly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="/src/css/custom.css"',title:'"/src/css/custom.css"'},".docusaurus-highlight-code-line {\n  background-color: rgb(72, 77, 91);\n  display: block;\n  margin: 0 calc(-1 * var(--ifm-pre-padding));\n  padding: 0 var(--ifm-pre-padding);\n}\n\n/* If you have a different syntax highlighting theme for dark mode. */\nhtml[data-theme='dark'] .docusaurus-highlight-code-line {\n  /* Color which works with dark mode syntax highlighting theme */\n  background-color: rgb(100, 100, 100);\n}\n")),(0,i.kt)("p",null,"To highlight multiple lines, separate the line numbers by commas or use the range syntax to select a chunk of lines. This feature uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"parse-number-range")," library and you can find ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/parse-numeric-range"},"more syntax")," on their project details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```jsx {1,4-6,11}\nimport React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n```\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4-6,11}","{1,4-6,11}":!0},"import React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n")),(0,i.kt)("p",null,"You can also use comments with ",(0,i.kt)("inlineCode",{parentName:"p"},"highlight-next-line"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"highlight-start"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"highlight-end")," to select which lines are highlighted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```jsx\nfunction HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return 'This text is highlighted!';\n  }\n\n  return 'Nothing highlighted';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return 'This range is highlighted!';\n  }\n  // highlight-end\n\n  return 'Nothing highlighted';\n}\n```\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return 'This text is highlighted!';\n  }\n\n  return 'Nothing highlighted';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return 'This range is highlighted!';\n  }\n  // highlight-end\n\n  return 'Nothing highlighted';\n}\n")),(0,i.kt)("p",null,"Supported commenting syntax:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Language"),(0,i.kt)("th",{parentName:"tr",align:null},"Syntax"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/* ... */")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"// ..."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JSX"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{/* ... */}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Python"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"# ..."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTML"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\x3c!-- ... --\x3e"))))),(0,i.kt)("p",null,"If there's a syntax that is not currently supported, we are open to adding them! Pull requests welcome."),(0,i.kt)("h2",{id:"interactive-code-editor"},"Interactive code editor"),(0,i.kt)("p",null,"(Powered by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-live"},"React Live"),")"),(0,i.kt)("p",null,"You can create an interactive coding editor with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock")," plugin."),(0,i.kt)("p",null,"First, add the plugin to your package."),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/theme-live-codeblock\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @docusaurus/theme-live-codeblock\n")))),(0,i.kt)("p",null,"You will also need to add the plugin to your ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"module.exports = {\n  // ...\n  themes: ['@docusaurus/theme-live-codeblock'],\n  // ...\n};\n")),(0,i.kt)("p",null,"To use the plugin, create a code block with ",(0,i.kt)("inlineCode",{parentName:"p"},"live")," attached to the language meta string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```jsx live\nfunction Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n```\n")),(0,i.kt)("p",null,"The code block will be rendered as an interactive editor. Changes to the code will reflect on the result panel live."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")),(0,i.kt)("h3",{id:"imports"},"Imports"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"react-live and imports")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is not possible to import components directly from the react-live code editor, you have to define available imports upfront."))),(0,i.kt)("p",null,"By default, all React imports are available. If you need more imports available, swizzle the react-live scope:"),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle @docusaurus/theme-live-codeblock ReactLiveScope\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle @docusaurus/theme-live-codeblock ReactLiveScope\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3-15,21} title="src/theme/ReactLiveScope/index.js"',"{3-15,21}":!0,title:'"src/theme/ReactLiveScope/index.js"'},"import React from 'react';\n\nconst ButtonExample = (props) => (\n  <button\n    {...props}\n    style={{\n      backgroundColor: 'white',\n      border: 'solid red',\n      borderRadius: 20,\n      padding: 10,\n      cursor: 'pointer',\n      ...props.style,\n    }}\n  />\n);\n\n// Add react-live imports you need here\nconst ReactLiveScope = {\n  React,\n  ...React,\n  ButtonExample,\n};\n\nexport default ReactLiveScope;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonExample")," component is now available to use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function MyPlayground(props) {\n  return (\n    <div>\n      <ButtonExample onClick={() => alert('hey!')}>Click me</ButtonExample>\n    </div>\n  );\n}\n")),(0,i.kt)("h2",{id:"multi-language-support-code-blocks"},"Multi-language support code blocks"),(0,i.kt)("p",null,"With MDX, you can easily create interactive components within your documentation, for example, to display code in multiple programming languages and switching between them using a tabs component."),(0,i.kt)("p",null,"Instead of implementing a dedicated component for multi-language support code blocks, we've implemented a generic Tabs component in the classic theme so that you can use it for other non-code scenarios as well."),(0,i.kt)("p",null,"The following example is how you can have multi-language code tabs in your docs. Note that the empty lines above and below each language block is ",(0,i.kt)("strong",{parentName:"p"},"intentional"),". This is a current limitation of MDX, you have to leave empty lines around Markdown syntax for the MDX parser to know that it's Markdown syntax and not JSX."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  defaultValue=\"js\"\n  values={[\n    { label: 'JavaScript', value: 'js', },\n    { label: 'Python', value: 'py', },\n    { label: 'Java', value: 'java', },\n  ]\n}>\n<TabItem value=\"js\">\n\n```js\nfunction helloWorld() {\n  console.log('Hello, world!');\n}\n```\n\n</TabItem>\n<TabItem value=\"py\">\n\n```py\ndef hello_world():\n  print 'Hello, world!'\n```\n\n</TabItem>\n<TabItem value=\"java\">\n\n```java\nclass HelloWorld {\n  public static void main(String args[]) {\n    System.out.println(\"Hello, World\");\n  }\n}\n```\n\n</TabItem>\n</Tabs>\n")),(0,i.kt)("p",null,"And you will get the following:"),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),(0,i.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"def hello_world():\n  print 'Hello, world!'\n"))),(0,i.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n')))),(0,i.kt)("p",null,"You may want to implement your own ",(0,i.kt)("inlineCode",{parentName:"p"},"<MultiLanguageCode />")," abstraction if you find the above approach too verbose. We might just implement one in future for convenience."),(0,i.kt)("p",null,"If you have multiple of these multi-language code tabs, and you want to sync the selection across the tab instances, refer to the ",(0,i.kt)("a",{parentName:"p",href:"#syncing-tab-choices"},"Syncing tab choices section"),"."))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);