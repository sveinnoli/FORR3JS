// Bubble sort, quite efficient, at best can sort in O(n) but that assumes it makes only one pass
function bubbleSort(arr) {
    let swapped = false;
    let passes = 0;
    while(true) {
        for(let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i-1]) {
                arr[i-1] += arr[i];
                arr[i] = arr[i-1] - arr[i];
                arr[i-1] -= arr[i];
                swapped = true;
            }
        }
        passes ++;
        if (!swapped) {
            console.log(`Made ${passes} passess, length of arr was ${arr.length} which gives O(${arr.length*passes}) out of a max O(${arr.length*arr.length})`);
            return arr;
        }
        swapped = false;
    }
}

// Optimised bubble sort
function bubbleSortv2(arr) {
    let i, j, temp;
    let n = arr.length;
    let swapped;
    let passes = 0;
    for (i = 0; i < n - 1; i++)
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                // swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        
        // IF no two elements were
        // swapped by inner loop, then break
        passes++;
        if (swapped == false) {
            console.log(`Made ${passes} passess, length of arr was ${arr.length} which gives O(${arr.length*passes}) out of a max O(${arr.length*arr.length})`);
            return arr;
        }
    }
}

let arr = [2,6,1,61,2,71,2,5,1,7,1,9,2,5]
console.log(bubbleSort(arr));
console.log(bubbleSortv2(arr));