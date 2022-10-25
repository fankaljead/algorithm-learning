/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 暴力解法
  let bruteForceMaxSubArray = (nums = []) => {
    let result = Number.MIN_SAFE_INTEGER,
      count = 0;
    for (let i = 0; i < nums.length; i++) {
      count = 0;
      for (let j = i; j < nums.length; j++) {
        count += nums[j];
        result = Math.min(count, result);
      }
    }
    return result;
  };

  // 贪心算法
  let greedyMaxSubArray = (nums) => {
    let result = -Infinity,
      count = 0;
    for (let i = 0; i < nums.length; i++) {
      count += nums[i];
      if (count > result) {
        result = count;
      }
      if (count < 0) {
        count = 0;
      }
    }
    return result;
  };

  // 动态规划
  let dpMaxSubArray = (nums = []) => {
    if (nums.length === 0) {
      return 0;
    }
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    let result = dp[0];
    for (let i = 1; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
      if (dp[i] > result) {
        result = dp[i];
      }
    }
    return result;
  };

  // return bruteForceMaxSubArray(nums);
  return greedyMaxSubArray(nums);
  // return dpMaxSubArray(nums);
};
// @lc code=end
