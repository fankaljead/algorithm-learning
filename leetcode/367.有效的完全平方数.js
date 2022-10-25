/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let n = 1,
        d = num;
    while (d > 0) {
        d -= n;
        n += 2;
    }

    n -= 2;

    return ((n + 1) / 2) * ((n + 1) / 2) === num;
};
// @lc code=end
