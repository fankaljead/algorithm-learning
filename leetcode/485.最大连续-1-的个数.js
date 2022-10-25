/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    count = 0;

  nums.forEach((num) => {
    if (num === 0) {
      if (max < count) {
        max = count;
      }
      count = num;
    } else {
      count += num;
    }
  });
  return Math.max(count, max);
};
// @lc code=end
