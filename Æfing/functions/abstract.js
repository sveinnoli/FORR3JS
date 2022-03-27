// https://eloquentjavascript.net/05_higher_order.html
function repeat(n, action) {
    for(let i = 0; i < n; i++) {
        action(i);
    }
}

// Note here you can throw an arrow function to have it repeated n times
let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
})

console.log(labels);


// Same as decorators as seen in Python
function noisy(f) {
    return (...args) => {
        console.log("caling with", args);
        let result = f(...args);
        console.log("called with", args, " returned", result);
        return result;
    };
}
noisy(Math.min)(3,2,1);


// Repeat unless
function unless(test, then) {
    if (!test) then();
} 

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(`${n} is even`);
    });
})


// Continue at script data set