(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[9514],{99950:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ie}});var a=n(67294),i=n(3905),r=n(39962),l=n(27401),o=n(81361),c=n(22122),s=n(19756),u=n(86010),d=n(83551),m=n(90050),b=n(69729),p=n(93301),f=n(5717),h=n(92511),v=n(2735),E=n(32827),k=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=n(16416),_=n(66585),C="sidebar_15mo",Z="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",y="sidebarLogo_3h0W",I="menu_Bmed",S="menuLinkText_2aKo",w="menuWithAnnouncementBar_2WvA",x="collapseSidebarButton_1CGd",A="collapseSidebarButtonIcon_3E-R",B="sidebarMenuIcon_fgN0",L="sidebarMenuCloseIcon_1lpH",R="menuLinkExternal_1OhN",T=["items"],M=["item","onItemClick","collapsible","activePath"],P=["item","onItemClick","activePath","collapsible"];var H=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},O=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,T);return t.map((function(e,t){return a.createElement(W,(0,c.Z)({key:t,item:e},n))}))}));function W(e){switch(e.item.type){case"category":return a.createElement(D,e);case"link":default:return a.createElement(F,e)}}function D(e){var t,n,i,r=e.item,l=e.onItemClick,o=e.collapsible,d=e.activePath,m=(0,s.Z)(e,M),b=r.items,p=r.label,f=H(r,d),h=(n=f,i=(0,a.useRef)(n),(0,a.useEffect)((function(){i.current=n}),[n]),i.current),v=(0,a.useState)((function(){return!!o&&(!f&&r.collapsed)})),E=v[0],k=v[1],g=(0,a.useRef)(null),_=(0,a.useState)(void 0),C=_[0],Z=_[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){f&&!h&&E&&k(!1)}),[f,h,E]);var y=(0,a.useCallback)((function(e){e.preventDefault(),C||N(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},a.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&f},t[S]=!o,t)),onClick:o?y:void 0,href:o?"#!":void 0},m),p),a.createElement("ul",{className:"menu__list",ref:g,style:{height:C},onTransitionEnd:function(){E||N(!1)}},a.createElement(O,{items:b,tabIndex:E?"-1":"0",onItemClick:l,collapsible:o,activePath:d})))}function F(e){var t,n=e.item,i=e.onItemClick,r=e.activePath,l=(e.collapsible,(0,s.Z)(e,P)),o=n.href,d=n.label,m=H(n,r);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(h.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[R]=!(0,v.Z)(o),t)),to:o},(0,v.Z)(o)&&{isNavLink:!0,exact:!0,onClick:i},l),d))}function j(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,_.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",x),onClick:t},a.createElement(k,{className:A}))}function K(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,_.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,_.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(B,L)},"\xd7"):a.createElement(g.Z,{className:B,height:24,width:24}))}var U=function(e){var t,n,i=e.path,r=e.sidebar,l=e.sidebarCollapsible,o=void 0===l||l,c=e.onCollapse,s=e.isHidden,h=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],i=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||i(0===n)})),n}(),v=(0,d.LU)(),k=v.navbar.hideOnScroll,g=v.hideableSidebar,_=(0,m.Z)().isAnnouncementBarClosed,S=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,a.useEffect)((function(){i===p.D.desktop&&n(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),x=S.showResponsiveSidebar,A=S.closeResponsiveSidebar,B=S.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(C,(t={},t[Z]=k,t[N]=s,t))},k&&a.createElement(E.Z,{tabIndex:-1,className:y}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",I,(n={"menu--show":x},n[w]=!_&&h,n))},a.createElement(K,{responsiveSidebarOpened:x,onClick:B}),a.createElement("ul",{className:"menu__list"},a.createElement(O,{items:r,onItemClick:A,collapsible:o,activePath:i}))),g&&a.createElement(j,{onClick:c}))},V=n(57889),q=n(20383),z=n(5977),J="docPage_31aa",Y="docMainContainer_3ufF",G="docMainContainerEnhanced_3NYZ",Q="docSidebarContainer_3Kbt",X="docSidebarContainerHidden_3pA8",$="collapsedDocSidebar_2JMH",ee="expandSidebarButtonIcon_1naQ",te="docItemWrapperEnhanced_2vyJ",ne="docItemWrapper_3FMP";function ae(e){var t,n,l,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,f=(0,r.default)(),h=f.siteConfig,v=f.isClient,E=b.pluginId,g=b.permalinkToSidebar,C=b.docsSidebars,Z=b.version,N=g[m.path],y=C[N],I=(0,a.useState)(!1),S=I[0],w=I[1],x=(0,a.useState)(!1),A=x[0],B=x[1],L=(0,a.useCallback)((function(){A&&B(!1),w(!S)}),[A]);return a.createElement(o.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:Z,tag:(0,d.os)(E,Z)}},a.createElement("div",{className:J},y&&a.createElement("div",{className:(0,u.Z)(Q,(t={},t[X]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q)&&S&&B(!0)},role:"complementary"},a.createElement(U,{key:N,sidebar:y,path:m.path,sidebarCollapsible:null==(n=null==(l=h.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:L,isHidden:A}),A&&a.createElement("div",{className:$,title:(0,_.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:L,onClick:L},a.createElement(k,{className:ee}))),a.createElement("main",{className:(0,u.Z)(Y,(c={},c[G]=S||!y,c))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",ne,(s={},s[te]=S,s))},a.createElement(i.Zo,{components:V.Z},p)))))}var ie=function(e){var t=e.route.routes,n=e.versionMetadata,i=e.location,r=t.find((function(e){return(0,z.LX)(i.pathname,e)}));return r?a.createElement(ae,{currentDocRoute:r,versionMetadata:n},(0,l.Z)(t)):a.createElement(q.default,e)}},57889:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(67294),i=n(92511),r=n(4226),l=n(19756),o=n(86010),c=n(66585),s=n(83551),u="enhancedAnchor_2LWZ",d=["id"],m=function(e){return function(t){var n,i=t.id,r=(0,l.Z)(t,d),m=(0,s.LU)().navbar.hideOnScroll;return i?a.createElement(e,r,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",(n={},n[u]=!m,n)),id:i}),r.children,a.createElement("a",{className:"hash-link",href:"#"+i,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(e,r)}},b={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(r.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(i.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(r.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:m("h1"),h2:m("h2"),h3:m("h3"),h4:m("h4"),h5:m("h5"),h6:m("h6")}},99480:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(67294),i=n(81361);var r=function(){!function(e,t,n,a){function i(){if(!t.getElementById("canny-jssdk")){var e=t.getElementsByTagName(a)[0],n=t.createElement(a);n.type="text/javascript",n.async=!0,n.src="https://canny.io/sdk.js",e.parentNode.insertBefore(n,e)}}if("function"!=typeof e.Canny){var r=function e(){e.q.push(arguments)};r.q=[],e.Canny=r,"complete"===t.readyState?i():e.attachEvent?e.attachEvent("onload",i):e.addEventListener("load",i,!1)}}(window,document,0,"script")},l=n(86010),o="feedbackBackground_1ZcW";var c=function(){return(0,a.useEffect)((function(){r(),window.Canny&&window.Canny("render",{boardToken:"054e0e53-d951-b14c-7e74-9eb8f9ed2f91",basePath:"/feedback"})}),[]),a.createElement(i.Z,{title:"Feedback",description:"Docusaurus 2 Feedback page"},a.createElement("main",{className:(0,l.Z)("container","margin-vert--xl",o),"data-canny":!0}))}},20383:function(e,t,n){"use strict";n.r(t);var a=n(67294),i=n(81361),r=n(99480);t.default=function(e){var t=e.location;return/^\/\bfeedback\b/.test(t.pathname)?a.createElement(r.default,null):a.createElement(i.Z,{title:"Page Not Found"},a.createElement("main",{className:"container margin-vert--xl","data-canny":!0},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.createElement("p",null,"We could not find what you were looking for."),a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},52227:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a={};n.r(a),n.d(a,{ButtonExample:function(){return l}});var i=n(67294),r=n(22122),l=function(e){return i.createElement("button",(0,r.Z)({},e,{style:Object.assign({backgroundColor:"white",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))},o=Object.assign({React:i},i,a)}}]);