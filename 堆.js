// 堆
// 底层是一棵完全二叉树

// 大顶堆
// 父节点值大于子节点值
class MaxHeap {
  constructor() {
    this.arr = [];
  }
  ajustMaxHeap() {}
}

// 小根堆
class MinHeap {
  constructor() {
    this.heap = [null];
  }
  insert(node) {
    this.heap.push(node);
    if (this.heap.length > 1) {
      let current = this.heap.length - 1;
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  remove() {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.pop();

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
          return smallest;
        }

        let current = 1,
          leftChildIndex = current * 2,
          rightChildIndex = current * 2 + 1;

        while (
          this.heap[leftChildIndex] &&
          this.heap[rightChildIndex] &&
          (this.heap[current] > this.heap[leftChildIndex] ||
            this.heap[current] > this.heap[rightChildIndex])
        ) {
          if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
            [this.heap[current], this.heap[leftChildIndex]] = [
              this.heap[leftChildIndex],
              this.heap[current],
            ];
            current = leftChildIndex;
          } else {
            [this.heap[current], this.heap[rightChildIndex]] = [
              this.heap[rightChildIndex],
              this.heap[current],
            ];
            current = rightChildIndex;
          }
          leftChildIndex = current * 2;
          rightChildIndex = leftChildIndex + 1;
        }

        if (
          this.heap[rightChildIndex] === undefined &&
          this.heap[leftChildIndex] < this.heap[current]
        ) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.pop();
    } else {
      return null;
    }
    return smallest;
  }
}
