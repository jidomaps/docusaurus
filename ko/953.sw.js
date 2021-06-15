(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[953],{953:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>N});s(253);const n=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class r extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}s(80);const o=e=>e&&"object"==typeof e?e:{handle:e};class c{constructor(e,t,s="GET"){this.handler=o(t),this.match=e,this.method=s}}class i extends c{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class a{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const{params:n,route:r}=this.findMatchingRoute({url:s,request:e,event:t});let o=r&&r.handler;if(!o&&this._defaultHandler&&(o=this._defaultHandler),!o)return void 0;let c;try{c=o.handle({url:s,request:e,event:t,params:n})}catch(e){c=Promise.reject(e)}return c instanceof Promise&&this._catchHandler&&(c=c.catch((n=>this._catchHandler.handle({url:s,request:e,event:t})))),c}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const r of n){let n;const o=r.match({url:e,request:t,event:s});if(o)return n=o,(Array.isArray(o)&&0===o.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=o(e)}setCatchHandler(e){this._catchHandler=o(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new r("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new r("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let u;s(35);const l=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class h extends Error{constructor(e,t){super(l(e,t)),this.name=e,this.details=t}}const f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},p=e=>[f.prefix,e,f.suffix].filter((e=>e&&e.length>0)).join("-"),d=e=>e||p(f.runtime),g=new Set;const w=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),""),m=(e,t)=>e.filter((e=>t in e)),q=async({request:e,mode:t,plugins:s=[]})=>{const n=m(s,"cacheKeyWillBeUsed");let r=e;for(const e of n)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},y=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:r=[]})=>{const o=await self.caches.open(e),c=await q({plugins:r,request:t,mode:"read"});let i=await o.match(c,n);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;i=await r.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:i,request:c})}return i},_=async({cacheName:e,request:t,response:s,event:n,plugins:r=[],matchOptions:o})=>{const c=await q({plugins:r,request:t,mode:"write"});if(!s)throw new h("cache-put-with-no-response",{url:w(c.url)});const i=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let r=t,o=!1;for(const t of n)if("cacheWillUpdate"in t){o=!0;const n=t.cacheWillUpdate;if(r=await n.call(t,{request:e,response:r,event:s}),!r)break}return o||(r=r&&200===r.status?r:void 0),r||null})({event:n,plugins:r,response:s,request:c});if(!i)return void 0;const a=await self.caches.open(e),u=m(r,"cacheDidUpdate"),l=u.length>0?await y({cacheName:e,matchOptions:o,request:c}):null;try{await a.put(c,i)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const t of u)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:l,newResponse:i,request:c})},v=y,R=async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const r=m(n,"fetchDidFail"),o=r.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,r=e.clone();e=await n.call(t,{request:r,event:s})}}catch(e){throw new h("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:s,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:o.clone(),request:c.clone()});throw e}};s(873);const b={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class x{constructor(e={}){if(this._cacheName=d(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some((e=>!!e.cacheWillUpdate));this._plugins=t?e.plugins:[b,...e.plugins]}else this._plugins=[b];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const s=this._getFromNetwork({request:t,event:e});let n,r=await v({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(r){if(e)try{e.waitUntil(s)}catch(n){0}}else{0;try{r=await s}catch(e){n=e}}if(!r)throw new h("no-response",{url:t.url,error:n});return r}async _getFromNetwork({request:e,event:t}){const s=await R({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=_({cacheName:this._cacheName,request:e,response:s.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(n)}catch(e){0}return s}}function N(e){e.debug&&console.log("[Docusaurus-PWA][SW]: running swCustom code",e),function(e,t,s){let n;if("string"==typeof e){const r=new URL(e,location.href);n=new c((({url:e})=>e.href===r.href),t,s)}else if(e instanceof RegExp)n=new i(e,t,s);else if("function"==typeof e)n=new c(e,t,s);else{if(!(e instanceof c))throw new r("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}(u||(u=new a,u.addFetchListener(),u.addCacheListener()),u).registerRoute(n)}((e=>[/graph\.facebook\.com\/.*\/picture/,/netlify\.com\/img/,/avatars1\.githubusercontent/].some((t=>e.url.href.match(t)))),new x)}},80:()=>{"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},253:()=>{"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},873:()=>{"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}},35:()=>{"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}}}]);