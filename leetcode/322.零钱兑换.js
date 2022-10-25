/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-15 22:23:47
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-16 09:16:07
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\322.零钱兑换.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) {
    return 0;
  }
  
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end
