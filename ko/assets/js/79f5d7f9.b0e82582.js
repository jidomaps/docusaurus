(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[1481],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98448:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},12168:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(67294),r=n(90050),o=n(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=(0,r.Z)(),k=h.tabGroupChoices,f=h.setTabGroupChoices,g=(0,a.useState)(c),b=g[0],v=g[1],y=a.Children.toArray(e.children),w=[];if(null!=d){var N=k[d];null!=N&&N!==b&&p.some((function(e){return e.value===N}))&&v(N)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;v(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,r,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case l:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},22713:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},90050:function(e,t,n){"use strict";var a=n(67294),r=n(22713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},83413:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=n(12168),s=n(98448),l=["components"],u={id:"installation",title:"Installation"},c={unversionedId:"installation",id:"version-2.0.0-alpha.74/installation",isDocsHomePage:!1,title:"Installation",description:"Docusaurus is essentially a set of npm packages that can be installed over npm.",source:"@site/versioned_docs/version-2.0.0-alpha.74/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ko/docs/2.0.0-alpha.74/installation",editUrl:"https://crowdin.com/project/docusaurus-v2/ko",version:"2.0.0-alpha.74",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619534336,formattedLastUpdatedAt:"2021. 4. 27.",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-2.0.0-alpha.74/docs",previous:{title:"Contributing",permalink:"/ko/docs/2.0.0-alpha.74/contributing"},next:{title:"Configuration",permalink:"/ko/docs/2.0.0-alpha.74/configuration"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Scaffold project website",id:"scaffold-project-website",children:[]},{value:"Project structure",id:"project-structure",children:[{value:"Project structure rundown",id:"project-structure-rundown",children:[]}]},{value:"Running the development server",id:"running-the-development-server",children:[]},{value:"Build",id:"build",children:[]},{value:"Updating your Docusaurus version",id:"updating-your-docusaurus-version",children:[]},{value:"Problems?",id:"problems",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docusaurus is essentially a set of npm ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/tree/master/packages"},"packages")," that can be installed over npm."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://new.docusaurus.io"},"new.docusaurus.io"))," to test Docusaurus immediately in CodeSandbox."))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version >= 12.13.0 or above (which can be checked by running ",(0,o.kt)("inlineCode",{parentName:"li"},"node -v"),"). You can use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn")," version >= 1.5 (which can be checked by running ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn --version"),"). Yarn is a performant package manager for JavaScript and replaces the ",(0,o.kt)("inlineCode",{parentName:"li"},"npm")," client. It is not strictly necessary but highly encouraged.")),(0,o.kt)("h2",{id:"scaffold-project-website"},"Scaffold project website"),(0,o.kt)("p",null,"The easiest way to install Docusaurus is to use the command line tool that helps you scaffold a skeleton Docusaurus website. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @docusaurus/init@latest init [name] [template]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @docusaurus/init@latest init my-website classic\n")),(0,o.kt)("p",null,"If you do not specify ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"template"),", it will prompt you for them. We recommend the ",(0,o.kt)("inlineCode",{parentName:"p"},"classic")," template so that you can get started quickly and it contains features found in Docusaurus 1. The ",(0,o.kt)("inlineCode",{parentName:"p"},"classic")," template contains ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," which includes standard documentation, a blog, custom pages, and a CSS framework (with dark mode support). You can get up and running extremely quickly with the classic template and customize things later on when you have gained more familiarity with Docusaurus."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[FB-Only]",":")," If you are setting up a new Docusaurus website for a Facebook open source project, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"facebook")," template instead, which comes with some useful Facebook-specific defaults:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @docusaurus/init@latest init my-website facebook\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[Experimental]",":")," If you want setting up a new website using ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/"},"bootstrap"),", use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap")," template, like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @docusaurus/init@latest init my-website bootstrap\n")),(0,o.kt)("p",null,"If you want to skip installing dependencies, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--skip-install")," option, like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @docusaurus/init@latest init my-website classic --skip-install\n")),(0,o.kt)("h2",{id:"project-structure"},"Project structure"),(0,o.kt)("p",null,"Assuming you chose the classic template and named your site ",(0,o.kt)("inlineCode",{parentName:"p"},"my-website"),", you will see the following files generated under a new directory ",(0,o.kt)("inlineCode",{parentName:"p"},"my-website/"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"my-website\n\u251c\u2500\u2500 blog\n\u2502   \u251c\u2500\u2500 2019-05-28-hola.md\n\u2502   \u251c\u2500\u2500 2019-05-29-hello-world.md\n\u2502   \u2514\u2500\u2500 2020-05-30-welcome.md\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 doc1.md\n\u2502   \u251c\u2500\u2500 doc2.md\n\u2502   \u251c\u2500\u2500 doc3.md\n\u2502   \u2514\u2500\u2500 mdx.md\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u2514\u2500\u2500 yarn.lock\n")),(0,o.kt)("h3",{id:"project-structure-rundown"},"Project structure rundown"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/blog/")," - Contains the blog Markdown files. You can delete the directory if you do not want/need a blog. More details can be found in the ",(0,o.kt)("a",{parentName:"li",href:"/ko/docs/2.0.0-alpha.74/blog"},"blog guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/docs/")," - Contains the Markdown files for the docs. Customize the order of the docs sidebar in ",(0,o.kt)("inlineCode",{parentName:"li"},"sidebars.js"),". More details can be found in the ",(0,o.kt)("a",{parentName:"li",href:"/ko/docs/2.0.0-alpha.74/docs-markdown-features"},"docs guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/src/")," - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files in here but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/src/pages")," - Any files within this directory will be converted into a website page. More details can be found in the ",(0,o.kt)("a",{parentName:"li",href:"/ko/docs/2.0.0-alpha.74/creating-pages"},"pages guide")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/static/")," - Static directory. Any contents inside here will be copied into the root of the final ",(0,o.kt)("inlineCode",{parentName:"li"},"build")," directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/docusaurus.config.js")," - A config file containing the site configuration. This is the equivalent of ",(0,o.kt)("inlineCode",{parentName:"li"},"siteConfig.js")," in Docusaurus v1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/package.json")," - A Docusaurus website is a React app. You can install and use any npm packages you like in them"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/sidebar.js")," - Used by the documentation to specify the order of documents in the sidebar")),(0,o.kt)("h2",{id:"running-the-development-server"},"Running the development server"),(0,o.kt)("p",null,"To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes."),(0,o.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nnpm run start\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nyarn run start\n")))),(0,o.kt)("p",null,"By default, a browser window will open at http://localhost:3000."),(0,o.kt)("p",null,"Congratulations! You have just created your first Docusaurus site! Browse around the site to see what's available."),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,"Docusaurus is a modern static website generator so we need to build the website into a directory of static contents and put it on a web server so that it can be viewed. To build the website:"),(0,o.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run build\n")))),(0,o.kt)("p",null,"and contents will be generated within the ",(0,o.kt)("inlineCode",{parentName:"p"},"/build")," directory, which can be copied to any static file hosting service like ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub pages"),", ",(0,o.kt)("a",{parentName:"p",href:"https://vercel.com/"},"Vercel")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.netlify.com/"},"Netlify"),". Check out the docs on ",(0,o.kt)("a",{parentName:"p",href:"/ko/docs/2.0.0-alpha.74/deployment"},"deployment")," for more details."),(0,o.kt)("h2",{id:"updating-your-docusaurus-version"},"Updating your Docusaurus version"),(0,o.kt)("p",null,"There are many ways to update your Docusaurus version. One guaranteed way is to manually change the version number in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," to the desired version. Note that all ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/"),"-namespaced packages should be using the same version."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please update to the latest Docusaurus 2 version shown at the top of the page, not what is shown below."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"dependencies": {\n  "@docusaurus/core": "^2.0.0-alpha.49",\n  "@docusaurus/preset-classic": "^2.0.0-alpha.49",\n  // ...\n}\n')),(0,o.kt)("p",null,"Then, in the directory containing ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", run your package manager's install command:"),(0,o.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")))),(0,o.kt)("p",null,"To check that the update occurred successfully, run:"),(0,o.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx docusaurus --version\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx docusaurus --version\n")))),(0,o.kt)("p",null,"You should see the correct version as output."),(0,o.kt)("p",null,"Alternatively, if you are using Yarn, you can do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn upgrade @docusaurus/core@2.0.0-alpha.49 @docusaurus/preset-classic@2.0.0-alpha.49\n")),(0,o.kt)("h2",{id:"problems"},"Problems?"),(0,o.kt)("p",null,"Ask for help on ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/docusaurus"},"Stack Overflow"),", on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus"},"GitHub repository")," or ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/docusaurus"},"Twitter"),"."))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);