(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[3797],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(r),m=o,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||n;return r?a.createElement(d,u(u({ref:t},p),{},{components:r})):a.createElement(d,u({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,u=new Array(n);u[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<n;l++)u[l]=r[l];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},83978:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=r(22122),o=r(19756),n=(r(67294),r(3905)),u=["components"],i={title:"Docusaurus 2019 Recap",author:"Yangshun Tay",authorTitle:"Front End Engineer at Facebook",authorURL:"https://github.com/yangshun",authorImageURL:"https://avatars1.githubusercontent.com/u/1315101?s=460&v=4",authorTwitter:"yangshunz",tags:["recap"]},s={permalink:"/fr/blog/2019/12/30/docusaurus-2019-recap",editUrl:"https://crowdin.com/project/docusaurus-v2/fr",source:"@site/blog/2019-12-30-docusaurus-2019-recap.md",title:"Docusaurus 2019 Recap",description:"2019 was a great year for Docusaurus - we've made tremendous progress on Docusaurus 2. Current Docusaurus 1 users who aren't using the translations feature can feel free to check it out and migrate to it! Otherwise we will work with you to make that happen in 2020 :)",date:"2019-12-30T00:00:00.000Z",formattedDate:"29 d\xe9cembre 2019",tags:[{label:"recap",permalink:"/fr/blog/tags/recap"}],readingTime:2.725,truncated:!0,prevItem:{title:"Tribute to Endi",permalink:"/fr/blog/2020/01/07/tribute-to-endi"},nextItem:{title:"Happy 1st Birthday Slash!",permalink:"/fr/blog/2018/12/14/Happy-First-Birthday-Slash"}},l=[{value:"Docusaurus 2 (D2)",id:"docusaurus-2-d2",children:[]},{value:"GitHub Activity",id:"github-activity",children:[]},{value:"Notable Users",id:"notable-users",children:[]},{value:"Media",id:"media",children:[]},{value:"Community",id:"community",children:[]},{value:"Looking Ahead",id:"looking-ahead",children:[]}],p={toc:l};function c(e){var t=e.components,r=(0,o.Z)(e,u);return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"2019 was a great year for Docusaurus - we've made tremendous progress on ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus 2"),". Current Docusaurus 1 users who aren't using the translations feature can feel free to check it out and ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/migration"},"migrate")," to it! Otherwise we will work with you to make that happen in 2020 :)"),(0,n.kt)("h2",{id:"docusaurus-2-d2"},"Docusaurus 2 (D2)"),(0,n.kt)("p",null,"In 2018, we proposed to rebuild ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/789"},"Docusaurus from the ground up"),". It involved a major rearchitecture effort - we created a content-centric CSS framework from scratch, a plugins system, and moved from static HTML pages to be a single page-app with prerendered routes. It was a wild adventure and a tough feat, especially with no dedicated FTE working on the project. With the help of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/endiliey"},"@endilie"),", our ex-intern-turned-contributor-turned-maintainer, we made really good progress on D2 and are currently on version 2.0.0-alpha.40. All features in Docusaurus 1 except for translations have been ported over."),(0,n.kt)("p",null,"D2's killer features are ",(0,n.kt)("strong",{parentName:"p"},"Dark Mode")," and its ",(0,n.kt)("strong",{parentName:"p"},"superb performance"),". D2 has dark mode support out-of-the-box and it is near effortless to create a dark mode-friendly documentation site. Endilie put in great effort into optimizing the performance of the site and a bunch of performance optimization tricks have been done under the hood by default - optimized images, prerendering every route to static HTML and client-side routing thereafter, prefetching assets needed by future navigations whenever the user hovers over a navigation link, etc."),(0,n.kt)("p",null,"Last but not least, we implemented a plugins architecture and turned the repo into a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/tree/master/packages"},"Lerna monorepo"),". We believe this plugin architecture will be helpful towards building a community and also allowing users to build their own features for their unique use cases."),(0,n.kt)("h2",{id:"github-activity"},"GitHub Activity"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stars: 10050 -> 14632 (+45.6% y/y)"),(0,n.kt)("li",{parentName:"ul"},"Total Contributors: 182 -> 303 (+66.4% y/y). Most of which are non-Facebook contributors"),(0,n.kt)("li",{parentName:"ul"},"Daily npm Downloads: 728 -> 2320 (+218.7% y/y). The peak was in November"),(0,n.kt)("li",{parentName:"ul"},"D1 is currently used by 3872 projects on GitHub while D2 is used by 247 projects on GitHub"),(0,n.kt)("li",{parentName:"ul"},"We now have 4 active core contributors! (+100% y/y)")),(0,n.kt)("h2",{id:"notable-users"},"Notable Users"),(0,n.kt)("p",null,"A good portion of the projects within the Open Source community use Docusaurus. This half we also onboarded more notable projects onto Docusaurus 2:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://create-react-app.dev/"},"Create React App")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redux.js.org/"},"Redux")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://draftjs.org/"},"Draft.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://facebook.github.io/flux/"},"Flux"))),(0,n.kt)("p",null,"And welcomed more projects to Docusaurus 1:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.libra.org/"},"Libra")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mobx.js.org/"},"MobX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://immerjs.github.io/immer/"},"Immer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sorbet.org/"},"Sorbet"))),(0,n.kt)("h2",{id:"media"},"Media"),(0,n.kt)("p",null,"Yangshun gave a classroom session during F8 about ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=QcGJsf6mgZE"},"Using Docusaurus to Create Open Source Websites"),"."),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("p",null,"A few third-party hosting/development services also has first-class integration with a Docusaurus setup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zeit/now-examples/tree/master/docusaurus"},"ZEIT Now deployment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/docusaurus-template-x3vg9"},"CodeSandbox")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://render.com/docs/deploy-docusaurus"},"Render"))),(0,n.kt)("h2",{id:"looking-ahead"},"Looking Ahead"),(0,n.kt)("p",null,"D2 has gained some traction among the ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/showcase"},"developer community"),". In 2020, we want to achieve full feature parity with D1 by the first half and help the remaining Facebook projects on D1 move to D2. It would also be great if we could use Docusaurus for internal documentation, but that is a non-trivial undertaking. If you have a need for it or have some ideas, come speak with us!"),(0,n.kt)("p",null,"Huge thanks to the community for their contributions, especially the core team - ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/endiliey"},"Endilie Yacop Sucipto"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lex111"},"Alexey Pyltsyn"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wgao19"},"Wei Gao"),". Lastly, thank you ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JoelMarcey"},"Joel Marcey")," for starting Docusaurus and supporting the project all this time."),(0,n.kt)("p",null,"Cheers to a great 2020! \ud83c\udf89"))}c.isMDXComponent=!0}}]);