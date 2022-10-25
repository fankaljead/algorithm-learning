/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  let count = 0;
  while (n !== 1) {
    if (n % 2 == 0) {
      n /= 2;
    } else {
      if ((n - 1) / 2 === 1) {
        n -= 1;
      } else if (((n + 1) / 2) % 2 === 0) {
        n += 1;
      } else {
        n -= 1;
      }
    }
    count++;
  }
  return count;
};
// @lc code=end
