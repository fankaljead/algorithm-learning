/*
 * @Author: Zhou Xianghui
 * @Date: 2021-11-17 20:27:54
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-03-09 14:24:33
 * @FilePath: \leetcode\590.n-叉树的后序遍历.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

var postorder = function (root) {
  if (!root) {
    return [];
  }
  let stack = [],
    res = [];
  stack.push(root);

  while (stack.length > 0) {
    let node = stack.pop();
    res.push(node.val);

    if (node.children) {
      stack.push(...node.children);
    }
  }

  return res.reverse();
};
// @lc code=end

const postorderUnified = (root) => {
  let res = [],
    stack = [];
  if (root) stack.push(root);

  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    }

    stack.push(node);
    stack.push(null);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  return res;
};
