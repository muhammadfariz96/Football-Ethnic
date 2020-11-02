// Fungsi menampilkan matches
const showMatches = (data) => {
    const matchElement = document.querySelector('.match');
    matchElement.innerHTML = /*html*/`
        <div class="col m12 s12">
                <table class="content-table responsive-table centered">
                    <thead>
                        <tr>
                            <th>Matchday</th>
                            <th>Status</th>
                            <th>Home Team</th>
                            <th>Score</th>
                            <th>Away Team</th>
                        </tr>
                    </thead>

                    <tbody id="match">
                    </tbody>
                </table>

            <div id="pagination-wrapper"></div>
        </div>`;

    let state = {
        'querySet': data.matches,
        'page': 1,
        'rows': 10,
        'window': 5,
    }

    buildTable();

    // fungsi membagi query match
    function pagination(querySet, page, rows) {
        let trimStart = (page - 1) * rows;
        let trimEnd = trimStart + rows;
        let trimmedData = querySet.slice(trimStart, trimEnd);
        let pages = Math.round(querySet.length / rows);
        return {
            'querySet': trimmedData,
            'pages': pages,
        }
    }

    // fungsi membuat button pagination
    function pageButtons(pages) {
        let wrapper = document.getElementById('pagination-wrapper');
        wrapper.innerHTML = ``;
        let maxLeft = (state.page - Math.floor(state.window / 2));
        let maxRight = (state.page + Math.floor(state.window / 2));

        if (maxLeft < 1) {
            maxLeft = 1;
            maxRight = state.window;
        }

        if (maxRight > pages) {
            maxLeft = pages - (state.window - 1);
            if (maxLeft < 1) {
                maxLeft = 1;
            }
            maxRight = pages;
        }

        for (let page = maxLeft; page <= maxRight; page++) {
            wrapper.innerHTML += /*html*/`<button value=${page} class="page btn">${page}</button>`;
        }

        if (state.page !== 1) {
            wrapper.innerHTML = /*html*/`<button value=${1} class="page btn">&#171;</button>` + wrapper.innerHTML;
        }

        if (state.page !== pages) {
            wrapper.innerHTML += /*html*/`<button value=${pages} class="page btn">&#187;</button>`;
        }

        $('.page').on('click', function () {
            $('#match').empty();
            state.page = Number($(this).val());
            buildTable();
        });
    }

    // Fungsi looping match
    function buildTable() {
        let table = $('#match');
        let data = pagination(state.querySet, state.page, state.rows);
        let myList = data.querySet;

        for (var i = 1 in myList) {
            //Keep in mind we are using "Template Litterals to create rows"
            let row = /*html*/`<tr>
                        <td>${myList[i].matchday}</td>
                        <td>${myList[i].status}</td>
                        <td>${myList[i].homeTeam.name}</td>
                        <td>
                            ${myList[i].score.fullTime.homeTeam === null ? '-' : myList[i].score.fullTime.homeTeam} :
                            ${myList[i].score.fullTime.awayTeam === null ? '-' : myList[i].score.fullTime.awayTeam}
                        </td>
                        <td>${myList[i].awayTeam.name}</td>
                        `
            table.append(row);
        }
        pageButtons(data.pages);
    }
}