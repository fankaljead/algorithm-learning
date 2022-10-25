function MyBubbleSort(arr = [4, 2, 3, 1]) {
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

function MySelectSort(arr = [4, 2, 3, 1]) {
  let len = arr.length,
    minIndex = 0,
    temp = 0;
  for (let i = 0; i < len - 1; ++i) {
    minIndex = i;
    for (let j = i + 1; j < len; ++j) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function MySelectSort2(arr = [4, 2, 3, 1, 6, -1]) {
  let len = arr.length,
    maxIndex = 0,
    temp = 0;
  for (let i = len - 1; i > 0; --i) {
    maxIndex = i;
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    temp = arr[maxIndex];
    arr[maxIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

function InsertSort(arr = [4, 2, 3, 1]) {
  let len = arr.length,
    preIndex = 0,
    current = 0;

  for (let i = 1; i < len; ++i) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }

  return arr;
}

function shellSort(arr = [4, 2, 3, 1, 5, 6, 8, 9, 7]) {
  let len = arr.length,
    temp = 0,
    gap = 1;
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }

  for (; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; ++i) {
      temp = arr[i];
      let j = i - gap;
      for (; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }

  return arr;
}

function mergeSort(arr = []) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);

  return merge(arguments.callee(left), arguments.callee(right));
}

function merge(left = [], right = []) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

console.log(MyBubbleSort());
console.log(MySelectSort());
console.log(MySelectSort2());
console.log(InsertSort());
console.log(shellSort());
