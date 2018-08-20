class EditUser {
    constructor(bd) {
        /*
        вставить id из бд и отображать usera
        уменьшить кол-во полей
        */

        this.lol = document.getElementById('lol');
        this.container1 = document.getElementById('container');
        this.scroll = document.getElementById('scroll');
        this.arrEditMainInfo = ['First Name', 'Last Name', 'Company'];
        this.arrAdd = ['add fullName', 'add  email', 'add birthdate', 'add address', 'add gender '];
        this.arrAdd2 = ['fullName', 'email', 'birthdate', 'address', 'gender'];
    }
    render(id) {
        this.id = id;
        this.bd = app.bd;
        console.log(`nnn`, id)
        this.bd.forEach(element => {
            if (element._id == id) {
                this.arrAdd[0] = element.fullName;
                this.arrAdd[1] = element.email;
                if (element.birthdate == undefined) {
                    this.arrAdd[2] = element.birthdate
                } else {
                    this.arrAdd[2] = element.birthdate.substring(0, 10);
                }
                this.arrAdd[3] = element.address;
                this.arrAdd[4] = element.gender;
                this.phone = '+38 ' + element.phone.replace(/(\d{3})(\d{2})(\d{2})(\d{3})/, '($1) $2-$3-$4');
            }

        });
        this.lol.innerHTML += this.header();
        this.lol.innerHTML += this.main();

    }
    header() {
        return `<header class="header">
        <div class="container top-radius">
            <nav class="user-top-line">
                <a  onclick = "app.pages.editUser.goToContacts()">Cansel</a>
                <button type="submit" form="edit-contact" formaction="#" formmethod="get" class="done-btn" onclick = "app.pages.editUser.patch()">Done</button>
            </nav>
        </div>
    </header>`;
    }
    main(bd) {
        return `<main class="main">
        <div class="container" id="container">
        ${this.container()}
        </div>
        </main>`
    }
    container() {
        return this.editMainInfo() + this.scrollHolder();
    }
    editMainInfo() {
        let photo = `<div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class=" user-img img-circle center-block"></div>`;
        // var result = this.arrEditMainInfo.reduce((sum, current) => {
        //     return sum + `<div class="edit-field">
        //     <button href="#" class="add-btn" ><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>

        //         </button><span contenteditable="true">${current}</span>
        // </div>`
        // }, '');
        // let mainInfoHolder = `<div class="main-info-holder">${result}</div>`
        return `<div class="edit-main-info">${photo}</div>`;
    }
    scrollHolder() {
        var ph = ` <div class="edit-field">
        <button href="#" class="delete-btn"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
            <span>phone</span>
            <span>${this.phone}</span>
            </button>
    </div>`;
        var result = this.arrAdd.reduce((sum, current, i) => {
            return sum + `<div class="edit-field"><p id = "editChange">${this.arrAdd2[i]}</p>
            <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                </button><span contenteditable="true">${current}</span>
                
        </div>`
        }, '');
        let delet = `<div class="edit-field">
        
         <button href="" class="delete-contact" onclick = "app.pages.editUser.deleteContacts()">delete contact</button>
        
       
        </div>`
        return `<div class="scroll-holder" ><div class="edit-info" id = "patch">${ph}${result}${delet}</div></div>`

    }
    goToContacts() {
        app.activPage = 'Contacts';
        app.render();
    }
    deleteContacts() {
        let url = `https://easycode-js.herokuapp.com/skal/users/${this.id}`;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log(xhr.responseText);
            }
        });

        xhr.open('DELETE', url, true); //DELETE   POST
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(user));

    }
    patch() {
        let patch = document.getElementById('patch');
        console.log(`patc55`, patch.children[1].children[2].textContent);
        let birth = patch.children[3].children[2].textContent.trim();
        if (birth == 'undefined' || birth == 'null') {
            birth = '0001-01-01';
        }
        const user = {
            fullName: patch.children[1].children[2].textContent.trim(),
            email: patch.children[2].children[2].textContent.trim(),
            birthdate: birth,
            address: patch.children[4].children[2].textContent.trim(),
            gender: patch.children[5].children[2].textContent.trim(),
        };
        console.log(`patch user`, user);
        fetch(`https://easycode-js.herokuapp.com/skal/users/${this.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(user => {
            return user.json()
        }).then(us => {
            console.log(`ii`, us.fullName);

        })


    }
}