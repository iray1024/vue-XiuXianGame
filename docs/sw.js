if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>i(e,o),l={module:{uri:o},exports:t,require:c};s[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/index-DgALC4Tx.css",revision:null},{url:"assets/css/vendor-modules-YA_9tFYu.css",revision:null},{url:"assets/js/index-C48rp6YO.js",revision:null},{url:"assets/js/vendor-modules-DW-TdQVe.js",revision:null},{url:"index.html",revision:"1acf46af9a022545329910b725f09f47"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icons/icon-192x192.png",revision:"2a6235fc8c99d6150811d9768d4f5d46"},{url:"icons/icon-512x512.png",revision:"0a2b3110fb6da7104f4e5b779d3ac3c2"},{url:"manifest.webmanifest",revision:"acf344c86cd9e7020fec44dfaf6fd2c2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));