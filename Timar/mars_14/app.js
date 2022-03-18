console.log(3 === "3");


// Leið til að gefa gildi default value ef það er false||undefined
x = 0;
y = x || "ekkert";
console.log(y);

// Ternary

let someStatement = true;

console.log(someStatement? "ok" : "ekki ok")


function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

function multiplyv2(arr, n) {
    
}

  arr = [1,2,3,4,5]

  console.log(multiply(arr, 5));
  console.log(multiply(arr, 4));

  

