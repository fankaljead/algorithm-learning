/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-24 16:16:57
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-24 16:32:35
 * @FilePath: \js-testd:\Dropbox\Documents\研究生\算法\leetcode\844.比较含退格的字符串.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let i = s.length,
    j = t.length,
    skipS = 0,
    skipT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === "#") {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }
    while (j >= 0) {
      if (t[j] === "#") {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }
    if (s[i] !== t[j]) {
      return false;
    }
    i--, j--;
  }

  return true;
};
// @lc code=end
