/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let table = new Array(s.length + 1);
    table.fill(new Array(p.length + 1));

    table[0][0] = true;

    for (let row = 1; row < s.length + 1; ++row) {
        table[row][0] = false;
    }

    for (let col = 1, len = p.length + 1; col < len; ++col) {
        const ch = p.charAt(col);
        if (col > 1) {
            if (ch == '*') {
                table[0][col] = table[0][col - 2];
            } else {
                table[0][col] = false;
            }
        } else {
            if (ch == '*') {
                table[0][col] = true;
            }
        }
    }

    for (let row = 1; row < table.length; row++) {
        const ch1 = s.charAt(row - 1);
        for (let col = 1; col < table[row].length; col++) {
            let ch2 = p.charAt(col - 1);
            if (ch1 == ch2 || ch2 == '.') {
                table[row][col] = table[row - 1][col - 1];
            } else if (ch2 == '*') {
                if (col > 1) {
                    if (table[row][col - 2]) {
                        table[row][col] = true; // * 前面的字符出现0次
                    } else {
                        let prev = p.charAt(col - 2);
                        if (prev == ch1 || prev == '.') {
                            table[row][col] = table[row - 1][col]; // * 前面的字符出现多次
                        }
                    }
                }
            }
        }
    }

    return table[table.length - 1][table[0].length - 1];
}
// @lc code=end