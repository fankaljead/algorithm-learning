/*
 * @lc app=leetcode.cn id=1995 lang=javascript
 *
 * [1995] 统计特殊四元组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  let bruteForceCountQuadruplets = (nums = []) => {
    let n = nums.length,
      ans = 0;
    for (let a = 0; a < n; a++) {
      for (let b = a + 1; b < n; b++) {
        for (let c = b + 1; c < n; c++) {
          for (let d = c + 1; d < n; d++) {
            if (nums[a] + nums[b] + nums[c] == nums[d]) {
              ans++;
            }
          }
        }
      }
    }
    return ans;
  };

  let dpCountQuadruplets = function (nums) {
    const dp = Array.from(new Array(4), () => new Array(101).fill(0));
    dp[0][0] = 1;
    let ans = 0;
    for (const num of nums) {
      ans += dp[3][num];
      for (let i = dp.length - 1; i > 0; i--)
        for (let j = num; j < dp[0].length; j++) dp[i][j] += dp[i - 1][j - num];
    }
    return ans;
  };

  return dpCountQuadruplets(nums);
};
// @lc code=end
