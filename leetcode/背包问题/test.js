/*
 * @Author: Zhou Xianghui
 * @Date: 2022-07-24 23:02:11
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-07-24 23:16:28
 * @FilePath: \leetcode\背包问题\test.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
function pack01(n = 3, weight = [1, 3, 4], values = [15, 20, 30]) {
  let dp = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = weight[i]; j <= n; j++) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + values[i]);
    }
  }
  return dp[n];
}
