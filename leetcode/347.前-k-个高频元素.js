/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  // 使用插入排序，获取前 k 个大的键
  let keys = Array.from(map.keys());
  for (let i = 0; i < keys.length; i++) {
    let temp = keys[i];
    let j = i;
    for (; j > 0; j--) {
      if (map.get(temp) < map.get(keys[j - 1])) {
        break;
      }
      keys[j] = keys[j - 1];
    }
    keys[j] = temp;
  }
  return keys.splice(0, k);
};
// @lc code=end
