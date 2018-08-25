class Router {
    constructor() {
        this.footer = document.getElementById('fo-er');
    }
    render() {
        this.footer.innerHTML = this.strFooter();
    }
    strFooter() {
        return `<div class="container bottom-radius">
            <nav class="main-nav" id = "nav1">
            <a href="" class="tab active">
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
            <span class="tab-text">Contacts</span>
            </a>
            <a href="" class="tab">
            <span class="glyphicon glyphicon-th" aria-hidden="true"></span>
            <span class="tab-text">Keypad</span>
            </a>
            <a href="" class="tab">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            <span class="tab-text">Edit contact</span>
            </a>
            <a href="" class="tab">
            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
            <span class="tab-text">User</span>
            </a>
            <a href="" class="tab">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
            <span class="tab-text">Add user</span>
            </a>
            </nav>
        </div>`;
    }
}
export default Router;