function binarySearch(
  target: number,
  array: number[],
  left: number,
  right: number
): number {
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return mid;
}

let arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
];
console.log(binarySearch(12, arr[1], 0, 3));
