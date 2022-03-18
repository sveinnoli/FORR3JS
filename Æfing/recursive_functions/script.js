function recursiveCount(start, end) {    
    let arr = [];
    if (end - start <= 0) {
        return arr;
    } else {
        arr.push(start);
        recursiveCount(arr, start+1, end);
    }
}

function reverseRecursiveCount(start, end) {
    let arr = [];
    if (end - start < 0) {
        return arr;
    } else {
        arr.unshift(end);
        recursiveCount(arr, start, end-1);
    }
} 

function reverseList() {
    let arr = [];
    for (let i = 10; i > 0; i--) {
        arr.push(i);
    }
    return arr;
}


console.log(recursiveCount(5, 15));

console.log(reverseRecursiveCount(5, 15));

console.log(reverseList());
