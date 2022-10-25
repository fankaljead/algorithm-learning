/*
 * @Author: Zhou Xianghui
 * @Date: 2021-12-29 15:46:45
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-16 09:43:22
 * @FilePath: \leetcode\63.不同路径-ii.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 动态规划
  let dpUniquePaths = (obstacleGrid = [[]]) => {
    const m = obstacleGrid.length,
      n = obstacleGrid[0].length;
    const dp = new Array(m).fill().map((item) => new Array(n).fill(0));

    for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
      dp[i][0] = 1;
    }

    for (let i = 0; i < n && obstacleGrid[0][i] === 0; ++i) {
      dp[0][i] = 1;
    }

    for (let i = 1; i < m; ++i) {
      for (let j = 1; j < n; ++j) {
        dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
      }
    }

    return dp[m - 1][n - 1];
    [].map;
  };
  
  return dpUniquePaths(obstacleGrid);
};
// @lc code=end
