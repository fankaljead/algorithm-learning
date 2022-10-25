function binary_search(arr = [], v) {
    let low = 0;
    let high = arr.length - 1;
    let guess;

    while (low <= high) {
        // js 中需要向下取整 不然会自动当做浮点数运算
        mid = Math.floor((low + high) / 2);
        guess = arr[mid];

        if (guess == v) {
            return mid;
        } else if (guess > v) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
}

let arr = [1, 3, 5, 7, 9];
let v = 3;

console.log(binary_search(arr, v));