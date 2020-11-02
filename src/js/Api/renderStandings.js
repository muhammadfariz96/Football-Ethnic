// Function Untuk menampilkan standing
const showStanding = (data) => {
    let standings = '';
    let logo = '';
    let sourceLogo = '/src/assets/images/daftar-liga';
    const standingElement = document.querySelector('.standing');

    // Menentukan logo sesuai negara
    if (data.competition.area.name === 'England') {
        logo = `${sourceLogo}/logo_premier_league.svg`;
    } else if (data.competition.area.name === 'Germany') {
        logo = `${sourceLogo}/logo_bundesliga.svg`;
    } else if (data.competition.area.name === 'Italy') {
        logo = `${sourceLogo}/logo_serie_a.svg`;
    } else if (data.competition.area.name === 'France') {
        logo = `${sourceLogo}/logo_ligue_1.svg`;
    } else if (data.competition.area.name === 'Spain') {
        logo = `${sourceLogo}/logo_laliga.svg`;
    } else if (data.competition.area.name === 'Netherlands') {
        logo = `${sourceLogo}/logo_eredivisie.svg`;
    }

    // looping data standings
    data.standings[0].table.forEach((standing) => {
        standings += /*html*/`
                <tr>
                    <td>
                        <strong>${standing.position}</strong>
                    </td>
                    <td>
                        <img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge"/><br/>
                        <a class="linked" href="#team?id=${standing.team.id}">${standing.team.name}</a><br>
                        <div class="games">
                            <span class="btn">W : ${standing.won}</span>
                            <span class="btn">D : ${standing.draw}</span>
                            <span class="btn">L : ${standing.lost}</span>
                        </div>
                    </td>
                    
                    <td>
                        <strong>${standing.points}</strong>
                    </td>
                </tr>
        `;
    });

    // Menampilkan keseluruhan standings
    standingElement.innerHTML = /*html*/`
    <div class="col m12 s12">
        <div class="cardStandingLeague">
            <div class="contentStandingLeague">
                <h2>${data.competition.name}</h2>
                <h2>${data.competition.area.name}</h2>
                <p>${data.season.startDate} - ${data.season.endDate}</p>
            </div>
        <img src="${logo}" alt="${data.competition.name}">
    </div>

    <table class="content-table centered">
        <thead>
            <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            ${standings}
        </tbody>
    </table>  
        
    </div > `;

    document.querySelectorAll('.linked').forEach((lnk) => {
        lnk.addEventListener('click', (event) => {
            // mengambil nilai id lalu dimasukkan ke variabel urlTeam Param
            urlTeamParam = event.target.getAttribute('href').substr(9);
            // Muat konten halaman yang dipanggil
            loadPage();
        });
    });
}


