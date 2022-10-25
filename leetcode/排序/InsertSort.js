/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-22 17:02:33
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-22 18:34:35
 * @FilePath: \leetcode\排序\InsertSort.js
 * @Description: 插入排序
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
const { getRandomIntArray } = require("./utils");

/**
 *
 * @param {Array} nums
 * @returns the sorted Array
 */
function insertSort(nums = []) {
  for (let i = 1, len = nums.length; i < len; ++i) {
    let preIndex = i - 1,
      temp = nums[i];
    while (preIndex >= 0 && nums[preIndex] > temp) {
      nums[preIndex + 1] = nums[preIndex--];
    }
    nums[preIndex + 1] = temp;
  }
  return nums;
}

let nums = getRandomIntArray(10, 1, 100);
console.log(nums);
console.log(insertSort(nums));
