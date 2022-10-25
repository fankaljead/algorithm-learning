/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-17 09:35:59
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-19 21:59:12
 * @FilePath: \leetcode\1573.分割字符串的方案数.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=1573 lang=javascript
 *
 * [1573] 分割字符串的方案数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numWays = function (s) {
  let count1 = Array.from(s).reduce((a, b) => parseInt(a) + parseInt(b));
  if (count1 % 3 !== 0) {
    return 0;
  }
  let x = count1 / 3;
};
// @lc code=end
