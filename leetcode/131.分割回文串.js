/*
 * @Author: Zhou Xianghui
 * @Date: 2022-01-11 12:50:17
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-17 11:28:11
 * @FilePath: \leetcode\131.分割回文串.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  // 判断回文数
  const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; ++i, --j) {
      if (s[i] !== s[j]) {
        return false;
      }
    }
    return true;
  };

  const res = [],
    path = [],
    len = s.length;

  function backtracking(i) {
    if (i >= len) {
      res.push(Array.from(path));
      return;
    }
    for (let j = i; j < len; ++j) {
      if (!isPalindrome(s, i, j)) {
        continue;
      }
      // path.push(s.substr(i, j - i + 1));
      path.push(s.substring(i, j + 1));
      arguments.callee(j + 1);
      path.pop();
    }
  }

  backtracking(0);

  return res;
};
// @lc code=end
