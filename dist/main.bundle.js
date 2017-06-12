webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        // templateUrl: './app.component.html',
        // styleUrls: ['./app.component.css']
        template: "\n  \t<app-user></app-user>\n  \t<app-table></app-table>\n  ",
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_table_component__ = __webpack_require__("../../../../../src/app/table/table.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_5__table_table_component__["a" /* TableComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <table style=\"width:100%\"> -->\n<table class=\"table table-striped\">\n\t<thead>\n\t    <tr>\n\t      <th>Name</th>\n\t      <th>User Name</th> \n\t      <th>Age</th>\n\t      <th>Location</th>\n\t      <th>Interests</th>\n\t    </tr>\n\t</thead>    \n\t<tbody>\n\t    <tr *ngFor=\"let i of fakeObject; let j = index\">\n\t      <td>{{i.name}}</td>\n\t      <td>{{i.username}}</td>\n\t      <td>{{i.age}}</td>\n\t      <td>{{i.location}}</td>\n\t      <td>{{i.interests}}</td> \n\t      <td><button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUser(j)\">X</button></td>\n\t    </tr>\n    </tbody>\n </table>"

/***/ }),

/***/ "../../../../../src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = (function () {
    function TableComponent() {
        this.fakeObject = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        if ("users" in localStorage) {
            this.fakeObject = JSON.parse(localStorage['users'])["root"];
        }
        else {
            this.fakeObject = [];
        }
        //console.log(this.fakeObject);
    };
    TableComponent.prototype.deleteUser = function (j) {
        this.fakeObject.splice(j, 1);
        localStorage['users'] = JSON.stringify({ root: this.fakeObject });
    };
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/table/table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/table/table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = " <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!!\n  </h1>\n\n  <div class=\"container\">\n  \t<form class=\"form-inline\">\n  \t\t<div class=\"form-group\">\n  \t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\" value=\"\" id=\"name\" required>\n  \t\t</div>\n  \t\t<div class=\"form-group\">\n\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" id=\"username\">\n  \t\t</div>\n  \t\t<div class=\"form-group\">\n      \t\t<input type=\"number\" class=\"form-control\" placeholder=\"Age\" name=\"age\" id=\"age\" min=\"18\">  \t\t\n  \t\t</div>\n  \t\t<div class=\"form-group\">\n\t      \t<input list=\"cities\" type=\"text\" class=\"form-control\" placeholder=\"Location\" name=\"cities\" id=\"location\">\n\t\t\t\t<datalist id=\"cities\">\n\t\t\t    \t<option value=\"Bangalore\">\n\t\t\t    \t<option value=\"Mumbai\">\n\t\t\t    \t<option value=\"Kolkata\">\n\t\t\t    \t<option value=\"Delhi\">\n\t\t\t    \t<option value=\"Chennai\">\n\t\t\t    \t<option value=\"Hydrabad\">\n\t\t\t    \t<option value=\"Shimla\">\n\t\t\t  \t</datalist>\t\n  \t\t</div>\n  \t\t<div class=\"form-group\">\n      \t\t<input type=\"text\" class=\"form-control\" placeholder=\"Interests\" name=\"interests\" id=\"interests\"> \n  \t\t</div>\n\n      \t<button type=\"submit\" class=\"btn btn-primary\" id=\"register\" (click)=\"register()\">Register</button>\n  \t</form>\n  </div>\n\n  <br><br>\n\n </div> \n\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserComponent = (function () {
    function UserComponent() {
        this.title = 'app';
    }
    // inside object validation
    UserComponent.prototype.present = function (key, value) {
        if (value.length > 0) {
            // return true
            return "";
        }
        else {
            return { error: true, message: key + " is not present!" }.message;
        }
    };
    UserComponent.prototype.unique = function (key, value) {
        var parsedLocalStorageLength = JSON.parse(localStorage['users'])['root'].length;
        var localStorageUserNames = [];
        for (var i = 0; i < parsedLocalStorageLength; i++) {
            localStorageUserNames.push(JSON.parse(localStorage['users'])['root'][i]['username']);
        }
        if (localStorageUserNames.indexOf(value) !== -1) {
            return { error: true, message: "username already taken, enter another username" }.message;
        }
        else {
            // return true
            return "";
        }
    };
    UserComponent.prototype.nameValidation = function (name) {
        return this.present("name", name);
    };
    UserComponent.prototype.usernameValidation = function (username) {
        return this.unique("username", username);
    };
    UserComponent.prototype.ageValidation = function (age) {
        if (age >= 18) {
            // return true
            return "";
        }
        else {
            return { error: true, message: "You should be atleast 18 years old!" }.message;
        }
    };
    UserComponent.prototype.locationValidation = function (location) {
        return this.present("location", location);
    };
    UserComponent.prototype.interestsValidation = function (interests) {
        if (interests.indexOf(',') > -1) {
            // return true
            return "";
        }
        else {
            return { error: true, message: "Please insert atleast two interests with comma separated!" }.message;
        }
    };
    UserComponent.prototype.validation = function (object) {
        var validatedName = this.nameValidation(object.name);
        var validatedUserName = this.usernameValidation(object.username);
        var validatedAge = this.ageValidation(object.age);
        var validatedInterests = this.interestsValidation(object.interests);
        if (validatedName !== "" || validatedUserName !== "" || validatedAge !== "" || validatedInterests !== "") {
            alert("You have problem in your form: " + validatedName + " " + validatedUserName + " " + validatedAge + " " + validatedInterests);
            return false;
        }
        else {
            return true;
        }
    };
    ;
    UserComponent.prototype.register = function () {
        var formObjects = [];
        if ("users" in localStorage) {
            formObjects = JSON.parse(localStorage['users'])['root'];
        }
        else {
            formObjects = [];
        }
        var formObject = {
            name: document.getElementById('name').value,
            username: document.getElementById('username').value,
            age: document.getElementById('age').value,
            location: document.getElementById('location').value,
            interests: document.getElementById('interests').value
        };
        //form Object validation
        //this.validation(formObject)
        if (this.validation(formObject)) {
            formObjects.push(formObject);
            localStorage['users'] = JSON.stringify({ root: formObjects });
        }
    };
    UserComponent.prototype.ngOnInit = function () {
        // this.register();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")],
    })
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map