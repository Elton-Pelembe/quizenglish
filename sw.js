self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("quiz-cache").then(function (cache) {
      return cache.addAll(["index.html", "quiz.html", "style.css", "script.js"]);
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
