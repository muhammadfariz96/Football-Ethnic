// Fungsi Looping Card League
const renderLeague = () => {
    let league = '';
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(xhttp.responseText);
            data.forEach((liga) => {
                league += /*html*/ `
                <div class="col m4 s12">
                    <div class="cardLeague">
                        <div class="imgLeague">
                        <img src="${liga.logo_liga}" alt="${liga.nama_liga}">
                        </div>
                        <div class="contentLeague">
                            <h3>${liga.nama_liga}</h3>
                            <h2 class="liga">${liga.negara_liga}</h2>
                            <a href="${liga.route_liga}" class="detail">Detail</a>
                        </div>
                    </div>
                </div>`;
                document.querySelector('.league').innerHTML = league;
            });
        }
        document.querySelectorAll('.detail').forEach((lnk) => {
            lnk.addEventListener('click', (event) => {
                // mengambil nilai id lalu dimasukkan ke variabel urlTeam Param
                page = event.target.getAttribute('href').substr(1);
                // Muat konten halaman yang dipanggil
                loadPage(page);
            });
        });
    };
    xhttp.open("GET", "src/data/dataLeagues.json", true);
    xhttp.send();
};






