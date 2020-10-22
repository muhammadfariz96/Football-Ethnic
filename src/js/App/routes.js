// Load page content
let page = window.location.hash.substr(1);
let urlTeamParam = window.location.hash.substr(9);
if (page === '') page = 'home';



const loadPage = (page) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            const content = document.querySelector('.body-content');

            // proses routing atau apalah, wkwk
            if (page === 'home') {
                renderLeague();
            } else if (page === 'ligaIng') {
                getStandingsIng();
            } else if (page === 'ligaJer') {
                getStandingsJer();
            } else if (page === 'ligaSpn') {
                getStandingsSpn();
            } else if (page === 'ligaPrc') {
                getStandingsPrc();
            } else if (page === 'ligaBlnd') {
                getStandingsBlnd();
            } else if (page === 'ligaItly') {
                getStandingsItly();
            } else if (page === 'cara') {
                console.log('ini cara');
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
    // statement untuk mem fetch page sesuai dengan fungsi yang akan digunakan
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