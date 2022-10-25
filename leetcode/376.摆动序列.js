/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  // 贪心算法
  const greedyWiggleMaxLength = function (nums = []) {
    if (nums.length <= 1) {
      return nums.length;
    }
    let result = 1,
      preDiff = 0,
      curDiff = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      curDiff = nums[i + 1] - nums[i];
      if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
        result++;
        preDiff = curDiff;
      }
    }

    return result;
  };

  // 动态规划
  const dpWiggleMaxLength = function (nums = []) {
    const dp = Array.from(Array(nums.length), () => Array(2).fill(1));

    for (let i = 1; i < nums.length; ++i) {
      for (let j = 0; j < i; ++j) {
        if (nums[j] > nums[i]) {
          dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
        }
        if (nums[j] < nums[i]) {
          dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
        }
      }
    }

    return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1]);
  };

  return dpWiggleMaxLength(nums);
};
// @lc code=end
