"use strict";var precacheConfig=[["/index.html","fb41a95379739d03928e33c096b7ed1d"],["/static/css/main.8db1fd71.css","c9e2aa322a76266ad57cffee42f7bdda"],["/static/js/main.a2a24326.js","93f6bb80e07b9ee65f289bfcd5eef9c8"],["/static/media/abc.0ebf31e4.svg","0ebf31e401effa7799e6c1ae08c65123"],["/static/media/btc.d7876d48.svg","d7876d48e80112e766d737346a616707"],["/static/media/dgx.cc08232d.png","cc08232d97ff0c18297b6d84c2df9306"],["/static/media/eth.80cc915b.svg","80cc915b456e4c0c7e0d5be2a8268464"],["/static/media/info.0dae5eb2.svg","0dae5eb2e856b5cb2c71fd3c1cf30e32"],["/static/media/key.58a9ecbe.svg","58a9ecbeddd8f3d5cac5cae8be8cfca5"],["/static/media/keystore.688b3d2d.svg","688b3d2df0f58b1bdb4f390e87a33eb7"],["/static/media/keystore.f1369e04.jpeg","f1369e0462255e803087eeb184cdff69"],["/static/media/ledger.155b6114.jpg","155b611464c859bf587af802dcb2ee58"],["/static/media/ledger.a0672f36.svg","a0672f36d7e4a832c34b30290173dfbb"],["/static/media/logo.91aa6985.svg","91aa6985de523498a1e7285da200a417"],["/static/media/metamask.bfac34e8.jpg","bfac34e8d4e04e52abb2f04f3072888e"],["/static/media/metamask.d44c43c8.svg","d44c43c848bc0bc4dcf9b41a4b43f034"],["/static/media/ren.a6553c2a.svg","a6553c2a8e767a8a617b7de759b49439"],["/static/media/trezor.70757b1d.svg","70757b1d396fce7e064fc6767f13b323"],["/static/media/xyz.45cdf865.svg","45cdf8651d417fa52d6790d57dd4b034"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});