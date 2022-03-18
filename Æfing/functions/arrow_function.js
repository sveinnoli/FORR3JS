'use strict'

// Arrow function
let add = (a,b) => a+b;
console.log(add(1,2));

let deduce = (a,b) => {
    return a-b;
}
console.log(deduce(2,3));


// Point to function with a variable
let k = deduce;
console.log(k(1,2));


// Map with arrow syntax
const numbers = [1,2,3];
const doubled = numbers.map(n => 2* n);
const tripled = numbers.map(function(n) {
    return n*3;
});
console.log(numbers, doubled, tripled);


// Different ways of declaring an anonymous function
const square = function(x) {
    return x**x;
};

const squarev2 = (x) => x**x;

console.log(square(4), squarev2(4));