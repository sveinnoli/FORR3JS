function checkScope() {
    var i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;   
}
checkScope();


let i = 2;
function testFunc() {
    var i = 1;
    console.log(i);
}

testFunc();
console.log(i);