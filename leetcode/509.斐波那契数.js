/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) {
    return n;
  }
  let dp = [0, 1],
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
