class App {
    constructor() {
        this.bd;
        this.url = '';
        this.log = '';
        this.lol = document.getElementById('lol');
        this.activPage = 'Login';
        this.pages = {
            login: new Login(),
            contacts: new Contacts(),
            keypad: new Keypad(),
            user: new User(),
            editUser: new EditUser(),
            addUser: new AddUser(),
        }
    }
    render(id) {
        console.log(`qq `, this.activPage)
        if (this.activPage == 'Login') {
            let c = this.pages.login;
            c.entrance();

        }
        if (this.activPage == 'Contacts') {
            this.lol.innerHTML = '';
            let c = this.pages.contacts;
            console.log(`bdddd`, this.bd);

            setTimeout(() => {
                c.render(this.bd);
                c.search.oninput = function() {
                    let t = c.filter(search.value);
                    c.bd = t;
                    c.sorts();
                };
            }, 2000);
        }
        if (this.activPage == 'User') {
            this.lol.innerHTML = '';
            let c = this.pages.user;
            c.render(id);
        }
        if (this.activPage == 'Keypad') {
            this.lol.innerHTML = '';
            let c = this.pages.keypad;
            c.render();
        }
        if (this.activPage == 'Edit contact') {
            this.lol.innerHTML = '';
            let c = this.pages.editUser;
            c.render(id);
        }
        if (this.activPage == 'Add user') {
            this.lol.innerHTML = '';
            let c = this.pages.addUser;
            c.render();
        }
    }
}
var app = new App(bd);
app.render();