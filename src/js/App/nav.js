document.addEventListener("DOMContentLoaded", () => {

    // Fungsi memanggil navigasi
    const loadNav = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status != 200) return;

                // Muat daftar tautan menu
                document.querySelectorAll(".topnav, .sidenav").forEach((elm) => {
                    elm.innerHTML = xhttp.responseText;
                });

                // Daftarkan event listener untuk setiap tautan menu
                document
                    .querySelectorAll(".sidenav a, .topnav a")
                    .forEach((elm) => {
                        elm.addEventListener("click", (event) => {
                            // Tutup sidenav
                            const sidenav = document.querySelector(".sidenav");
                            M.Sidenav.getInstance(sidenav).close();

                            // Muat konten halaman yang dipanggil
                            page = event.target.getAttribute("href").substr(1);
                            loadPage(page);
                        });
                    });
            }
        };
        xhttp.open("GET", "/src/pages/nav.html", true);
        xhttp.send();
    }

    // Activate sidebar nav
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();

});