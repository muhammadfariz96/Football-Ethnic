// Fungsi meamanggil api detail team sesuai id team
const getAllTeam = (id) => {
    const url = `${BASE_URL}teams/${id}`;

    if ('caches' in window) {
        caches.match(url).then((response) => {
            if (response) {
                response.json().then((team) => {
                    showTeam(team);
                });
            }
        });
    }

    fetchAPI(url)
        .then((team) => {
            showTeam(team);
        })
        .catch((error) => {
            console.log(error);
        });
}
