class EditUser {
    constructor(bd) {
        this.lol = document.getElementById('lol');
        this.container1 = document.getElementById('container');
        this.scroll = document.getElementById('scroll');
        this.arrEditMainInfo = ['First Name', 'Last Name', 'Company'];
        this.arrAdd = ['add fullName', 'add  email', 'add birthdate', 'add address', 'add gender '];
        this.arrAdd2 = ['fullName', 'email', 'birthdate', 'address', 'gender'];
    }
    render(bd, id) {
        this.id = id;
        this.bd = bd;
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
                <a  id="cont2">Cansel</a>
                <button type="submit" form="edit-contact" formaction="#" formmethod="get" class="done-btn" id = "patch">Done</button>
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
            return sum + `<div class="edit-field"><p >${this.arrAdd2[i]}</p>
            <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                </button><span contenteditable="true" class="patch2">${current}</span>
                
        </div>`
        }, '');
        let delet = `<div class="edit-field">
        
         <button href="" class="delete-contact" id="deletContact">delete contact</button>
        
       
        </div>`
        return `<div class="scroll-holder" ><div class="edit-info" >${ph}${result}${delet}</div></div>`

    }
    patch() {
        let patch2 = document.getElementById('patch2');
        let birth = patch2.children[3].children[2].textContent.trim();
        if (birth == 'undefined' || birth == 'null') {
            birth = '0001-01-01';
        }
        const user = {
            fullName: patch2.children[1].children[2].textContent.trim(),
            email: patch2.children[2].children[2].textContent.trim(),
            birthdate: birth,
            address: patch2.children[4].children[2].textContent.trim(),
            gender: patch2.children[5].children[2].textContent.trim(),
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

        })


    }
}
export default EditUser;