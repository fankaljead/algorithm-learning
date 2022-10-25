/*
 * @Author: Zhou Xianghui
 * @Date: 2021-11-02 16:03:54
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-24 16:07:55
 * @FilePath: \js-testd:\Dropbox\Documents\研究生\算法\leetcode\283.移动零.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  let slowIndex = 0;

  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== 0 && nums[slowIndex] === 0) {
      nums[slowIndex++] = nums[fastIndex];
      nums[fastIndex] = 0;
    } else if (nums[fastIndex] === 0 && nums[slowIndex] === 0) {
      continue;
    } else if (nums[fastIndex] !== 0 && nums[slowIndex] !== 0) {
      slowIndex++;
    }
  }

  console.log("s:", slowIndex);

  return slowIndex;
};
// @lc code=end
