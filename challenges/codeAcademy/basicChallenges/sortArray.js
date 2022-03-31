let arr = [1,2,3,4,5,6,7,8,9,10];

function generateArray(size) {
    return [...Array(size).keys()].map(x => Math.round(Math.random()*100000));
}

//sort in reverse, very slow takes O(n^2-1/2) time
for (let i = 1; i < arr.length-1; i++) {
    for(let j = 0; j <= i; j++) {
        arr[j]
    }
} 

// Much more efficient reverse takes O(n/2) time
for (let i = 0; i < Math.round(arr.length/2); i++) {
    let temp = arr[arr.length-1-i];
    arr[arr.length-1-i] = arr[i];
    arr[i] = temp;
}
console.log(arr);

// Sorting array low-high, very inefficient
// takes O(n^2)
unsortedArr = generateArray(100);
for (let i = 0; i < unsortedArr.length; i++) {
    for(let j = 0; j < unsortedArr.length; j++) {
        if(unsortedArr[j] < unsortedArr[i]) {
            let temp = unsortedArr[i];
            unsortedArr[i] = unsortedArr[j];
            unsortedArr[j] = temp;
        }
    }
}
console.log(unsortedArr);


