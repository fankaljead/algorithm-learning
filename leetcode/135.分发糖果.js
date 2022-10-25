/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-12 15:08:30
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-12 15:31:14
 * @FilePath: \leetcode\135.分发糖果.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function (ratings) {
  let candys = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candys[i] = candys[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candys[i] = Math.max(candys[i], candys[i + 1] + 1);
    }
  }

  let count = candys.reduce((a, b) => {
    return a + b;
  });

  return count;
};

var candy2 = function (ratings) {
  let len = ratings.length,
    dp = new Array(len).fill(1),
    res = 0;

  if (len === 1) {
    return 1;
  }

  for (let i = 0; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    } else if (ratings[i] < ratings[i - 1]) {
      if (dp[i - 1] === 1) {
        dp[i - 1] += 1;
      }
      dp[i] = 1;
    } else {
      if (dp[i - 1] === 1) {
        dp[i - 1] -= 1;
      }
      dp[i] = 1;
    }
  }

  res = dp.reduce((p, c) => p + c);

  return res;
};
// @lc code=end
