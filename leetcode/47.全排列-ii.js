/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-09 15:12:05
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-09 15:19:12
 * @FilePath: \leetcode\47.全排列-ii.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [],
    path = [];

  function backtracking(nums = [], k, used = []) {
    if (path.length === k) {
      res.push(Array.from(path));
    }
    for (let i = 0; i < k; ++i) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        backtracking(nums, k, used);
        path.pop();
        used[i] = false;
      }
    }
  }

  backtracking(nums, nums.length, []);
  return res;
};
// @lc code=end
