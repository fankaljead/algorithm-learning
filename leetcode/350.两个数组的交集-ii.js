/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let map = new Map();
    for (const num of nums1) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    }
    
    let res = [];
    for (const num of nums2) {
        if (map.has(num) && map.get(num) > 0) {
            res.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return res;
};
// @lc code=end
