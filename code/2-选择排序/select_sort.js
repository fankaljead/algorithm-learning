function selectSort(arr = []) {
    let max = 0;
    let temp = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 1; j < arr.length - i; ++j) {
            if (arr[j] > arr[max]) {
                max = j;
            }
        }
        temp = arr[max];
        arr[max] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }

    return arr;
}

let arr = [3, 5, 4, 2, 1, 3, 7, 6];

console.log(selectSort(arr));