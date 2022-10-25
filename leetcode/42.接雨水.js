/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let stack = [];
    let res = 0;

    for (let i = 0; i < height.length; ++i) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            let cur = stack.pop();
            if (!stack.length) {
                break;
            }
            let l = stack[stack.length - 1];
            let h = Math.min(height[i], height[l] - height[cur]);

            res += h * (i - l - 1);
        }
        stack.push(i);
    }

    return res;
};
// @lc code=end