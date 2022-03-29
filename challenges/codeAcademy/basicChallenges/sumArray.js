let arr = [1,2,3,4.5,-5,6];
console.log(arr.reduce((accum, val) => {
    return accum += val;
}));


