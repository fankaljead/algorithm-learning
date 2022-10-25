/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let sum = new Set();
    sum.add(n);
    let num = n,
        s = 0,
        remainder = 0;
    while (!sum.has(s)) {
        while (num > 0) {
            remainder = num % 10;
            console.log(remainder);
            s = s + remainder ** 2;
            num = ~~(num / 10);
        }
        if (s === 1) {
            return true;
        } else if (!sum.has(s)) {
            num = s;
            sum.add(s);
            s = 0;
        } else {
            break;
        }
    }

    return false;
};
// @lc code=end
