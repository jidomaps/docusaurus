(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[3089],{79734:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(39962),l=a(81361),i=a(32903),s=a(92511),c=a(66585);var m=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(s.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},o=a(4112),d=a(83551);var u=function(e){var t=e.metadata,a=e.items,s=e.sidebar,c=(0,r.default)().siteConfig.title,u=t.blogDescription,g=t.blogTitle,h="/"===t.permalink?c:g;return n.createElement(l.Z,{title:h,description:u,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"},n.createElement(o.Z,{sidebar:s})),n.createElement("main",{className:"col col--7"},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(m,{metadata:t})))))}},32903:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(67294),r=a(86010),l=a(3905),i=a(66585),s=a(92511),c=a(57889),m=a(24175),o="blogPostTitle_GeHD",d="blogPostDate_fNvV",u=a(83551);var g=function(e){var t,a,g=(t=(0,u.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),h=e.children,p=e.frontMatter,v=e.metadata,E=e.truncated,b=e.isBlogPostPage,f=void 0!==b&&b,_=v.date,N=v.formattedDate,k=v.permalink,Z=v.tags,T=v.readingTime,w=p.author,L=p.title,I=p.image,M=p.keywords,x=p.author_url||p.authorURL,y=p.author_title||p.authorTitle,P=p.author_image_url||p.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:M,image:I}),n.createElement("article",{className:f?void 0:"margin-bottom--xl"},(a=f?"h1":"h2",n.createElement("header",null,n.createElement(a,{className:(0,r.Z)("margin-bottom--sm",o)},f?L:n.createElement(s.Z,{to:k},L)),n.createElement("div",{className:"margin-vert--md"},n.createElement("time",{dateTime:_,className:d},N,T&&n.createElement(n.Fragment,null," \xb7 ",g(T)))),n.createElement("div",{className:"avatar margin-vert--md"},P&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:x},n.createElement("img",{src:P,alt:w})),n.createElement("div",{className:"avatar__intro"},w&&n.createElement(n.Fragment,null,n.createElement("h4",{className:"avatar__name"},n.createElement(s.Z,{href:x},w)),n.createElement("small",{className:"avatar__subtitle"},y)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:c.Z},h)),(Z.length>0||E)&&n.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&n.createElement("div",{className:"col"},n.createElement("strong",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var t=e.label,a=e.permalink;return n.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),E&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:v.permalink,"aria-label":"Read more about "+L},n.createElement("strong",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4112:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(67294),r=a(86010),l=a(92511),i="sidebar_2ahu",s="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",m="sidebarItem_2UVv",o="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM";function u(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement("h3",{className:s},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:m},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},e.title))}))))}},57889:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(67294),r=a(92511),l=a(4226),i=a(19756),s=a(86010),c=a(66585),m=a(83551),o="enhancedAnchor_2LWZ",d=["id"],u=function(e){return function(t){var a,r=t.id,l=(0,i.Z)(t,d),u=(0,m.LU)().navbar.hideOnScroll;return r?n.createElement(e,l,n.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,s.Z)("anchor",(a={},a[o]=!u,a)),id:r}),l.children,n.createElement("a",{className:"hash-link",href:"#"+r,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):n.createElement(e,l)}},g={code:function(e){var t=e.children;return(0,n.isValidElement)(t)?t:t.includes("\n")?n.createElement(l.Z,e):n.createElement("code",e)},a:function(e){return n.createElement(r.Z,e)},pre:function(e){var t,a=e.children;return(0,n.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:n.createElement(l.Z,(0,n.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:u("h1"),h2:u("h2"),h3:u("h3"),h4:u("h4"),h5:u("h5"),h6:u("h6")}},52227:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n={};a.r(n),a.d(n,{ButtonExample:function(){return i}});var r=a(67294),l=a(22122),i=function(e){return r.createElement("button",(0,l.Z)({},e,{style:Object.assign({backgroundColor:"white",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))},s=Object.assign({React:r},r,n)}}]);