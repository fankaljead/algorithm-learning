/*
 * @Author: Zhou Xianghui
 * @Date: 2021-11-17 12:29:53
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-09 14:55:28
 * @FilePath: \leetcode\226.翻转二叉树.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root;
  }

  // 递归法
  let preorderInvertTree = function (root) {
    if (!root) {
      return root;
    }
    [root.left, root.right] = [root.right, root.left];

    arguments.callee(root.left);
    arguments.callee(root.right);

    return root;
  };

  return preorderInvertTree(root);
};
var invertTree2 = function (root) {
  if (!root) {
    return root;
  }

  let queue = [];
  queue.push(root);

  // 层次遍历
  while (queue.length > 0) {
    let len = queue.length;
    while (len--) {
      let node = queue.shift();
      [node.left, node.right] = [node.right, node.left];
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return root;
};
// @lc code=end
