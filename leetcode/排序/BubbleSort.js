/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-22 16:24:48
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-22 16:53:30
 * @FilePath: \leetcode\排序\BubbleSort.js
 * @Description: 冒泡排序
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
const { getRandomIntArray } = require("./utils");

function bubbleSort(nums = []) {
  for (let i = 0, len = nums.length; i < len - 1; ++i) {
    for (let j = 0; j < len - i - 1; ++j) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

let nums = getRandomIntArray(100, 1, 100);
console.log(nums);
console.log(bubbleSort(nums));
