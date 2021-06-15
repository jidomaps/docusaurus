(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[7596],{52227:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n={};a.r(n),a.d(n,{ButtonExample:function(){return s}});var i=a(67294),r=a(22122),s=function(e){return i.createElement("button",(0,r.Z)({},e,{style:Object.assign({backgroundColor:"white",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))},o=Object.assign({React:i},i,n)},9975:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),s=a(4226),o=["components"],d={id:"sidebar",title:"Sidebar",slug:"/sidebar"},l={unversionedId:"guides/docs/sidebar",id:"version-2.0.0-beta.0/guides/docs/sidebar",isDocsHomePage:!1,title:"Sidebar",description:"Creating a sidebar is useful to:",source:"@site/versioned_docs/version-2.0.0-beta.0/guides/docs/sidebar.md",sourceDirName:"guides/docs",slug:"/sidebar",permalink:"/zh-CN/docs/sidebar",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-beta.0",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1620828435,formattedLastUpdatedAt:"2021/5/12",frontMatter:{id:"sidebar",title:"Sidebar",slug:"/sidebar"},sidebar:"version-2.0.0-beta.0/docs",previous:{title:"Create a doc",permalink:"/zh-CN/docs/create-doc"},next:{title:"Versioning",permalink:"/zh-CN/docs/versioning"}},p=[{value:"Default sidebar",id:"default-sidebar",children:[]},{value:"Sidebar object",id:"sidebar-object",children:[]},{value:"Using multiple sidebars",id:"using-multiple-sidebars",children:[]},{value:"Understanding sidebar items",id:"understanding-sidebar-items",children:[{value:"Doc: link to a doc",id:"sidebar-item-doc",children:[]},{value:"Ref: link to a doc, without sidebar",id:"sidebar-item-ref",children:[]},{value:"Link: link to any page",id:"sidebar-item-link",children:[]},{value:"Category: create a hierarchy",id:"sidebar-item-category",children:[]},{value:"Autogenerated: generate a sidebar",id:"sidebar-item-autogenerated",children:[]}]},{value:"Hideable sidebar",id:"hideable-sidebar",children:[]},{value:"Passing custom props",id:"passing-custom-props",children:[]},{value:"Complex sidebars example",id:"complex-sidebars-example",children:[]}],m={toc:p};function c(e){var t=e.components,d=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creating a sidebar is useful to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Group multiple ",(0,r.kt)("strong",{parentName:"li"},"related documents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Display a sidebar")," on each of those documents"),(0,r.kt)("li",{parentName:"ul"},"Provide a ",(0,r.kt)("strong",{parentName:"li"},"paginated navigation"),", with next/previous button")),(0,r.kt)("p",null,"To use sidebars on your Docusaurus site:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define a file that exports a ",(0,r.kt)("a",{parentName:"li",href:"#sidebar-object"},"sidebar object"),"."),(0,r.kt)("li",{parentName:"ol"},"Pass this object into the ",(0,r.kt)("inlineCode",{parentName:"li"},"@docusaurus/plugin-docs")," plugin directly or via ",(0,r.kt)("inlineCode",{parentName:"li"},"@docusaurus/preset-classic"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          sidebarPath: require.resolve('./sidebars.js'),\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("h2",{id:"default-sidebar"},"Default sidebar"),(0,r.kt)("p",null,"By default, Docusaurus ",(0,r.kt)("a",{parentName:"p",href:"#sidebar-item-autogenerated"},"automatically generates a sidebar")," for you, by using the filesystem structure of the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  mySidebar: [\n    {\n      type: 'autogenerated',\n      dirName: '.', // generate sidebar slice from the docs folder (or versioned_docs/<version>)\n    },\n  ],\n};\n")),(0,r.kt)("p",null,"You can also define your sidebars explicitly."),(0,r.kt)("h2",{id:"sidebar-object"},"Sidebar object"),(0,r.kt)("p",null,"A sidebar is a ",(0,r.kt)("strong",{parentName:"p"},"tree of ",(0,r.kt)("a",{parentName:"strong",href:"#understanding-sidebar-items"},"sidebar items")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Sidebar =\n  // Normal syntax\n  | SidebarItem[]\n\n  // Shorthand syntax\n  | Record<\n      string, // category label\n      SidebarItem[] // category items\n    >;\n")),(0,r.kt)("p",null,"A sidebars file can contain ",(0,r.kt)("strong",{parentName:"p"},"multiple sidebar objects"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type SidebarsFile = Record<\n  string, // sidebar id\n  Sidebar\n>;\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: ['doc1'],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: ['doc2', 'doc3'],\n    },\n  ],\n};\n")),(0,r.kt)("p",null,"Notice the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is a single sidebar ",(0,r.kt)("inlineCode",{parentName:"li"},"mySidebar"),", containing 5 ",(0,r.kt)("a",{parentName:"li",href:"#understanding-sidebar-items"},"sidebar items")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Getting Started")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Docusaurus")," are sidebar categories"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"doc1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"doc2")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"doc3")," are sidebar documents")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"shorthand syntax")," to express this sidebar more concisely:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  mySidebar: {\n    'Getting started': ['doc1'],\n    Docusaurus: ['doc2', 'doc3'],\n  },\n};\n")))),(0,r.kt)("h2",{id:"using-multiple-sidebars"},"Using multiple sidebars"),(0,r.kt)("p",null,"You can create a sidebar for each ",(0,r.kt)("strong",{parentName:"p"},"set of markdown files")," that you want to ",(0,r.kt)("strong",{parentName:"p"},"group together"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Docusaurus site is a good example of using multiple sidebars:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/"},"Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/cli"},"API"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  tutorialSidebar: {\n    'Category A': ['doc1', 'doc2'],\n  },\n  apiSidebar: ['doc3', 'doc4'],\n};\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The keys ",(0,r.kt)("inlineCode",{parentName:"p"},"tutorialSidebar")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apiSidebar")," are sidebar ",(0,r.kt)("strong",{parentName:"p"},"technical ids")," and do not matter much."))),(0,r.kt)("p",null,"When browsing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"doc1")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"doc2"),": the ",(0,r.kt)("inlineCode",{parentName:"li"},"tutorialSidebar")," will be displayed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"doc3")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"doc4"),": the ",(0,r.kt)("inlineCode",{parentName:"li"},"apiSidebar")," will be displayed")),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"paginated navigation")," link documents inside the same sidebar with ",(0,r.kt)("strong",{parentName:"p"},"next and previous buttons"),"."),(0,r.kt)("h2",{id:"understanding-sidebar-items"},"Understanding sidebar items"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SidebarItem")," is an item defined in a Sidebar tree."),(0,r.kt)("p",null,"There are different types of sidebar items:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#sidebar-item-doc"},"Doc")),": link to a doc page, assigning it to the sidebar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#sidebar-item-ref"},"Ref")),": link to a doc page, without assigning it to the sidebar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#sidebar-item-link"},"Link")),": link to any internal or external page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#sidebar-item-category"},"Category")),": create a hierarchy of sidebar items"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#sidebar-item-autogenerated"},"Autogenerated")),": generate a sidebar slice automatically")),(0,r.kt)("h3",{id:"sidebar-item-doc"},"Doc: link to a doc"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"doc")," type to link to a doc page and assign that doc to a sidebar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type SidebarItemDoc =\n  // Normal syntax\n  | {\n      type: 'doc';\n      id: string;\n      label: string; // Sidebar label text\n    }\n\n  // Shorthand syntax\n  | string; // docId shortcut\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  mySidebar: [\n    // Normal syntax:\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'doc1', // document id\n      label: 'Getting started', // sidebar label\n    },\n    // highlight-end\n\n    // Shorthand syntax:\n    // highlight-start\n    'doc2', // document id\n    // highlight-end\n  ],\n};\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_label")," markdown frontmatter has a higher precedence over the ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," key in ",(0,r.kt)("inlineCode",{parentName:"p"},"SidebarItemDoc"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Don't assign the same doc to multiple sidebars: use a ",(0,r.kt)("a",{parentName:"p",href:"#sidebar-item-ref"},"ref")," instead."))),(0,r.kt)("h3",{id:"sidebar-item-ref"},"Ref: link to a doc, without sidebar"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," type to link to a doc page without assigning it to a sidebar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type SidebarItemRef = {\n  type: 'ref';\n  id: string;\n};\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  mySidebar: [\n    {\n      type: 'ref',\n      id: 'doc1', // Document id (string).\n    },\n  ],\n};\n")),(0,r.kt)("p",null,"When browsing ",(0,r.kt)("inlineCode",{parentName:"p"},"doc1"),", Docusaurus ",(0,r.kt)("strong",{parentName:"p"},"will not display")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"mySidebar")," sidebar."),(0,r.kt)("h3",{id:"sidebar-item-link"},"Link: link to any page"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," type to link to any page (internal or external) that is not a doc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type SidebarItemLink = {\n  type: 'link';\n  label: string;\n  href: string;\n};\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  myLinksSidebar: [\n    // highlight-start\n    // External link\n    {\n      type: 'link',\n      label: 'Facebook', // The link label\n      href: 'https://facebook.com', // The external URL\n    },\n    // highlight-end\n\n    // highlight-start\n    // Internal link\n    {\n      type: 'link',\n      label: 'Home', // The link label\n      href: '/', // The internal path\n    },\n    // highlight-end\n  ],\n};\n")),(0,r.kt)("h3",{id:"sidebar-item-category"},"Category: create a hierarchy"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," type to create a hierarchy of sidebar items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type SidebarItemCategory = {\n  type: 'category';\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n\n  // Category options:\n  collapsed: boolean; // Set the category to be collapsed or open by default\n};\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      collapsed: false,\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"shorthand syntax")," when you don't need ",(0,r.kt)("strong",{parentName:"p"},"category options"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        Docs: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n      },\n    ],\n  },\n};\n")))),(0,r.kt)("h4",{id:"collapsible-categories"},"Collapsible categories"),(0,r.kt)("p",null,"For sites with a sizable amount of content, we support the option to expand/collapse a category to toggle the display of its contents. Categories are collapsible by default. If you want them to be always expanded, set ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig.sidebarCollapsible")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    // highlight-start\n    sidebarCollapsible: false,\n    // highlight-end\n  },\n};\n")),(0,r.kt)("h4",{id:"expanded-categories-by-default"},"Expanded categories by default"),(0,r.kt)("p",null,"For docs that have collapsible categories, you may want more fine-grain control over certain categories. If you want specific categories to be always expanded, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        type: 'category',\n        label: 'Docs',\n        collapsed: false,\n        items: ['markdown-features', 'sidebar', 'versioning'],\n      },\n    ],\n  },\n};\n")),(0,r.kt)("h3",{id:"sidebar-item-autogenerated"},"Autogenerated: generate a sidebar"),(0,r.kt)("p",null,"Docusaurus can ",(0,r.kt)("strong",{parentName:"p"},"create a sidebar automatically")," from your ",(0,r.kt)("strong",{parentName:"p"},"filesystem structure"),": each folder creates a sidebar category."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"autogenerated")," item is converted by Docusaurus to a ",(0,r.kt)("strong",{parentName:"p"},"sidebar slice"),": a list of items of type ",(0,r.kt)("inlineCode",{parentName:"p"},"doc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type SidebarItemAutogenerated = {\n  type: 'autogenerated';\n  dirName: string; // Source folder to generate the sidebar slice from (relative to docs)\n};\n")),(0,r.kt)("p",null,"Docusaurus can generate a sidebar from your docs folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  myAutogeneratedSidebar: [\n    // highlight-start\n    {\n      type: 'autogenerated',\n      dirName: '.', // '.' means the current docs folder\n    },\n    // highlight-end\n  ],\n};\n")),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("strong",{parentName:"p"},"multiple ",(0,r.kt)("inlineCode",{parentName:"strong"},"autogenerated")," items")," in a sidebar, and interleave them with regular sidebar items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  mySidebar: [\n    'intro',\n    {\n      type: 'category',\n      label: 'Tutorials',\n      items: [\n        'tutorial-intro',\n        // highlight-start\n        {\n          type: 'autogenerated',\n          dirName: 'tutorials/easy', // Generate sidebar slice from docs/tutorials/easy\n        },\n        // highlight-end\n        'tutorial-medium',\n        // highlight-start\n        {\n          type: 'autogenerated',\n          dirName: 'tutorials/advanced', // Generate sidebar slice from docs/tutorials/hard\n        },\n        // highlight-end\n        'tutorial-end',\n      ],\n    },\n    // highlight-start\n    {\n      type: 'autogenerated',\n      dirName: 'guides', // Generate sidebar slice from docs/guides\n    },\n    // highlight-end\n    {\n      type: 'category',\n      label: 'Community',\n      items: ['team', 'chat'],\n    },\n  ],\n};\n")),(0,r.kt)("h4",{id:"autogenerated-sidebar-metadatas"},"Autogenerated sidebar metadatas"),(0,r.kt)("p",null,"By default, the sidebar slice will be generated in ",(0,r.kt)("strong",{parentName:"p"},"alphabetical order")," (using files and folders names)."),(0,r.kt)("p",null,"If the generated sidebar does not look good, you can assign additional metadatas to docs and categories."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For docs"),": use additional frontmatter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="docs/tutorials/tutorial-easy.md"',title:'"docs/tutorials/tutorial-easy.md"'},"+ ---\n+ sidebar_label: Easy\n+ sidebar_position: 2\n+ ---\n\n\n# Easy Tutorial\n\nThis is the easy tutorial!\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For categories"),": add a ",(0,r.kt)("inlineCode",{parentName:"p"},"_category_.json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"_category_.yml")," file in the appropriate folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="docs/tutorials/_category_.json"',title:'"docs/tutorials/_category_.json"'},'{\n  "label": "Tutorial",\n  "position": 3\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docs/tutorials/_category_.yml"',title:'"docs/tutorials/_category_.yml"'},"label: 'Tutorial'\nposition: 2.5 # float position is supported\ncollapsed: false # keep the category open by default\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The position metadata is only used ",(0,r.kt)("strong",{parentName:"p"},"inside a sidebar slice"),": Docusaurus does not re-order other items of your sidebar."))),(0,r.kt)("h4",{id:"using-number-prefixes"},"Using number prefixes"),(0,r.kt)("p",null,"A simple way to order an autogenerated sidebar is to prefix docs and folders by number prefixes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docs\n\u251c\u2500\u2500 01-Intro.md\n\u251c\u2500\u2500 02-Tutorial Easy\n\u2502\xa0\xa0 \u251c\u2500\u2500 01-First Part.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 02-Second Part.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 03-End.md\n\u251c\u2500\u2500 03-Tutorial Hard\n\u2502\xa0\xa0 \u251c\u2500\u2500 01-First Part.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 02-Second Part.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 03-Third Part.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 04-End.md\n\u2514\u2500\u2500 04-End.md\n")),(0,r.kt)("p",null,"To make it ",(0,r.kt)("strong",{parentName:"p"},"easier to adopt"),", Docusaurus supports ",(0,r.kt)("strong",{parentName:"p"},"multiple number prefix patterns"),"."),(0,r.kt)("p",null,"By default, Docusaurus will ",(0,r.kt)("strong",{parentName:"p"},"remove the number prefix")," from the doc id, title, label and url paths."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Prefer using ",(0,r.kt)("a",{parentName:"strong",href:"#autogenerated-sidebar-metadatas"},"additional metadatas")),"."),(0,r.kt)("p",{parentName:"div"},"Updating a number prefix can be annoying, as it can require ",(0,r.kt)("strong",{parentName:"p"},"updating multiple existing markdown links"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="docs/02-Tutorial Easy/01-First Part.md"',title:'"docs/02-Tutorial',"Easy/01-First":!0,'Part.md"':!0},"- Check the [Tutorial End](../04-End.md);\n+ Check the [Tutorial End](../05-End.md);\n")))),(0,r.kt)("h4",{id:"customize-the-sidebar-items-generator"},"Customize the sidebar items generator"),(0,r.kt)("p",null,"You can provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebarItemsGenerator")," function in the docs plugin (or preset) config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        sidebarItemsGenerator: async function ({\n          defaultSidebarItemsGenerator,\n          numberPrefixParser,\n          item,\n          version,\n          docs,\n        }) {\n          // Example: return an hardcoded list of static sidebar items\n          return [\n            {type: 'doc', id: 'doc1'},\n            {type: 'doc', id: 'doc2'},\n          ];\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Re-use and enhance the default generator")," instead of writing a generator from scratch."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Add, update, filter, re-order")," the sidebar items according to your use-case:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"// highlight-start\n// Reverse the sidebar items ordering (including nested category items)\nfunction reverseSidebarItems(items) {\n  // Reverse items in categories\n  const result = items.map((item) => {\n    if (item.type === 'category') {\n      return {...item, items: reverseSidebarItems(item.items)};\n    }\n    return item;\n  });\n  // Reverse items at current level\n  result.reverse();\n  return result;\n}\n// highlight-end\n\nmodule.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        sidebarItemsGenerator: async function ({\n          defaultSidebarItemsGenerator,\n          ...args\n        }) {\n          const sidebarItems = await defaultSidebarItemsGenerator(args);\n          return reverseSidebarItems(sidebarItems);\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n")))),(0,r.kt)("h2",{id:"hideable-sidebar"},"Hideable sidebar"),(0,r.kt)("p",null,"Using the enabled ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig.hideableSidebar")," option, you can make the entire sidebar hidden, allowing you to better focus your users on the content. This is especially useful when content consumption on medium screens (e.g. on tablets)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    // highlight-starrt\n    hideableSidebar: true,\n    // highlight-end\n  },\n};\n")),(0,r.kt)("h2",{id:"passing-custom-props"},"Passing custom props"),(0,r.kt)("p",null,"To pass in custom props to a swizzled sidebar item, add the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"customProps")," object to any of the items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  type: 'doc',\n  id: 'doc1',\n  customProps: {\n    /* props */\n  }\n}\n")),(0,r.kt)("h2",{id:"complex-sidebars-example"},"Complex sidebars example"),(0,r.kt)("p",null,"Real-world example from the Docusaurus site:"),(0,r.kt)(s.Z,{className:"language-js",title:"sidebars.js",mdxType:"CodeBlock"},a(76322).Z.split("\n").map((function(e){return!["#","/*","*"].some((function(t){return e.trim().startsWith(t)}))&&e})).filter(Boolean).join("\n")))}c.isMDXComponent=!0},76322:function(e,t){"use strict";t.Z="/*\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nmodule.exports = {\n  docs: [\n    'introduction',\n    {\n      type: 'category',\n      label: 'Getting Started',\n      collapsed: false,\n      items: ['installation', 'configuration', 'typescript-support'],\n    },\n    {\n      type: 'category',\n      label: 'Guides',\n      items: [\n        'guides/creating-pages',\n        {\n          Docs: [\n            'guides/docs/introduction',\n            'guides/docs/create-doc',\n            'guides/docs/sidebar',\n            'guides/docs/versioning',\n            'guides/docs/markdown-features',\n            'guides/docs/multi-instance',\n          ],\n        },\n        'blog',\n        {\n          type: 'category',\n          label: 'Markdown Features',\n          items: [\n            'guides/markdown-features/introduction',\n            'guides/markdown-features/react',\n            'guides/markdown-features/tabs',\n            'guides/markdown-features/code-blocks',\n            'guides/markdown-features/admonitions',\n            'guides/markdown-features/headings',\n            'guides/markdown-features/inline-toc',\n            'guides/markdown-features/assets',\n            'guides/markdown-features/plugins',\n            'guides/markdown-features/math-equations',\n          ],\n        },\n        'styling-layout',\n        'static-assets',\n        'search',\n        'browser-support',\n        'deployment',\n        {\n          type: 'category',\n          label: 'Internationalization',\n          items: [\n            {\n              type: 'doc',\n              id: 'i18n/introduction',\n              label: 'Introduction',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/tutorial',\n              label: 'Tutorial',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/git',\n              label: 'Using Git',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/crowdin',\n              label: 'Using Crowdin',\n            },\n          ],\n        },\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Advanced Guides',\n      items: ['using-plugins', 'using-themes', 'presets'],\n    },\n    {\n      type: 'category',\n      label: 'Migrating from v1 to v2',\n      items: [\n        'migration/migration-overview',\n        'migration/migration-automated',\n        'migration/migration-manual',\n        'migration/migration-versioned-sites',\n        'migration/migration-translated-sites',\n      ],\n    },\n  ],\n  api: [\n    'cli',\n    'docusaurus-core',\n    'api/docusaurus.config.js',\n    'lifecycle-apis',\n    {\n      type: 'category',\n      label: 'Plugins',\n      items: [\n        'api/plugins/plugins-overview',\n        'api/plugins/plugin-content-docs',\n        'api/plugins/plugin-content-blog',\n        'api/plugins/plugin-content-pages',\n        'api/plugins/plugin-client-redirects',\n        'api/plugins/plugin-debug',\n        'api/plugins/plugin-google-analytics',\n        'api/plugins/plugin-google-gtag',\n        'api/plugins/plugin-ideal-image',\n        'api/plugins/plugin-pwa',\n        'api/plugins/plugin-sitemap',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Themes',\n      items: [\n        'api/themes/themes-overview',\n        'api/themes/theme-configuration',\n        'api/themes/theme-classic',\n        'api/themes/theme-bootstrap',\n        'api/themes/theme-live-codeblock',\n        'api/themes/theme-search-algolia',\n      ],\n    },\n  ],\n};\n"}}]);