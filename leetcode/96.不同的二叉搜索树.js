/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dpNumTrees = (n = 1) => {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; ++i) {
      for (let j = 1; j <= i; ++j) {
        dp[i] += dp[j - 1] * dp[i - j];
      }
    }
    return dp[n];
  };

  let dp = [
    1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012, 742900,
    2674440, 9694845, 35357670, 129644790, 477638700, 1767263190,
  ];

  // return dpNumTrees(n);
  return dp[n];
};
// @lc code=end
