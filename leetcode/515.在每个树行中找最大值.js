/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) {
    return [];
  }
  let res = [],
    queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let len = queue.length;
    let max = Number.MIN_SAFE_INTEGER;
    while (len--) {
      let node = queue.shift();
      max = Math.max(max, node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(max);
  }
  
  return res;
};
// @lc code=end
