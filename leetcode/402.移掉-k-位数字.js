/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    const stack = [];
    for (let i = 0; i < num.length; i++) {
        const c = num[i];
        while (k > 0 && stack.length && stack[stack.length - 1] > c) {
            stack.pop();
            k--;
        }
        if (c != '0' || stack.length != 0) {
            stack.push(c);
        }
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    return stack.length == 0 ? "0" : stack.join('');
};
// @lc code=end