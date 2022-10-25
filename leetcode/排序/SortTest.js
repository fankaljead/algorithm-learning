// import * as sort from "./Sort.js";
// // import { bubbleSort } from "./Sort.js";

// let arr = [2, 3, 4, 5, 11, 0, -1, 32];

// // console.log(bubbleSort(arr));
// console.log(sort.selectSort(arr));

function bubbleSort(arr = [4, 2, 3, 1, -1, 2]) {
  let len = arr.length,
    temp = 0;
  for (let i = 0; i < len - 1; ++i) {
    for (let j = 0; j < len - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function selectSort(arr = [4, 2, 3, 1]) {
  let len = arr.length,
    temp = 0,
    minIndex = 0;
  for (let i = 0; i < len - 1; ++i) {
    minIndex = i;
    for (let j = i + 1; j < len; ++j) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

function insertSort(arr = [4, 2, 3, 1]) {
  let len = arr.length,
    preIndex = 0,
    current = 0;
  for (let i = 1; i < len; ++i) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      --preIndex;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

function shellSort(arr = [4, 2, 3, 1]) {
  let len = arr.length,
    temp,
    i,
    j,
    gap = 1;
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }

  for (; gap > 0; gap = Math.floor(gap / 3)) {
    for (i = gap; i < len; i++) {
      temp = arr[i];
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }

  return arr;
}

console.log(bubbleSort());
console.log(selectSort());
console.log(insertSort());
console.log(insertSort());
