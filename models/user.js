"use strict";
exports.__esModule = true;
exports.User = void 0;
// model USER (clase)
var User = /** @class */ (function () {
    // 2.1.- Definim mètodes standard: el Constructor...
    //       (els Attributs que porten ? no són required)
    function User(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    // 2.2.- ... i els setters i getters
    User.prototype.getName = function () {
        return this._name;
    };
    User.prototype.setName = function (name) {
        this._name = name;
    };
    User.prototype.getAge = function () {
        return this._age;
    };
    User.prototype.getAgeInYears = function () {
        return this._age + ' years old.';
    };
    // 3.- Definim mètodes personalitzats
    User.prototype.register = function () {
        console.log(this._name + " registered ok");
    };
    User.prototype.payInvoice = function () {
        console.log(this._name + " has paid ok");
    };
    return User;
}());
exports.User = User;
// des del Controller podrem executar sentències com ara:
//    var john = new User('John');
//    console.log(john.getName());
//    console.log(john.getAgeInYears());
//    console.log(john.register());
//    console.log(john.payInvoice());
