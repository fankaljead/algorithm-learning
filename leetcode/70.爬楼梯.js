/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 1) {
    return n;
  }
  let dp = [1, 1],
    sum = 0;
  for (let i = 2; i <= n; ++i) {
    // [dp[0], dp[1]] = [dp[1], dp[0] + dp[1]];
    sum = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = sum;
  }
  return dp[1];
};
// @lc code=end
