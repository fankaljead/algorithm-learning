/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let plus = 0;
  let lenK = k.toString().length,
    lenNum = num.length;
  let res = Array(Math.max(lenK, lenNum)).fill(0);
  let j = Math.max(lenK, lenNum) - 1;
  let i = lenNum - 1;
  for (; i >= 0 && k; --i) {
    let m = num[i] + (k % 10) + plus;
    res[j--] = m % 10;
    plus = Math.floor(m / 10);
    k = Math.floor(k / 10);
  }

  if (lenK > lenNum) {
    while (k) {
      let m = (k % 10) + plus;
      res[j--] = m % 10;
      plus = Math.floor(m / 10);
      k = Math.floor(k / 10);
    }
  }

  if (lenNum > lenK) {
    while (i >= 0) {
      let m = (num[i--] % 10) + plus;
      res[j--] = m % 10;
      plus = Math.floor(m / 10);
    }
  }

  if (plus) {
    res.unshift(plus);
  }

  return res;
};
// @lc code=end
