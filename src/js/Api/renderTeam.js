// Fungsi untuk menampilkan detail team
const showTeam = (team) => {
    const teamElement = document.querySelector('.team');
    let teams = '';
    let pemain = '';

    // Looping data pemain
    team.squad.forEach((player) => {
        pemain += /*html*/`
        <div class="contentPemain">
            <div class="label">${player.name}</div>
            <div class="content">
                <ul class="collection bulat">
                    <li class="collection-item">Position  : ${player.position == null ? 'Tidak Diketahui' : player.position}</li>
                    <li class="collection-item">Birth Date : ${player.countryOfBirth}</li>
                    <li class="collection-item">Nationality : ${player.nationality}</li>
                    <li class="collection-item">Shirt Number : ${player.shirtNumber == null ? 'Tidak Diketahui' : player.shirtNumber}</li>
                    <li class="collection-item">Role : ${player.role}</li>
                </ul>
            </div>
        </div>`;
    });

    // Menampilkan informasi team
    teams +=/*html*/`
    <div class="cardTeam">
        <div class="contentTeam">
            <h2>${team.name}</h2>
            <p>
                ${team.name} adalah klub sepakbola yang beralamat di ${team.address}. Klub ini didirikan pada tahun 
                <strong>${team.founded === null ? 'yang tidak diketahui' : team.founded}</strong> dan memiliki warna khas ${team.clubColors}
            </p>
            <a href="${team.website}">Website</a>
        </div>
        <img src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="${team.name}">
    </div>`;

    // Menampilkan informasi team dan pemain
    teamElement.innerHTML = /*html*/`
    <div class="col m12 s12">

        ${teams}

        <div class="accordion">
            ${pemain}
        </div>

        <div class="fixed-action-btn">
            <a class="btn-floating btn-large" id="save" href=${team.id}>
                <i class="large material-icons" id="iconSave">save</i>
            </a>
        </div>
    </div>`;

    // Inisialisasi accordion pemain
    const accordion = document.getElementsByClassName('contentPemain');
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.classList.toggle('active')
        });
    }
    // Fungsi untuk mengecek apakah id team sudah ada di DB atau belum
    // jika sudah maka tombol save berubah ikonnya menjadi delete dan berwarna merah
    const dataxx = async () => {
        if (await isFav(parseInt(window.location.hash.substr(9)))) {
            iconSave.innerHTML = 'delete';
            document.getElementById("save").classList.add("red");
        }
    }
    dataxx();

    $('#save').on('click', async (e) => {
        e.preventDefault();
        // mendapatkan id team dari nilai href
        const teamId = parseInt(e.currentTarget.getAttribute('href'));

        if (await isFav(teamId)) {
            M.toast({ html: `${team.name} Remove from favorite team` });
            iconSave.innerHTML = 'save';
            document.getElementById("save").classList.remove("red");
            deleteTeamFav(teamId);
        } else {
            M.toast({ html: `${team.name} Add to favorite team` });
            iconSave.innerHTML = 'delete';
            document.getElementById("save").classList.add("red");
            addTeamFav(team);
        }
    });
}

// Fungsi untuk menampilkan team favorite
const showFavTeam = () => {
    getAllTeamFav().then((favs) => {
        const favTeamElement = document.querySelector('.teamFav');
        let notFoundFavTeam = '';
        let favTeam = '';
        // looping data team dari database
        favs.forEach((favs) => {
            favTeam += /*html*/`
            <div class="col m4 s12">
                    <div class="cardFavTeam">
                        <div class="imgFavTeam">
                        <img src="${favs.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="${favs.name}">
                        </div>
                        <div class="contentFavTeam">
                            <h3>${favs.name}</h3>
                            <h2 class="liga">${favs.area.name}</h2>
                            <a href="#team?id=${favs.id}" class="detail">Detail</a>
                        </div>
                    </div>
                </div>`;
        });

        // Menampilkan jiga team favorite tidak ada
        notFoundFavTeam += /*html*/`
            <div class="col m12 center">
                <div className="card">
                <h2>Not Found Team Favorite</h2>
                </div>
            </div>`;

        favTeamElement.innerHTML += /*html*/`
                    ${favTeam === '' ? notFoundFavTeam : favTeam} 
                `;

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

