/*
 * @Author: Zhou Xianghui
 * @Date: 2021-12-14 09:52:13
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-08 21:37:25
 * @FilePath: \leetcode\216.组合总和-iii.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  if (k > 9 || k < 1) return [];

  const res = [],
    path = [];

  let maxV = (k) => (k * (9 + 10 - k)) / 2,
    minV = (k) => (k * (1 + k)) / 2;

  function backtracking(k, n, i, sum) {
    const len = path.length;
    if (len > k || sum > n) {
      return;
    }

    if (maxV(k - len) < n - sum) {
      return;
    }
    
    if (minV(k - len) > n - sum) {
      return;
    }

    if (len === k && sum === n) {
      res.push(Array.from(path));
      return;
    }
    const min = Math.min(n - sum, 9 + len - k + 1);
    for (let a = i; a <= min; ++a) {
      path.push(a);
      sum += a;
      arguments.callee(k, n, a + 1, sum);
      path.pop();
      sum -= a;
    }
  }

  backtracking(k, n, 1, 0);

  return res;
};
// @lc code=end
