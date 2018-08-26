class Login {
    constructor() {
        this.lol = document.getElementById('lol');
        this.url = '';
        this.mass = [];
        this.bd = [];
    }
    entrance() {
        let str = `<header class="header">
        <div class="container top-radius">
            <center>
                <h1>login</h1>
            </center>
        </div>
    </header>
    <main class="main">
        <div class="container" id="container">
            <div class="edit-main-info">
                <input type="text" id="who">
                <input type="submit" value="войти" id = "enter1" >

            </div>

        </div>
    </main>`;
        this.lol.innerHTML = str;
    }
    button() {
        var who = document.getElementById('who');
        this.url = who.value;
        this.serverRequest();
        this.activPage = 'Contacts';
    }
    serverRequest() {
        let url = `https://easycode-js.herokuapp.com/${this.url}/users`;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                this.mass = JSON.parse(xhr.responseText);
                this.mass.forEach((element, i) => {
                    this.bd.push(element.fullName);
                    this.bd[i] = element;
                });
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    }

}
export default Login;