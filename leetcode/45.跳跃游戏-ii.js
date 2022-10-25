/*
 * @Author: Zhou Xianghui
 * @Date: 2022-01-06 12:05:35
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-08 16:16:24
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\45.跳跃游戏-ii.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let curIndex = 0,
    nextIndex = 0,
    steps = 0;
  for (let i = 0; i < nums.length - 1; ++i) {
    nextIndex = Math.max(nums[i] + i, nextIndex);
    if (i === curIndex) {
      curIndex = nextIndex;
      steps++;
    }
  }
  return steps;
};
// @lc code=end
