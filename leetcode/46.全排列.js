/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-09 14:58:19
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-09 15:10:42
 * @FilePath: \leetcode\46.全排列.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [],
    path = [];

  function backtracking(nums = [], k, used = []) {
    if (path.length === k) {
      res.push(Array.from(path));
    }
    for (let i = 0; i < k; ++i) {
      if (used[i]) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      backtracking(nums, k, used);
      path.pop();
      used[i] = false;
    }
  }

  backtracking(nums, nums.length, []);
  return res;
};
// @lc code=end
