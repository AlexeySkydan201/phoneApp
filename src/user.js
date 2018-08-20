class User {
    constructor() {
        this.lol = document.getElementById('lol');

        this.id = '';
        this.phone = '';

    }
    render(id) {
        this.bd = app.bd;
        this.id = id;
        this.bd.forEach(element => {
            if (element._id == id) {
                this.phone = '+38 ' + element.phone.replace(/(\d{3})(\d{2})(\d{2})(\d{3})/, '($1) $2-$3-$4');
            }

        });
        this.lol.innerHTML += this.header();
        this.lol.innerHTML += this.main();
    }
    goToEdit(id) {
        app.activPage = 'Edit contact';
        app.render(id);
    }
    goToContacts() {
        app.activPage = 'Contacts';
        app.render();
    }
    header() {
        return `<header class="header">
        <div class="container top-radius">
            <div class="user-top-line">
                <a onclick = "app.pages.user.goToContacts()">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Contacts
                </a>
                <a  onclick = "app.pages.user.goToEdit('${this.id}')">Edit</a>
            </div>
        </div>
        </header>`;
    }
    main() {
        this.img = `<img src="images/user-face.png" alt="#" class=" user-img img-circle center-block">`;
        this.userName = `<div class="user-name">User Name</div>`;
        this.optionsLine = `<div class="options-line">
        <div class="message">
            <div class="options-icon"><span class="icon glyphicon glyphicon-comment" aria-hidden="true"></span></div>
            <span class="options-text">message</span>
        </div>
        <div class="call">
            <div class="options-icon"><span class="icon glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
            <span class="options-text">call</span>
        </div>
        <div class="video">
            <div class="options-icon"><span class="icon glyphicon glyphicon-facetime-video" aria-hidden="true"></span></div>
            <span class="options-text">video</span>
        </div>
        <div class="mail">
            <div class="options-icon"><span class="icon glyphicon glyphicon-envelope" aria-hidden="true"></span></div>
            <span class="options-text">mail</span>
        </div>
        </div>`;
        this.telNumber = `<div class="tel-number">
        <h3>mobile</h3>
        <div> ${this.phone}</div>
        </div>
        <div class="tel-number">
        <h3>home</h3>
        <div> ${this.phone}</div>
        </div>`;
        this.optionsTable = `<div class="options-table">
        <div class="options-item"><a href="#">Notes</a></div>
        <div class="options-item"><a href="#">Send message</a></div>
        <div class="options-item"><a href="#">Share contact</a></div>
        <div class="options-item"><a href="#">Add to favorites</a></div>
        <div class="options-item"><a href="#">Share my location</a></div>
        <div class="options-item"><a href="#">Block this caller</a></div>
        </div>`;
        return `<div class="container">${this.img}${this.userName}${this.optionsLine}${this.telNumber}${this.optionsTable}</div>`
    }

}
var user = new User();
//user.render();