/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-12 15:36:52
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-12 15:46:06
 * @FilePath: \leetcode\860.柠檬水找零.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let dp = [0, 0, 0];

  for (const bill of bills) {
    if (bill === 5) {
      dp[0]++;
    } else if (bill === 10) {
      dp[1]++;
      if (dp[0] < 1) {
        return false;
      } else {
        dp[0]--;
      }
    } else {
      dp[2]++;
      if (dp[0] >= 1 && dp[1] >= 1) {
        dp[0]--;
        dp[1]--;
      } else if (dp[0] >= 3) {
        dp[0] -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};
// @lc code=end
