/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         const t = nums.lastIndexOf(target - element);
//         if (t > 0 && i != t) {
//             return [i, t];
//         }
//     }
//     return [-1, -1];

// let mapSum = function (nums, target) {
//     let map = new Map();
//     for (let i = 0, len = nums.length; i < len; ++i) {
//         let key = target - nums[i];
//         if (map.has(key)) {
//             return [map.get(key), i];
//         }
//         map.set(nums[i], i);
//     }
//     throw Error("No two sum solution.");
// };

// };

var twoSum = function (nums, target) {
    let mapSum = function (nums, target) {
        let map = new Map();
        for (let i = 0, len = nums.length; i < len; ++i) {
            let key = target - nums[i];
            if (map.has(key)) {
                return [map.get(key), i];
            }
            map.set(nums[i], i);
        }
        throw Error("No two sum solution.");
    };

    let notMapSum = (nums = [], target = 0) => {
        for (let i = 0; i < nums.length; i++) {
            let minus = target - nums[i];
            const index = nums.indexOf(minus);
            if (index != i && index >= 0) {
                return [index, i];
            }
        }
        throw Error("No two sum solution.");
    };

    // return mapSum(nums, target);
    return notMapSum(nums, target);
};
// @lc code=end
