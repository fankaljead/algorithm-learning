/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-15 21:57:39
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-15 22:22:16
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\279.完全平方数.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = new Array(n + 1).fill(n);
  dp[0] = 0;

  for (let i = 0; i <= n; ++i) {
    for (let j = 1; j * j <= i; ++j) {
      dp[i] = Math.min(dp[i - j * j] + 1, dp[i]);
    }
  }
  return dp[n];
};
// @lc code=end
