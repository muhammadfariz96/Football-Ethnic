// Load page content
let page = window.location.hash.substr(1);
let urlTeamParam = window.location.hash.substr(9);
if (page === '') page = 'home';



const loadPage = (page) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            const content = document.querySelector('.body-content');

            // Routing page untuk memanggil fungsi
            if (page === 'home') {
                renderLeague();
            } else if (page === 'ligaIng') {
                getStandingsENG();
                getMatchesENG();
            } else if (page === 'ligaJer') {
                getStandingsDEU();
                getMatchesDEU();
            } else if (page === 'ligaSpn') {
                getStandingsESP();
                getMatchesESP();
            } else if (page === 'ligaPrc') {
                getStandingsFRA();
                getMatchesFRA();
            } else if (page === 'ligaBlnd') {
                getStandingsNLD();
                getMatchesNLD();
            } else if (page === 'ligaItly') {
                getStandingsITA();
                getMatchesITA();
            } else if (page === 'favorite') {
                showFavTeam();
            } else if (urlTeamParam.length > 0) {
                // fungsi untuk menampilkan informasi team
                getAllTeam(urlTeamParam);
            }

            if (this.status === 200) {
                content.innerHTML = xhttp.responseText;
            } else if (this.status === 404) {
                content.innerHTML = '<p>Halaman tidak ditemukan.</p>';
            } else {
                content.innerHTML = '<p>Ups.. halaman tidak dapat diakses.</p>';
            }
            urlTeamParam = '';
        }
    };
    // statement untuk fetch page league sesuai dengan fungsi yang akan digunakan
    if (urlTeamParam.length > 0) {
        xhttp.open('GET', '/src/pages/team.html');
        xhttp.send();
        return;
    } else if (
        page === 'ligaJer' ||
        page === 'ligaBel' ||
        page === 'ligaIng' ||
        page === 'ligaPrc' ||
        page === 'ligaBlnd' ||
        page === 'ligaItly' ||
        page === 'ligaSpn'
    ) {
        xhttp.open('GET', `/src/pages/leagueStandings.html`);
        xhttp.send();
        return;
    } else {
        xhttp.open('GET', `/src/pages/${page}.html`);
        xhttp.send();
    }
}
loadPage(page);