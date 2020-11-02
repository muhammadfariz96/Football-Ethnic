// Endpoint match Liga
const Endpoint_Matches_DEU = `${BASE_URL}competitions/2002/matches`;
const Endpoint_Matches_NLD = `${BASE_URL}competitions/2003/matches`;
const Endpoint_Matches_ESP = `${BASE_URL}competitions/2014/matches`;
const Endpoint_Matches_FRA = `${BASE_URL}competitions/2015/matches`;
const Endpoint_Matches_ITA = `${BASE_URL}competitions/2019/matches`;
const Endpoint_Matches_ENG = `${BASE_URL}competitions/2021/matches`;

// Fungsi meamanggil api matches sesuai endpoint liga
const getMatchesDEU = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Matches_DEU).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showMatches(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Matches_DEU)
        .then((data) => {
            showMatches(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getMatchesNLD = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Matches_NLD).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showMatches(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Matches_NLD)
        .then((data) => {
            showMatches(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getMatchesESP = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Matches_ESP).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showMatches(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Matches_ESP)
        .then((data) => {
            showMatches(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getMatchesFRA = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Matches_FRA).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showMatches(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Matches_FRA)
        .then((data) => {
            showMatches(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getMatchesITA = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Matches_ITA).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showMatches(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Matches_ITA)
        .then((data) => {
            showMatches(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getMatchesENG = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Matches_ENG).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showMatches(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Matches_ENG)
        .then((data) => {
            showMatches(data);
        })
        .catch((error) => {
            console.log(error);
        });
}