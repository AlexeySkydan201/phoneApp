import Login from './login';
import Contacts from './contacts';
import Keypad from './keypad';
import EditUser from './edit_contacts';
import AddUser from './add_user';
import User from './user';
import Router from './footer';
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
            footer: new Router(),
        }
    }
    render(id) {
        this.id = id;
        if (this.activPage == 'Login') {
            let c = this.pages.login;
            c.entrance();
            var enter1 = document.getElementById('enter1');
            enter1.addEventListener('click', () => {
                event.preventDefault();
                c.button();
                this.activPage = c.activPage;
                setTimeout(() => {
                    this.bd = c.bd;

                    this.render();
                }, 3000);

            });
        }
        if (this.activPage == 'Contacts') {
            this.lol.innerHTML = '';
            this.fContacts();
        }
        if (this.activPage == 'User') {
            this.lol.innerHTML = '';
            this.fUser();
        }
        if (this.activPage == 'Keypad') {
            this.lol.innerHTML = '';
            this.fKeypad();
        }
        if (this.activPage == 'Edit contact') {
            this.lol.innerHTML = '';
            this.fEdit();
        }
        if (this.activPage == 'Add user') {
            this.lol.innerHTML = '';
            this.fAddUser();
        }
        let c = this.pages.footer;
        c.render();
        let nav = document.getElementById('nav1');
        [...nav.children].forEach(element => {
            element.addEventListener('click', () => {
                event.preventDefault();
                this.activPage = element.children[1].textContent;
                this.render();
            });
        });
    }
    fContacts() {
        let c = this.pages.contacts;
        c.render(this.bd, this.param);
        let thead1 = document.getElementsByClassName('th1');
        [...thead1].forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                let param = element.textContent;
                this.bd.sort((a, b) => {
                    return a[param] > b[param];
                });

                c.tbody(this.bd);
            });
        });

        let tr = document.getElementsByClassName('tr');
        [...tr].forEach(element => {
            element.addEventListener('click', (event) => {
                this.activPage = 'User';
                this.render(element.getAttribute('value'));
            });
        });
        let search = document.getElementById('search');
        let bd1 = this.bd;
        search.oninput = function() {
            let str = search.value;
            let dataBaseFilter = [];
            bd1.forEach((value, i) => {
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
            c.tbody(dataBaseFilter);
        };
    }
    fKeypad() {
        let c = this.pages.keypad;
        c.render();
        var key = document.getElementsByClassName('key');
        [...key].forEach((element) => {
            element.addEventListener('click', (event) => {

                c.keyOut(element.textContent);
            });
        });
        var delete1 = document.getElementById('delete1');
        delete1.onclick = function() {
            c.deletKey();
        }
    }
    fAddUser() {
        let c = this.pages.addUser;
        c.render();
        var save1 = document.getElementById('save1');

        save1.onclick = function() {
            this.rezult = document.getElementsByClassName('rezult');
            const user = {
                fullName: this.rezult[0].textContent,
                phone: this.rezult[1].textContent,
                email: this.rezult[2].textContent,
                birthdate: this.rezult[3].textContent,
                address: this.rezult[4].textContent,
                gender: this.rezult[5].textContent,
            };
            fetch('http://easycode-js.herokuapp.com/skal/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(user => {
                return user.json()
            }).then(us => {

            });
            setTimeout(() => {
                location.reload();
            }, 1000);

        }
        var cont = document.getElementById('cont');
        cont.addEventListener('click', () => {
            c.arrAdd = ['add-fullName', 'add-phone', 'add-email', 'add-birthdate', 'add-address', 'add-gender '];
            this.activPage = 'Contacts';
            this.render();
        });
    }
    fUser() {
        let c = this.pages.user;
        c.render(this.bd, this.id);
        let cont1 = document.getElementById('cont1');
        let goToEdit = document.getElementById('goToEdit');
        cont1.addEventListener('click', () => {
            this.activPage = 'Contacts';
            this.render();
        });
        goToEdit.addEventListener('click', () => {
            this.activPage = 'Edit contact';
            this.render(this.id);
        });

    }
    fEdit() {
        let c = this.pages.editUser;
        c.render(this.bd, this.id);
        let cont2 = document.getElementById('cont2');
        let deletContact = document.getElementById('deletContact');
        let patch = document.getElementById('patch');
        let patch2 = document.getElementsByClassName('patch2');
        cont2.addEventListener('click', () => {
            this.activPage = 'Contacts';
            this.render();
        });
        deletContact.addEventListener('click', () => {
            let url = `http://easycode-js.herokuapp.com/skal/users/${this.id}`;
            var xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange', () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {

                }
            });

            xhr.open('DELETE', url, true); //DELETE   POST
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify());
            setTimeout(() => {
                location.reload();
            }, 1000);
        });
        patch.addEventListener('click', () => {

            let birth = patch2[2].textContent;
            if (birth == 'undefined' || birth == 'null') {
                birth = '0001-01-01';
            }
            const user = {
                fullName: patch2[0].textContent,
                email: patch2[1].textContent,
                birthdate: birth,
                address: patch2[3].textContent,
                gender: patch2[4].textContent,
            };
            fetch(`http://easycode-js.herokuapp.com/skal/users/${this.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(user => {
                return user.json()
            }).then(us => {

            });
            setTimeout(() => {
                location.reload();
            }, 1000);
        });
    }
}
export default App;