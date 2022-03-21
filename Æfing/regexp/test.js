const names = [
    "JackofLtrades1",
    "trader",
    "1llega1name",
    "goodName",
    "a11b1"
];

let regex = /^[a-z]([a-z]+\d*$|\d\d+$)/gi; 

console.log(names.map(item => {
    return regex.test(item);
}))


let ohStr = "Ohhh no";
let ohRegex = /o.*/gi; // Change this line
console.log(ohStr.match(ohRegex));
