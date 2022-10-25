/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  let sEnd = b.indexOf(a),
    eStart = b.lastIndexOf(a) + a.length;

  if (sEnd < 0) {
    return -1;
  }

  let restult = (eStart - sEnd) / a.length;

  if (sEnd === 0 && eStart == b.length) {
    return restult;
  } else if (
    (sEnd !== 0 && eStart === b.length) ||
    (sEnd === 0 && eStart !== b.length)
  ) {
    return restult + 1;
  } else {

  }

  return restult;
};
// @lc code=end
