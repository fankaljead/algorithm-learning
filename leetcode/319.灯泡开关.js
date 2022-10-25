/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  return ~~Math.sqrt(n + 0.5); // niubility
};
var bulbSwitch2 = function (n) {
  if (n <= 0) {
    return 0;
  }

  let res = new Array(n).fill(0);
  let gap = 1;

  for (let i = 0; i < n; i++) {
    let j = -1 + gap;
    while (j < n) {
      res[j] = !res[j];
      j += gap;
    }
    gap++;
  }

  return res.reduce((pre, cur) => pre + cur);
};
// @lc code=end
