/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-09 17:03:17
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-20 19:34:58
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\90.子集-ii.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [],
    path = [];

  function backtracking(nums = [], startIndex = 0) {
    res.push(path.slice());
    if (startIndex > nums.length - 1) {
      return;
    }
    for (let i = startIndex; i < nums.length; ++i) {
      if (i > startIndex && nums[i - 1] === nums[i]) {
        // 剪枝减去同层相等的元素
        continue;
      }
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  }

  backtracking(nums, 0);
  return res;
};
// @lc code=end
