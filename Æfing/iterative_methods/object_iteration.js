'use strict'

const person = {
    "name" : "Peter",
    "age" : 5,
    "address" : "St. Petersburg"
}

for (const property in person) {
    console.log(`${property}: ${person[property]}`);
}

console.log(person.hasOwnProperty("name"));