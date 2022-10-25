/*
 * @Author: Zhou Xianghui
 * @Date: 2021-12-13 11:11:41
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-04-21 16:10:26
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\77.组合.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine2 = function (n, k) {
  let result = [],
    path = [];

  let combineHelper = function (n, k, startIndex) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    // 剪枝操作
    for (let i = startIndex; i <= n - (k - path.length) + 1; ++i) {
      path.push(i);
      arguments.callee(n, k, i + 1);
      path.pop();
    }
  };

  let combine = function (n, k) {
    result = [];
    combineHelper(n, k, 1);
    return result;
  };

  return combine(n, k);
};

var combine = function (n, k) {
  let result = [],
    path = [];

  function backtracking(n, k, startIndex) {
    if (path.length === k) {
      result.push(path.slice());
      return;
    }
    for (let i = startIndex; i <= n - k + path.length + 1; ++i) {
      path.push(i);
      arguments.callee(n, k, i + 1);
      path.pop(i);
    }
  }
  backtracking(n, k, 1);
  return result;
};
// @lc code=end
