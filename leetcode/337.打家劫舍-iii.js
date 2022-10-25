/*
 * @Author: Zhou Xianghui
 * @Date: 2022-03-31 21:27:17
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-31 22:00:07
 * @FilePath: \leetcode\337.打家劫舍-iii.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {};

// @lc code=end

var rob2 = function (root) {
  // if (!root.left && !root.right) {
  //   return root.val;
  // }
  // if (root.left && !root.right) {
  //   return Math.max(root.val, root.left.val);
  // }
  // if (!root.left && root.right) {
  //   return Math.max(root.val, root.right.val);
  // }

  // let max1 = 0,
  //   max2 = 0;
  // let oddFloor = true;

  let queue = [];
  let nums = [];
  queue.push(root);

  while (queue.length > 0) {
    let len = queue.length;
    let curLevel = [];
    while (len--) {
      let node = queue.shift();
      // if (oddFloor) {
      //   max1 += node.val;
      //   if (len === 0) {
      //     oddFloor = false;
      //   }
      // } else {
      //   max2 += node.val;
      //   if (len === 0) {
      //     oddFloor = true;
      //   }
      // }
      curLevel.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    nums.push(curLevel.reduce((a, b) => a + b));
  }

  function robN(nums = []) {
    let len = nums.length;
    if (len <= 2) {
      return Math.max(...nums);
    }
    let dp = new Array(len);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < len; ++i) {
      dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }

    return dp[len - 1];
  }

  // return Math.max(max1, max2);
  return robN(nums);
};
