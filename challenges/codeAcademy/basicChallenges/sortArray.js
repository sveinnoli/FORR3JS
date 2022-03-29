let arr = [1,2,3,4,5,6,7,8,9,10];

//sort in reverse
for (let i = 1; i < arr.length-1; i++) {
    for(let j = 0; j <= i; j++) {
        arr[j]
    }
} 

for (let i = 0; i < Math.round(arr.length/2); i++) {
    let temp = arr[arr.length-1-i];
    arr[arr.length-1-i] = arr[i];
    arr[i] = temp;
}
console.log(arr);