/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-22 16:25:36
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-22 16:53:08
 * @FilePath: \leetcode\排序\utils.js
 * @Description: 工具
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */

function getRandomIntArray(size = 10, left = 1, right = 10) {
  let nums = [];
  for (let i = 0; i < size; ++i) {
    nums.push(Math.floor(Math.random() * (right - left + 1) + left));
  }
  return nums;
}

module.exports = {
  getRandomIntArray,
};

// console.log(getRandomIntArray(10, 1, 100));
