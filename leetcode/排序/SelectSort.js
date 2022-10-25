/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-22 16:54:08
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-04-04 15:30:39
 * @FilePath: \leetcode\排序\SelectSort.js
 * @Description: 选择排序
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
const { getRandomIntArray } = require("./utils");

// 把小的数放在前面
function selectSort(nums = []) {
  for (let i = 0, len = nums.length; i < len - 1; ++i) {
    let minIndex = i;
    for (let j = i + 1; j < len; ++j) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
}

let nums = getRandomIntArray(100, 1, 100);
console.log(nums);
console.log(selectSort(nums));
