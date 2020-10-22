// Fungsi untuk menampilkan detail team
const showTeam = (team) => {
    const teamx = document.querySelector('.team');
    let pemain = '';
    // Looping data team
    team.squad.forEach((pemainx) => {
        pemain += /*html*/`
        <ul class="collapsible bulat">
            <li>
                <div class="collapsible-header bulat">${pemainx.name}</div>
                    <div class="collapsible-body p-0">
                        <ul class="collection bulat">
                            <li class="collection-item">Posisi : ${pemainx.position}</li>
                            <li class="collection-item">Negara Kelahiran : ${pemainx.countryOfBirth}</li>
                            <li class="collection-item">Kebangsaan : ${pemainx.nationality}</li>
                            <li class="collection-item">Nomor Pakaian : ${pemainx.shirtNumber == null ? 'Tidak Diketahui' : pemainx.shirtNumber}</li>
                            <li class="collection-item">Sebagai : ${pemainx.role}</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>`;
    });

    teamx.innerHTML = /*html*/`
        <div class="card bulat">
            <div class="card-image bulat">
                <img class="logo-t" src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}">
                <a class="btn-floating halfway-fab waves-effect waves-light blue" id="simpan" href=${team.id}>
                <i class="material-icons" id="ikonx">save</i></a>
            </div>
            <div class="card-content">
                <p>
                    ${team.name} (${team.shortName}) adalah klub sepakbola yang beralamat di ${team.address}. Klub ini didirikan pada tahun 
                    <strong>${team.founded === null ? 'yang tidak diketahui' : team.founded}</strong> dan memiliki warna khas ${team.clubColors}
                </p>
            </div>
        </div>

        <tr>
            <td>Anggota Tim</td>
        </tr>
        ${pemain}`;

    // inisialisasi collapse materialize
    $('.collapsible').collapsible();
    const ikonxx = document.getElementById('ikonx');
    // fungsi untuk mengecek apakah id team sudah ada di DB atau belum
    // jika sudah maka tombol save berubah ikonnya menjadi delete
    const dataxx = async () => {
        if (await isFav(parseInt(window.location.hash.substr(9)))) {
            ikonxx.innerHTML = 'delete';
        }
    }
    dataxx();

    $('#simpan').on('click', async (e) => {
        e.preventDefault();
        // mendapatkan id team dari nilai href
        const teamId = parseInt(e.currentTarget.getAttribute('href'));

        if (await isFav(teamId)) {
            deleteTeamFav(teamId);
            ikonxx.innerHTML = 'save';
            M.toast({ html: `${team.name} Telah Dihapus Dari Tim Favorit` });
        } else {
            M.toast({ html: `${team.name} Telah Ditambahkan Ke Tim Favorit` });
            ikonxx.innerHTML = 'delete';
            addTeamFav(team);
        }
    });
}

// Fungsi untuk menampilkan team favorite
const showFavTeam = () => {
    getAllTeamFav().then((favs) => {
        let data = '';
        let data2 = '';
        // looping data dari database
        favs.forEach((favs) => {
            data2 += /*html*/`
            <div class="col m4 s12">
                    <div class="card">
                        <div class="imgBx">
                        <img src="${favs.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="${favs.name}">
                        </div>
                        <div class="contentBx">
                            <h3>${favs.name}</h3>
                            <h2 class="liga">${favs.area.name}</h2>
                            <a href="#team?id=${favs.id}" class="detail">Detail</a>
                        </div>
                    </div>
                </div>`;
        });

        data += /*html*/`
                <table border="1"> 
                    ${data2 === '' ? '<h4>Tidak Ada Tim Favorit</h4>' : data2} 
                </table>
                `;

        document.querySelector('.teamFav').innerHTML = data;
        document.querySelectorAll('.detail').forEach((lnk) => {
            lnk.addEventListener('click', (event) => {
                // mengambil nilai id lalu dimasukkan ke variabel urlTeam Param
                urlTeamParam = event.target.getAttribute('href').substr(9);
                // Muat konten halaman yang dipanggil
                loadPage();
            });
        });
    });
}

