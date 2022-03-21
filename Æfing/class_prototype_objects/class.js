// Class is really just syntactic sugar for pseudo-classical pattern
class Animal {
    constructor(name, energy) {
        this.name=name;
        this.energy=energy;
    }

    eat(amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
    }

    sleep(amount) {
        console.log(`${this.name} is sleeping`);
        this.energy += amount;
    }

    play(amount) {
        console.log(`${this.name} is playing`)
        this.energy -= amount;
    }
}

const pete = Animal("pete", 10);
