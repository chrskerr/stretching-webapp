if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,c)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-322fe734"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"9501b6b31f78c888b837aa586c80f4a3"},{url:"android-chrome-512x512.png",revision:"d43b8d0d78f63f4d3180044d95dd4d66"},{url:"apple-touch-icon.png",revision:"7122aec62ba6deaf35bf7a36043eacf8"},{url:"asset-manifest.json",revision:"260020a8ce3af75df15b777089edf547"},{url:"browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"favicon-16x16.png",revision:"69113805203d0fb4c2e8d1e6a1cfce95"},{url:"favicon-32x32.png",revision:"2ff1936b96cd9ccd791ee6a4f8034008"},{url:"favicon.ico",revision:"5cb144d6c9cf8dd6a9fb00c5e753a513"},{url:"index.html",revision:"43c8a314d74a38434be8913c6a3f7dde"},{url:"manifest.json",revision:"3d66515126dd4ca52eed3a015a24de7f"},{url:"mstile-150x150.png",revision:"2725dad019609f2b7ce454a9f669fd02"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"safari-pinned-tab.svg",revision:"f7990b1a6038de5f33c63d1bda5f5010"},{url:"site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"static/css/main.99a433b4.chunk.css",revision:"7768b34d124c2eece5391a8a0cb9fb7e"},{url:"static/js/2.2a5a65eb.chunk.js",revision:"9e6a7a5d6481667d0705e3fa18b7fc7b"},{url:"static/js/2.2a5a65eb.chunk.js.LICENSE.txt",revision:"f05b40f2833f5481c9995bbbb3469ba8"},{url:"static/js/main.94062246.chunk.js",revision:"c1e2b1e909300e76382b1c8cc5ddf97e"},{url:"static/js/runtime-main.d753ca58.js",revision:"998927cebea5d3bbb54179a4a8f37c82"},{url:"static/media/icomoon-fa.155bcc42.ttf",revision:"a0aa20ada698801d71be7f626b81e65e"},{url:"static/media/icomoon-fa.33021bee.woff",revision:"20df59332282e36841c432b135693b0b"},{url:"static/media/icomoon-fa.3abb94eb.svg",revision:"b8a3cc43ae892e2e69f869b5f2e18ae8"},{url:"static/media/icomoon-fa.6d9a0f86.eot",revision:"63db132771e9ebd4d846977590c41a1b"},{url:"static/media/logo.62967c48.png",revision:"82113bab90b6246a106e752854ac97e8"}],{})}));
//# sourceMappingURL=service-worker.js.map
