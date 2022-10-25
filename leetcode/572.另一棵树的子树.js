/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
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

  let traversal = function (head, subRoot) {
    if (!head) {
      return;
    }
    let stack = [];
    stack.push(head);
    while (stack.length > 0) {
      let node = stack.pop();

      if (node.val === subRoot.val) {
        if (isSameTree(node, subRoot)) {
          return true;
        }
      }

      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
    return false;
  };

  return traversal(root, subRoot);
};
// @lc code=end
