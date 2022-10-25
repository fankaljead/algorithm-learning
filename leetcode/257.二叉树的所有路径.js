/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let binaryTreePathsTraversal = function (root) {
    let res = [];
    const getPath = function (node, curPath) {
      if (!node.left && !node.right) {
        curPath += node.val;
        res.push(curPath);
        return;
      }
      curPath += node.val + "->";
      node.left && arguments.callee(node.left, curPath);
      node.right && arguments.callee(node.right, curPath);
    };
    getPath(root, "");
    return res;
  };

  let binaryTreePathsIteration = function (root) {
    if (!root) {
      return [];
    }
    const stack = [root],
      paths = [""],
      res = [];

    while (stack.length) {
      const node = stack.pop();
      let path = paths.pop();
      if (!node.left && !node.right) {
        res.push(path + node.val);
        continue;
      }
      path += node.val + "->";
      if (node.right) {
        stack.push(node.right);
        paths.push(path);
      }
      if (node.left) {
        stack.push(node.left);
        paths.push(path);
      }
    }

    return res;
  };

  // return binaryTreePathsTraversal(root);
  return binaryTreePathsIteration(root);
};
// @lc code=end
