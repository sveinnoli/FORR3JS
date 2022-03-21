// Works same as a class would with inbuild methods but is inefficient
// Knowns as functional instantation with shared methods
const animalMethods = {
    eat(amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
    }, 
    sleep(length) {
        console.log(`${this.name} is sleeping`);
        this.energy += length;
    },
    play(length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }
}

function Animal(name, energy) {
    let animal = Object.create(animalMethods);
    animal.name = name;
    animal.energy = energy;
    return animal;
}




let pete = Animal("Pete", 5);
pete.play();
pete.sleep();