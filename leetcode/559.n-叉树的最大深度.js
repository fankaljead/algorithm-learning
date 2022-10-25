/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let queue = [],
    depth = 0;
  queue.push(root);
  while (queue.length > 0) {
    let len = queue.length;
    while (len--) {
      let node = queue.shift();

      node.children && queue.push(...node.children);
    }
    depth++;
  }

  return depth;
};
// @lc code=end
