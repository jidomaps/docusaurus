(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[8333],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48758:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),s=["components"],o={id:"static-assets",title:"Static Assets"},l={unversionedId:"static-assets",id:"version-2.0.0-alpha.74/static-assets",isDocsHomePage:!1,title:"Static Assets",description:"Every website needs assets: images, stylesheets, favicons etc. In such cases, you can create a directory named static at the root of your project.",source:"@site/versioned_docs/version-2.0.0-alpha.74/static-assets.md",sourceDirName:".",slug:"/static-assets",permalink:"/docs/2.0.0-alpha.74/static-assets",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/static-assets.md",version:"2.0.0-alpha.74",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619534336,formattedLastUpdatedAt:"4/27/2021",frontMatter:{id:"static-assets",title:"Static Assets"},sidebar:"version-2.0.0-alpha.74/docs",previous:{title:"Styling and Layout",permalink:"/docs/2.0.0-alpha.74/styling-layout"},next:{title:"Search",permalink:"/docs/2.0.0-alpha.74/search"}},u=[{value:"Referencing your static asset",id:"referencing-your-static-asset",children:[{value:"JSX example",id:"jsx-example",children:[]},{value:"Markdown example",id:"markdown-example",children:[]},{value:"Caveats",id:"caveats",children:[]}]}],c={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Every website needs assets: images, stylesheets, favicons etc. In such cases, you can create a directory named ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," at the root of your project."),(0,i.kt)("p",null,"Every file you put into ",(0,i.kt)("strong",{parentName:"p"},"that directory will be copied")," into the root of the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," folder with the directory hierarchy preserved. E.g. if you add a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"sun.jpg")," to the static folder, it will be copied to ",(0,i.kt)("inlineCode",{parentName:"p"},"build/sun.jpg"),"."),(0,i.kt)("p",null,"This means that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for site ",(0,i.kt)("inlineCode",{parentName:"li"},"baseUrl: '/'"),", the image ",(0,i.kt)("inlineCode",{parentName:"li"},"/static/img/docusaurus.png")," will be served at ",(0,i.kt)("inlineCode",{parentName:"li"},"/img/docusaurus.png"),"."),(0,i.kt)("li",{parentName:"ul"},"for site ",(0,i.kt)("inlineCode",{parentName:"li"},"baseUrl: '/subpath/'"),", the image ",(0,i.kt)("inlineCode",{parentName:"li"},"/static/img/docusaurus.png")," will be served at ",(0,i.kt)("inlineCode",{parentName:"li"},"/subpath/img/docusaurus.png"),".")),(0,i.kt)("h2",{id:"referencing-your-static-asset"},"Referencing your static asset"),(0,i.kt)("p",null,"You can reference assets from the ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," folder in your code using absolute paths, but this is not ideal because changing the site ",(0,i.kt)("inlineCode",{parentName:"p"},"baseUrl")," will ",(0,i.kt)("strong",{parentName:"p"},"break those link"),"s."),(0,i.kt)("p",null,"You can ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"require()")," the static asset (recommended), or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useBaseUrl")," utility function: both prepend the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseUrl")," to paths for you."),(0,i.kt)("h3",{id:"jsx-example"},"JSX example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'},"import DocusaurusImageUrl from '@site/static/img/docusaurus.png';\n\n<img src={DocusaurusImageUrl} />;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'},"<img src={require('@site/static/img/docusaurus.png').default} />\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'},"import useBaseUrl from '@docusaurus/useBaseUrl';\n\n<img src={useBaseUrl('/img/docusaurus.png')} />;\n")),(0,i.kt)("p",null,"You can also import SVG files: they will be transformed into React components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'},'import DocusaurusLogoWithKeytar from \'@site/static/img/docusaurus_keytar.svg\';\n\n<DocusaurusLogoWithKeytar title="Docusaurus Logo" className="logo" />;\n')),(0,i.kt)("h3",{id:"markdown-example"},"Markdown example"),(0,i.kt)("p",null,"Markdown links and images referencing assets of the static folder will be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},'require("@site/static/assetName.png")"'),", and ",(0,i.kt)("strong",{parentName:"p"},"the site baseUrl will be automatically prepended")," for you."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"![Docusaurus](/img/docusaurus.png)\n")),(0,i.kt)("p",null,"Thanks to MDX, you can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"useBaseUrl")," utility function in Markdown files! You'd have to use html tags like ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," instead of the Markdown image syntax though. The syntax is exactly the same as in JSX."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="my-doc.mdx"',title:'"my-doc.mdx"'},"---\nid: my-doc\ntitle: My Doc\n---\n\n// Add to the top of the file below the front matter.\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n\n...\n\n<img alt=\"Docusaurus with Keytar\" src={useBaseUrl('/img/docusaurus_keytar.svg')} />\n")),(0,i.kt)("h3",{id:"caveats"},"Caveats"),(0,i.kt)("p",null,"Keep in mind that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By default, none of the files in ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," folder will be post-processed, hashed or minified."),(0,i.kt)("li",{parentName:"ul"},"Missing files referenced via hardcoded absolute paths will not be detected at compilation time, and will result in a 404 error."),(0,i.kt)("li",{parentName:"ul"},"By default, GitHub Pages runs published files through ",(0,i.kt)("a",{parentName:"li",href:"https://jekyllrb.com/"},"Jekyll"),". Since Jekyll will discard any files that begin with ",(0,i.kt)("inlineCode",{parentName:"li"},"_"),", it is recommended that you disable Jekyll by adding an empty file named ",(0,i.kt)("inlineCode",{parentName:"li"},".nojekyll")," file to your ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," directory if you are using GitHub pages for hosting.")))}p.isMDXComponent=!0}}]);