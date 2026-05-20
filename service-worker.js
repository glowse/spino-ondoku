const CACHE_NAME='spino-ondoku-redesign-v1';
const ASSETS=["./", "./index.html", "./style.css", "./app.js", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./assets/spino-river.jpg", "./assets/spino-hero.jpg", "./assets/mission-1.jpg", "./assets/mission-2.jpg", "./assets/mission-3.jpg", "./assets/mission-4.jpg", "./assets/mission-5.jpg", "./assets/mission-6.jpg", "./assets/mission-7.jpg", "./assets/mission-8.jpg"];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('spino-ondoku')&&key!==CACHE_NAME).map(key=>caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    const copy=response.clone();
    caches.open(CACHE_NAME).then(cache=>cache.put(event.request, copy));
    return response;
  }).catch(()=>cached)));
});
