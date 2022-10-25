/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-08 17:06:14
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-08 21:33:31
 * @FilePath: \leetcode\test.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
var combine = function (n, k) {
  let result = [],
    path = [];

  let combineHelper = function (n, k, startIndex) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
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

console.table(combine(10, 3));

