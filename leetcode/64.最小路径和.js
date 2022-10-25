/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-20 18:21:28
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-20 18:28:21
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\64.最小路径和.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  let dp = new Array(m).fill(() => new Array(n).fill(0));
  dp[0][0] = grid[0][0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) continue;
      if (i == 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j == 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }

  return dp[m - 1][n - 1];
};
// @lc code=end
