"use strict";var precacheConfig=[["/do-more-server-less/index.html","0f0317ae8e6d1aefb372ce074efa43d5"],["/do-more-server-less/static/css/main.653da357.css","521def3ae35e5b12d25e0300c45174f2"],["/do-more-server-less/static/js/main.2d5367b1.js","31124fa68c9a3d8244ff3ace4c2e7ee5"],["/do-more-server-less/static/media/Authorize.1e6cfbd1.png","1e6cfbd168f1a576c778aa0f57527e67"],["/do-more-server-less/static/media/Catalog.2361a6a0.png","2361a6a042da70567e9c7f6f61404cb8"],["/do-more-server-less/static/media/CheckEmail.c63d1877.png","c63d187781c4d9a922993502ca7e5d92"],["/do-more-server-less/static/media/Checkout.9d4c89fc.png","9d4c89fc5fa2ce62a31e33aba86953c4"],["/do-more-server-less/static/media/CheckoutButtons.25f85b30.png","25f85b305d99d582de758c5237978ef5"],["/do-more-server-less/static/media/GetToken.1c30e19a.png","1c30e19a00b22d6640d661e2a068835c"],["/do-more-server-less/static/media/HandleCheckout.f035e904.png","f035e904fdfaa782c291cd5c1db30ac6"],["/do-more-server-less/static/media/OAuth.ca06e150.png","ca06e150bb990fbedab224d465a56e27"],["/do-more-server-less/static/media/checkout_now.3327e292.png","3327e2927826665f59973714a008cfe5"],["/do-more-server-less/static/media/js-code.8b3dc465.jpg","8b3dc46543daa492f78b511e4f85e514"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),e=urlsToCacheKeys.has(r));var a="/do-more-server-less/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});