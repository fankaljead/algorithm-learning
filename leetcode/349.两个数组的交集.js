/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let s1 = new Set(nums1);
    let s2 = new Set(nums2);
    let res = [];

    for (const num of s1) {
        if (s2.has(num)) {
            res.push(num);
        }
    }

    return res;
};
// @lc code=end
