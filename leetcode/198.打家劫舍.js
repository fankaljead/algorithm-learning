/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-31 20:40:05
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-31 20:45:54
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\198.打家劫舍.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 2) {
    return Math.max(...nums);
  }

  let dp = new Array(nums.length);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; ++i) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[dp.length - 1];
};
// @lc code=end
