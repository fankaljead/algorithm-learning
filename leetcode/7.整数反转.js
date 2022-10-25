/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  let tx = Math.abs(x);
  let abs = x > 0 ? true : false;

  let i = new String(Math.abs(x)).length - 1;
  while (i >= 0) {
    result += (tx % 10) * 10 ** i;
    tx = Math.floor(tx / 10);
    --i;
  }

  if (!abs) {
    result *= -1;
  }

  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }

  return result;
};

// var reverse = function(x) {
//     let rev = 0;
//     while (x !== 0) {
//         const digit = x % 10;
//         x = ~~(x / 10);
//         rev = rev * 10 + digit;
//         if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
//             return 0;
//         }
//     }
//     return rev;
// };

// @lc code=end
