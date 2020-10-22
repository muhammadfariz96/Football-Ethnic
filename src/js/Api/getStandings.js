const Endpoint_Jer = `${BASE_URL}competitions/2002/standings`;
const Endpoint_Blnd = `${BASE_URL}competitions/2003/standings`;
const Endpoint_Spn = `${BASE_URL}competitions/2014/standings`;
const Endpoint_Prc = `${BASE_URL}competitions/2015/standings`;
const Endpoint_Itly = `${BASE_URL}competitions/2019/standings`;
const Endpoint_Ing = `${BASE_URL}competitions/2021/standings`;

const getStandingsIng = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Ing).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Ing)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getStandingsPrc = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Prc).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Prc)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getStandingsSpn = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Spn).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Spn)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getStandingsJer = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Jer).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Jer)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getStandingsBlnd = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Blnd).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Blnd)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getStandingsItly = () => {
    if ('caches' in window) {
        caches.match(Endpoint_Itly).then((response) => {
            if (response) {
                response.json().then((data) => {
                    showStanding(data);
                });
            }
        });
    }

    fetchAPI(Endpoint_Itly)
        .then((data) => {
            showStanding(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

