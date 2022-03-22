// https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Class-og-prototype

// 1. Prenta Nonni
console.log("---------1. Nonni--------------");
let family = {
	"parents": 
	{
	    "fathers": [{"name":"Jakob"},{"name":"Nonni"}],
	    "mothers": [{"name":"Rakel"},{"name":"Sara"}]
	}
};
console.log(family["parents"]["fathers"][1]["name"]);


// 2. Búa til object með nafn, dob og a.m.k 2 email og aðferð sem skilar nafn og dob.
console.log("---------2. Object, nafn, dob--------------");
const myInfo = {
    "name": "Sveinn",
    "DOB" : "2000",
    "Emails": ["Email1@hotmail.com", "Email2@hotmail.com"],
	getInfo() {
		return `name: ${this.name}, Age: ${new Date().getFullYear()-this.DOB}`;
	}
}
console.log(myInfo.getInfo());


// 3. Prototype
console.log("---------3. Prototype--------------");
function User(name, email) {
	this.name = name;
	this.email = email;
}

User.prototype.getName = function() {
	return this.name;
}

let sveinn = new User("sveinn", "eitth@eitth.com");
console.log(sveinn.getName());


// 4. Classes
console.log("---------4. Classes--------------");
class Animal {
	constructor(name, speed=0) {
		this.name = name;
		this.speed = speed;
	}

	run() {
		this.speed++;
	}

	doStuff() {
		console.log("Did stuff");
	}
}

class Rabbit extends Animal {
	constructor(name, speed, height) {
		super(name, speed);
		this.height = height;
	}

	jump() {
		this.height+= 3;
	}

	test() {
		super.doStuff();
		this.doStuff();
	}
}


let rabbit = new Rabbit("Joe", 0, 0);

rabbit.run();
rabbit.jump();

console.log(rabbit.height, rabbit.speed, rabbit.name);
rabbit.test();