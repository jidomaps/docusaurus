(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[1361],{92511:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(19756),a=n(67294),o=n(73727),l=n(2735),c=n(36136),i=(0,a.createContext)({collectLink:function(){}}),s=n(79524),u=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m,d=e.isNavLink,f=e.to,v=e.href,h=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,p=void 0===E||E,k=(0,r.Z)(e,u),Z=(0,s.C)().withBaseUrl,_=(0,a.useContext)(i),w=f||v,y=(0,l.Z)(w),N=null==w?void 0:w.replace("pathname://",""),C=void 0!==N?(n=N,p&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0,L=(0,a.useRef)(!1),A=d?o.OL:o.rU,I=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!I&&y&&null!=C&&window.docusaurus.prefetch(C),function(){I&&m&&m.disconnect()}}),[C,I,y]);var B=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,D=!C||!y||B;return C&&y&&!B&&!g&&_.collectLink(C),D?a.createElement("a",Object.assign({href:C},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(A,Object.assign({},k,{onMouseEnter:function(){L.current||null==C||(window.docusaurus.preload(C),L.current=!0)},innerRef:function(e){var t,n;I&&e&&y&&(t=e,n=function(){null!=C&&window.docusaurus.prefetch(C)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),n())}))}))).observe(t))},to:C||""},d&&{isActive:b,activeClassName:h}))}},2735:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},79524:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(39962),a=n(2735);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,c=void 0!==l&&l,i=o.absolute,s=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},16416:function(e,t,n){"use strict";var r=n(22122),a=n(19756),o=n(67294),l=["width","height","className"];t.Z=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=(0,a.Z)(e,l);return o.createElement("svg",(0,r.Z)({"aria-label":"Menu",className:s,width:n,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},u),o.createElement("title",null,"Menu"),o.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},81361:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ae}});var r=n(67294),a=n(86010),o=n(66585),l=n(5977),c="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,l.TH)();return(0,r.useEffect)((function(){!t.hash&&e.current&&i(e.current)}),[t.pathname]),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u=n(83551),m=n(90050),d="announcementBar_3WsW",f="announcementBarClose_38nx",v="announcementBarContent_3EUC",h="announcementBarCloseable_3myR";var b=function(){var e,t=(0,m.Z)(),n=t.isAnnouncementBarClosed,l=t.closeAnnouncementBar,c=(0,u.LU)().announcementBar;if(!c)return null;var i=c.content,s=c.backgroundColor,b=c.textColor,g=c.isCloseable;return!i||g&&n?null:r.createElement("div",{className:d,style:{backgroundColor:s,color:b},role:"banner"},r.createElement("div",{className:(0,a.Z)(v,(e={},e[h]=g,e)),dangerouslySetInnerHTML:{__html:i}}),g?r.createElement("button",{type:"button",className:f,onClick:l,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=n(22122),E=function(){return null},p=n(39962),k={toggle:"toggle_71bT"},Z=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(k.toggle,k.dark),style:n},t)},_=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(k.toggle,k.light),style:n},t)},w=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,c=e.onChange,i=(0,r.useState)(o),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.createElement("div",{className:"react-toggle-thumb"}),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function y(e){var t=(0,u.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,c=(0,p.default)().isClient;return r.createElement(w,(0,g.Z)({disabled:!c,icons:{checked:r.createElement(Z,{icon:n,style:a}),unchecked:r.createElement(_,{icon:o,style:l})}},e))}var N=n(48002),C=n(5717),L=function(e){var t=(0,l.TH)(),n=(0,r.useState)(e),a=n[0],o=n[1],c=(0,r.useRef)(!1),i=(0,r.useState)(0),s=i[0],u=i[1],m=(0,r.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,C.Z)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)o(!0);else{if(c.current)return c.current=!1,void o(!1);a&&0===r&&o(!0);var l=document.documentElement.scrollHeight-s,i=window.innerHeight;a&&r>=a?o(!1):r+i<l&&o(!0)}}),[s,c]),(0,r.useEffect)((function(){e&&o(!0)}),[t.pathname]),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}},A=n(69729),I=n(93301),B=n(19756),D=n(36971),T=["width","height"],U=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,l=(0,B.Z)(e,T);return r.createElement("svg",(0,g.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:o},l),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},S=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function x(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,o=(0,B.Z)(e,S),l=(0,p.default)().i18n,c=l.currentLocale,i=l.locales,s=l.localeConfigs,m=(0,u.l5)();function d(e){return s[e].label}var f=i.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===c?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,a),h=t?"Languages":d(c);return r.createElement(D.Z,(0,g.Z)({},o,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(U,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:v}))}var M="searchWrapper_3rmH";function H(e){return e.mobile?null:r.createElement("div",{className:M},r.createElement(E,null))}var V=["type"],R={default:function(){return D.Z},localeDropdown:function(){return x},search:function(){return H},docsVersion:function(){return n(66028).Z},docsVersionDropdown:function(){return n(37999).Z},doc:function(){return n(24520).Z}};function W(e){var t=e.type,n=(0,B.Z)(e,V),a=function(e){void 0===e&&(e="default");var t=R[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.createElement(a,n)}var O=n(32827),P=n(16416),j="displayOnlyInLargeViewport_GrZ2",z="navbarHideable_2qcr",G="navbarHidden_3yey",F="right";var q=function(){var e,t=(0,u.LU)(),n=t.navbar,o=n.items,l=n.hideOnScroll,c=n.style,i=t.colorMode.disableSwitch,s=(0,r.useState)(!1),m=s[0],d=s[1],f=(0,N.Z)(),v=f.isDarkTheme,h=f.setLightTheme,b=f.setDarkTheme,p=L(l),k=p.navbarRef,Z=p.isNavbarVisible;(0,A.Z)(m);var _=(0,r.useCallback)((function(){d(!0)}),[d]),w=(0,r.useCallback)((function(){d(!1)}),[d]),C=(0,r.useCallback)((function(e){return e.target.checked?b():h()}),[h,b]),B=(0,I.Z)();(0,r.useEffect)((function(){B===I.D.desktop&&d(!1)}),[B]);var D=o.some((function(e){return"search"===e.type})),T=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:F)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:F)}))}}(o),U=T.leftItems,S=T.rightItems;return r.createElement("nav",{ref:k,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===c,"navbar--primary":"primary"===c,"navbar-sidebar--show":m},e[z]=l,e[G]=l&&!Z,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:_,onKeyDown:_},r.createElement(P.Z,null)),r.createElement(O.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,a.Z)("navbar__title")}),U.map((function(e,t){return r.createElement(W,(0,g.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},S.map((function(e,t){return r.createElement(W,(0,g.Z)({},e,{key:t}))})),!i&&r.createElement(y,{className:j,checked:v,onChange:C}),!D&&r.createElement(E,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:w}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(O.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:w}),!i&&m&&r.createElement(y,{checked:v,onChange:C})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(W,(0,g.Z)({mobile:!0},e,{onClick:w,key:t}))})))))))},Q=n(92511),Y=n(79524),J="footerLogoLink_MyFc",K=n(14087),X=["to","href","label","prependBaseUrlToHref"];function $(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,B.Z)(e,X),c=(0,Y.Z)(t),i=(0,Y.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(Q.Z,(0,g.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),a)}var ee=function(e){var t=e.sources,n=e.alt;return r.createElement(K.Z,{className:"footer__logo",alt:n,sources:t})};var te=function(){var e=(0,u.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,c=t.logo,i=void 0===c?{}:c,s={light:(0,Y.Z)(i.src),dark:(0,Y.Z)(i.srcDark||i.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},l&&l.length>0&&r.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement($,e))}))):null)}))),(i||n)&&r.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},i.href?r.createElement(Q.Z,{href:i.href,className:J},r.createElement(ee,{alt:i.alt,sources:s})):r.createElement(ee,{alt:i.alt,sources:s})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},ne=n(36136),re=(0,u.WA)("theme"),ae="light",oe="dark",le=function(e){return e===oe?oe:ae},ce=function(e){(0,u.WA)("theme").set(le(e))},ie=function(){var e=(0,u.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return ne.Z.canUseDOM?le(document.documentElement.getAttribute("data-theme")):le(e)}(t)),l=o[0],c=o[1],i=(0,r.useCallback)((function(){c(ae),ce(ae)}),[]),s=(0,r.useCallback)((function(){c(oe),ce(oe)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",le(l))}),[l]),(0,r.useEffect)((function(){if(!n)try{var e=re.get();null!==e&&c(le(e))}catch(t){console.error(t)}}),[c]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?oe:ae)}))}),[]),{isDarkTheme:l===oe,setLightTheme:i,setDarkTheme:s}},se=n(25406);var ue=function(e){var t=ie(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(se.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)};function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function de(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var fe="docusaurus.tab.",ve=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,u.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{for(var e,t={},r=de((0,u._f)());!(e=r()).done;){var a=e.value;if(a.startsWith(fe))t[a.substring(fe.length)]=(0,u.WA)(a).get()}n(t)}catch(o){console.error(o)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},he=(0,u.WA)("docusaurus.announcement.dismiss"),be=(0,u.WA)("docusaurus.announcement.id"),ge=function(){var e=(0,u.LU)().announcementBar,t=(0,r.useState)(!0),n=t[0],a=t[1],o=(0,r.useCallback)((function(){he.set("true"),a(!0)}),[]);return(0,r.useEffect)((function(){if(e){var t=e.id,n=be.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;be.set(t),r&&he.set("false"),(r||"false"===he.get())&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}},Ee=n(22713);var pe=function(e){var t=ve(),n=t.tabGroupChoices,a=t.setTabGroupChoices,o=ge(),l=o.isAnnouncementBarClosed,c=o.closeAnnouncementBar;return r.createElement(Ee.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:l,closeAnnouncementBar:c}},e.children)};function ke(e){var t=e.children;return r.createElement(ue,null,r.createElement(pe,null,r.createElement(u.L5,null,t)))}var Ze=n(89584);function _e(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(Ze.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:""+t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var we=n(24175);function ye(){var e=(0,p.default)().i18n,t=e.defaultLocale,n=e.locales,a=(0,u.l5)();return r.createElement(Ze.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Ne(e){var t=e.permalink,n=(0,p.default)().siteConfig.url,a=function(){var e=(0,p.default)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,Y.Z)(t)}(),o=t?""+n+t:a;return r.createElement(Ze.Z,null,r.createElement("meta",{property:"og:url",content:o}),r.createElement("link",{rel:"canonical",href:o}))}function Ce(e){var t=(0,p.default)(),n=t.siteConfig,a=n.favicon,o=n.themeConfig.metadatas,l=t.i18n,c=l.currentLocale,i=l.localeConfigs,s=e.title,m=e.description,d=e.image,f=e.keywords,v=e.searchMetadatas,h=(0,Y.Z)(a),b=(0,u.pe)(s),E=c,k=i[c].direction;return r.createElement(r.Fragment,null,r.createElement(Ze.Z,null,r.createElement("html",{lang:E,dir:k}),a&&r.createElement("link",{rel:"shortcut icon",href:h}),r.createElement("title",null,b),r.createElement("meta",{property:"og:title",content:b})),r.createElement(we.Z,{description:m,keywords:f,image:d}),r.createElement(Ne,null),r.createElement(ye,null),r.createElement(_e,(0,g.Z)({tag:u.HX,locale:c},v)),r.createElement(Ze.Z,null,o.map((function(e,t){return r.createElement("meta",(0,g.Z)({key:"metadata_"+t},e))}))))}var Le=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Ae=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return Le(),r.createElement(ke,null,r.createElement(Ce,e),r.createElement(s,null),r.createElement(b,null),r.createElement(q,null),r.createElement("div",{className:(0,a.Z)(u.kM.wrapper.main,o,l)},t),!n&&r.createElement(te,null))}},32827:function(e,t,n){"use strict";var r=n(22122),a=n(19756),o=n(67294),l=n(92511),c=n(14087),i=n(79524),s=n(39962),u=n(83551),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.default)().isClient,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,b=e.titleClassName,g=(0,a.Z)(e,m),E=(0,i.Z)(v.href||"/"),p={light:(0,i.Z)(v.src),dark:(0,i.Z)(v.srcDark||v.src)};return o.createElement(l.Z,(0,r.Z)({to:E},g,v.target&&{target:v.target}),v.src&&o.createElement(c.Z,{key:t,className:h,sources:p,alt:v.alt||d||"Logo"}),null!=d&&o.createElement("strong",{className:b},d))}},36971:function(e,t,n){"use strict";var r=n(22122),a=n(19756),o=n(67294),l=n(86010),c=n(92511),i=n(79524),s=n(5977),u=n(83551),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["items","position","className"],f=["className"],v=["items","className","position"],h=["className"],b=["mobile"];function g(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,s=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,v=e.prependBaseUrlToHref,h=(0,a.Z)(e,m),b=(0,i.Z)(l),g=(0,i.Z)(t),E=(0,i.Z)(s,{forcePrependBaseUrl:!0});return o.createElement(c.Z,(0,r.Z)({},s?{href:v?E:s}:Object.assign({isNavLink:!0,activeClassName:f,to:b},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(g)}}:null),h),u)}function E(e){var t,n=e.items,c=e.position,i=e.className,s=(0,a.Z)(e,d),u=(0,o.useRef)(null),m=(0,o.useRef)(null),v=(0,o.useState)(!1),h=v[0],b=v[1];(0,o.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var E=function(e,t){return void 0===t&&(t=!1),(0,l.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.createElement("div",{ref:u,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":h})},o.createElement(g,(0,r.Z)({className:E(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!h))}}),null!=(t=s.children)?t:s.label),o.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var l=e.className,c=(0,a.Z)(e,f);return o.createElement("li",{key:t},o.createElement(g,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:E(l,!0)},c)))})))):o.createElement(g,(0,r.Z)({className:E(i)},s))}function p(e){var t,n,c,i=e.items,m=e.className,d=(e.position,(0,a.Z)(e,v)),f=(0,o.useRef)(null),b=(0,s.TH)().pathname,E=(0,o.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,b)}))))||e})),p=E[0],k=E[1],Z=function(e,t){return void 0===t&&(t=!1),(0,l.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.createElement("li",{className:"menu__list-item"},o.createElement(g,(0,r.Z)({className:Z(m)},d)));var _=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":p})},o.createElement(g,(0,r.Z)({role:"button",className:Z(m,!0)},d,{onClick:function(e){e.preventDefault(),k((function(e){return!e}))}}),null!=(c=d.children)?c:d.label),o.createElement("ul",{className:"menu__list",ref:f,style:{height:p?void 0:_}},i.map((function(e,t){var n=e.className,l=(0,a.Z)(e,h);return o.createElement("li",{className:"menu__list-item",key:t},o.createElement(g,(0,r.Z)({activeClassName:"menu__link--active",className:Z(n)},l,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,b),l=n?p:E;return o.createElement(l,r)}},24520:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(22122),a=n(19756),o=n(67294),l=n(36971),c=n(43256),i=n(86010),s=n(83551),u=["docId","activeSidebarClassName","label","docsPluginId"];function m(e){var t,n,m=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,u),b=(0,c.useActiveDocContext)(v),g=b.activeVersion,E=b.activeDoc,p=(0,s.J)(v).preferredVersion,k=(0,c.useLatestVersion)(v),Z=null!=(t=null!=g?g:p)?t:k,_=Z.docs.find((function(e){return e.id===m}));if(!_){var w=Z.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+m+" in version "+Z.name+".\nAvailable docIds=\n- "+w)}return o.createElement(l.Z,(0,r.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(n={},n[d]=E&&E.sidebar===_.sidebar,n)),label:null!=f?f:_.id,to:_.path}))}},37999:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(22122),a=n(19756),o=n(67294),l=n(36971),c=n(43256),i=n(83551),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,b=(0,a.Z)(e,s),g=(0,c.useActiveDocContext)(d),E=(0,c.useVersions)(d),p=(0,c.useLatestVersion)(d),k=(0,i.J)(d),Z=k.preferredVersion,_=k.savePreferredVersionName;var w=null!=(t=null!=(n=g.activeVersion)?n:Z)?t:p,y=m?"Versions":w.label,N=m?void 0:u(w).path;return o.createElement(l.Z,(0,r.Z)({},b,{mobile:m,label:y,to:N,items:function(){var e=E.map((function(e){var t=(null==g?void 0:g.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)},onClick:function(){_(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},66028:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(22122),a=n(19756),o=n(67294),l=n(36971),c=n(43256),i=n(83551),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,c.useActiveVersion)(m),v=(0,i.J)(m).preferredVersion,h=(0,c.useLatestVersion)(m),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,E=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.createElement(l.Z,(0,r.Z)({},d,{label:g,to:E}))}},24175:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67294),a=n(89584),o=n(83551),l=n(79524);function c(e){var t=e.title,n=e.description,c=e.keywords,i=e.image,s=(0,o.LU)().image,u=(0,o.pe)(t),m=(0,l.Z)(i||s,{absolute:!0});return r.createElement(a.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),c&&r.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),m&&r.createElement("meta",{property:"og:image",content:m}),m&&r.createElement("meta",{name:"twitter:image",content:m}),m&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},14087:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(22122),a=n(19756),o=n(67294),l=n(86010),c=n(39962),i=n(48002),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,c.default)().isClient,n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),b=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,b.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},22713:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},69729:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},5717:function(e,t,n){"use strict";var r=n(67294),a=n(36136),o=function(){return{scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},90050:function(e,t,n){"use strict";var r=n(67294),a=n(22713);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},93301:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(67294),a=n(36136),o={desktop:"desktop",mobile:"mobile"};t.Z=function(){var e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?o.desktop:o.mobile}var n=(0,r.useState)(t),l=n[0],c=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),l}}}]);