/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    if (n <= 0) {
        return res;
    }
    // 剩余左括号总数要小于等于右括号
    let getParenthesis = function (str, left, right) {
        if (left == 0 && right == 0) {
            res.push(str);
            return;
        }
        if (left == right) {
            getParenthesis(str + "(", left - 1, right);
        } else if (left < right) {
            if (left > 0) {
                getParenthesis(str + "(", left - 1, right);
            }
            getParenthesis(str + ")", left, right - 1);
        }
    };

    getParenthesis("", n, n);
    return res;
};
// @lc code=end

// ()
// (()) ()()
// ()(()) ((())) (())() (()()) ()()()
