(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[9969],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=l(a),m=s,d=h["".concat(i,".").concat(m)]||h[m]||p[m]||n;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,o=new Array(n);o[0]=h;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:s,o[1]=u;for(var l=2;l<n;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},55127:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var r=a(22122),s=a(19756),n=(a(67294),a(3905)),o=["components"],u={title:"Announcing Docusaurus 2 Beta",author:"S\xe9bastien Lorber",authorTitle:"Docusaurus maintainer",authorURL:"https://sebastienlorber.com",authorImageURL:"https://github.com/slorber.png",authorTwitter:"sebastienlorber",tags:["release","beta"],image:"/img/blog/2021-05-12-announcing-docusaurus-two-beta/social-card.png"},i={permalink:"/zh-CN/blog/2021/05/12/announcing-docusaurus-two-beta",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",source:"@site/blog/2021-05-12-announcing-docusaurus-two-beta.md",title:"Announcing Docusaurus 2 Beta",description:"After a lengthy alpha stage in order to ensure feature parity and quality, we are excited to officially release the first Docusaurus 2 beta.",date:"2021-05-12T00:00:00.000Z",formattedDate:"2021\u5e745\u670811\u65e5",tags:[{label:"release",permalink:"/zh-CN/blog/tags/release"},{label:"beta",permalink:"/zh-CN/blog/tags/beta"}],readingTime:3.225,truncated:!0,nextItem:{title:"Releasing Docusaurus i18n",permalink:"/zh-CN/blog/2021/03/09/releasing-docusaurus-i18n"}},l=[{value:"Docusaurus adoption",id:"docusaurus-adoption",children:[]},{value:"Why was Docusaurus v2 in alpha for so long?",id:"why-was-docusaurus-v2-in-alpha-for-so-long",children:[]},{value:"What are the goals of the beta?",id:"what-are-the-goals-of-the-beta",children:[]},{value:"What&#39;s new?",id:"whats-new",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:l};function p(e){var t=e.components,u=(0,s.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"After a lengthy alpha stage in order to ensure feature parity and quality, we are excited to officially release the first ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-beta.0"},"Docusaurus 2 beta")),"."),(0,n.kt)("p",null,"With the announcement of this beta, the team is even more confident that Docusaurus 2 is ",(0,n.kt)("strong",{parentName:"p"},"ready for mainstream adoption"),"!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus beta party",src:a(7713).Z})),(0,n.kt)("h2",{id:"docusaurus-adoption"},"Docusaurus adoption"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Don't fear the beta tag!")),(0,n.kt)("p",null,"Docusaurus 2 is widely adopted and growing fast:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmtrends.com/docusaurus-vs-@docusaurus/core"},(0,n.kt)("img",{alt:"Docusaurus growth",src:a(71856).Z}))),(0,n.kt)("p",null,"To get a fuller understanding of the quality of current Docusaurus 2 sites, our new ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/showcase"},"showcase")," page allows you to filter Docusaurus sites by features, so you may get inspired by real-world production sites with a similar use-case as yours!"),(0,n.kt)("p",null,"Don't miss our ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/showcase?tags=favorite"},"favorite")," sites; they all stand out with something unique:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/showcase?tags=favorite"},(0,n.kt)("img",{alt:"Docusaurus growth",src:a(79336).Z}))),(0,n.kt)("h2",{id:"why-was-docusaurus-v2-in-alpha-for-so-long"},"Why was Docusaurus v2 in alpha for so long?"),(0,n.kt)("p",null,"It's hard to believe that the first alpha release ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-alpha.0"},"v2.0.0-alpha.0")," was 2 years ago \ud83d\ude33 , unusually long for a software alpha."),(0,n.kt)("p",null,"As this was a substantial re-architecture of the code base, we wanted to ensure that we had confidence in the stability and features of Docusaurus 2 before moving on to a beta stage, since beta suggests a high level of quality. We are happy to say that Docusaurus 2 has reached ",(0,n.kt)("strong",{parentName:"p"},"feature parity")," with Docusaurus 1 with ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docusaurus.io/blog/2021/03/09/releasing-docusaurus-i18n"},"i18n")),", and it has been ",(0,n.kt)("strong",{parentName:"p"},"successfully adopted")," by many Docusaurus sites (see ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/showcase?tags=i18n"},"i18n showcase"),")."),(0,n.kt)("p",null,"We're now quite confident that the core features of Docusaurus 2 are stable enough to be in beta."),(0,n.kt)("h2",{id:"what-are-the-goals-of-the-beta"},"What are the goals of the beta?"),(0,n.kt)("p",null,"Now that Docusaurus 2 is stable and major feature complete, the goal of the beta is to inspire confidence in new users on the production-readiness of Docusaurus 2, migrate more remaining Docusaurus 1 users to version 2, and officially deprecate Docusaurus 1. We will, of course, continue to resolve any issues and bugs that may be discovered."),(0,n.kt)("p",null,"In addition, we will use the beta phase to ",(0,n.kt)("strong",{parentName:"p"},"improve our theming system"),"."),(0,n.kt)("p",null,"We want to make it:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"easier to implement a custom theme"),", including for ourselves. We want to provide ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/3522"},"multiple official themes")," (including ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/2961"},"Tailwind CSS"),") for a long time.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"safer to extend an existing theme"),": it can be painful to upgrade a highly customized Docusaurus site, as customizations can conflict with internal changes. We need to make the theme public API surface more explicit, and make it clear what is safe to customize."))),(0,n.kt)("p",null,"We will build a better ",(0,n.kt)("strong",{parentName:"p"},"theming infrastructure")," and refactor the classic theme to use it."),(0,n.kt)("p",null,"If you customize your site, you may find these planned improvements quite valuable."),(0,n.kt)("h2",{id:"whats-new"},"What's new?"),(0,n.kt)("p",null,"In case you missed it, we recently shipped two major improvements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/sidebar#sidebar-item-autogenerated"},"Auto-generated sidebars"),": no need to maintain a ",(0,n.kt)("inlineCode",{parentName:"li"},"sidebars.js")," file anymore!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/issues/4027"},"Webpack 5 / PostCSS 8"),": persistent caching significantly speeds up ",(0,n.kt)("strong",{parentName:"li"},"rebuild time"),"!")),(0,n.kt)("h2",{id:"whats-next"},"What's next?"),(0,n.kt)("p",null,"Shipping the official 2.0 release!"),(0,n.kt)("p",null,"To get there, we will continue to ",(0,n.kt)("strong",{parentName:"p"},"fix bugs")," and implement the ",(0,n.kt)("strong",{parentName:"p"},"most wanted features"),", including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/issues/2643"},"Sidebar category index pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/issues/2220"},"Better mobile navigation UX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/infima/issues/55"},"Better admonition design")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/issues/3236"},"CSS-in-JS support")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/issues/4765"},"Improve build time performance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/issues/4138"},"Extend Docusaurus plugins, CMS integration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/issues/3372"},"Fix trailing slashes and relative link issues")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/issues/3018"},"Better compatibility with CommonMark")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/issues/4029"},"Upgrade to MDX 2.0"))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"This is an exciting time for Docusaurus."),(0,n.kt)("p",null,"We are inspired by the ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/sebastienlorber/timelines/1392048416872706049"},"positive feedback")," about Docusaurus, and discover new sites online every single day."),(0,n.kt)("p",null,"We are so excited for this beta release. We strove for quality and stability while continuing to try to increase the adoption of Docusaurus. For those that have been on the fence from migrating an existing Docusaurus site to Docusaurus 2, it is a great time to upgrade. We want you running on the latest infrastructure when we deprecate Docusaurus 1 at the end of this beta period. Let us know how we can help."),(0,n.kt)("p",null,"Thank you to everyone for reading and to the entire community who supports Docusaurus. \ud83e\udd17"))}p.isMDXComponent=!0},79336:function(e,t,a){"use strict";t.Z=a.p+"assets/images/favorites-7220082695a33eba77188ba7223c165c.png"},7713:function(e,t,a){"use strict";t.Z=a.p+"assets/images/image_cropped-2744c01b1fc0b451dbdb65a1d568fbff.png"},71856:function(e,t,a){"use strict";t.Z=a.p+"assets/images/trend-2735e446f67fbcaa0811d103588e9b82.png"}}]);