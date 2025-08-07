self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("equiz-cache").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js",
        "/quiz.html",
        "/shop.html",
        "/sounds/correct.mp3",
        "/sounds/wrong.mp3",
        "/sounds/timeout.mp3",
        "/sounds/level-up.mp3",
        "/sounds/bg-music.mp3",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
