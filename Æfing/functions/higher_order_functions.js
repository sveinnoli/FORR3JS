// Higher order functions are functions that can take a function as a parameter and/or return a function.
const myArray = [1,2,3,4];

// Using .reduce() to get the sum of an array
console.log("Sum using reduce: ",myArray.reduce((accumulator, num) => {
    return accumulator+num;
}))

// Same as the reduce one but without using higher order function
let sum = 0;
for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
console.log("Sum using loop: ",sum);

// .forEach() a slower way of iterating through an iterable as compared to a for loop.
myArray.forEach(num => {
    console.log(num)
});


// .filter() returns a new array where each element is checked against a condition and appended to said array if condition is met.
console.log(myArray.filter(item => {
    return item < 3;
}));


// .map() iterates through an iterable, more concise than a for loop, seemingly slower though.
myArray.map(item => {
    console.log(item);
});
