(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[1040],{3905:function(a,e,t){"use strict";t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=l(t),k=s,h=N["".concat(i,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(h,r(r({ref:e},o),{},{components:t})):n.createElement(h,r({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var l=2;l<m;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},98448:function(a,e,t){"use strict";var n=t(67294);e.Z=function(a){var e=a.children,t=a.hidden,s=a.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:s},e)}},12168:function(a,e,t){"use strict";t.d(e,{Z:function(){return o}});var n=t(67294),s=t(90050),m=t(86010),r="tabItem_1uMI",p="tabItemActive_2DSg";var i=37,l=39;var o=function(a){var e=a.lazy,t=a.block,o=a.defaultValue,c=a.values,N=a.groupId,k=a.className,h=(0,s.Z)(),u=h.tabGroupChoices,g=h.setTabGroupChoices,d=(0,n.useState)(o),y=d[0],w=d[1],f=n.Children.toArray(a.children),x=[];if(null!=N){var v=u[N];null!=v&&v!==y&&c.some((function(a){return a.value===v}))&&w(v)}var b=function(a){var e=a.currentTarget,t=x.indexOf(e),n=c[t].value;w(n),null!=N&&(g(N,n),setTimeout((function(){var a,t,n,s,m,r,i,l;(a=e.getBoundingClientRect(),t=a.top,n=a.left,s=a.bottom,m=a.right,r=window,i=r.innerHeight,l=r.innerWidth,t>=0&&m<=l&&s<=i&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(p),setTimeout((function(){return e.classList.remove(p)}),2e3))}),150))},M=function(a){var e,t;switch(a.keyCode){case l:var n=x.indexOf(a.target)+1;t=x[n]||x[0];break;case i:var s=x.indexOf(a.target)-1;t=x[s]||x[x.length-1]}null==(e=t)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":t},k)},c.map((function(a){var e=a.value,t=a.label;return n.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,m.Z)("tabs__item",r,{"tabs__item--active":y===e}),key:e,ref:function(a){return x.push(a)},onKeyDown:M,onFocus:b,onClick:b},t)}))),e?(0,n.cloneElement)(f.filter((function(a){return a.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(a,e){return(0,n.cloneElement)(a,{key:e,hidden:a.props.value!==y})}))))}},22713:function(a,e,t){"use strict";var n=(0,t(67294).createContext)(void 0);e.Z=n},90050:function(a,e,t){"use strict";var n=t(67294),s=t(22713);e.Z=function(){var a=(0,n.useContext)(s.Z);if(null==a)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return a}},2625:function(a,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return k}});var n=t(22122),s=t(19756),m=(t(67294),t(3905)),r=t(12168),p=t(98448),i=["components"],l={id:"math-equations",title:"Math Equations",description:"Writing LaTeX Math Equations",slug:"/markdown-features/math-equations"},o={unversionedId:"guides/markdown-features/math-equations",id:"guides/markdown-features/math-equations",isDocsHomePage:!1,title:"Math Equations",description:"Writing LaTeX Math Equations",source:"@site/docs/guides/markdown-features/markdown-features-math-equations.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/math-equations",permalink:"/docs/next/markdown-features/math-equations",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/markdown-features/markdown-features-math-equations.mdx",version:"current",lastUpdatedBy:"Alexey Pyltsyn",lastUpdatedAt:1623243347,formattedLastUpdatedAt:"6/9/2021",frontMatter:{id:"math-equations",title:"Math Equations",description:"Writing LaTeX Math Equations",slug:"/markdown-features/math-equations"},sidebar:"docs",previous:{title:"Plugins",permalink:"/docs/next/markdown-features/plugins"},next:{title:"Styling and Layout",permalink:"/docs/next/styling-layout"}},c=[{value:"Usage",id:"usage",children:[{value:"Inline",id:"inline",children:[]},{value:"Blocks",id:"blocks",children:[]}]},{value:"Configuration",id:"configuration",children:[]}],N={toc:c};function k(a){var e=a.components,t=(0,s.Z)(a,i);return(0,m.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"Mathematical equations can be rendered using ",(0,m.kt)("a",{parentName:"p",href:"https://katex.org"},"KaTeX"),"."),(0,m.kt)("h2",{id:"usage"},"Usage"),(0,m.kt)("p",null,"Please read ",(0,m.kt)("a",{parentName:"p",href:"https://katex.org"},"KaTeX")," documentation for more details."),(0,m.kt)("h3",{id:"inline"},"Inline"),(0,m.kt)("p",null,"Write inline math equations by wrapping LaTeX equations between ",(0,m.kt)("inlineCode",{parentName:"p"},"$"),":"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-mdx"},"Let $f:[a,b] \\to \\R$ be Riemann integrable. Let $F:[a,b]\\to\\R$ be $F(x)=\n\\int_{a}^{x}f(t)dt$. Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.\n")),(0,m.kt)("p",null,"Let ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow"},":"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow"},"\u2192"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"R")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f:[a,b] \\to \\R")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},":"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68889em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathbb"},"R"))))))," be Riemann integrable. Let ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"F"),(0,m.kt)("mo",{parentName:"mrow"},":"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow"},"\u2192"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"R")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F:[a,b]\\to\\R")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},":"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68889em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathbb"},"R"))))))," be ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"F"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("msubsup",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msubsup"},"\u222b"),(0,m.kt)("mi",{parentName:"msubsup"},"a"),(0,m.kt)("mi",{parentName:"msubsup"},"x")),(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"t")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F(x)= \\int_{a}^{x}f(t)dt")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.215112em",verticalAlign:"-0.35582em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{marginRight:"0.19445em",position:"relative",top:"-0.0005599999999999772em"}},"\u222b"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8592920000000001em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.34418em",marginLeft:"-0.19445em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.2579000000000002em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.35582em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),". Then ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"F")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F")))))," is continuous, and at all ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," such that ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"f")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))," is continuous at ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),", ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"F")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F")))))," is differentiable at ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," with ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"F"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F'(x)=f(x)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.001892em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,m.kt)("h3",{id:"blocks"},"Blocks"),(0,m.kt)("p",null,"For equation block or display mode, use line breaks and ",(0,m.kt)("inlineCode",{parentName:"p"},"$$"),":"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-mdx"},"$$\nI = \\int_0^{2\\pi} \\sin(x) dx\n$$\n")),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"I"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("msubsup",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msubsup"},"\u222b"),(0,m.kt)("mn",{parentName:"msubsup"},"0"),(0,m.kt)("mrow",{parentName:"msubsup"},(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mi",{parentName:"mrow"},"\u03c0"))),(0,m.kt)("mi",{parentName:"mrow"},"sin"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"I = \\int_0^{2\\pi} \\sin(x) dx")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.4759580000000003em",verticalAlign:"-0.9119499999999999em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011249999999999316em"}},"\u222b"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.5640080000000003em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-1.7880500000000001em",marginLeft:"-0.44445em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"0"))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.8129000000000004em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"\u03c0"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9119499999999999em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))),(0,m.kt)("h2",{id:"configuration"},"Configuration"),(0,m.kt)("p",null,"To enable KaTeX, you need to install ",(0,m.kt)("inlineCode",{parentName:"p"},"remark-math")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"rehype-katex")," plugins."),(0,m.kt)(r.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,m.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save remark-math@3 rehype-katex@4 hast-util-is-element@1.1.0\n"))),(0,m.kt)(p.Z,{value:"yarn",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add remark-math@3 rehype-katex@4 hast-util-is-element@1.1.0\n")))),(0,m.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"Use the exact same versions. The latest versions are incompatible with Docusaurus 2."))),(0,m.kt)("p",null,"Import the plugins in ",(0,m.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"const math = require('remark-math');\nconst katex = require('rehype-katex');\n")),(0,m.kt)("p",null,"Add them to your content plugin or preset options (usually ",(0,m.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," docs options):"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"remarkPlugins: [math],\nrehypePlugins: [katex],\n")),(0,m.kt)("p",null,"Include the KaTeX CSS in your config under ",(0,m.kt)("inlineCode",{parentName:"p"},"stylesheets"),":"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},'stylesheets: [\n    {\n        href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",\n        integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",\n        crossorigin: "anonymous",\n    },\n],\n')),(0,m.kt)("p",null,"Overall the changes look like:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"// highlight-start\n+ const math = require('remark-math');\n+ const katex = require('rehype-katex');\n// highlight-end\n\n\nmodule.exports = {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',\n          // highlight-start\n+         remarkPlugins: [math],\n+         rehypePlugins: [katex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n  // highlight-start\n+ stylesheets: [\n+   {\n+     href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',\n+     integrity:\n+       'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',\n+     crossorigin: 'anonymous',\n+   },\n+ ],\n  // highlight-end\n};\n")))}k.isMDXComponent=!0},86010:function(a,e,t){"use strict";function n(a){var e,t,s="";if("string"==typeof a||"number"==typeof a)s+=a;else if("object"==typeof a)if(Array.isArray(a))for(e=0;e<a.length;e++)a[e]&&(t=n(a[e]))&&(s&&(s+=" "),s+=t);else for(e in a)a[e]&&(s&&(s+=" "),s+=e);return s}function s(){for(var a,e,t=0,s="";t<arguments.length;)(a=arguments[t++])&&(e=n(a))&&(s&&(s+=" "),s+=e);return s}t.d(e,{Z:function(){return s}})}}]);