/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-31 20:23:32
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-31 20:40:18
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\738.单调递增的数字.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  let nChars = n
    .toString()
    .split("")
    .map((v) => parseInt(v));

  let flag = nChars.length;

  for (let i = nChars.length - 1; i >= 1; --i) {
    if (nChars[i] < nChars[i - 1]) {
      flag = i;
      nChars[i - 1]--;
    }
  }
  for (let i = flag; i < nChars.length; ++i) {
    nChars[i] = 9;
  }

  if (nChars[0] === 0) {
    return nChars.slice(1).join("");
  }
  return nChars.join("");
};
// @lc code=end
