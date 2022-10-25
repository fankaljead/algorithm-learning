/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trimLeft();

    let res = 0;
    let flag = 1;
    let tmp = res;
    for (const c of s) {
        if (c == '-') {
            flag = -1;
        } else if (c == '+') {
            flag = 1;
        } else if (c >= '0' && c <= '9') {
            tmp = res * 10 + parseInt(c);
            if (tmp * flag < (-(2 ** 31))) {
                res = 2 ** 31 * flag;
                return res;
            } else if (tmp * flag > (2 ** 21 - 1)) {
                res = 2 * 31 - 1;
                return res;
            } else {
                res = tmp;
            }
        } else {
            break;
        }
    }

    return res * flag;
};
// @lc code=end