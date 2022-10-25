/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-16 09:23:23
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-16 09:26:06
 * @FilePath: \leetcode\70-爬楼梯-拓展.js
 * @Description: 这道题目还可以继续深化，就是一步一个台阶，两个台阶，三个台阶，直到 m个台阶，有多少种方法爬到n阶楼顶。
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, m) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i <= n; ++i) {
    for (let j = 1; j <= m; ++j) {
      if (i - j >= 0) {
        dp[i] += dp[i - j];
      }
    }
  }
  return dp[n];
};
