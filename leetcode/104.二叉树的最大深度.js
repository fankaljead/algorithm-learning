/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  let maxDepthTraversal = (root) => {
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

        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
      depth++;
    }

    return depth;
  };

  let maxDepthRecursive = (root) => {
    if (!root) {
      return 0;
    }
    return (
      1 + Math.max(arguments.callee(root.left), arguments.callee(root.right))
    );
  };

  return maxDepthRecursive(root);
};
// @lc code=end
