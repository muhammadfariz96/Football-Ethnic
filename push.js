let webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BNhWjafom-4LVlcLRALFrnBfRSoJl-nlZnEPH6l37SMr9sRGjC-JswrAEZPygF3JnBQXe3xytbFYuzmOj1OEsw4",
    "privateKey": "J09fu_sQ-CXFJpgDdKShiQfHPyRksimOJeNVSFQY0vw"
};


webPush.setVapidDetails(
    'digitalethnicid@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
let pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/efk4cG-yz2s:APA91bG7tDawrONnFLdIzktHWoOVG1BwioK52fdLQsZ17wl4NVbcS5LUtAVDDA67SUG9McBQSQUuo5lGBtk_-G75aTGz6K0xD-kL_kvihXNrfmGpxpPur_wRSturG6a9hoPy_cjDC5Pu",
    "keys": {
        "p256dh": "BPyjPI7iPtfvDhHZ+Zo95j4+o49sTKTpL9EQMMcXcy+o18cltNs2VbZVgXbcv0jhLRPzBfcASvf5sb3HI52qzMc=",
        "auth": "OIaLEoJ/JsqD3IFBZTq+Tg=="
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