/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-17 14:41:18
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-17 15:19:52
 * @FilePath: \leetcode\152.乘积最大子数组.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let max = Number.MIN_VALUE,
    imax = 1,
    imin = 1;
  for (const num of nums) {
    if (num < 0) {
      [imax, imin] = [imin, imax];
    }
    imax = Math.max(imax * num, num);
    imin = Math.min(imin * num, num);

    max = Math.max(imax, max);
  }

  return max;
};
// @lc code=end
