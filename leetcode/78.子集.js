/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-09 16:55:33
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-09 17:02:38
 * @FilePath: \leetcode\78.子集.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [],
    path = [];
  function backtracking(nums = [], startIndex = 0) {
    res.push(path.slice());
    for (let i = startIndex; i < nums.length; ++i) {
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  }
  backtracking(nums, 0);
  return res;
};
// @lc code=end
