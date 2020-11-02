
// Endpoint Standing Liga
const Endpoint_DEU = `${BASE_URL}competitions/2002/standings`;
const Endpoint_NLD = `${BASE_URL}competitions/2003/standings`;
const Endpoint_ESP = `${BASE_URL}competitions/2014/standings`;
const Endpoint_FRA = `${BASE_URL}competitions/2015/standings`;
const Endpoint_ITA = `${BASE_URL}competitions/2019/standings`;
const Endpoint_ENG = `${BASE_URL}competitions/2021/standings`;

// Fungsi meamanggil api stadings sesuai endpoint liga
const getStandingsENG = async () => {
    if ('caches' in window) {
        caches.match(Endpoint_ENG).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_ENG)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getStandingsFRA = async () => {
    if ('caches' in window) {
        caches.match(Endpoint_FRA).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_FRA)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getStandingsESP = async () => {
    if ('caches' in window) {
        caches.match(Endpoint_ESP).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_ESP)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getStandingsDEU = async () => {
    if ('caches' in window) {
        caches.match(Endpoint_DEU).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_DEU)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getStandingsNLD = async () => {
    if ('caches' in window) {
        caches.match(Endpoint_NLD).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_NLD)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getStandingsITA = async () => {
    if ('caches' in window) {
        caches.match(Endpoint_ITA).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_ITA)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

