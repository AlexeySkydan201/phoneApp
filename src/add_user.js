class AddUser {
    constructor(bd) {
        this.bd;
        this.lol = document.getElementById('lol');
        this.scroll = document.getElementById('scroll');
        this.arrAdd = ['add-fullName', 'add-phone', 'add-email', 'add-birthdate', 'add-address', 'add-gender '];
    }
    render() {
        this.lol.innerHTML += this.header();
        this.lol.innerHTML += this.main();

    }
    header() {
        return `<header class="header">
        <div class="container top-radius">
            <nav class="user-top-line">
                <a href="" ></a><span id = "cont">Cansel</span>
                
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

        return `<div class="edit-main-info">${photo}</div>`;
    }
    scrollHolder() {
        var result = this.arrAdd.reduce((sum, current) => {
            return sum + `<div class="edit-field">
            <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                </button><span contenteditable="true" class="rezult">${current}</span>
                
        </div>`
        }, '');
        let delet = `<div class="edit-field">
        <button class="delete-contact" id = "save1" >save contact</button>
        </div>`;

        return `<div class="scroll-holder" ><div class="edit-info">${result}${delet}</div></div>`
    }

}
export default AddUser;