/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {

    let len = nums.length;
    let arr = new Array(len);
    arr.fill(0);

    for (const num of nums) {
        if (num >= 1 && num <= len) {
            arr[num - 1] = 1;
        }
    }

    let r = arr.indexOf(0);

    return r == -1 ? len + 1 : r + 1;
};
// @lc code=end