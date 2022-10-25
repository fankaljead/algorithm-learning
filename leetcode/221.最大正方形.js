/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-20 18:29:08
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-20 18:53:15
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\221.最大正方形.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let maxSide = 0;
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return maxSide;
  }

  let rows = matrix.length,
    columns = matrix[0].length;
  let dp = new Array(rows).fill(() => new Array(columns).fill(0));

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          dp[i][j] = 0;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        }
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }

  return maxSide ** 2;
};
// @lc code=end
