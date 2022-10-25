/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length;
    let sum = (n * (n + 1)) / 2;
    let numsSum = nums.reduce((pre, cur) => pre + cur, 0);

    return sum - numsSum;
};
// @lc code=end
