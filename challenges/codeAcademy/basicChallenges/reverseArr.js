let array = [1,2,3,4,5,6,7,8,9,10];
let newArr = []
for (let i = 0; i < array.length; i++) {
    newArr[i] = array[array.length-i-1];
}
console.log(newArr);

