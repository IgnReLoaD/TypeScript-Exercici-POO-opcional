// importar la Clase pare (ha de ser exportada al final del TS pare)
import { User } from "./user";

// model MEMBER (clase) ... hereda de model USER (clase) amb EXTENDS

class Member extends User {
	// el nou camp diferent que té Member, respecte User, és ID
	_id: number;

	// el constructor rep tots els paràmetres per a Member
	constructor(id:number, name:string, email:string, age:number) {
		// ...i a dins amb SUPER diem quins assignaràn a classe Pare
		super(name, email, age);
		// ...i assignem manualment el paràmetre diferent que té Member
		this._id = id;
	}

	// mètodes personalitzats en pare USER, heretats en fill MEMBER, així:
	payInvoice() {
		super.payInvoice();
	}
}
 
// EXPORTAR la Classe, sino no podrà ser importat des d'un altre TS
export { Member };

// des del Controller podrem executar sentències com ara:
//    var gordon = new Member(1, 'Gordon', 'gordon@mail.com', 24);
//    gordon.payInvoice();
