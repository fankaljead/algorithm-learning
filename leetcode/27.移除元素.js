/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let deleteRemove = (nums = [], val = 0) => {
        let index = nums.indexOf(val);
        while (index != -1) {
            nums.splice(index, 1);
            index = nums.indexOf(val);
        }
        return nums.length;
    };

    let realRemove = (nums = [], val = 0) => {
        let slowIndex = 0;
        for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
            if (val !== nums[fastIndex]) {
                nums[slowIndex++] = nums[fastIndex];
            }
        }
        return slowIndex;
    };

    // return deleteRemove(nums, val);
    return realRemove(nums, val);
};
// @lc code=end
