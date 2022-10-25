/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

    let recusiveSolveSudoku = function (board, rowUsed, colUsed, boxUsed, row, col) {
        if (col == board[0].length) {
            col = 0;
            row++;
            if (row == board.length) {
                return true;
            }
        }
        if (board[row][col] == '.') {
            for (let num = 1; num <= 9; ++num) {
                let canUsed = !(rowUsed[row][num] || colUsed[col][num] || boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num]);
                if (canUsed) {
                    rowUsed[row][num] = true;
                    colUsed[col][num] = true;
                    boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = true;

                    board[row][col] = num + '';
                    if (recusiveSolveSudoku(board, rowUsed, colUsed, boxUsed, row, col+1)){
                        return true;
                    }
                    board[row][col]='.';

                    rowUsed[row][num] = false;
                    colUsed[col][num] = false;
                    boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = false;
                }
            }
        } else {
            return recusiveSolveSudoku(board, rowUsed, colUsed, boxUsed, row, col+1);
        }

        return false;
    }

    let rowUsed = new Array(9).fill(new Array(9));
    let colUsed = new Array(9).fill(new Array(9));
    let boxUsed = new Array(new Array(3).fill(new Array(10)));

    // 初始化
    for (let row = 0; row < board.length; ++row) {
        for (let col = 0; col < board[0].length; ++col) {
            let num = parseInt(board[row][col]); // - '0';
            if (1 <= num && num <= 9) {
                rowUsed[row][num] = true;
                colUsed[col][num] = true;
                boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = true;
            }
        }
    }

    recusiveSolveSudoku(board, rowUsed, colUsed, boxUsed, 0, 0);
};
// @lc code=end