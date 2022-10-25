/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let s1 = [];
    let pc = null;
    let trans = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (const c of s) {
        if (c == "(" || c == "{" || c == "[") {
            s1.push(c);
        } else {
            pc = s1.pop();
            if (trans[c] == pc) {
                continue;
            } else {
                return false;
            }
        }
    }

    return true && s1.length == 0;
};
// @lc code=end
