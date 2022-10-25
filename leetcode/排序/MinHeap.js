/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-22 16:00:23
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-22 16:23:58
 * @FilePath: \leetcode\排序\MinHeap.js
 * @Description: 最小堆
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
//当前节点 i
// 左孩子 2i+1
// 右孩子 2i+2
// 父节点 floor((i-1)/2)

class MinHeap {
  constructor() {
    this.heap = [];
  }

  #swap(i = 0, j = 0) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  getParentIndex(i) {
    return (i - 1) >> 1;
  }

  getLeftIndex(i) {
    return i * 2 + 1;
  }

  getRightIndex(i) {
    return i * 2 + 2;
  }

  shiftup(index) {
    if (index === 0) {
      return;
    }

    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.#swap(parentIndex, index);
      this.shiftup(parentIndex);
    }
  }

  shiftdown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (this.heap[leftIndex] < this.heap[index]) {
      this.#swap(leftIndex, index);
      this.shiftdown(leftIndex);
    }

    if (this.heap[rightIndex] < this.heap[index]) {
      this.#swap(rightIndex, index);
      this.shiftdown(rightIndex);
    }
  }

  insert(value) {
    this.heap.push(value);

    this.shiftup(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) {
      return;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    let value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftdown(0);
    return value;
  }

  size() {
    return this.heap.length;
  }
}

let n = 100;
let minHeap = new MinHeap();
for (let i = 0; i < 100; ++i) {
  let num = Math.floor(Math.random() * n);
  minHeap.insert(num);
}

let sorted = [];
console.log(minHeap);
while (minHeap.size() != 0) {
  sorted.push(minHeap.pop());
}
console.log(sorted);
