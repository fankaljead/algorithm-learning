/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {

    if (dividend == 0) {
        return 0;
    }
    if (divisor == 1) {
        return dividend;
    }



    const MAX = 2 ** 31 - 1,
        MIN = -(2 ** 31);

    if (divisor == -1) {
        if (dividend > MIN) {
            return -dividend;
        }
        return MAX;
    }

    let p = 1;

    if (dividend > 0 && divisor < 0 || dividend < 0 && divisor > 0) {
        p = -1;
    }


    // dividend = dividend > 0 ? dividend : -dividend;
    // divisor = divisor > 0 ? divisor : -divisor;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let div = function (a, b) {
        if (a < b) {
            return 0;
        }
        let count = 1,
            tb = b;
        while ((tb + tb) <= a) {
            count = count + count;
            tb = tb + tb;
        }
        return count + arguments.callee(a - tb, b);
    }
    let res = div(dividend, divisor);
    if (p > 0) {
        return res > MAX ? MAX : res;
    }
    return -res;


};
// @lc code=end