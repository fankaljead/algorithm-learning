/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-27 12:50:27
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-27 12:52:22
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\728.自除数.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  function judge(n = 55) {
    let str = n.toString();
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0" || n % Number(str[i]) !== 0) return false;
    }
    return true;
  }

  let res = [];

  for (let i = left; i <= right; ++i) {
    judge(i) && res.push(i);
  }
  return res;
};
// @lc code=end
