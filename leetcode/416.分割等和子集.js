/*
 * @Author: Zhou Xianghui
 * @Date: 2022-02-27 19:13:03
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-25 14:43:35
 * @FilePath: \js-testd:\Dropbox\Documents\研究生\算法\leetcode\416.分割等和子集.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((p, v) => p + v);
  if (sum & 1) {
    // 和为奇数，不能二等分
    return false;
  }

  const halfSum = sum / 2;

  const dp = Array(halfSum + 1).fill(0);
  for (let i = 0; i < nums.length; ++i) {
    for (let j = halfSum; j >= nums[i]; --j) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      if (dp[j] === halfSum) {
        return true;
      }
    }
  }

  return false;
};
// @lc code=end
