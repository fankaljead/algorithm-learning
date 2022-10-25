/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
  let countNodesTraveral = (root) => {
    if (!root) {
      return 0;
    }
    let count = 0,
      queue = [];
    queue.push(root);

    while (queue.length > 0) {
      let len = queue.length;

      while (len--) {
        let node = queue.shift();
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
        count++;
      }
    }

    return count;
  };

  let countNodesTraveral2 = (root) => {
    if (!root) {
      return 0;
    }
    let count = 0,
      queue = [];
    queue.push(root);

    while (queue.length > 0) {
      let len = queue.length;

      while (len--) {
        let node = queue.shift();
        count++;

        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
        if (!node.left || !node.right) {
          return count + queue.length;
        }
      }
    }

    return count;
  };

  let countNodesTraveral3 = function (root) {
    //利用完全二叉树的特点
    if (root === null) {
      return 0;
    }
    let left = root.left;
    let right = root.right;
    let leftHeight = 0,
      rightHeight = 0;
    while (left) {
      left = left.left;
      leftHeight++;
    }
    while (right) {
      right = right.right;
      rightHeight++;
    }
    if (leftHeight == rightHeight) {
      return Math.pow(2, leftHeight + 1) - 1;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;
  };

  return countNodesTraveral3(root);
};
// @lc code=end
