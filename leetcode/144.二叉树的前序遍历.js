/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  // if (!root) {
  //   return;
  // }
  // let stack = [],
  //   res = [];

  // stack.push(root);
  // while (stack.length > 0) {
  //   let node = stack.pop();
  //   res.push(node.val);
  //   if (node.right) {
  //     stack.push(node.right);
  //   }
  //   if (node.left) {
  //     stack.push(node.left);
  //   }
  // }

  // return res;
  // 通用方法
  let preorderUnifiedIteration = function (root) {
    if (!root) {
      return [];
    }
    const stack = [],
      res = [];
    stack.push(root);

    while (stack.length) {
      const node = stack.pop();
      if (!node) {
        res.push(stack.pop().val);
        continue;
      }
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
      // 前序遍历
      stack.push(node);
      stack.push(null);
    }

    return res;
  };

  return preorderUnifiedIteration(root);
};

var preorderTraversal2 = function (root) {
  let number = [];
  // 递归
  let preorder = function (head) {
    if (!head) {
      return number;
    }
    number.push(head.val);
    arguments.callee(head.left);
    arguments.callee(head.right);
  };

  // 迭代
  let preorderIteration = function (head) {
    if (!head) {
      return;
    }
    let stack = [];
    stack.push(head);
    while (stack.length > 0) {
      let node = stack.pop();
      number.push(node.val);
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  };

  let preorderUnifiedIteration = function (root, res = []) {
    const stack = [];
    if (root) {
      stack.push(root);
    }

    while (stack.length) {
      const node = stack.pop();
      if (!node) {
        res.push(stack.pop().val);
      }
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
      stack.push(node);
      stack.push(null);
    }

    return res;
  };

  // preorder(root);
  // preorderIteration(root);
  // return number;
  // return preorderUnifiedIteration(root);
  preorderUnifiedIteration(root, number);
  return number;
};
// @lc code=end
