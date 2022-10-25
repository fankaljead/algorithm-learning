/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!q && !p) {
    return true;
  } else if ((!q && p) || (q && !p) || p.val !== q.val) {
    return false;
  } else {
    let queue = [];
    queue.push(p, q);

    while (queue.length > 0) {
      let nodeP = queue.shift(),
        nodeQ = queue.shift();
      if (!nodeP && !nodeQ) {
        continue;
      }
      if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) {
        return false;
      }

      queue.push(nodeP.left);
      queue.push(nodeQ.left);
      queue.push(nodeP.right);
      queue.push(nodeQ.right);
    }

    return true;
  }
};
// @lc code=end
