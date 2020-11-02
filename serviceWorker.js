let CACHE_NAME = "FootballEthnic-1.0.0";
let urlsToCache = [
  "/",
  "/index.html",
  // Pages
  "/src/pages/home.html",
  "/src/pages/nav.html",
  "/src/pages/favorite.html",
  "/src/pages/leagueStandings.html",
  "/src/pages/team.html",
  // Utils
  "/src/utils/materialize/materialize.min.css",
  "/src/utils/materialize/materialize.min.js",
  // My CSS
  "/src/css/style.css",
  "/src/css/league.css",
  "/src/css/standings.css",
  "/src/css/favTeam.css",
  "/src/css/detailTeam.css",
  // JSON
  "/manifest.json",
  "/src/data/dataLeagues.json",
  // JS
  "/src/js/App/shell.js",
  "/src/js/App/routes.js",
  "/src/js/App/nav.js",
  "/src/js/jquery.min.js",
  "/src/js/notifikasi.js",
  "/src/js/registerServiceWorker.js",
  // API
  "/src/js/Api/fetchApi.js",
  "/src/js/Api/getStandings.js",
  "/src/js/Api/renderStandings.js",
  "/src/js/Api/getMatches.js",
  "/src/js/Api/renderMatches.js",
  "/src/js/Api/getTeam.js",
  "/src/js/Api/renderTeam.js",
  // Database
  "/src/js/database/idb.js",
  "/src/js/database/db.js",
  // Images
  "/src/assets/icons/logoFE.png",
  "/src/assets/icons/logoFE-192.png",
  "/src/assets/images/daftar-liga/logo_bundesliga.svg",
  "/src/assets/images/daftar-liga/logo_eredivisie.svg",
  "/src/assets/images/daftar-liga/logo_laliga.svg",
  "/src/assets/images/daftar-liga/logo_ligue_1.svg",
  "/src/assets/images/daftar-liga/logo_premier_league.svg",
  "/src/assets/images/daftar-liga/logo_serie_a.svg",
  // Font CDN
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
  'https://fonts.googleapis.com/css2?family=Viga&display=swap',
  'https://fonts.gstatic.com/s/viga/v9/xMQbuFFdSaiXzQspDre2.woff2',
  'https://fonts.gstatic.com/s/viga/v9/xMQbuFFdSaiXzQUpDg.woff2'
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  let base_url = "https://api.football-data.org/";

  if (event.request.url.indexOf(base_url) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return fetch(event.request).then((response) => {
          cache.put(event.request.url, response.clone());
          return response;
        })
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then((response) => {
        return response || fetch(event.request);
      })
    )
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('push', (event) => {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  let options = {
    body: body,
    icon: '/src/assets/icons/icon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
