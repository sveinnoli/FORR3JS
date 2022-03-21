// This is in reality what a class is, a class merely mimmicks it
function Animal(name, energy) {
	this.name = name;
	this.energy = energy;
}

Animal.prototype.eat = function(amount=1) {
	console.log(`${this.name} is eating`);
	this.energy += amount;
}

Animal.prototype.sleep = function(amount=1) {
	console.log(`${this.name} is sleeping`);
	this.energy += amount;
}

Animal.prototype.play = function(amount=1) {
	console.log(`${this.name} is playing`);
	this.energy -= amount;
}

const pete = new Animal("Pete", 5);
pete.play(2);