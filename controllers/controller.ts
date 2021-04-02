// probar amb DEBUGGER i CONSOLA pas a pas

// importar les Clases (han de ser exportades al final dels TS)
import { User   } from "../models/user";
import { Member } from "../models/member";

// probem la classe User:
var john = new User('John'); 
console.log(john.getName());
console.log(john.getAgeInYears());
console.log(john.register());
console.log(john.payInvoice());

// probem la classe Member:
var gordon = new Member(1, 'Gordon', 'gordon@mail.com', 24);
gordon.payInvoice();
 