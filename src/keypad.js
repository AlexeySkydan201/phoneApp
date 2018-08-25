class Keypad {
    constructor() {
        this.lol = document.getElementById('lol');
        this.strNumber = `<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        <span class="numbers" id = "monitor"></span>
        <span class="glyphicon glyphicon-circle-arrow-left " aria-hidden="true" id="delete1"></span>`;
        this.numberPhone = '';
    }
    render() {
        this.lol.innerHTML += this.header();
        this.lol.innerHTML += this.main();
        this.number = document.getElementById('number');
        this.monitor = document.getElementById('monitor');

    }
    header() {
        return `<header class="header">
        <div class="container top-radius">
            <h2>Keypad</h2>
        </div>
        </header>`
    }
    main() {
        return ` <main class="main">
        <div class="container">
            <div class="number" id="number">
            ${this.strNumber}
            </div>
            <div class="keypad-holder" id="key">
            ${this.strKey()}
            
            </div>
    </main>`
    }
    strKey() {

        return `
        <button class="key">1</button>
        <button class="key" >2</button>
        <button class="key" >3</button>
        <button class="key" >4</button>
        <button class="key" >5</button>
        <button class="key" >6</button>
        <button class="key" >7</button>
        <button class="key" >8</button>
        <button class="key" >9</button>
        <button class="key" >*</button>
        <button class="key" >0</button>
        <button class="key" >#</button>
        <button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
        `
    }
    keyOut(num) {
        let regex = /[#*]/;
        this.numberPhone += `${num}`;

        if (regex.test(this.numberPhone)) {
            this.monitor.textContent = this.numberPhone;
        } else if (this.numberPhone.length == 1) {
            this.monitor.textContent = this.numberPhone.replace(/(.{1})/, '($1');
        } else if (this.numberPhone.length == 3) {
            this.monitor.textContent = this.numberPhone.replace(/(.{3})/g, '($1) ');
        } else if (this.numberPhone.length == 5) {
            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{1})/g, '($1) $2');
        } else if (this.numberPhone.length == 7) {
            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{3})(.{1})/g, '($1) $2-$3');
        } else if (this.numberPhone.length == 9) {
            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{3})(.{2})(.{1})/g, '($1) $2-$3-$4');
        } else if (this.numberPhone.length > 10) {
            this.numberPhone = this.numberPhone.substr(0, 10);
        } else {
            this.monitor.textContent += `${num}`;
        }
    }
    deletKey() {
        let length1 = this.numberPhone.length;
        this.numberPhone = this.numberPhone.substr(0, length1 - 1);
        let length2 = this.monitor.textContent.length;
        if (this.numberPhone.length == 1) {
            this.monitor.textContent = this.numberPhone.replace(/(.{1})/, '($1');
        } else if (this.numberPhone.length == 2) {
            this.monitor.textContent = this.numberPhone.replace(/(.{2})/g, '($1 ');
        } else if (this.numberPhone.length == 3) {
            this.monitor.textContent = this.numberPhone.replace(/(.{3})/g, '($1) ');
        } else if (this.numberPhone.length == 5) {
            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{1})/g, '($1) $2');
        } else if (this.numberPhone.length == 7) {
            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{3})(.{1})/g, '($1) $2-$3');
        } else if (this.numberPhone.length == 9) {
            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{3})(.{2})(.{1})/g, '($1) $2-$3-$4');
        } else {
            this.monitor.textContent = this.monitor.textContent.substr(0, length2 - 1);
        }
    }

}
export default Keypad;