if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise((async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},i=(i,c)=>{Promise.all(i.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(i)};self.define=(i,r,s)=>{c[i]||(c[i]=Promise.resolve().then((()=>{let c={};const a={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return c;case"module":return a;default:return e(i)}}))).then((e=>{const i=s(...e);return c.default||(c.default=i),c}))})))}}define("./service-worker.js",["./workbox-c2e92c19"],(function(e){"use strict";importScripts("src/sw-precache.js"),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"9501b6b31f78c888b837aa586c80f4a3"},{url:"android-chrome-512x512.png",revision:"d43b8d0d78f63f4d3180044d95dd4d66"},{url:"apple-touch-icon.png",revision:"7122aec62ba6deaf35bf7a36043eacf8"},{url:"asset-manifest.json",revision:"4b0e1eb4666f348e18cf1921c48d1c45"},{url:"browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"favicon-16x16.png",revision:"69113805203d0fb4c2e8d1e6a1cfce95"},{url:"favicon-32x32.png",revision:"2ff1936b96cd9ccd791ee6a4f8034008"},{url:"favicon.ico",revision:"5cb144d6c9cf8dd6a9fb00c5e753a513"},{url:"index.html",revision:"bfbb067a2fc0b652c6eaabd4489a38e6"},{url:"manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"mstile-150x150.png",revision:"2725dad019609f2b7ce454a9f669fd02"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"safari-pinned-tab.svg",revision:"f7990b1a6038de5f33c63d1bda5f5010"},{url:"site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"static/css/main.e28611e7.chunk.css",revision:"6dc6094bea9e81c3c4e7be0a7a8dbd6e"},{url:"static/js/2.6319eb4d.chunk.js",revision:"80c3d67a57f58b5582f4a7fa312770f3"},{url:"static/js/2.6319eb4d.chunk.js.LICENSE.txt",revision:"f05b40f2833f5481c9995bbbb3469ba8"},{url:"static/js/main.052d3853.chunk.js",revision:"1766031d75c0c051f427f2e562617f03"},{url:"static/js/runtime-main.d753ca58.js",revision:"998927cebea5d3bbb54179a4a8f37c82"},{url:"static/media/icomoon-fa.0f05e4d8.svg",revision:"7bd8e955b40d2d06691f83be392e2086"},{url:"static/media/icomoon-fa.1e4680c5.ttf",revision:"831a8f3323ababc68c8a3478a2c9f3b7"},{url:"static/media/icomoon-fa.309c41dd.eot",revision:"9e636b5f27630f8e0ad57ba5c214464e"},{url:"static/media/icomoon-fa.b496b9b1.woff",revision:"1eece0bf5dbf1cf8059ca247c5677837"},{url:"static/media/logo.62967c48.png",revision:"82113bab90b6246a106e752854ac97e8"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
