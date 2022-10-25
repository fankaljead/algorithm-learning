/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let result = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    let i = 0,
        subLength = 0;

    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        while (sum >= target) {
            subLength = j - i + 1;
            result = Math.min(result, subLength);
            sum -= nums[i++];
        }
    }

    return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};
// @lc code=end
