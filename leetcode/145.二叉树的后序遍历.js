/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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

var postorderTraversal = function (root) {
  const stack = [],
    res = [];
  if (root) {
    stack.push(root);
  }

  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    }
    stack.push(node);
    stack.push(null);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  return res;
};

var postorderTraversal2 = function (root) {
  let number = [];
  let postorder = function (head) {
    if (!head) {
      return;
    }
    arguments.callee(head.left);
    arguments.callee(head.right);
    number.push(head.val);
  };

  let postorderIteration = function (head) {
    if (!head) {
      return;
    }
    let stack1 = [];
    let stack2 = [];
    stack1.push(head);
    while (stack1.length > 0) {
      let node = stack1.pop();
      stack2.push(node);
      if (node.left) {
        stack1.push(node.left);
      }
      if (node.right) {
        stack1.push(node.right);
      }
    }
    while (stack2.length > 0) {
      number.push(stack2.pop().val);
    }
  };

  postorderIteration(root);

  return number;
};
// @lc code=end
