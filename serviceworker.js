const cacheName = 'cache-insects';
self.addEventListener('install', function(event) {
 event.waitUntil(
 caches.open(cacheName).then(function(cache) {
 return cache.addAll(['/insect/', '/insect/manifest.json','/insect/javascript.js', '/insect/members.js' '/insect/index.html', '/insect/butterflies.jpg', "/insect/butterflies.jpg", "/insect/dragonfly.jpg"]);
 })
 );
});


self.addEventListener('fetch', function(event) {
 event.respondWith(
 fetch(event.request).catch(() =>
 caches.open(cacheName).then(cache => cache.match(event.request))
 )
 );
});
