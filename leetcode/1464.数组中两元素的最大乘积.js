/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max1 = -1,
    max2 = -1;

  nums.forEach((num) => {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  });

  return (max1 - 1) * (max2 - 1);
};
var maxProduct2 = function (nums) {
  nums.sort((a, b) => b - a);

  return (nums[0] - 1) * (nums[1] - 1);
};
// @lc code=end
