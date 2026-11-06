/* OPEN/DAYS 12 — same-origin offline application shell. No external content cached. */
const CACHE_NAME='open-days-shell-v12-20261106';
const APP_FILES=['./','./index.html','./app.js','./install.js','./styles.css','./editorial.css','./zine.css','./experiment.css','./astral.css','./volume10.css','./mastery.css','./safety.css','./botanical.svg','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(x=>x.startsWith('open-days-shell-')&&x!==CACHE_NAME).map(x=>caches.delete(x)))),self.clients.claim()]));});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin)return;
 if(req.mode==='navigate'){
   event.respondWith(fetch(req).then(response=>{if(response.ok){const clone=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,clone)).catch(()=>{});}return response;}).catch(async()=>{return await caches.match(req)||await caches.match('./index.html')||Response.error();}));
   return;
 }
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(response=>{if(response.ok){const clone=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,clone)).catch(()=>{});}return response;})));
});
