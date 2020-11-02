let webPush = require('./node_modules/web-push');

const vapidKeys = {
    "publicKey": "BNhWjafom-4LVlcLRALFrnBfRSoJl-nlZnEPH6l37SMr9sRGjC-JswrAEZPygF3JnBQXe3xytbFYuzmOj1OEsw4",
    "privateKey": "J09fu_sQ-CXFJpgDdKShiQfHPyRksimOJeNVSFQY0vw"
};


webPush.setVapidDetails(
    'mailto:digitalethnicid@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
let pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/d19Zn5nANUw:APA91bGR5iRz5ZC2_ZaZhxTybzOklbn281vbcUkwyn0udaLyXTBb6Eqks1FaW8OBSJ8pu0AXZveMMNi5MAgF0Jbj7tvByxUTfn4RhnMJcq_Rc3U3oiabVq58sIhGvF1ljmshCDnu6fnQ",
    "keys": {
        "p256dh": "BJRNGwYYhuZiZnzaGaNUtnVLpgNJbWPPi0Dt6ej0HhB6yL+sW8L6TPhWKRVUeraCy/SklKiGEqz/e5LZXeLDZ9A=",
        "auth": "gmaff6UfqMhdDjepWnxH6A=="
    }
};
let payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

let options = {
    gcmAPIKey: '541405531896',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);