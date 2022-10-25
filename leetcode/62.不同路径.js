/*
 * @Author: Zhou Xianghui
 * @Date: 2021-12-24 12:16:19
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-16 09:42:41
 * @FilePath: \leetcode\62.不同路径.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 动态规划
  let dpUniquePaths = (m, n) => {
    let dp = new Array(m);

    // 初始化第一行和第一列为 1
    for (let i = 0; i < m; i++) {
      let arr = new Array(n);
      if (i === 0) {
        arr.fill(1);
      }
      arr[0] = 1;
      dp[i] = arr;
    }
    if (m <= 1 || n <= 1) {
      return 1;
    }

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }

    return dp[m - 1][n - 1];
  };

  // 数论方法 计算组合问题的代码还是有难度的，特别是处理溢出的情况
  let ntUniquePath = (m, n) => {
    let count = m - 1,
      t = m + n - 2,
      numerator = 1,
      denominator = m - 1;

    while (count--) {
      numerator *= t--;
      while (denominator !== 0 && numerator % denominator === 0) {
        numerator /= denominator;
        denominator--;
      }
    }
    return numerator;
  };

  return ntUniquePath(m, n);
};
// @lc code=end
