/*
 * @Author: Zhou Xianghui
 * @Date: 2021-11-05 09:53:59
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-24 16:34:49
 * @FilePath: \js-testd:\Dropbox\Documents\研究生\算法\leetcode\59.螺旋矩阵-ii.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let tdArr = (m = 3, n = 4) => {
    let r = [];
    for (let i = 0; i < m; i++) {
      r.push([]);
      for (let j = 0; j < n; j++) {
        r[i].push(0);
      }
    }

    return r;
  };
  let r = tdArr(n, n);

  let i = 0,
    j = 0;
  let count = 1;
  let sn = n * n;
  let times = 1;
  let ttimes = 2 * n - 1;
  while (times <= ttimes) {
    // left ===> right
    if ((i === 0 || r[i - 1][j] !== 0) && r[i][j] === 0) {
      console.log("left ===> right");
      while (j < n && r[i][j] === 0) {
        r[i][j++] = count++;
      }
      i++;
      j--;
      if (count - 1 === sn) {
        break;
      }
    }

    // up ===> down
    if ((j === n - 1 || r[i - 1][j] !== 0) && r[i][j] === 0) {
      console.log("up ===> down");
      while (i < n && r[i][j] === 0) {
        r[i++][j] = count++;
      }
      j--;
      i--;
      if (count - 1 === sn) {
        break;
      }
    }

    // right ===> left
    if ((j === n - 1 || r[i][j + 1] !== 0) && r[i][j] === 0) {
      console.log("right ===> left");
      while (j >= 0 && r[i][j] === 0) {
        r[i][j--] = count++;
      }
      j++;
      i--;
      if (count - 1 === sn) {
        break;
      }
    }

    // down ===> up
    if ((j === n - 1 || r[i + 1][j] !== 0) && r[i][j] === 0) {
      console.log("down ===> up");
      while (i < n && r[i][j] === 0) {
        r[i--][j] = count++;
      }
      i++;
      j++;
      if (count - 1 === sn) {
        break;
      }
    }
  }

  return r;
};
// @lc code=end
