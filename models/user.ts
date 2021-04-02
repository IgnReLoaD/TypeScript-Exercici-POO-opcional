// model USER (clase)
class User {
	// 1.- Definim atributs
	public _name: string;
	private _email: string;
	protected _age: number;

	// 2.1.- Definim mètodes standard: el Constructor...
	//       (els Attributs que porten ? no són required)
	constructor(name:string, email?:string|any, age?:number|any){
		this._name  = name;
		this._email = email;
		this._age   = age;
	}
	// 2.2.- ... i els setters i getters
	getName(){
		return this._name;
	} 
	setName(name:string){
		this._name = name;
	}
	getAge(){
		return this._age;
	}
	getAgeInYears(){
		return this._age + ' years old.';
	}

	// 3.- Definim mètodes personalitzats
	register() {
		console.log(`${this._name} registered ok`);
	}
	payInvoice() {
		console.log(`${this._name} has paid ok`);
	}
}

// EXPORTAR la Classe, sino no podrà ser importat des d'un altre TS
export { User };

// des del Controller podrem executar sentències com ara:
//    var john = new User('John');
//    console.log(john.getName());
//    console.log(john.getAgeInYears());
//    console.log(john.register());
//    console.log(john.payInvoice());
