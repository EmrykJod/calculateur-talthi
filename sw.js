const CACHE='talthi-calc-v3';
const ASSETS=['./','./index.html','./talthi-logo.png','./talthi-bg.jpg','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
