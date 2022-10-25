class Heap {
  static MaxHeap = () => new Heap("max");
  static MinHeap = () => new Heap("min");
  constructor(type = "min") {
    this.type = type;
    this.value = [];
  }
  create() {
    const length = this.value.length;
    for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
      this.ajust(i, length);
    }
  }
  ajust(index, length) {
    const array = this.value;
    for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
      if (i + 1 < length) {
        if (
          (this.type === "max" && array[i + 1] > array[i]) ||
          (this.type === "min" && array[i + 1] < array[i])
        ) {
          i++;
        }
      }
      if (
        (this.type === "max" && array[index] < [array[i]]) ||
        (this.type === "min" && array[index] > [array[i]])
      ) {
        [array[index], array[i]] = [array[i], array[index]];
        index = i;
      } else {
        break;
      }
    }
  }
  add(element) {
    const array = this.value;
    array.push(element);
    if (array.length > 1) {
      let index = array.length - 1;
      let target = Math.floor((index - 1) / 2);
      while (target >= 0) {
        if (
          (this.type === "min" && array[index] < array[target]) ||
          (this.type === "max" && array[index] > array[target])
        ) {
          [array[index], array[target]] = [array[target], array[index]];
          index = target;
          target = Math.floor((index - 1) / 2);
        } else {
          break;
        }
      }
    }
  }
  pop() {
    const array = this.value;
    let result = null;
    if (array.length > 1) {
      result = array[0];
      array[0] = array.pop();
      this.ajust(0, array.length);
    } else if (array.length === 1) {
      return array.pop();
    }
    return result;
  }
}

var heap = Heap.MaxHeap();
heap.add(6);
heap.add(5);
heap.add(4);
heap.add(3);
heap.add(10);
console.log(heap.value);
console.log(heap.pop());
console.log(heap.value);

// 数据流的中位数
// https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/
// https://leetcode.cn/problems/find-median-from-data-stream/
(function () {
  const maxHeap = Heap.MaxHeap(),
    minHeap = Heap.MinHeap();
  let count = 0;
  function insert(num) {
    count++;
    if (count & 1) {
      maxHeap.add(num);
      minHeap.add(maxHeap.pop());
    } else {
      minHeap.add(num);
      maxHeap.add(minHeap.pop());
    }
  }
  function getMedian() {
    if (count & 1) {
      return minHeap.value[0];
    } else {
      return (minHeap.value[0] + maxHeap.value[0]) / 2;
    }
  }
})();
