let teststr = "testing nottesting sometest, who is testing"
let testExp = /t[e].+/ig;
console.log(teststr.match(testExp));


let newstr = "Aaaaaaaaargghhh";
console.log(newstr.match(/Aa*/));


practiceString = "CCCCCCCCCCCCCCCCCCCCCCCCCCCC";

console.log(practiceString.match(/C+/g));


let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal*/; // Change this line
console.log(rickyAndCal.match(calRegex));
