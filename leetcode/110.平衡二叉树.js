/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced2 = function (root) {
  let getDepth = function (cur) {
    let st = [],
      depth = 0,
      result = 0;
    if (!cur) {
      st.push(cur);
    }
    while (st.length > 0) {
      let node = st.pop();
      if (!node) {
        st.push(node);
        st.push(null);
        ++depth;
        if (node.right) {
          st.push(node.right);
        }
        if (node.left) {
          st.push(node.left);
        }
        // node.right && st.push(node.right);
        // node.left && st.push(node.left);
      } else {
        node = st.pop();
        --depth;
      }
      result = result > depth ? result : depth;
    }
    return result;
  };

  let st = [];
  if (!root) {
    return true;
  }
  st.push(root);
  while (st.length > 0) {
    let node = st.pop();
    if (Math.abs(getDepth(node.left) - getDepth(node.right)) > 1) {
      return false;
    }
    node.right && st.push(node.right);
    node.left && st.push(node.left);
  }
};

var isBalanced = function (root) {
  let getHeight = function (node) {
    if (!node) {
      return 0;
    }
    let leftHeight = arguments.callee(node.left);
    if (leftHeight === -1) {
      return -1;
    }
    let rightHeight = arguments.callee(node.right);
    if (rightHeight === -1) {
      return -1;
    }
    return Math.abs(leftHeight - rightHeight) > 1
      ? -1
      : 1 + Math.max(leftHeight, rightHeight);
  };

  return getHeight(root) !== -1;
};
// @lc code=end
