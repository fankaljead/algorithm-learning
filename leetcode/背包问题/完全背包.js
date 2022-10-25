/*
 * @Author: Zhou Xianghui
 * @Date: 2022-05-01 22:15:29
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-05-01 22:22:38
 * @FilePath: \算法\leetcode\背包问题\完全背包.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
// 01 背包
function backpack01(W = 4, w = [1, 3, 4], v = [15, 20, 30]) {
  let n = w.length;
  let dp = new Array(W + 1).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = W; j >= w[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - w[i]] + v[i]);
    }
  }
  return dp[W];
}

// 完全背包
function backpackFull(W = 4, w = [1, 3, 4], v = [15, 20, 30]) {
  let n = w.length;
  let dp = new Array(W + 1).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = w[i]; j <= W; ++j) {
      // 可重复选取同一个物品
      dp[j] = Math.max(dp[j], dp[j - w[i]] + v[i]);
    }
  }
  return dp[W];
}

console.log(backpackFull());
