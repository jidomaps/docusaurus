(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[4013],{66585:function(e,t,n){"use strict";n.d(t,{Z:function(){return m},I:function(){return o}});var r=n(67294),a=/{\w+}/g,i="{}";function s(e,t){var n=[],s=e.replace(a,(function(e){var a=e.substr(1,e.length-2),s=null==t?void 0:t[a];if(void 0!==s){var u=r.isValidElement(s)?s:String(s);return n.push(u),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?s.split(i).reduce((function(e,t,r){var a;return e.concat(t).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):s.split(i).reduce((function(e,t,a){return[].concat(e,[r.createElement(r.Fragment,{key:a},t,n[a])])}),[])}function u(e){return s(e.children,e.values)}var c=n(64644);function l(e){var t,n=e.id,r=e.message;return null!==(t=c[null!=n?n:r])&&void 0!==t?t:r}function o(e,t){var n,r=e.message;return s(null!==(n=l({message:r,id:e.id}))&&void 0!==n?n:r,t)}function m(e){var t,n=e.children,a=e.id,i=e.values,s=null!==(t=l({message:n,id:a}))&&void 0!==t?t:n;return r.createElement(u,{values:i},s)}},4112:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67294),a=n(86010),i=n(92511),s="sidebar_2ahu",u="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",l="sidebarItem_2UVv",o="sidebarItemLink_1RT6",m="sidebarItemLinkActive_12pM";function f(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,a.Z)(s,"thin-scrollbar")},r.createElement("h3",{className:u},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:l},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:m},e.title))}))))}},9488:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(81361),i=n(92511),s=n(4112),u=n(66585),c=n(83551);t.default=function(e){var t=e.tags,n=e.sidebar,l={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);l[t]=l[t]||[],l[t].push(e)}));var o=Object.entries(l).sort((function(e,t){var n=e[0],r=t[0];return n===r?0:n>r?1:-1})).map((function(e){var n=e[0],a=e[1];return r.createElement("div",{key:n},r.createElement("h3",null,n),a.map((function(e){return r.createElement(i.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),r.createElement("hr",null))})).filter((function(e){return null!=e}));return r.createElement(a.Z,{title:"Tags",description:"Blog Tags",wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(s.Z,{sidebar:n})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,r.createElement(u.Z,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),r.createElement("div",{className:"margin-vert--lg"},o)))))}},25406:function(e,t,n){"use strict";var r=n(67294).createContext(void 0);t.Z=r},48002:function(e,t,n){"use strict";var r=n(67294),a=n(25406);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);