function fx(x) {
    return (x**2+1)/x;
}
arr = []
for(let i=0; i < 16; i++) {
    if (i % 3 == 0) {
        arr.push([]);
    }
    arr[Math.floor(i/(Math.floor(Math.sqrt(16))))][i%(3)] = fx(i);
}

console.log(arr);


