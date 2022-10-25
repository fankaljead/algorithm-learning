/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal3 = function (root) {
  let res = [],
    st = [];

  if (!root) {
    st.push(root);
  }

  while (st.length > 0) {
    let node = st.pop();
    if (!node) {
      if (node.right) {
        st.push(node.right);
      }
      st.push(node);
      st.push(null);
      if (node.left) {
        st.push(node.left);
      }
    } else {
      node = st.pop();
      res.push(node.val);
    }
  }

  return res;
};
var inorderTraversal = function (root) {
  let number = [];

  // 递归
  let inorder = function (head) {
    if (!head) {
      return;
    }
    arguments.callee(head.left);
    number.push(head.val);
    arguments.callee(head.right);
  };

  let inorderIteration = function (head) {
    if (!head) {
      return;
    }
    let stack = [];
    let cur = head;
    while (stack.length > 0 || cur) {
      while (cur) {
        stack.push(cur);
        cur = cur.left;
      }
      let node = stack.pop();
      number.push(node.val);
      if (node.right) {
        cur = node.right;
      }
    }
  };

  let inorderUnifiedIteration = function (root) {
    if (!root) {
      return [];
    }
    let stack = [],
      res = [];
    stack.push(root);

    while (stack.length) {
      const node = stack.pop();
      if (!node) {
        res.push(stack.pop().val);
        continue;
      }
      node.right && stack.push(node.right);
      stack.push(node);
      stack.push(null);
      node.left && stack.push(node.left);
    }

    return res;
  };

  // inorderIteration(root);
  // return number;

  return inorderUnifiedIteration(root);
};
// @lc code=end

function inorderUnifiedIteratio(root) {
  if (!root) {
    return [];
  }
  let stack = [],
    res = [];
  stack.push(root);

  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    }
    node.right && stack.push(node.right);
    stack.push(node);
    stack.push(null);
    node.left && stack.push(node.left);
  }
}
