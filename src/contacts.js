class Contacts {
    constructor() {
        this.bd;
        this.lol = document.getElementById('lol');

        this.thead = `<thead >
        <tr>
            <th class = "th1" >fullName</th>
            <th class = "th1">phone</th>
            <th class = "th1">email</th>
        </tr>
        </thead>`;

    }
    render(bd, param) {
        this.bd = bd;
        this.lol.innerHTML = '';
        this.lol.innerHTML += this.header();
        this.lol.innerHTML += this.main();
        this.bd = this.bd.sort((a, b) => {
            return a[param] > b[param];
        });
        this.tbody(this.bd);
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
        return `<table class="table table-hover contacts" id="myTable">${this.thead}<tbody></tbody></table>`;
    }
    tbody(bd) {
        var result = bd.reduce(function(sum, current) {
            return sum + `<tr class = "tr" value = "${current._id}">
        <td>${current.fullName}</td>
        <td>${current.phone}</td>
        <td>${current.email}</td>
        </tr>`;
        }, '');
        let table = document.getElementById('myTable');
        table.children[1].innerHTML = result;
    }
}
export default Contacts;