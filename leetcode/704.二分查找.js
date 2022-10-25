/*
 * @Author: Zhou Xianghui
 * @Date: 2021-11-02 15:40:03
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-12 13:25:10
 * @FilePath: \undefinedd:\Dropbox\Documents\研究生\算法\leetcode\704.二分查找.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let search1 = (nums = [], target = 0) => {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      let middle = left + Math.ceil((right - left) / 2);
      if (nums[middle] > target) {
        right = middle - 1;
      } else if (nums[middle] < target) {
        left = middle + 1;
      } else {
        return middle;
      }
    }
    return -1;
  };

  let search2 = (nums = [], target = 0) => {
    let left = 0,
      right = nums.length;
    while (left < right) {
      let middle = left + Math.floor((right - left) / 2);
      if (nums[middle] > target) {
        right = middle;
      } else if (nums[middle] < target) {
        left = middle + 1;
      } else {
        return middle;
      }
    }
    return -1;
  };

  // return search1(nums, target);
  return search2(nums, target);
};
// @lc code=end
