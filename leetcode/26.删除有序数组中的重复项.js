/*
 * @Author: Zhou Xianghui
 * @Date: 2021-10-16 21:22:04
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-24 16:05:52
 * @FilePath: \js-testd:\Dropbox\Documents\研究生\算法\leetcode\26.删除有序数组中的重复项.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let forceRemoveDuplicates = (nums = []) => {
    let pre = nums[0];
    for (let i = 1; i < nums.length; ) {
      if (nums[i] == pre) {
        nums.splice(i, 1);
      } else {
        pre = nums[i++];
      }
    }

    return nums.length;
  };

  // 双指针法 快慢指针
  let realRemoveDuplicated = (nums = []) => {
    if (nums.length <= 1) {
      return nums;
    }
    let slowIndex = 1;

    let val = nums[0];
    for (let fastIndex = 1; fastIndex < nums.length; fastIndex++) {
      if (val !== nums[fastIndex]) {
        nums[slowIndex++] = nums[fastIndex];
        val = nums[fastIndex];
      }
    }

    return slowIndex;
  };

  // return forceRemoveDuplicates(nums);
  return realRemoveDuplicated(nums);
};
// @lc code=end
