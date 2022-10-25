/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows < 2) {
        return s;
    }
    let rows = [];
    for (let i = 0; i < numRows; ++i) {
        rows.push([]);
    }

    let i = 0,
        flag = -1;

    for (const c of s) {
        rows[i].push(c);
        if (i == 0 || i == numRows - 1) {
            flag = -flag;
        }
        i += flag;
    }

    let res = [];
    for (const row of rows) {
        res.push(...row);
    }

    return res.join('');
};
// @lc code=end