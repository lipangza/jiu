if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const t=e=>s(e,r),f={module:{uri:r},exports:o,require:t};i[r]=Promise.all(n.map((e=>f[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-f8357146"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-6b064305.css",revision:null},{url:"assets/index-c4e85bf7.js",revision:null},{url:"index.html",revision:"d8aeb35a55637ddf94c5b77c2d530fc5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"9fed40724d4c4b699e4e3d9006168962"},{url:"images/icon/72.png",revision:"e91e03b30aad298df9202917851c8076"},{url:"images/icon/96.png",revision:"76cb2e37eda9bcfa28265757ff3a5276"},{url:"images/icon/128.png",revision:"a661bf2c9f123c91177994506004532b"},{url:"images/icon/144.png",revision:"cc827ad1b57d2304330a531b992086fe"},{url:"images/icon/192.png",revision:"ec9227eefb9107df44b520e566247567"},{url:"images/icon/512.png",revision:"088782737945943b585d8c99eec108a6"},{url:"manifest.webmanifest",revision:"3ef5720439e718a070cc91ca23143692"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));