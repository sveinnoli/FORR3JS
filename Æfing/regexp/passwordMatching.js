passwords = [
    "supercool123",
    "this2o3n4e5IsOk",
    "1thisoneisbad1",
    "12!!!22ok",
    "!2notOk",
    "Standardpassword123",
    "badpassword",
    "shpas"
]

/* 
    Password has to start with a character not a digit
    Password has to have a digit
    Password for now can contain non alphanumeric characters like symbols
*/

passwordRegex = /^(?=[a-z])(\w{7,})(?=).*$/ig;

for (let i = 0; i < passwords.length; i++) {
    console.log(passwords[i].match(passwordRegex));
}


console.log("qii".match(/^q(?=u).*i/g))
console.log("john's".match(/\w+(?<!s)/))
console.log("john's".match(/\w+[^s]/g))


