/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let N = n;

    let quickMul = function (x, N) {
        let ans = 1.0;
        let x_contribute = x;
        while (N > 0) {
            if (N % 2 == 1) {
                ans *= x_contribute;
            }
            x_contribute *= x_contribute;
            N = Math.floor(N / 2);

        }
        return ans;
    }

    return N >= 0 ? quickMul(x, N) : 1.0 / quickMul(x, -N);
};
// @lc code=end