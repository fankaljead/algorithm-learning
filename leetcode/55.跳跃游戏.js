/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let range = 0;

  if (nums.length === 1) {
    return true;
  }
  for (let i = 0; i <= range; ++i) {
    range = Math.max(i + nums[i], range);
    if (range >= nums.length - 1) {
      return true;
    }
  }

  return false;
};
// @lc code=end
