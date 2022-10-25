/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let A = 0,
        B = 0;
    const cntS = new Array(10).fill(0),
        cntG = new Array(10).fill(0);
    for (let i = 0; i < guess.length; i++) {
        const element = guess[i];
        if (element === secret[i]) {
            A++;
        } else {
            ++cntS[secret[i].charCodeAt() - "0".charCodeAt()];
            ++cntG[guess[i].charCodeAt() - "0".charCodeAt()];
        }
    }
    for (let i = 0; i < 10; i++) {
        B += Math.min(cntS[i], cntG[i]);
    }

    return A + "A" + B + "B";
};
// @lc code=end
