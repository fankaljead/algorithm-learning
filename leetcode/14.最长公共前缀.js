/*
 * @Author: Zhou Xianghui
 * @Date: 2021-10-11 21:42:42
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-18 12:50:24
 * @FilePath: \leetcode\14.最长公共前缀.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = [];
  if (!strs.length) return res;
  if (strs.length == 1) return strs[0];
  for (let i = 0; i < strs[0].length; ++i) {
    for (let j = 1; j < strs.length; ++j) {
      if (strs[0][i] != strs[j][i]) {
        return res.join("");
      } else {
        continue;
      }
    }
    res.push(strs[0][i]);
  }
  return res.join("");
};
// @lc code=end
