self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('hamster-v2').then(cache => { 
      return cache.addAll([
        './',
        './index.html'
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== 'hamster-v2') {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
