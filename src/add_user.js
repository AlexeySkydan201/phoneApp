class AddUser {
    constructor(bd) {
        this.bd;
        this.lol = document.getElementById('lol');

        this.scroll = document.getElementById('scroll');
        this.arrEditMainInfo = ['Name', 'email', 'gender'];
        this.arrAdd = ['add-fullName', 'add-phone', 'add-email', 'add-birthdate', 'add-address', 'add-gender ']
    }
    render() {
        this.bd = app.bd;
        this.lol.innerHTML += this.header();
        this.lol.innerHTML += this.main();
        this.container1 = document.getElementById('container');
        console.log(`asd`, this.container1);
        console.log(`uuuu`, app.pages.addUser.container1.children[1].children[0].children[0].textContent.trim());
    }
    header() {
        return `<header class="header">
        <div class="container top-radius">
            <nav class="user-top-line">
                <a href="user.html">Cansel</a>
                <button class="done-btn">Done</button>
            </nav>
        </div>
    </header>`;
    }
    main(bd) {
        return `<main class="main">
        <div class="container" id="container">
        ${this.container()}
        </div>
        </main>`;
    }
    container() {
        return this.editMainInfo() + this.scrollHolder();
    }
    editMainInfo() {
        let photo = `<div class="edit-foto">
            <button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                <span contenteditable="true">add foto</span></button>
        </div>`;
        var result = this.arrEditMainInfo.reduce((sum, current) => {
            return sum + `<div class="edit-field">
            <button href="#" class="add-btn" ><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                    
                </button><span contenteditable="true">${current}</span>
        </div>`
        }, '');
        let mainInfoHolder = `<div class="main-info-holder">${result}</div>`
        return `<div class="edit-main-info">${photo}</div>`;
    }
    scrollHolder() {
        var result = this.arrAdd.reduce((sum, current) => {
            return sum + `<div class="edit-field">
            <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                </button><span contenteditable="true">${current}</span>
                
        </div>`
        }, '');
        let delet = `<div class="edit-field">
        <button class="delete-contact" id = "save1" onclick = "app.pages.addUser.serverAddUser()" >save contact</button>
        </div>`;

        return `<div class="scroll-holder" ><div class="edit-info">${result}${delet}</div></div>`
    }
    serverAddUser() {
        const user = {
            fullName: app.pages.addUser.container1.children[1].children[0].children[0].textContent.trim(),
            phone: app.pages.addUser.container1.children[1].children[0].children[1].textContent.trim(),
            email: app.pages.addUser.container1.children[1].children[0].children[2].textContent.trim(),
            birthdate: app.pages.addUser.container1.children[1].children[0].children[3].textContent.trim(),
            address: app.pages.addUser.container1.children[1].children[0].children[4].textContent.trim(),
            gender: app.pages.addUser.container1.children[1].children[0].children[5].textContent.trim(),
        };
        fetch('https://easycode-js.herokuapp.com/skal/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(user => {
            return user.json()
        }).then(us => {
            console.log(`ii`, us._id);

        })
    }
}