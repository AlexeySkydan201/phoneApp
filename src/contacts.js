class Contacts {
    constructor() {
        this.bd = bd;
        this.lol = document.getElementById('lol');

        this.thead = `<thead>
        <tr>
            <th onclick = "app.pages.contacts.sorts('fullName')">Name</th>
            <th onclick = "app.pages.contacts.sorts('phone')">phone</th>
            <th onclick = "app.pages.contacts.sorts('email')">Email</th>
        </tr>
        </thead>`;

    }
    render(bd) {
        this.bd = bd;
        console.log(`bdContacts`, this.bd);
        this.lol.innerHTML += this.header();

        this.lol.innerHTML += this.main();
        this.sorts();
        this.search = document.getElementById('search');
        this.search.oninput = function() {
            let t = this.filter(search.value);
            this.bd = t;
            this.sorts();

        };

    }
    header() {
        return `<header class="header">
        <div class="container top-radius">
            <h2>Contacts</h2>
        </div>
    </header>`;
    }
    main() {
        return `<main>${this.conntainer()}</main>`;
    }
    conntainer() {
        return `<div class="container">${this.form()}${this.table1()}</div>`
    }
    form() {
        return `<div id="form">
        <form class="form-inline search-form">
            <div class="form-group">
                <label class="sr-only" for="search">Search</label>
                <input type="text" class="form-control" id="search" placeholder="Search" value="">

            </div>
        </form>
        </div>`
    }
    table1() {

        return `<table class="table table-hover contacts" id="myTable"></table>`;
    }
    goToUser(id) {
        app.activPage = 'User';
        app.render(id);

    }
    tbody(bd) {

        var result = this.bd.reduce(function(sum, current) {
            // console.log(`r `, current);

            return sum + `<tr onclick = "app.pages.contacts.goToUser('${current._id}')">
        <td>${current.fullName}</td>
        <td>${current.phone}</td>
        <td>${current.email}</td>
        </tr>`;
        }, '');

        this.table = document.getElementById('myTable');
        let h = this.thead + `<tbody>${result}</tbody>`;
        this.table.innerHTML = h;

    }
    filter(str) {

        let dataBaseFilter = [];
        this.bd.forEach((value, i) => {
            for (let key in value) {
                if (key == 'fullName' || key == 'email' || key == 'phone') {
                    for (let j = 0; j <= value[key].length - str.length; j++) {
                        if (value[key].substr(j, str.length) == str) {
                            dataBaseFilter.push(value);
                            return;
                        }
                    }
                }

            }
        });

        return dataBaseFilter;
    }
    sorts(param) {
        this.bd.sort((a, b) => {
            return a[param] > b[param];
        });

        this.tbody(this.bd);
    }
}