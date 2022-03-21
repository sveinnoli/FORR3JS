// https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Class-og-prototype

// Prenta Nonni
let family = {
	"parents": 
	{
	    "fathers": [{"name":"Jakob"},{"name":"Nonni"}],
	    "mothers": [{"name":"Rakel"},{"name":"Sara"}]
	}
};
console.log(family["parents"]["fathers"][1]["name"]);

// Búa til object með nafn, dob og a.m.k 2 email og aðferð sem skilar nafn og dob.
const myInfo = {
    name: "Sveinn",
    "DOB" : "2000",
    "Emails" : ["Email1@hotmail.com", "Email2@hotmail.com"],
	getInfo() {
		return `name: ${this.name}, DOB: ${this.DOB}`;
	}
}
console.log(myInfo.getInfo());

// Prototype
function User(name, email) {
	this.name = name;
	this.email = email;
}

User.prototype.getName = function() {
	return this.name;
}

let sveinn = new User("sveinn", "eitth@eitth.com");
console.log(sveinn.getName());

