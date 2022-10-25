/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let col = n,
        row = m;
    for (let i = 0; i < ops.length; i++) {
        if (row > ops[i][0]) {
            row = ops[i][0];
        }
        if (col > ops[i][1]) {
            col = ops[i][1];
        }
    }
    
    return col * row;
};
// @lc code=end
