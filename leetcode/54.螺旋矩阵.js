/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix = []) {
    let m = matrix.length;
    let n = matrix[0].length;
    let res = [];
    let bound = Number.MAX_SAFE_INTEGER;
    let i = 0,
        j = 0;
    while (true) {
        // left ===> right
        if ((i === 0 || matrix[i - 1][j] === bound) && matrix[i][j] !== bound) {
            console.log("left ===> right");
            while (j < n && matrix[i][j] !== bound) {
                res.push(matrix[i][j]);
                matrix[i][j++] = bound;
            }
            i++;
            j--;
            if (res.length === m * n) {
                break;
            }
        }
        // up ===> down
        if ((j === n - 1 || matrix[i - 1][j] === bound) && matrix[i][j] !== bound) {
            console.log("up ===> down");
            while (i < m && matrix[i][j] !== bound) {
                res.push(matrix[i][j]);
                matrix[i++][j] = bound;
            }
            j--;
            i--;
            if (res.length === m * n) {
                break;
            }
        }

        // right ===> left
        if ((j === n - 1 || matrix[i][j + 1] === bound) && matrix[i][j] !== bound) {
            console.log("right ===> left");
            while (j >= 0 && matrix[i][j] !== bound) {
                res.push(matrix[i][j]);
                matrix[i][j--] = bound;
            }
            j++;
            i--;
            if (res.length === m * n) {
                break;
            }
        }

        // down ===> up
        if ((j === n - 1 || matrix[i + 1][j] === bound) && matrix[i][j] !== bound) {
            console.log("down ===> up");
            while (i < m && matrix[i][j] !== bound) {
                res.push(matrix[i][j]);
                matrix[i--][j] = bound;
            }
            i++;
            j++;
            if (res.length === m * n) {
                break;
            }
        }
    }

    return res;
};
// @lc code=end
