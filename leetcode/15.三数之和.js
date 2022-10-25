/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let twoSum = function (nums, target) {
        let map = new Map();
        for (let i = 0, len = nums.length; i < len; ++i) {
            let key = target - nums[i];
            if (map.has(key)) {
                return [map.get(key), i];
            }
            map.set(nums[i], i);
        }
        throw Error('No two sum solution.');
    };

    let res = [];
    for (let i = 0; i < nums.length; ++i) {
        let numss = [...nums];
        numss.splice(i, 1);
        r = twoSum(numss, -nums[i]);
        if (r.length > 1) {
            r.forEach((e, i, r) => {
                r[i].push(nums[i])
            })
            res.push(r);
        }
    }

    return res.flat();
};
// @lc code=end