"use strict";
// probar amb DEBUGGER i CONSOLA pas a pas
exports.__esModule = true;
// importar les Clases (han de ser exportades al final dels TS)
var user_1 = require("../models/user");
var member_1 = require("../models/member");
// probem la classe User:
var john = new user_1.User('John');
console.log(john.getName());
console.log(john.getAgeInYears());
console.log(john.register());
console.log(john.payInvoice());
// probem la classe Member:
var gordon = new member_1.Member(1, 'Gordon', 'gordon@mail.com', 24);
gordon.payInvoice();
