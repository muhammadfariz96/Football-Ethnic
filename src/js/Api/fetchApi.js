const API_KEY = '8b7cf45ab1b34b0d91cbff4ffc3de30b';
const BASE_URL = 'https://api.football-data.org/v2/';

// Fungsi Fetch Api
const fetchAPI = (url) => {
    return fetch(url, {
        headers: {
            'X-Auth-Token': API_KEY,
        },
    })
        .then((res) => {
            if (res.status !== 200) {
                console.log('Error: ' + res.status);
                return Promise.reject(new Error(res.statusText));
            } else {
                return Promise.resolve(res);
            }
        })
        .then((res) => res.json())
        .catch((err) => {
            console.log(err);
        });
};