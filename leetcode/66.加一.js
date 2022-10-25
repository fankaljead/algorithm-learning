/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let bonus = 1;
    let temp = digits[digits.length - 1];
    for (let i = digits.length - 1; i >= 0; i--) {
        temp = digits[i] + bonus;
        if (temp < 10) {
            digits[i] = temp;
            bonus = 0;
            break;
        } else {
            digits[i] = temp - 10;
            bonus = 1;
        }
    }

    if (bonus === 1) {
        digits.splice(0, 0, ...[1]);
    }

    return digits;
};
// @lc code=end