(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[7120],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,v=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98448:function(e,n,t){"use strict";var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},12168:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(67294),o=t(90050),i=t(86010),a="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,d=39;var u=function(e){var n=e.lazy,t=e.block,u=e.defaultValue,c=e.values,p=e.groupId,m=e.className,v=(0,o.Z)(),h=v.tabGroupChoices,f=v.setTabGroupChoices,g=(0,r.useState)(u),k=g[0],b=g[1],y=r.Children.toArray(e.children),N=[];if(null!=p){var w=h[p];null!=w&&w!==k&&c.some((function(e){return e.value===w}))&&b(w)}var C=function(e){var n=e.currentTarget,t=N.indexOf(n),r=c[t].value;b(r),null!=p&&(f(p,r),setTimeout((function(){var e,t,r,o,i,a,l,d;(e=n.getBoundingClientRect(),t=e.top,r=e.left,o=e.bottom,i=e.right,a=window,l=a.innerHeight,d=a.innerWidth,t>=0&&i<=d&&o<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case d:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case l:var o=N.indexOf(e.target)-1;t=N[o]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},m)},c.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,i.Z)("tabs__item",a,{"tabs__item--active":k===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:C,onClick:C},t)}))),n?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},22713:function(e,n,t){"use strict";var r=(0,t(67294).createContext)(void 0);n.Z=r},90050:function(e,n,t){"use strict";var r=t(67294),o=t(22713);n.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},55525:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a=t(12168),s=t(98448),l=["components"],d={id:"versioning",title:"Versioning",slug:"/versioning"},u={unversionedId:"guides/docs/versioning",id:"version-2.0.0-alpha.73/guides/docs/versioning",isDocsHomePage:!1,title:"Versioning",description:"You can use the version script to create a new documentation version based on the latest content in the docs directory. That specific set of documentation will then be preserved and accessible even as the documentation in the docs directory changes moving forward.",source:"@site/versioned_docs/version-2.0.0-alpha.73/guides/docs/versioning.md",sourceDirName:"guides/docs",slug:"/versioning",permalink:"/docs/2.0.0-alpha.73/versioning",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/docs/versioning.md",version:"2.0.0-alpha.73",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1618570090,formattedLastUpdatedAt:"4/16/2021",frontMatter:{id:"versioning",title:"Versioning",slug:"/versioning"},sidebar:"version-2.0.0-alpha.73/docs",previous:{title:"Sidebar",permalink:"/docs/2.0.0-alpha.73/sidebar"},next:{title:"Docs Markdown Features",permalink:"/docs/2.0.0-alpha.73/docs-markdown-features"}},c=[{value:"Directory structure",id:"directory-structure",children:[{value:"Tagging a new version",id:"tagging-a-new-version",children:[]}]},{value:"Docs",id:"docs",children:[{value:"Creating new docs",id:"creating-new-docs",children:[]},{value:"Linking docs",id:"linking-docs",children:[]}]},{value:"Versions",id:"versions",children:[{value:"Updating an existing version",id:"updating-an-existing-version",children:[]},{value:"Deleting an existing version",id:"deleting-an-existing-version",children:[]}]},{value:"Recommended practices",id:"recommended-practices",children:[{value:"Figure out the behavior for the &quot;current&quot; version",id:"figure-out-the-behavior-for-the-current-version",children:[]},{value:"Version your documentation only when needed",id:"version-your-documentation-only-when-needed",children:[]},{value:"Keep the number of versions small",id:"keep-the-number-of-versions-small",children:[]},{value:"Use absolute import within the docs",id:"use-absolute-import-within-the-docs",children:[]},{value:"Global or versioned colocated assets",id:"global-or-versioned-colocated-assets",children:[]}]}],p={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use the version script to create a new documentation version based on the latest content in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," directory. That specific set of documentation will then be preserved and accessible even as the documentation in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," directory changes moving forward."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Think about it before starting to version your documentation - it can become difficult for contributors to help improve it!"))),(0,i.kt)("p",null,"Most of the time, you don't need versioning as it will just increase your build time, and introduce complexity to your codebase. Versioning is ",(0,i.kt)("strong",{parentName:"p"},"best suited for websites with high-traffic and rapid changes to documentation between versions"),". If your documentation rarely changes, don't add versioning to your documentation."),(0,i.kt)("p",null,"To better understand how versioning works and see if it suits your needs, you can read on below."),(0,i.kt)("h2",{id:"directory-structure"},"Directory structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"website\n\u251c\u2500\u2500 sidebars.json        # sidebar for master (next) version\n\u251c\u2500\u2500 docs                 # docs directory for master (next) version\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2514\u2500\u2500 bar.md       # https://mysite.com/docs/next/foo/bar\n\u2502   \u2514\u2500\u2500 hello.md         # https://mysite.com/docs/next/hello\n\u251c\u2500\u2500 versions.json        # file to indicate what versions are available\n\u251c\u2500\u2500 versioned_docs\n\u2502   \u251c\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/foo/bar\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251c\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/1.0.0/foo/bar\n\u2502       \u2514\u2500\u2500 hello.md\n\u251c\u2500\u2500 versioned_sidebars\n\u2502   \u251c\u2500\u2500 version-1.1.0-sidebars.json\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n\u251c\u2500\u2500 docusaurus.config.js\n\u2514\u2500\u2500 package.json\n")),(0,i.kt)("p",null,"The table below explains how a versioned file maps to its version and the generated URL."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.0.0/hello.md")),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,i.kt)("td",{parentName:"tr",align:null},"/docs/1.0.0/hello")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.1.0/hello.md")),(0,i.kt)("td",{parentName:"tr",align:null},"1.1.0 (latest)"),(0,i.kt)("td",{parentName:"tr",align:null},"/docs/hello")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docs/hello.md")),(0,i.kt)("td",{parentName:"tr",align:null},"next"),(0,i.kt)("td",{parentName:"tr",align:null},"/docs/next/hello")))),(0,i.kt)("h3",{id:"tagging-a-new-version"},"Tagging a new version"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, make sure your content in the ",(0,i.kt)("inlineCode",{parentName:"li"},"docs")," directory is ready to be frozen as a version. A version always should be based from master."),(0,i.kt)("li",{parentName:"ol"},"Enter a new version number.")),(0,i.kt)(a.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.1.0\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run docusaurus docs:version 1.1.0\n")))),(0,i.kt)("p",null,"When tagging a new version, the document versioning mechanism will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the full ",(0,i.kt)("inlineCode",{parentName:"li"},"docs/")," folder contents into a new ",(0,i.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-<version>/")," folder."),(0,i.kt)("li",{parentName:"ul"},"Create a versioned sidebars file based from your current ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.0.0-alpha.73/docs-introduction#sidebar"},"sidebar")," configuration (if it exists) - saved as ",(0,i.kt)("inlineCode",{parentName:"li"},"versioned_sidebars/version-<version>-sidebars.json"),"."),(0,i.kt)("li",{parentName:"ul"},"Append the new version number to ",(0,i.kt)("inlineCode",{parentName:"li"},"versions.json"),".")),(0,i.kt)("h2",{id:"docs"},"Docs"),(0,i.kt)("h3",{id:"creating-new-docs"},"Creating new docs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Place the new file into the corresponding version folder."),(0,i.kt)("li",{parentName:"ol"},"Include the reference for the new file into the corresponding sidebar file, according to version number.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Master docs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# The new file.\ndocs/new.md\n\n# Edit the corresponding sidebar file.\nsidebar.js\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Older docs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# The new file.\nversioned_docs/version-1.0.0/new.md\n\n# Edit the corresponding sidebar file.\nversioned_sidebars/version-1.0.0-sidebars.json\n")),(0,i.kt)("h3",{id:"linking-docs"},"Linking docs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remember to include the ",(0,i.kt)("inlineCode",{parentName:"li"},".md")," extension."),(0,i.kt)("li",{parentName:"ul"},"Files will be linked to correct corresponding version."),(0,i.kt)("li",{parentName:"ul"},"Relative paths work as well.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"The [@hello](hello.md#paginate) document is great!\n\nSee the [Tutorial](../getting-started/tutorial.md) for more info.\n")),(0,i.kt)("h2",{id:"versions"},"Versions"),(0,i.kt)("p",null,"Each directory in ",(0,i.kt)("inlineCode",{parentName:"p"},"versioned_docs/")," will represent a documentation version."),(0,i.kt)("h3",{id:"updating-an-existing-version"},"Updating an existing version"),(0,i.kt)("p",null,"You can update multiple docs versions at the same time because each directory in ",(0,i.kt)("inlineCode",{parentName:"p"},"versioned_docs/")," represents specific routes when published."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Edit any file."),(0,i.kt)("li",{parentName:"ol"},"Commit and push changes."),(0,i.kt)("li",{parentName:"ol"},"It will be published to the version.")),(0,i.kt)("p",null,"Example: When you change any file in ",(0,i.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-2.6/"),", it will only affect the docs for version ",(0,i.kt)("inlineCode",{parentName:"p"},"2.6"),"."),(0,i.kt)("h3",{id:"deleting-an-existing-version"},"Deleting an existing version"),(0,i.kt)("p",null,"You can delete/remove versions as well."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Remove the version from ",(0,i.kt)("inlineCode",{parentName:"li"},"versions.json"),".")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:"{4}","{4}":!0},'[\n  "2.0.0",\n  "1.9.0",\n- "1.8.0"\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Delete the versioned docs directory. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.8.0"),"."),(0,i.kt)("li",{parentName:"ol"},"Delete the versioned sidebars file. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"versioned_sidebars/version-1.8.0-sidebars.json"),".")),(0,i.kt)("h2",{id:"recommended-practices"},"Recommended practices"),(0,i.kt)("h3",{id:"figure-out-the-behavior-for-the-current-version"},'Figure out the behavior for the "current" version'),(0,i.kt)("p",null,'The "current" version is the version name for the ',(0,i.kt)("inlineCode",{parentName:"p"},"./docs")," folder."),(0,i.kt)("p",null,"There are different ways to manage versioning, but two very common patterns are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You release v1, and start immediately working on v2 (including its docs)"),(0,i.kt)("li",{parentName:"ul"},"You release v1, and will maintain it for some time before thinking about v2.")),(0,i.kt)("p",null,"Docusaurus defaults work great for the first usecase."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For the 2nd usecase"),": if you release v1 and don't plan to work on v2 anytime soon, instead of versioning v1 and having to maintain the docs in 2 folders (",(0,i.kt)("inlineCode",{parentName:"p"},"./docs")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"./versioned_docs/version-1.0.0"),"), you may consider using the following configuration instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lastVersion": "current",\n  "versions": {\n    "current": {\n      "label": "1.0.0",\n      "path": "1.0.0"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The docs in ",(0,i.kt)("inlineCode",{parentName:"p"},"./docs")," will be served at ",(0,i.kt)("inlineCode",{parentName:"p"},"/docs/1.0.0")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"/docs/next"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.0")," will become the default version we link to in the navbar dropdown, and you will only need to maintain a single ",(0,i.kt)("inlineCode",{parentName:"p"},"./docs")," folder."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.0.0-alpha.73/api/plugins/@docusaurus/plugin-content-docs"},"docs plugin configuration")," for more details."),(0,i.kt)("h3",{id:"version-your-documentation-only-when-needed"},"Version your documentation only when needed"),(0,i.kt)("p",null,"For example, you are building a documentation for your npm package ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," and you are currently in version 1.0.0. You then release a patch version for a minor bug fix and it's now 1.0.1."),(0,i.kt)("p",null,"Should you cut a new documentation version 1.0.1? ",(0,i.kt)("strong",{parentName:"p"},"You probably shouldn't"),". 1.0.1 and 1.0.0 docs shouldn't differ according to semver because there are no new features!. Cutting a new version for it will only just create unnecessary duplicated files."),(0,i.kt)("h3",{id:"keep-the-number-of-versions-small"},"Keep the number of versions small"),(0,i.kt)("p",null,"As a good rule of thumb, try to keep the number of your versions below 10. ",(0,i.kt)("strong",{parentName:"p"},"It is very likely")," that you will have a lot of obsolete versioned documentation that nobody even reads anymore. For example, ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/versions"},"Jest")," is currently in version ",(0,i.kt)("inlineCode",{parentName:"p"},"24.9"),", and only maintains several latest documentation version with the lowest being ",(0,i.kt)("inlineCode",{parentName:"p"},"22.X"),". Keep it small \ud83d\ude0a"),(0,i.kt)("h3",{id:"use-absolute-import-within-the-docs"},"Use absolute import within the docs"),(0,i.kt)("p",null,"Don't use relative paths import within the docs. Because when we cut a version the paths no longer work (the nesting level is different, among other reasons). You can utilize the ",(0,i.kt)("inlineCode",{parentName:"p"},"@site")," alias provided by docusaurus, that points to the ",(0,i.kt)("inlineCode",{parentName:"p"},"website")," directory. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- import Foo from '../src/components/Foo';\n+ import Foo from '@site/src/components/Foo';\n")),(0,i.kt)("h3",{id:"global-or-versioned-colocated-assets"},"Global or versioned colocated assets"),(0,i.kt)("p",null,"You should decide if assets like images and files are per version or shared between versions"),(0,i.kt)("p",null,"If your assets should be versioned, put them in the docs version, and use relative paths:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"![img alt](./myImage.png)\n\n[download this file](./file.pdf)\n")),(0,i.kt)("p",null,"If your assets are global, put them in ",(0,i.kt)("inlineCode",{parentName:"p"},"/static")," and use absolute paths:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"![img alt](/myImage.png)\n\n[download this file](/file.pdf)\n")))}m.isMDXComponent=!0},86010:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);