/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-17 12:30:05
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-17 12:48:57
 * @FilePath: \leetcode\491.递增子序列.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let res = [],
    path = [];

  function backtracking(i) {
    if (path.length > 1) {
      res.push(Array.from(path));
    }
    let uset = [];
    for (let j = i; j < nums.length; ++j) {
      if (
        (path.length > 0 && nums[j] < path[path.length - 1]) ||
        uset[nums[j] + 100]
      ) {
        continue;
      }
      uset[nums[j] + 100] = true;
      path.push(nums[j]);
      arguments.callee(j + 1);
      path.pop();
    }
  }

  backtracking(0);

  return res;
};
// @lc code=end
