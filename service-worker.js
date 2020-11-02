importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
    console.log(`Workbox berhasil dimuat`);
else
    console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/src/utils/jquery/jquery.min.js', revision: '1' },
    { url: '/src/utils/materialize/materialize.min.css', revision: '1' },
    { url: '/src/utils/materialize/materialize.min.js', revision: '1' },
    { url: '/src/js/registerServiceWorker.js', revision: '1' },
    { url: '/src/js/App/nav.js', revision: '1' },
    { url: '/src/js/App/routes.js', revision: '1' },
    { url: '/src/js/App/shell.js', revision: '1' },
    { url: '/src/js/database/idb.js', revision: '1' },
    { url: '/src/js/database/db.js', revision: '1' },
    { url: '/src/js/notifikasi.js', revision: '1' },
    { url: '/manifest.json', revision: '1' },
    { url: '/src/data/dataLeagues.json', revision: '1' }
]);

workbox.routing.registerRoute(
    new RegExp('/src/css/'),
    workbox.strategies.cacheFirst({
        cacheName: 'Styles'
    })
);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'Google-Fonts-Webfonts',
    })
);

workbox.routing.registerRoute(
    new RegExp('/src/assets/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'Assets'
    })
);

workbox.routing.registerRoute(
    new RegExp('/src/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'Pages'
    })
);

workbox.routing.registerRoute(
    new RegExp('/src/js/Api/'),
    workbox.strategies.networkOnly({
        cacheName: 'API'
    })
);

workbox.routing.registerRoute(
    /^https:\/\/api\.football-data\.org/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'Fetch',
    })
);

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