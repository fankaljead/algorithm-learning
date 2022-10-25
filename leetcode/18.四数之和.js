/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) {
        return [];
    }

    nums.sort((a, b) => a - b);
    let sset = new Set(nums);
    for (const num of sset) {
        if (nums.lastIndexOf(num) - nums.indexOf(num) + 1 >= 4) {
            nums.splice(
                nums.indexOf(num),
                nums.lastIndexOf(num) - (nums.indexOf(num) - 1 + 4)
            );
        }
    }
    let set = new Set();
    let res = [];

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            for (let k = j + 1; k < nums.length - 1; k++) {
                let key = target - (nums[i] + nums[j] + nums[k]);
                if (nums.lastIndexOf(key) > k) {
                    let result = [nums[i], nums[j], nums[k], key];
                    if (set.has(result.toString())) {
                        continue;
                    } else {
                        set.add(result.toString());
                        res.push(result);
                    }
                }
            }
        }
    }

    return res;
};
var fourSum2 = function (nums, target) {
    if (nums.length < 4) {
        return [];
    }
    let twoAdd = (arr = [], from = [], to = []) => {
        let res = [];
        for (let i = 0; i < arr.length; ++i) {
            for (let j = i + 1; j < arr.length; ++j) {
                to.push(arr[i] + arr[j]);
                from.push([i, j]);
            }
        }
        return res;
    };
    let from = [],
        to = [];
    twoAdd(nums, from, to);

    let twoSum = (from = [], nums = [], target) => {
        let res = [];
        let map = new Map();
        let keys = [];
        for (let i = 0, len = from.length; i < len; ++i) {
            let key = target - nums[from[i][0]] - nums[from[i][1]];

            if (map.has(key)) {
                map.get(key).push(from[i]);
            } else {
                map.set(key, [from[i]]);
                keys.push(key);
            }
        }

        keys.sort((a, b) => a - b);

        for (let i = 0; i < keys.length; i++) {
            for (let j = 0; j < map.get(keys[i]).length; j++) {
                for (
                    let k = 0;
                    map.has(target - keys[i]) &&
                    k < map.get(target - keys[i]).length;
                    k++
                ) {
                    let result = [
                        ...map.get(keys[i])[j],
                        ...map.get(target - keys[i])[k],
                    ].sort((a, b) => a - b);
                    res.push(result);
                }
            }
        }

        let resSet = new Set();
        let r = [];
        for (let i = 0; i < res.length; i++) {
            let set = new Set(res[i]);
            if (set.size !== 4) {
                continue;
            }
            let num = [
                nums[res[i][0]],
                nums[res[i][1]],
                nums[res[i][2]],
                nums[res[i][3]],
            ].sort((a, b) => a - b);
            if (resSet.has(num.toString())) {
                continue;
            } else {
                resSet.add(num.toString());
                r.push(num);
            }
        }

        return r;
    };

    return twoSum(from, nums, target);
};
// @lc code=end
