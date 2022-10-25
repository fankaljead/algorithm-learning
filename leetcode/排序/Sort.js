// 冒泡排序
export function bubbleSort(arr = []) {
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

// 选择排序
export function selectSort(arr = []) {
  let len = arr.length,
    minIndex,
    temp;
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

// 插入排序
export function insertSort(arr = []) {
  let len = arr.length,
    preIndex = 0,
    current = 0;
  for (let i = 1; i < len; ++i) {
    current = arr[i];
    preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      --preIndex;
    }
    arr[preIndex + 1] = current;
  }

  return arr;
}

// module.exports.bubbleSort = bubbleSort;
