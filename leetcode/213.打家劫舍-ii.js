/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-31 20:46:44
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-31 21:26:43
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\213.打家劫舍-ii.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;

  if (len <= 3) {
    return Math.max(...nums);
  }

  function robN(nums = [1, 2, 3, 4]) {
    let len = nums.length;
    let dp = new Array(len);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < len; ++i) {
      dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    return dp[len - 1];
  }

  return Math.max(robN(nums.slice(0, len - 1)), robN(nums.slice(1)));
};
// @lc code=end
