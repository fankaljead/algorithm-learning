/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  // 1. 递归法
  let isSymmetricRecursive = (root) => {
    if (!root) {
      return true;
    }

    let compare = (left, right) => {
      if (!left && right) {
        return false;
      } else if (left && !right) {
        return false;
      } else if (!left && !right) {
        return true;
      } else if (left.val !== right.val) {
        return false;
      }

      // let outside = compare(left.left, right.right);
      // let inside = compare(left.right, right.left);
      // let isSame = outside && inside;

      // return isSame;
      return compare(left.left, right.right) && compare(left.right, right.left);
    };

    return compare(root.left, root.right);
  };

  // 2. 迭代法 使用队列
  let isSymmetricTraversal = (root) => {
    if (!root) {
      return true;
    }

    let queue = [];
    queue.push(root.left);
    queue.push(root.right);

    while (queue.length > 0) {
      let left = queue.shift(),
        right = queue.shift();
      if (!left && !right) {
        continue;
      }
      if (!left || !right || left.val !== right.val) {
        return false;
      }

      queue.push(left.left);
      queue.push(right.right);
      queue.push(left.right);
      queue.push(right.left);
    }

    return true;
  };

  return isSymmetricRecursive(root);
};

var isSymmetric2 = function (root) {
  let judge = (curLevel = []) => {
    let len = curLevel.length;
    for (let i = 0; i < len / 2; i++) {
      if (curLevel[i] !== curLevel[len - i - 1]) {
        return false;
      }
    }
    return true;
  };

  if (!root) {
    return false;
  }

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let len = queue.length;
    let curLevel = [];
    while (len--) {
      let node = queue.shift();
      node && curLevel.push(node.val);
      node && queue.push(node.left);
      node && queue.push(node.right);
    }
    console.log("curLevel", curLevel);
    if (!judge(curLevel)) {
      return false;
    }
  }

  return true;
};
// @lc code=end
