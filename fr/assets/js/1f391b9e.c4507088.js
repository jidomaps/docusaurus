(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[3085],{57889:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67294),a=n(92511),l=n(4226),c=n(19756),i=n(86010),o=n(66585),s=n(83551),u="enhancedAnchor_2LWZ",d=["id"],m=function(e){return function(t){var n,a=t.id,l=(0,c.Z)(t,d),m=(0,s.LU)().navbar.hideOnScroll;return a?r.createElement(e,l,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(n={},n[u]=!m,n)),id:a}),l.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,l)}},f={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(l.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(a.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(l.Z,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:m("h1"),h2:m("h2"),h3:m("h3"),h4:m("h4"),h5:m("h5"),h6:m("h6")}},90885:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(81361),l=n(3905),c=n(57889),i=n(5389),o=n(83551);t.default=function(e){var t=e.content,n=t.frontMatter,s=t.metadata,u=n.title,d=n.description,m=n.wrapperClassName,f=n.hide_table_of_contents,h=s.permalink;return r.createElement(a.Z,{title:u,description:d,permalink:h,wrapperClassName:null!=m?m:o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},r.createElement("main",null,r.createElement("div",{className:"container container--fluid"},r.createElement("div",{className:"margin-vert--lg padding-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--8 col--offset-2"},r.createElement("div",{className:"container"},r.createElement(l.Zo,{components:c.Z},r.createElement(t,null)))),!f&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(i.Z,{toc:t.toc})))))))}},5389:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010);var l=function(e,t,n){var a=(0,r.useState)(void 0),l=a[0],c=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,i=!1,o=document.getElementsByClassName(e);a<o.length&&!i;){var s=o[a],u=s.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));r.id===d&&(l&&l.classList.remove(t),s.classList.add(t),c(s),i=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},c="tableOfContents_35-E",i="table-of-contents__link";function o(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return l(i,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(c,"thin-scrollbar")},r.createElement(o,{toc:t}))}},52227:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r={};n.r(r),n.d(r,{ButtonExample:function(){return c}});var a=n(67294),l=n(22122),c=function(e){return a.createElement("button",(0,l.Z)({},e,{style:Object.assign({backgroundColor:"white",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))},i=Object.assign({React:a},a,r)}}]);