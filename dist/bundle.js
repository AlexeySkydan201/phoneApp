/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/add_user.js":
/*!*************************!*\
  !*** ./src/add_user.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n﻿class AddUser {\r\n    constructor(bd) {\r\n        this.bd;\r\n        this.lol = document.getElementById('lol');\r\n        this.scroll = document.getElementById('scroll');\r\n        this.arrAdd = ['add-fullName', 'add-phone', 'add-email', 'add-birthdate', 'add-address', 'add-gender '];\r\n    }\r\n    render() {\r\n        this.lol.innerHTML += this.header();\r\n        this.lol.innerHTML += this.main();\r\n\r\n    }\r\n    header() {\r\n        return `<header class=\"header\">\r\n        <div class=\"container top-radius\">\r\n            <nav class=\"user-top-line\">\r\n                <a href=\"\" ></a><span id = \"cont\">Cansel</span>\r\n                \r\n            </nav>\r\n        </div>\r\n    </header>`;\r\n    }\r\n    main(bd) {\r\n        return `<main class=\"main\">\r\n        <div class=\"container\" id=\"container\">\r\n        ${this.container()}\r\n        </div>\r\n        </main>`;\r\n    }\r\n    container() {\r\n        return this.editMainInfo() + this.scrollHolder();\r\n    }\r\n    editMainInfo() {\r\n        let photo = `<div class=\"edit-foto\">\r\n            <button class=\"add-foto-btn\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span>\r\n                <span contenteditable=\"true\">add foto</span></button>\r\n        </div>`;\r\n        var result = this.arrEditMainInfo.reduce((sum, current) => {\r\n            return sum + `<div class=\"edit-field\">\r\n            <button href=\"#\" class=\"add-btn\" ><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span>\r\n                    \r\n                </button><span contenteditable=\"true\" >${current}</span>\r\n        </div>`\r\n        }, '');\r\n        let mainInfoHolder = `<div class=\"main-info-holder\">${result}</div>`\r\n        return `<div class=\"edit-main-info\">${photo}</div>`;\r\n    }\r\n    scrollHolder() {\r\n        var result = this.arrAdd.reduce((sum, current) => {\r\n            return sum + `<div class=\"edit-field\">\r\n            <button href=\"#\" class=\"add-btn\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span>\r\n                </button><span contenteditable=\"true\" class=\"rezult\">${current}</span>\r\n                \r\n        </div>`\r\n        }, '');\r\n        let delet = `<div class=\"edit-field\">\r\n        <button class=\"delete-contact\" id = \"save1\" >save contact</button>\r\n        </div>`;\r\n\r\n        return `<div class=\"scroll-holder\" ><div class=\"edit-info\">${result}${delet}</div></div>`\r\n    }\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddUser);\n\n//# sourceURL=webpack:///./src/add_user.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ \"./src/login.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts */ \"./src/contacts.js\");\n/* harmony import */ var _keypad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keypad */ \"./src/keypad.js\");\n/* harmony import */ var _edit_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit_contacts */ \"./src/edit_contacts.js\");\n/* harmony import */ var _add_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add_user */ \"./src/add_user.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ \"./src/user.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n    constructor() {\r\n        this.bd;\r\n        this.url = '';\r\n        this.log = '';\r\n        this.lol = document.getElementById('lol');\r\n        this.activPage = 'Login';\r\n        this.pages = {\r\n            login: new _login__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\r\n            contacts: new _contacts__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\r\n            keypad: new _keypad__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\r\n            user: new _user__WEBPACK_IMPORTED_MODULE_5__[\"default\"](),\r\n            editUser: new _edit_contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"](),\r\n            addUser: new _add_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"](),\r\n            footer: new _footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"](),\r\n        }\r\n    }\r\n    render(id) {\r\n        this.id = id;\r\n        if (this.activPage == 'Login') {\r\n            let c = this.pages.login;\r\n            c.entrance();\r\n            var enter1 = document.getElementById('enter1');\r\n            enter1.addEventListener('click', () => {\r\n                event.preventDefault();\r\n                c.button();\r\n                this.activPage = c.activPage;\r\n                setTimeout(() => {\r\n                    this.bd = c.bd;\r\n                    this.url = c.url;\r\n                    this.render();\r\n                }, 3000);\r\n\r\n            });\r\n        }\r\n        if (this.activPage == 'Contacts') {\r\n            this.lol.innerHTML = '';\r\n            this.fContacts();\r\n        }\r\n        if (this.activPage == 'User') {\r\n            this.lol.innerHTML = '';\r\n            this.fUser();\r\n        }\r\n        if (this.activPage == 'Keypad') {\r\n            this.lol.innerHTML = '';\r\n            this.fKeypad();\r\n        }\r\n        if (this.activPage == 'Edit contact') {\r\n            this.lol.innerHTML = '';\r\n            this.fEdit();\r\n        }\r\n        if (this.activPage == 'Add user') {\r\n            this.lol.innerHTML = '';\r\n            this.fAddUser();\r\n        }\r\n        let c = this.pages.footer;\r\n        c.render();\r\n        let nav = document.getElementById('nav1');\r\n        [...nav.children].forEach(element => {\r\n            element.addEventListener('click', () => {\r\n                event.preventDefault();\r\n                this.activPage = element.children[1].textContent;\r\n                this.render();\r\n            });\r\n        });\r\n    }\r\n    fContacts() {\r\n        let c = this.pages.contacts;\r\n        c.render(this.bd, this.param);\r\n        let thead1 = document.getElementsByClassName('th1');\r\n        [...thead1].forEach(element => {\r\n            element.addEventListener('click', (event) => {\r\n                event.preventDefault();\r\n                let param = element.textContent;\r\n                this.bd.sort((a, b) => {\r\n                    return a[param] > b[param];\r\n                });\r\n\r\n                c.tbody(this.bd);\r\n            });\r\n        });\r\n\r\n        let tr = document.getElementsByClassName('tr');\r\n        [...tr].forEach(element => {\r\n            element.addEventListener('click', (event) => {\r\n                this.activPage = 'User';\r\n                this.render(element.getAttribute('value'));\r\n            });\r\n        });\r\n        let search = document.getElementById('search');\r\n        let bd1 = this.bd;\r\n        search.oninput = function() {\r\n            let str = search.value;\r\n            let dataBaseFilter = [];\r\n            bd1.forEach((value, i) => {\r\n                for (let key in value) {\r\n                    if (key == 'fullName' || key == 'email' || key == 'phone') {\r\n                        for (let j = 0; j <= value[key].length - str.length; j++) {\r\n                            if (value[key].substr(j, str.length) == str) {\r\n                                dataBaseFilter.push(value);\r\n                                return;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            });\r\n            c.tbody(dataBaseFilter);\r\n        };\r\n    }\r\n    fKeypad() {\r\n        let c = this.pages.keypad;\r\n        c.render();\r\n        var key = document.getElementsByClassName('key');\r\n        [...key].forEach((element) => {\r\n            element.addEventListener('click', (event) => {\r\n\r\n                c.keyOut(element.textContent);\r\n            });\r\n        });\r\n        var delete1 = document.getElementById('delete1');\r\n        delete1.onclick = function() {\r\n            c.deletKey();\r\n        }\r\n    }\r\n    fAddUser() {\r\n        let c = this.pages.addUser;\r\n        c.render();\r\n        var save1 = document.getElementById('save1');\r\n\r\n        save1.onclick = function() {\r\n            this.rezult = document.getElementsByClassName('rezult');\r\n            const user = {\r\n                fullName: this.rezult[0].textContent,\r\n                phone: this.rezult[1].textContent,\r\n                email: this.rezult[2].textContent,\r\n                birthdate: this.rezult[3].textContent,\r\n                address: this.rezult[4].textContent,\r\n                gender: this.rezult[5].textContent,\r\n            };\r\n            fetch(`https://easycode-js.herokuapp.com/${this.url}/users/`, {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-Type': 'application/json'\r\n                },\r\n                body: JSON.stringify(user)\r\n            }).then(user => {\r\n                return user.json()\r\n            }).then(us => {\r\n\r\n            });\r\n            setTimeout(() => {\r\n                location.reload();\r\n            }, 1000);\r\n\r\n        }\r\n        var cont = document.getElementById('cont');\r\n        cont.addEventListener('click', () => {\r\n            c.arrAdd = ['add-fullName', 'add-phone', 'add-email', 'add-birthdate', 'add-address', 'add-gender '];\r\n            this.activPage = 'Contacts';\r\n            this.render();\r\n        });\r\n    }\r\n    fUser() {\r\n        let c = this.pages.user;\r\n        c.render(this.bd, this.id);\r\n        let cont1 = document.getElementById('cont1');\r\n        let goToEdit = document.getElementById('goToEdit');\r\n        cont1.addEventListener('click', () => {\r\n            this.activPage = 'Contacts';\r\n            this.render();\r\n        });\r\n        goToEdit.addEventListener('click', () => {\r\n            this.activPage = 'Edit contact';\r\n            this.render(this.id);\r\n        });\r\n\r\n    }\r\n    fEdit() {\r\n        let c = this.pages.editUser;\r\n        c.render(this.bd, this.id);\r\n        let cont2 = document.getElementById('cont2');\r\n        let deletContact = document.getElementById('deletContact');\r\n        let patch = document.getElementById('patch');\r\n        let patch2 = document.getElementsByClassName('patch2');\r\n        cont2.addEventListener('click', () => {\r\n            this.activPage = 'Contacts';\r\n            this.render();\r\n        });\r\n        deletContact.addEventListener('click', () => {\r\n            let url = `https://easycode-js.herokuapp.com/${this.url}/users/${this.id}`;\r\n            var xhr = new XMLHttpRequest();\r\n            xhr.addEventListener('readystatechange', () => {\r\n                if (xhr.readyState === XMLHttpRequest.DONE) {\r\n\r\n                }\r\n            });\r\n\r\n            xhr.open('DELETE', url, true); //DELETE   POST\r\n            xhr.setRequestHeader('Content-Type', 'application/json');\r\n            xhr.send(JSON.stringify());\r\n            setTimeout(() => {\r\n                location.reload();\r\n            }, 1000);\r\n        });\r\n        patch.addEventListener('click', () => {\r\n\r\n            let birth = patch2[2].textContent;\r\n            if (birth == 'undefined' || birth == 'null') {\r\n                birth = '0001-01-01';\r\n            }\r\n            const user = {\r\n                fullName: patch2[0].textContent,\r\n                email: patch2[1].textContent,\r\n                birthdate: birth,\r\n                address: patch2[3].textContent,\r\n                gender: patch2[4].textContent,\r\n            };\r\n            fetch(`https://easycode-js.herokuapp.com/${this.url}/users/${this.id}`, {\r\n                method: 'PATCH',\r\n                headers: {\r\n                    'Content-Type': 'application/json'\r\n                },\r\n                body: JSON.stringify(user)\r\n            }).then(user => {\r\n                return user.json()\r\n            }).then(us => {\r\n\r\n            });\r\n            setTimeout(() => {\r\n                location.reload();\r\n            }, 1000);\r\n        });\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n﻿class Contacts {\r\n    constructor() {\r\n        this.bd;\r\n        this.lol = document.getElementById('lol');\r\n\r\n        this.thead = `<thead >\r\n        <tr>\r\n            <th class = \"th1\" >fullName</th>\r\n            <th class = \"th1\">phone</th>\r\n            <th class = \"th1\">email</th>\r\n        </tr>\r\n        </thead>`;\r\n\r\n    }\r\n    render(bd, param) {\r\n        this.bd = bd;\r\n        this.lol.innerHTML = '';\r\n        this.lol.innerHTML += this.header();\r\n        this.lol.innerHTML += this.main();\r\n        this.bd = this.bd.sort((a, b) => {\r\n            return a[param] > b[param];\r\n        });\r\n        this.tbody(this.bd);\r\n    }\r\n    header() {\r\n        return `<header class=\"header\">\r\n        <div class=\"container top-radius\">\r\n            <h2>Contacts</h2>\r\n        </div>\r\n    </header>`;\r\n    }\r\n    main() {\r\n        return `<main>${this.conntainer()}</main>`;\r\n    }\r\n    conntainer() {\r\n        return `<div class=\"container\">${this.form()}${this.table1()}</div>`\r\n    }\r\n    form() {\r\n        return `<div id=\"form\">\r\n        <form class=\"form-inline search-form\">\r\n            <div class=\"form-group\">\r\n                <label class=\"sr-only\" for=\"search\">Search</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"search\" placeholder=\"Search\" value=\"\">\r\n\r\n            </div>\r\n        </form>\r\n        </div>`\r\n    }\r\n    table1() {\r\n        return `<table class=\"table table-hover contacts\" id=\"myTable\">${this.thead}<tbody></tbody></table>`;\r\n    }\r\n    tbody(bd) {\r\n        var result = bd.reduce(function(sum, current) {\r\n            return sum + `<tr class = \"tr\" value = \"${current._id}\">\r\n        <td>${current.fullName}</td>\r\n        <td>${current.phone}</td>\r\n        <td>${current.email}</td>\r\n        </tr>`;\r\n        }, '');\r\n        let table = document.getElementById('myTable');\r\n        table.children[1].innerHTML = result;\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contacts);\n\n//# sourceURL=webpack:///./src/contacts.js?");

/***/ }),

/***/ "./src/edit_contacts.js":
/*!******************************!*\
  !*** ./src/edit_contacts.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n﻿class EditUser {\r\n    constructor(bd) {\r\n        this.lol = document.getElementById('lol');\r\n        this.container1 = document.getElementById('container');\r\n        this.scroll = document.getElementById('scroll');\r\n        this.arrEditMainInfo = ['First Name', 'Last Name', 'Company'];\r\n        this.arrAdd = ['add fullName', 'add  email', 'add birthdate', 'add address', 'add gender '];\r\n        this.arrAdd2 = ['fullName', 'email', 'birthdate', 'address', 'gender'];\r\n    }\r\n    render(bd, id) {\r\n        this.id = id;\r\n        this.bd = bd;\r\n        this.bd.forEach(element => {\r\n            if (element._id == id) {\r\n                this.arrAdd[0] = element.fullName;\r\n                this.arrAdd[1] = element.email;\r\n                if (element.birthdate == undefined) {\r\n                    this.arrAdd[2] = element.birthdate\r\n                } else {\r\n                    this.arrAdd[2] = element.birthdate.substring(0, 10);\r\n                }\r\n                this.arrAdd[3] = element.address;\r\n                this.arrAdd[4] = element.gender;\r\n                this.phone = '+38 ' + element.phone.replace(/(\\d{3})(\\d{2})(\\d{2})(\\d{3})/, '($1) $2-$3-$4');\r\n            }\r\n\r\n        });\r\n        this.lol.innerHTML += this.header();\r\n        this.lol.innerHTML += this.main();\r\n\r\n    }\r\n    header() {\r\n        return `<header class=\"header\">\r\n        <div class=\"container top-radius\">\r\n            <nav class=\"user-top-line\">\r\n                <a  id=\"cont2\">Cansel</a>\r\n                <button type=\"submit\" form=\"edit-contact\" formaction=\"#\" formmethod=\"get\" class=\"done-btn\" id = \"patch\">Done</button>\r\n            </nav>\r\n        </div>\r\n    </header>`;\r\n    }\r\n    main(bd) {\r\n        return `<main class=\"main\">\r\n        <div class=\"container\" id=\"container\">\r\n        ${this.container()}\r\n        </div>\r\n        </main>`\r\n    }\r\n    container() {\r\n        return this.editMainInfo() + this.scrollHolder();\r\n    }\r\n    editMainInfo() {\r\n        let photo = `<div class=\"edit-foto\"><img src=\"images/user-face-mini.png\" alt=\"#\" class=\" user-img img-circle center-block\"></div>`;\r\n        return `<div class=\"edit-main-info\">${photo}</div>`;\r\n    }\r\n    scrollHolder() {\r\n        var ph = ` <div class=\"edit-field\">\r\n        <button href=\"#\" class=\"delete-btn\"><span class=\"glyphicon glyphicon-minus-sign\" aria-hidden=\"true\"></span>\r\n            <span>phone</span>\r\n            <span>${this.phone}</span>\r\n            </button>\r\n    </div>`;\r\n        var result = this.arrAdd.reduce((sum, current, i) => {\r\n            return sum + `<div class=\"edit-field\"><p >${this.arrAdd2[i]}</p>\r\n            <button href=\"#\" class=\"add-btn\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span>\r\n                </button><span contenteditable=\"true\" class=\"patch2\">${current}</span>\r\n                \r\n        </div>`\r\n        }, '');\r\n        let delet = `<div class=\"edit-field\">\r\n        \r\n         <button href=\"\" class=\"delete-contact\" id=\"deletContact\">delete contact</button>\r\n        \r\n       \r\n        </div>`\r\n        return `<div class=\"scroll-holder\" ><div class=\"edit-info\" >${ph}${result}${delet}</div></div>`\r\n\r\n    }\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditUser);\n\n//# sourceURL=webpack:///./src/edit_contacts.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Router {\r\n    constructor() {\r\n        this.footer = document.getElementById('fo-er');\r\n    }\r\n    render() {\r\n        this.footer.innerHTML = this.strFooter();\r\n    }\r\n    strFooter() {\r\n        return `<div class=\"container bottom-radius\">\r\n            <nav class=\"main-nav\" id = \"nav1\">\r\n            <a href=\"\" class=\"tab active\">\r\n            <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>\r\n            <span class=\"tab-text\">Contacts</span>\r\n            </a>\r\n            <a href=\"\" class=\"tab\">\r\n            <span class=\"glyphicon glyphicon-th\" aria-hidden=\"true\"></span>\r\n            <span class=\"tab-text\">Keypad</span>\r\n            </a>\r\n            <a href=\"\" class=\"tab\">\r\n            <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\r\n            <span class=\"tab-text\">Edit contact</span>\r\n            </a>\r\n            <a href=\"\" class=\"tab\">\r\n            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\r\n            <span class=\"tab-text\">User</span>\r\n            </a>\r\n            <a href=\"\" class=\"tab\">\r\n            <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n            <span class=\"tab-text\">Add user</span>\r\n            </a>\r\n            </nav>\r\n        </div>`;\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/keypad.js":
/*!***********************!*\
  !*** ./src/keypad.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n﻿class Keypad {\r\n    constructor() {\r\n        this.lol = document.getElementById('lol');\r\n        this.strNumber = `<span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span>\r\n        <span class=\"numbers\" id = \"monitor\"></span>\r\n        <span class=\"glyphicon glyphicon-circle-arrow-left \" aria-hidden=\"true\" id=\"delete1\"></span>`;\r\n        this.numberPhone = '';\r\n    }\r\n    render() {\r\n        this.lol.innerHTML += this.header();\r\n        this.lol.innerHTML += this.main();\r\n        this.number = document.getElementById('number');\r\n        this.monitor = document.getElementById('monitor');\r\n\r\n    }\r\n    header() {\r\n        return `<header class=\"header\">\r\n        <div class=\"container top-radius\">\r\n            <h2>Keypad</h2>\r\n        </div>\r\n        </header>`\r\n    }\r\n    main() {\r\n        return ` <main class=\"main\">\r\n        <div class=\"container\">\r\n            <div class=\"number\" id=\"number\">\r\n            ${this.strNumber}\r\n            </div>\r\n            <div class=\"keypad-holder\" id=\"key\">\r\n            ${this.strKey()}\r\n            \r\n            </div>\r\n    </main>`\r\n    }\r\n    strKey() {\r\n\r\n        return `\r\n        <button class=\"key\">1</button>\r\n        <button class=\"key\" >2</button>\r\n        <button class=\"key\" >3</button>\r\n        <button class=\"key\" >4</button>\r\n        <button class=\"key\" >5</button>\r\n        <button class=\"key\" >6</button>\r\n        <button class=\"key\" >7</button>\r\n        <button class=\"key\" >8</button>\r\n        <button class=\"key\" >9</button>\r\n        <button class=\"key\" >*</button>\r\n        <button class=\"key\" >0</button>\r\n        <button class=\"key\" >#</button>\r\n        <button class=\"key\"> <span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span></button>\r\n        `\r\n    }\r\n    keyOut(num) {\r\n        let regex = /[#*]/;\r\n        this.numberPhone += `${num}`;\r\n\r\n        if (regex.test(this.numberPhone)) {\r\n            this.monitor.textContent = this.numberPhone;\r\n        } else if (this.numberPhone.length == 1) {\r\n            this.monitor.textContent = this.numberPhone.replace(/(.{1})/, '($1');\r\n        } else if (this.numberPhone.length == 3) {\r\n            this.monitor.textContent = this.numberPhone.replace(/(.{3})/g, '($1) ');\r\n        } else if (this.numberPhone.length == 5) {\r\n            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{1})/g, '($1) $2');\r\n        } else if (this.numberPhone.length == 7) {\r\n            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{3})(.{1})/g, '($1) $2-$3');\r\n        } else if (this.numberPhone.length == 9) {\r\n            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{3})(.{2})(.{1})/g, '($1) $2-$3-$4');\r\n        } else if (this.numberPhone.length > 10) {\r\n            this.numberPhone = this.numberPhone.substr(0, 10);\r\n        } else {\r\n            this.monitor.textContent += `${num}`;\r\n        }\r\n    }\r\n    deletKey() {\r\n        let length1 = this.numberPhone.length;\r\n        this.numberPhone = this.numberPhone.substr(0, length1 - 1);\r\n        let length2 = this.monitor.textContent.length;\r\n        if (this.numberPhone.length == 1) {\r\n            this.monitor.textContent = this.numberPhone.replace(/(.{1})/, '($1');\r\n        } else if (this.numberPhone.length == 2) {\r\n            this.monitor.textContent = this.numberPhone.replace(/(.{2})/g, '($1 ');\r\n        } else if (this.numberPhone.length == 3) {\r\n            this.monitor.textContent = this.numberPhone.replace(/(.{3})/g, '($1) ');\r\n        } else if (this.numberPhone.length == 5) {\r\n            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{1})/g, '($1) $2');\r\n        } else if (this.numberPhone.length == 7) {\r\n            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{3})(.{1})/g, '($1) $2-$3');\r\n        } else if (this.numberPhone.length == 9) {\r\n            this.monitor.textContent = this.numberPhone.replace(/(.{3})(.{3})(.{2})(.{1})/g, '($1) $2-$3-$4');\r\n        } else {\r\n            this.monitor.textContent = this.monitor.textContent.substr(0, length2 - 1);\r\n        }\r\n    }\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keypad);\n\n//# sourceURL=webpack:///./src/keypad.js?");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Login {\r\n    constructor() {\r\n        this.lol = document.getElementById('lol');\r\n        this.url = '';\r\n        this.mass = [];\r\n        this.bd = [];\r\n    }\r\n    entrance() {\r\n        let str = `<header class=\"header\">\r\n        <div class=\"container top-radius\">\r\n            <center>\r\n                <h1>login</h1>\r\n            </center>\r\n        </div>\r\n    </header>\r\n    <main class=\"main\">\r\n        <div class=\"container\" id=\"container\">\r\n            <div class=\"edit-main-info\">\r\n                <input type=\"text\" id=\"who\">\r\n                <input type=\"submit\" value=\"войти\" id = \"enter1\" >\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </main>`;\r\n        this.lol.innerHTML = str;\r\n    }\r\n    button() {\r\n        var who = document.getElementById('who');\r\n        this.url = who.value;\r\n        this.serverRequest();\r\n        this.activPage = 'Contacts';\r\n    }\r\n    serverRequest() {\r\n        let url = `https://easycode-js.herokuapp.com/${this.url}/users`;\r\n        var xhr = new XMLHttpRequest();\r\n        xhr.onreadystatechange = () => {\r\n            if (xhr.readyState === XMLHttpRequest.DONE) {\r\n                this.mass = JSON.parse(xhr.responseText);\r\n                this.mass.forEach((element, i) => {\r\n                    this.bd.push(element.fullName);\r\n                    this.bd[i] = element;\r\n                });\r\n            }\r\n        };\r\n        xhr.open('GET', url, true);\r\n        xhr.send();\r\n    }\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/login.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\r\nvar app = new _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\napp.render();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n﻿class User {\r\n    constructor() {\r\n        this.lol = document.getElementById('lol');\r\n\r\n        this.id = '';\r\n        this.phone = '';\r\n\r\n    }\r\n    render(bd, id) {\r\n        this.bd = bd;\r\n        this.id = id;\r\n        this.bd.forEach(element => {\r\n            if (element._id == id) {\r\n                this.phone = '+38 ' + element.phone.replace(/(\\d{3})(\\d{2})(\\d{2})(\\d{3})/, '($1) $2-$3-$4');\r\n            }\r\n\r\n        });\r\n        this.lol.innerHTML += this.header();\r\n        this.lol.innerHTML += this.main();\r\n    }\r\n    header() {\r\n        return `<header class=\"header\">\r\n        <div class=\"container top-radius\">\r\n            <div class=\"user-top-line\">\r\n                <a id=\"cont1\">\r\n                    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span> Contacts\r\n                </a>\r\n                <a  id=\"goToEdit\">Edit</a>\r\n            </div>\r\n        </div>\r\n        </header>`;\r\n    }\r\n    main() {\r\n        this.img = `<img src=\"images/user-face.png\" alt=\"#\" class=\" user-img img-circle center-block\">`;\r\n        this.userName = `<div class=\"user-name\">User Name</div>`;\r\n        this.optionsLine = `<div class=\"options-line\">\r\n        <div class=\"message\">\r\n            <div class=\"options-icon\"><span class=\"icon glyphicon glyphicon-comment\" aria-hidden=\"true\"></span></div>\r\n            <span class=\"options-text\">message</span>\r\n        </div>\r\n        <div class=\"call\">\r\n            <div class=\"options-icon\"><span class=\"icon glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span></div>\r\n            <span class=\"options-text\">call</span>\r\n        </div>\r\n        <div class=\"video\">\r\n            <div class=\"options-icon\"><span class=\"icon glyphicon glyphicon-facetime-video\" aria-hidden=\"true\"></span></div>\r\n            <span class=\"options-text\">video</span>\r\n        </div>\r\n        <div class=\"mail\">\r\n            <div class=\"options-icon\"><span class=\"icon glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span></div>\r\n            <span class=\"options-text\">mail</span>\r\n        </div>\r\n        </div>`;\r\n        this.telNumber = `<div class=\"tel-number\">\r\n        <h3>mobile</h3>\r\n        <div> ${this.phone}</div>\r\n        </div>\r\n        <div class=\"tel-number\">\r\n        <h3>home</h3>\r\n        <div> ${this.phone}</div>\r\n        </div>`;\r\n        this.optionsTable = `<div class=\"options-table\">\r\n        <div class=\"options-item\"><a href=\"#\">Notes</a></div>\r\n        <div class=\"options-item\"><a href=\"#\">Send message</a></div>\r\n        <div class=\"options-item\"><a href=\"#\">Share contact</a></div>\r\n        <div class=\"options-item\"><a href=\"#\">Add to favorites</a></div>\r\n        <div class=\"options-item\"><a href=\"#\">Share my location</a></div>\r\n        <div class=\"options-item\"><a href=\"#\">Block this caller</a></div>\r\n        </div>`;\r\n        return `<div class=\"container\">${this.img}${this.userName}${this.optionsLine}${this.telNumber}${this.optionsTable}</div>`\r\n    }\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/user.js?");

/***/ })

/******/ });