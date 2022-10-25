/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [],
    queue = [];

  queue.push(root);

  if (!root) {
    return res;
  }

  while (queue.length > 0) {
    let length = queue.length;
    let curLevel = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(curLevel);
  }

  return res;
};

var levelOrder2 = function (root) {
  let number = [];

  let order = function (head) {
    if (head) {
      // number.push([head.val]);
      let stack = [];
      let stack2 = [];
      stack.push(head);
      let cur = head;
      while (stack.length > 0) {
        let f = [];
        while (stack.length > 0) {
          cur = stack.splice(0, 1)[0]; // 这里弹出的是一个大小为 1 的数组
          f.push(cur.val);
          if (cur.left) {
            stack2.push(cur.left);
          }
          if (cur.right) {
            stack2.push(cur.right);
          }
        }
        number.push(f);
        stack.push(...stack2);
        stack2.splice(0, stack2.length);
      }
    } else {
      return;
    }
  };

  order(root);

  return number;
};
// @lc code=end
