(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[9671],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return d}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),d=a,g=u["".concat(s,".").concat(d)]||u[d]||h[d]||r;return o?n.createElement(g,i(i({ref:t},c),{},{components:o})):n.createElement(g,i({ref:t},c))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},77766:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var n=o(22122),a=o(19756),r=(o(67294),o(3905)),i=["components"],l={title:"Jido Map API - DWG File Specification",toc_footers:["<a href='https://www.jidomaps.com'>Jido Inc.</a>"],search:!0,code_clipboard:!1},s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Jido Map API - DWG File Specification",description:"Introduction",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docusaurus/docs/next/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",version:"current",frontMatter:{title:"Jido Map API - DWG File Specification",toc_footers:["<a href='https://www.jidomaps.com'>Jido Inc.</a>"],search:!0,code_clipboard:!1}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Layer: Walls",id:"layer-walls",children:[{value:"Notes:",id:"notes",children:[]}]},{value:"Layer: Walking Path",id:"layer-walking-path",children:[]},{value:"Layer: Shortcuts",id:"layer-shortcuts",children:[]},{value:"Layer: Product Displays",id:"layer-product-displays",children:[]},{value:"Layer: Navigation Points",id:"layer-navigation-points",children:[]},{value:"Layer: Ceiling Grid Locations",id:"layer-ceiling-grid-locations",children:[]},{value:"Layer: PA Locations",id:"layer-pa-locations",children:[]},{value:"Layer: HFB Locations",id:"layer-hfb-locations",children:[]},{value:"Layer: Self-serve Aisles",id:"layer-self-serve-aisles",children:[]},{value:"Layer: Map Features (optional)",id:"layer-map-features-optional",children:[]}],c={toc:p};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Jido Map API offers a comprehensive API end-point to provide: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Map layouts of the store"),(0,r.kt)("li",{parentName:"ul"},"Product location data"),(0,r.kt)("li",{parentName:"ul"},"Point of interest location data"),(0,r.kt)("li",{parentName:"ul"},"Dynamic navigation routes"),(0,r.kt)("li",{parentName:"ul"},"Turn-by-turn navigation instructions")),(0,r.kt)("p",null,"The Jido Map API is designed to work with the current AutoCAD (DWG) layout files that are produced for each IKEA store. In order to ensure that key data is up-to-date and accurate, some additional layers are created in this DWG file that follow the clear guidelines outlined in this document. To ensure customer guidance looks and behaves in the best possible way for customers, it is important to follow these guidelines as well as keeping the DWG file in sync with Jido in the event the store layout changes."),(0,r.kt)("p",null,"Should you have any questions or suggestions regarding the guidelines in this document or the Jido Map API, please reach out to ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@jidomaps.com"},"dev@jidomaps.com"),"."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,'A well-formed DWG file will contain 9 additional jido specific layers, each named with a "jido-" prefix. These layers use AutoCad poly-lines and text elements to accurately describe:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The main walking path in the Showroom and Market Hall"),(0,r.kt)("li",{parentName:"ul"},"Shortcuts in the Showroom and Market Hall"),(0,r.kt)("li",{parentName:"ul"},"The outline of the main structural walls in store that guide and restrict commercial traffic"),(0,r.kt)("li",{parentName:"ul"},"The location of the internal walls within the store"),(0,r.kt)("li",{parentName:"ul"},"The position of all the ceiling grid locations in the store"),(0,r.kt)("li",{parentName:"ul"},"The locations of commercial areas (HFB sections, PA areas)"),(0,r.kt)("li",{parentName:"ul"},'Key points of interest in the store including: "restroom", "elevators", "stairs", "cafeteria", etc.'),(0,r.kt)("li",{parentName:"ul"},"Self-serve aisles and the unique number associated with each self-serve aisle")),(0,r.kt)("h1",{id:"jido-layers"},"Jido Layers"),(0,r.kt)("h2",{id:"layer-walls"},"Layer: Walls"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," Define the walls that be shown on the customer facing map"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Title:")," jido-walls"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specification:")," Using poly-lines, trace all the walls and permanent barriers that guide and restrict the movement of foot-traffic in the store. "),(0,r.kt)("p",null,"Lines should be placed as close to the center of wall as possible. "),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{style:"background-color: initial; padding: 0"},(0,r.kt)("a",{href:"https://lh3.googleusercontent.com/2EZ02VV76JQp--aEfiLYpJkT0slAFucRd1m9qp6wOn5IBDbkQ7xm8aqQrPLA74UGM4u2hn5_g8jlhWTIMCHvcA9FX27aWg-ZFVgymvUa_WgAjHUphdA5xBKI_n460JQYgZq7WFUZ"},(0,r.kt)("img",{src:"https://lh3.googleusercontent.com/2EZ02VV76JQp--aEfiLYpJkT0slAFucRd1m9qp6wOn5IBDbkQ7xm8aqQrPLA74UGM4u2hn5_g8jlhWTIMCHvcA9FX27aWg-ZFVgymvUa_WgAjHUphdA5xBKI_n460JQYgZq7WFUZ"})))),(0,r.kt)("h3",{id:"notes"},"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Walls can be simplified as long as the simplification does not hide an important path which customers may need to take. For example, small gaps in walls can be removed and instead shown as contiguous walls.")),(0,r.kt)("li",{parentName:"ul"},"Walls that are not in or adjacent to a space with customer foot-traffic do not need to be traced. Sections of the store where customers do not go will not be shown on the map."),(0,r.kt)("li",{parentName:"ul"},"Walls with a door through which customers can pass should be indicated by an opening in the wall and a break in the wall-line corresponding to the width of the corresponding door.")),(0,r.kt)("h2",{id:"layer-walking-path"},"Layer: Walking Path"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," Define the main walking path that guides customer traffic in the store"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Title:")," jido-walking-path"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specification:")," Using poly-lines, trace the main walking path that guides foot-traffic in the store."),(0,r.kt)("p",null,"Lines should be placed as close to the center of the walking path as possible."),(0,r.kt)("p",null,'Additionally, the start and end points of the walking path should be labeled. An AutoCAD single-line text element should be placed at the start of the walking path and at the end of the walking path. The start-block should have the text value "path-start" and the end-block should have the label-attribute value "path-end." (This is important for automatically determining and extracting the directionality of the walking path from the map file.)'),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{style:"background-color: initial; padding: 0"},(0,r.kt)("a",{href:"https://lh5.googleusercontent.com/ni0WV9rqLkLYYNC1u1QXH0gKT6-zbHqEj8EZMs9bYq81TSHtvSEfLWh5dVE05hMQ4GT5ZIadvPw_QOCrDW3QvsFIOK4Wozr9pbz381W8AEmU__c8BOItexQsfE6HPUs6IkM0MV-d"},(0,r.kt)("img",{src:"https://lh5.googleusercontent.com/ni0WV9rqLkLYYNC1u1QXH0gKT6-zbHqEj8EZMs9bYq81TSHtvSEfLWh5dVE05hMQ4GT5ZIadvPw_QOCrDW3QvsFIOK4Wozr9pbz381W8AEmU__c8BOItexQsfE6HPUs6IkM0MV-d"})))),(0,r.kt)("h2",{id:"layer-shortcuts"},"Layer: Shortcuts"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," Define the shortcuts that connect different parts of the store that are not directly connected by the walking path."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Title:")," jido-shortcuts"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specification:")," Using a set of lines, make connections between different points on the walking path that are accessible by a shortcut"),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{style:"background-color: initial; padding: 0"},(0,r.kt)("a",{href:"https://lh4.googleusercontent.com/D48S-jaFgyBfrILVCJZdigBU6Oo-gqbGxlo8xBTWFyQhcHofg5EVmsVkcocg12TixUNJLWPiXrUNI3KorK_pW9SYnPsb0b3M-YoRBSXuk9dsm0SaCwbiqTXjIOkG8DIDVh-4Q8TF"},(0,r.kt)("img",{src:"https://lh4.googleusercontent.com/D48S-jaFgyBfrILVCJZdigBU6Oo-gqbGxlo8xBTWFyQhcHofg5EVmsVkcocg12TixUNJLWPiXrUNI3KorK_pW9SYnPsb0b3M-YoRBSXuk9dsm0SaCwbiqTXjIOkG8DIDVh-4Q8TF"})))),(0,r.kt)("h2",{id:"layer-product-displays"},"Layer: Product Displays"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," Define the area in the store occupied by room sets, room set walls and other product display areas that impede walking traffic in the store. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Title:")," jido-product-displays"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specification:")," Use rectangular or polygonal areas to identify the different room set areas or other product display areas. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," These regions will be used for determining efficient and unimpeded paths throughout the store and do not need to be labeled."),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{style:"background-color: initial; padding: 0"},(0,r.kt)("a",{href:"https://lh5.googleusercontent.com/oZq9KhPiwqZ05tzbS-O0B97glGYpegdNXZvPO-Pl_kdfFXubAzhJCyVoBHYZ_ibs37GxCihnNvAaAWu7dR9Coaq0b4_kNM7WUErnOr5HC9ynvNv4ISIsIqTRSHXh-QUmhME1pos-"},(0,r.kt)("img",{src:"https://lh5.googleusercontent.com/oZq9KhPiwqZ05tzbS-O0B97glGYpegdNXZvPO-Pl_kdfFXubAzhJCyVoBHYZ_ibs37GxCihnNvAaAWu7dR9Coaq0b4_kNM7WUErnOr5HC9ynvNv4ISIsIqTRSHXh-QUmhME1pos-"})))),(0,r.kt)("h2",{id:"layer-navigation-points"},"Layer: Navigation Points"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," Define the set of points in the store that are destinations that a user can navigate to."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Title:")," jido-navigation-points"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specification:"),' A set of single-line text elements with unique text values should be used to label all the possible "navigation points", or destinations that a customer can navigate to in the store. Where applicable, navigation points should include at least: "restroom", "cafeteria", "elevator", "checkout", and "stairs".'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The size or style of the text element does not matter, but the geometry position values of the text element should be placed directly on top of the point on the map that corresponds to that label."),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{style:"background-color: initial; padding: 0"},(0,r.kt)("a",{href:"https://lh3.googleusercontent.com/0K_y787hYlwl_-k8O4dcfnoYXz2x3zfz-SMpIIm7JteFISGGTGQs3O0ErJJajLXdAYio6TV_zFCo1JsA1sgUWDhJw_cqHjQ5Y0x4cFd-Eq-vVGO_KbOdFoRf818iBVPRNgZmf6JX"},(0,r.kt)("img",{src:"https://lh3.googleusercontent.com/0K_y787hYlwl_-k8O4dcfnoYXz2x3zfz-SMpIIm7JteFISGGTGQs3O0ErJJajLXdAYio6TV_zFCo1JsA1sgUWDhJw_cqHjQ5Y0x4cFd-Eq-vVGO_KbOdFoRf818iBVPRNgZmf6JX"})))),(0,r.kt)("h2",{id:"layer-ceiling-grid-locations"},"Layer: Ceiling Grid Locations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," Define the set of points that correspond to ceiling-grid-locations on the map."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Title:")," jido-grid-locations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specification:")," A set of single-line text elements with unique text values that correspond to a unique grid location on the map."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The size or style of the text element does not matter, but the geometry position values of the text element should be placed directly on top of the point on the map that corresponds to that label."),(0,r.kt)("h2",{id:"layer-pa-locations"},"Layer: PA Locations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," Define the set of points that correspond to PA locations on the map."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Title:")," jido-PAs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specification:")," A set of single-line text elements with unique text values that correspond to a PA locations on the map. Optionally, PA regions can be represented by non-overlapping rectangles or polygonal regions corresponding to the area of that PA region."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The size or style of the text element does not matter, but the geometry position values of the text element should be placed directly on top of the point on the map that corresponds to that label."),(0,r.kt)("h2",{id:"layer-hfb-locations"},"Layer: HFB Locations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," Define the set of points that correspond to HFB locations on the map."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Title:")," jido-HFBs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specification:")," A set of single-line text elements with unique text values that correspond to a HFB locations on the map. Optionally, HFB regions can be represented by non-overlapping rectangles or polygonal regions corresponding to the area of that HFB region."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The size or style of the text element does not matter, but the geometry position values of the text element should be placed directly on top of the point on the map that corresponds to that label."),(0,r.kt)("h2",{id:"layer-self-serve-aisles"},"Layer: Self-serve Aisles"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," A set of lines of that correspond to the position of the self-serve aisles in the store. Additionally, a set of text elements that correspond to the numerical values associated with each self-serve aisle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Title:")," jido-self-serve"),(0,r.kt)("h2",{id:"layer-map-features-optional"},"Layer: Map Features (optional)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," Define the set of points or regions on the map that may be displayed in a view of the map generated for users."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Title:")," jido-map-features"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specification:")," Map features may include the rectangular region occupied by the elevators or the stairs in the store, roomsets, signage, etc. There are no restrictions on the shape or name of a map-features. The map-features layer can contain any number of labels of any shape or type including poly-lines and rectangular regions. "),(0,r.kt)("p",null,"The jido-map layers to include in the dwg file for extraction and parsing by our backend:"),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{style:"background-color: initial; padding: 0"},(0,r.kt)("a",{href:"https://lh4.googleusercontent.com/iXp1dJ7VtrwszHr97AgKzLJOOvWbW53qY_yrM3Xk6ePYFchIvh0tHBnm7LN4jziM7rgpBqRqf1qdDbhzgnWaaiPYtL7Iy1ZFisLc1Zuob_fFCDAcA_iVp4eIK469DQfSsqpHHFH-"},(0,r.kt)("img",{src:"https://lh4.googleusercontent.com/iXp1dJ7VtrwszHr97AgKzLJOOvWbW53qY_yrM3Xk6ePYFchIvh0tHBnm7LN4jziM7rgpBqRqf1qdDbhzgnWaaiPYtL7Iy1ZFisLc1Zuob_fFCDAcA_iVp4eIK469DQfSsqpHHFH-"})))),(0,r.kt)("p",null,"An IKEA dwg map with some additional annotations including:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'"path-start" label (jido-walking-path layer)'),(0,r.kt)("li",{parentName:"ol"},'"restroom" label (jido-navigation-points layer)'),(0,r.kt)("li",{parentName:"ol"},"Lines for wall positions (jido-walls layer)"),(0,r.kt)("li",{parentName:"ol"},"Lines for the walking path (jido-walking-path layer)")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{style:"background-color: initial; padding: 0"},(0,r.kt)("a",{href:"https://lh3.googleusercontent.com/RCeF77REiDkPXYsDBQE9rxF_JBf0U9lB1d17lojJuAGJZWMrEXUQE2A73ABTf18nEBiJ4WqKMbMHAKOBgxqNCb52NNMbxDfp3SeSLF3U5OyVMMZD0wJ_bR_7n_7Wkn5fxsrYK95A"},(0,r.kt)("img",{src:"https://lh3.googleusercontent.com/RCeF77REiDkPXYsDBQE9rxF_JBf0U9lB1d17lojJuAGJZWMrEXUQE2A73ABTf18nEBiJ4WqKMbMHAKOBgxqNCb52NNMbxDfp3SeSLF3U5OyVMMZD0wJ_bR_7n_7Wkn5fxsrYK95A"})))),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{style:"background-color: initial; padding: 0"},(0,r.kt)("a",{href:"https://lh5.googleusercontent.com/QB1bmNeWY0nQijI1Xk0LxFN6mACSv1T4-0TLWwZR0GmrcoUkQGjU0ykQWbIfVb6165vLsTgcGyxOuJRxlO_nnZAQZDr4LWTajdp341kciQp3dS2XUmjFOkTh5RyeRuW7LRYJtUSE"},(0,r.kt)("img",{src:"https://lh5.googleusercontent.com/QB1bmNeWY0nQijI1Xk0LxFN6mACSv1T4-0TLWwZR0GmrcoUkQGjU0ykQWbIfVb6165vLsTgcGyxOuJRxlO_nnZAQZDr4LWTajdp341kciQp3dS2XUmjFOkTh5RyeRuW7LRYJtUSE"})))))}h.isMDXComponent=!0}}]);