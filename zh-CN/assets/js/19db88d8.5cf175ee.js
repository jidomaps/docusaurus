(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[2547],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return m},kt:function(){return d}});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,b=p["".concat(s,".").concat(d)]||p[d]||c[d]||r;return n?t.createElement(b,i(i({ref:a},m),{},{components:n})):t.createElement(b,i({ref:a},m))}));function d(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98448:function(e,a,n){"use strict";var t=n(67294);a.Z=function(e){var a=e.children,n=e.hidden,l=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:l},a)}},12168:function(e,a,n){"use strict";n.d(a,{Z:function(){return m}});var t=n(67294),l=n(90050),r=n(86010),i="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var m=function(e){var a=e.lazy,n=e.block,m=e.defaultValue,c=e.values,p=e.groupId,d=e.className,b=(0,l.Z)(),v=b.tabGroupChoices,f=b.setTabGroupChoices,T=(0,t.useState)(m),g=T[0],h=T[1],w=t.Children.toArray(e.children),y=[];if(null!=p){var k=v[p];null!=k&&k!==g&&c.some((function(e){return e.value===k}))&&h(k)}var I=function(e){var a=e.currentTarget,n=y.indexOf(a),t=c[n].value;h(t),null!=p&&(f(p,t),setTimeout((function(){var e,n,t,l,r,i,s,u;(e=a.getBoundingClientRect(),n=e.top,t=e.left,l=e.bottom,r=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&r<=u&&l<=s&&t>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(o),setTimeout((function(){return a.classList.remove(o)}),2e3))}),150))},x=function(e){var a,n;switch(e.keyCode){case u:var t=y.indexOf(e.target)+1;n=y[t]||y[0];break;case s:var l=y.indexOf(e.target)-1;n=y[l]||y[y.length-1]}null==(a=n)||a.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},d)},c.map((function(e){var a=e.value,n=e.label;return t.createElement("li",{role:"tab",tabIndex:g===a?0:-1,"aria-selected":g===a,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":g===a}),key:a,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:I,onClick:I},n)}))),a?(0,t.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},w.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==g})}))))}},22713:function(e,a,n){"use strict";var t=(0,n(67294).createContext)(void 0);a.Z=t},90050:function(e,a,n){"use strict";var t=n(67294),l=n(22713);a.Z=function(){var e=(0,t.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},137:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return u},metadata:function(){return m},toc:function(){return c},default:function(){return d}});var t=n(22122),l=n(19756),r=(n(67294),n(3905)),i=n(12168),o=n(98448),s=["components"],u={id:"tabs",title:"Tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},m={unversionedId:"guides/markdown-features/tabs",id:"version-2.0.0-alpha.75/guides/markdown-features/tabs",isDocsHomePage:!1,title:"Tabs",description:"Using tabs inside Docusaurus Markdown",source:"@site/versioned_docs/version-2.0.0-alpha.75/guides/markdown-features/markdown-features-tabs.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/tabs",permalink:"/zh-CN/docs/2.0.0-alpha.75/markdown-features/tabs",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",version:"2.0.0-alpha.75",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1619800915,formattedLastUpdatedAt:"2021/4/30",frontMatter:{id:"tabs",title:"Tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},sidebar:"version-2.0.0-alpha.75/docs",previous:{title:"Using React",permalink:"/zh-CN/docs/2.0.0-alpha.75/markdown-features/react"},next:{title:"Code blocks",permalink:"/zh-CN/docs/2.0.0-alpha.75/markdown-features/code-blocks"}},c=[{value:"Syncing tab choices",id:"syncing-tab-choices",children:[]},{value:"Customizing tabs",id:"customizing-tabs",children:[]}],p={toc:c};function d(e){var a=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To show tabbed content within Markdown files, you can fall back on MDX. Docusaurus provides ",(0,r.kt)("inlineCode",{parentName:"p"},"<Tabs>")," components out-of-the-box."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>;\n")),(0,r.kt)("p",null,"And you will get the following:"),(0,r.kt)(i.Z,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,r.kt)(o.Z,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,r.kt)(o.Z,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, tabs are rendered eagerly, but it is possible to load them lazily by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tabs")," component."))),(0,r.kt)("h2",{id:"syncing-tab-choices"},"Syncing tab choices"),(0,r.kt)("p",null,"You may want choices of the same kind of tabs to sync with each other. For example, you might want to provide different instructions for users on Windows vs users on macOS, and you want to changing all OS-specific instructions tabs in one click. To achieve that, you can give all related tabs the same ",(0,r.kt)("inlineCode",{parentName:"p"},"groupId")," prop. Note that doing this will persist the choice in ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," and all ",(0,r.kt)("inlineCode",{parentName:"p"},"<Tab>")," instances with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"groupId")," will update automatically when the value of one of them is changed. Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"groupID")," are globally-namespaced."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,14}","{2,14}":!0},"<Tabs\n  groupId=\"operating-systems\"\n  defaultValue=\"win\"\n  values={[\n    {label: 'Windows', value: 'win'},\n    {label: 'macOS', value: 'mac'},\n  ]\n}>\n<TabItem value=\"win\">Use Ctrl + C to copy.</TabItem>\n<TabItem value=\"mac\">Use Command + C to copy.</TabItem>\n</Tabs>\n\n<Tabs\n  groupId=\"operating-systems\"\n  defaultValue=\"win\"\n  values={[\n    {label: 'Windows', value: 'win'},\n    {label: 'macOS', value: 'mac'},\n  ]\n}>\n<TabItem value=\"win\">Use Ctrl + V to paste.</TabItem>\n<TabItem value=\"mac\">Use Command + V to paste.</TabItem>\n</Tabs>\n")),(0,r.kt)(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},"Use Ctrl + C to copy."),(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},"Use Command + C to copy.")),(0,r.kt)(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},"Use Ctrl + V to paste."),(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},"Use Command + V to paste.")),(0,r.kt)("p",null,"For all tab groups that have the same ",(0,r.kt)("inlineCode",{parentName:"p"},"groupId"),", the possible values do not need to be the same. If one tab group with chooses an value that does not exist in another tab group with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"groupId"),", the tab group with the missing value won't change its tab. You can see that from the following example. Try to select Linux, and the above tab groups doesn't change."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Tabs\n  groupId=\"operating-systems\"\n  defaultValue=\"win\"\n  values={[\n    {label: 'Windows', value: 'win'},\n    {label: 'macOS', value: 'mac'},\n    {label: 'Linux', value: 'linux'},\n  ]}>\n  <TabItem value=\"win\">I am Windows.</TabItem>\n  <TabItem value=\"mac\">I am macOS.</TabItem>\n  <TabItem value=\"linux\">I am Linux.</TabItem>\n</Tabs>\n")),(0,r.kt)(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},"I am Windows."),(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},"I am macOS."),(0,r.kt)(o.Z,{value:"linux",mdxType:"TabItem"},"I am Linux.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Tab choices with different ",(0,r.kt)("inlineCode",{parentName:"p"},"groupId"),"s will not interfere with each other:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,14}","{2,14}":!0},"<Tabs\n  groupId=\"operating-systems\"\n  defaultValue=\"win\"\n  values={[\n    {label: 'Windows', value: 'win'},\n    {label: 'macOS', value: 'mac'},\n  ]\n}>\n<TabItem value=\"win\">Windows in windows.</TabItem>\n<TabItem value=\"mac\">macOS is macOS.</TabItem>\n</Tabs>\n\n<Tabs\n  groupId=\"non-mac-operating-systems\"\n  defaultValue=\"win\"\n  values={[\n    {label: 'Windows', value: 'win'},\n    {label: 'Unix', value: 'unix'},\n  ]\n}>\n<TabItem value=\"win\">Windows is windows.</TabItem>\n<TabItem value=\"unix\">Unix is unix.</TabItem>\n</Tabs>\n")),(0,r.kt)(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},"Windows in windows."),(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},"macOS is macOS.")),(0,r.kt)(i.Z,{groupId:"non-mac-operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Unix",value:"unix"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},"Windows is windows."),(0,r.kt)(o.Z,{value:"unix",mdxType:"TabItem"},"Unix is unix.")),(0,r.kt)("h2",{id:"customizing-tabs"},"Customizing tabs"),(0,r.kt)("p",null,"You might want to customize the appearance of certain set of tabs. To do that you can pass the string in ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," prop and the specified CSS class will be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tabs")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5}","{5}":!0},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  className=\"unique-tabs\"\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>;\n")),(0,r.kt)(i.Z,{className:"unique-tabs",defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,r.kt)(o.Z,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,r.kt)(o.Z,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))}d.isMDXComponent=!0},86010:function(e,a,n){"use strict";function t(e){var a,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=t(e[a]))&&(l&&(l+=" "),l+=n);else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}function l(){for(var e,a,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(a=t(e))&&(l&&(l+=" "),l+=a);return l}n.d(a,{Z:function(){return l}})}}]);