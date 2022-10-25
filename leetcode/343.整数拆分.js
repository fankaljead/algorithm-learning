/*
 * @Author: Zhou Xianghui
 * @Date: 2021-12-29 15:46:45
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-16 09:46:15
 * @FilePath: \leetcode\343.整数拆分.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dpIntegerBreak = (n) => {
    let dp = new Array(n + 1).fill(0);
    dp[2] = 1;
    for (let i = 3; i <= n; ++i) {
      for (let j = 1; j < i - 1; ++j) {
        // dp[i] = Math.max(dp[i], Math.max((i - j) * j, dp[i - j] * j));
        dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j);
      }
    }
    return dp[n];
  };

  let greedyIntegerBreak = (n) => {
    if (n === 2) {
      return 1;
    }
    if (n === 3) {
      return 2;
    }
    if (n === 4) {
      return 4;
    }
    let result = 1;
    while (n > 4) {
      result *= 3;
      n -= 3;
    }
    result *= n;
    return result;
  };

  let mathIntegerBreak = (n) => {
    if (n <= 3) {
      return n - 1;
    }
    let a = Math.floor(n / 3),
      b = n % 3;
    if (b === 0) {
      return 3 ** a;
    }
    if (b === 1) {
      return 3 ** (a - 1) * 4;
    }
    return 3 ** a * 2;
  };

  return dpIntegerBreak(n);
  // return greedyIntegerBreak(n);
  // return mathIntegerBreak(n);
};
// @lc code=end
