// Function Untuk menampilkan standing
const showStanding = (data) => {
    let standings = '';
    const standingElement = document.querySelector('.standing');

    // looping data standings
    data.standings[0].table.forEach((standing) => {
        standings += /*html*/`
                <tr>
                    <td>
                        <img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge"/>
                    </td>
                    <td>
                    <a class="linked" href="#team?id=${standing.team.id}">${standing.team.name}</a><br>
                        ${standing.won}<sub><a class="hijau">win</a></sub>
                        ${standing.draw}<sub><a class="abu2">draw</a></sub>
                        ${standing.lost}<sub><a class="merah">lose</a></sub>
                    </td>
                    

                    <td>Poin :<strong> ${standing.points}</strong> <br>
                    Posisi ke- <strong> ${standing.position} </strong>
                    </td>
                </tr>
        `;
    });

    standingElement.innerHTML = /*html*/`
    <div class="col m6 s12">
        <div class="card bg-clr headerx bulat">
            <div class="bulat standings">
                <a class="cmp-name">${data.competition.name}</a><br>
                <table>
                    <td><a class="putih">${data.season.startDate} - ${data.season.endDate}</a></td> <td class="rata-kanan">${data.competition.area.name}</td>
                </table>
            </div>
        </div>
        <div class="card standings bulat">
            <table class="striped" >
                    ${standings}
            </table>                 
        </div>
    </div>
	`;
    document.querySelectorAll('.linked').forEach((lnk) => {
        lnk.addEventListener('click', (event) => {
            // mengambil nilai id lalu dimasukkan ke variabel urlTeam Param
            urlTeamParam = event.target.getAttribute('href').substr(9);
            // Muat konten halaman yang dipanggil
            loadPage();
        });
    });
}


