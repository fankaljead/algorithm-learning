/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  let minDepthTraversal = (root) => {
    if (!root) {
      return 0;
    }
    let queue = [],
      depth = 0;
    queue.push(root);
    while (queue.length > 0) {
      let len = queue.length;
      depth++;
      while (len--) {
        let node = queue.shift();

        if (!node.left && !node.right) {
          return depth;
        }

        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }

    return depth;
  };

  let minDepthRecusive = function (root) {
    if (!root) {
      return 0;
    }

    let leftDepth = arguments.callee(root.left),
      rightDepth = arguments.callee(root.right);

    if (!root.left && root.right) {
      return 1 + rightDepth;
    }

    if (root.left && !root.right) {
      return 1 + leftDepth;
    }

    return 1 + Math.min(leftDepth, rightDepth);
  };

  return minDepthTraversal(root);
};
// @lc code=end
