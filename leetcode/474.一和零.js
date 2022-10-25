/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-01 16:08:44
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-25 13:45:47
 * @FilePath: \js-testd:\Dropbox\Documents\研究生\算法\leetcode\474.一和零.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  let numOfZeros, numOfOnes;

  for (const str of strs) {
    numOfOnes = 0;
    numOfZeros = 0;
    for (const c of str) {
      if (c === "0") {
        numOfZeros++;
      } else {
        numOfOnes++;
      }
    }

    for (let i = m; i >= numOfZeros; --i) {
      for (let j = n; j >= numOfOnes; --j) {
        dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1);
      }
    }
  }

  return dp[m][n];
};
// @lc code=end
