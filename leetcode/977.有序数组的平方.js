/*
 * @Author: Zhou Xianghui
 * @Date: 2021-11-02 19:03:28
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-24 16:33:21
 * @FilePath: \js-testd:\Dropbox\Documents\研究生\算法\leetcode\977.有序数组的平方.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let k = nums.length - 1;
  let res = new Array(k + 1);
  for (let i = 0, j = k; i <= j; ) {
    if (nums[i] * nums[i] < nums[j] * nums[j]) {
      res[k--] = nums[j] * nums[j];
      j--;
    } else {
      res[k--] = nums[i] * nums[i];
      i++;
    }
  }

  return res;
};
// @lc code=end
