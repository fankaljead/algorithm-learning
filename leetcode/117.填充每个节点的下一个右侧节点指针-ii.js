/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function (root) {
  if (!root) {
    return root;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let len = queue.length;
    let max = Number.MIN_SAFE_INTEGER;
    while (len--) {
      let node = queue.shift();

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);

      if (len === 0) {
        break;
      } else {
        node.next = queue[0];
      }
    }
  }

  return root;
};
// @lc code=end

