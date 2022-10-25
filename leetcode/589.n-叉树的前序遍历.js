/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
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
      stack.push(...node.children.reverse());
    }
  }

  return res;
};
// @lc code=end
