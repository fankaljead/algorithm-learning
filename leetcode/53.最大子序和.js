/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length == 1) {
        return nums[0];
    }

    let maxSubArrayDynamic = function (nums) {
        let pre = 0,
            maxAns = nums[0];
        nums.forEach((x) => {
            pre = Math.max(pre + x, x);
            maxAns = Math.max(maxAns, pre);
        });
        return maxAns;
    };

    return maxSubArrayDynamic(nums);
};
// @lc code=end