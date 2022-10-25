/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 单调队列
  class MonoQueue {
    constructor() {
      this.queue = [];
    }
    pop(value) {
      if (this.queue.length && value === this.queue[0]) {
        this.queue.shift();
      }
    }
    push(value) {
      while (this.queue.length && value > this.queue[this.queue.length - 1]) {
        this.queue.pop();
      }
      this.queue.push(value);
    }
    front() {
      return this.queue[0];
    }
  }

  let queue = new MonoQueue();
  let res = [];
  for (let i = 0; i < k; i++) {
    queue.push(nums[i]);
  }
  res.push(queue.front());
  for (let i = k; i < nums.length; i++) {
    queue.pop(nums[i - k]);
    queue.push(nums[i]);
    res.push(queue.front());
  }
  
  return res;
};
// @lc code=end
