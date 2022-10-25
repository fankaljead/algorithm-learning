class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? 0 : left;
    this.right = right === undefined ? 0 : right;
  }

  /**
   * 二叉树 前序遍历
   * @param {TreeNode} root
   * @returns
   */
  static preorder2(root) {
    let res = [];
    const preorderInner = function (root) {
      if (!root) {
        return;
      }
      res.push(root.val);
      root.left && preorderInner(root.left);
      root.right && preorderInner(root.right);
    };

    preorderInner(root);

    return res;
  }

  /**
   * 二叉树 前序遍历
   * 使用栈实现 迭代
   * @param {TreeNode} root
   * @returns
   */
  static preorder(root) {
    if (!root) {
      return [];
    }

    let res = [],
      stack = [root];

    while (stack.length) {
      const node = stack.pop();

      if (!node) {
        res.push(stack.pop().val);
      } else {
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);

        stack.push(node);
        stack.push(null);
      }
    }

    return res;
  }

  /**
   * 二叉树 中序遍历
   * @param {TreeNode} root
   * @returns
   */
  static inorder(root) {
    let res = [];
    const inorderInner = function (root) {
      if (!root) {
        return;
      }
      root.left && inorderInner(root.left);
      res.push(root.val);
      root.right && inorderInner(root.right);
    };

    inorderInner(root);

    return res;
  }

  /**
   * 二叉树 后序遍历
   * @param {TreeNode} root
   * @returns
   */
  static postorder(root) {
    let res = [];
    const postorderInner = function (root) {
      if (!root) {
        return;
      }
      root.left && postorderInner(root.left);
      root.right && postorderInner(root.right);
      res.push(root.val);
    };

    postorderInner(root);

    return res;
  }

  /**
   * 二叉树 层序遍历
   * @param {TreeNode} root
   * @returns 层序遍历 结果
   */
  static levelorder(root) {
    const res = [];
    const q = [root];

    while (q.length) {
      const len = q.length;
      const level = [];
      for (let i = 0; i < len; ++i) {
        const node = q.shift();

        level.push(node.val);

        node.left && q.push(node.left);
        node.right && q.push(node.right);
      }

      res.push(level);
    }

    return res;
  }

  toString() {
    const log = console.log;
    let res = "";
    log("preorder: ", TreeNode.preorder(this));
    log("inorder: ", TreeNode.inorder(this));
    log("postorder: ", TreeNode.postorder(this));
    log("levelorder: ", TreeNode.levelorder(this));

    return res;
  }

  /**
   * 构建一颗二叉树 例如 arr = [1, null, 2, 3]
   * @param {*} arr
   * @returns 二叉树的根节点
   */
  static buildTreeFromArray(arr = []) {
    if (arr.length <= 0) {
      return null;
    }
    let nums = arr.slice(0);
    let root,
      q = [];

    root = new TreeNode(nums[0]);
    q.push(root);
    let i = 1;

    while (i < nums.length) {
      const node = q.shift();

      if (nums[i] !== null) {
        const left = new TreeNode(nums[i]);
        node.left = left;
        q.push(left);
      }

      if (i + 1 < nums.length && nums[i + 1] !== null) {
        const right = new TreeNode(nums[i + 1]);
        node.right = right;
        q.push(right);
      }

      i += 2;
    }

    return root;
  }

  /**
   * 通过 前序遍历和中序遍历构建二叉树
   * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/cong-qian-xu-yu-zhong-xu-bian-li-xu-lie-gou-zao-9/
   * @param {*} preorder 二叉树 前序遍历结果数组
   * @param {*} inorder 二叉树 中序遍历结果
   * @returns 通过 先序遍历和后序遍历 复原的二叉树 root 节点
   */
  static buildTreeFromPreorderInorder(
    preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7]
  ) {
    let index = new Map(),
      n = preorder.length;

    inorder.forEach((num, i) => index.set(num, i));

    function myBuildTree(
      preorder = [],
      inorder = [],
      preorderLeft = 0,
      preorderRight = n - 1,
      inorderLeft = 0,
      inorderRight = n - 1
    ) {
      if (preorderLeft > preorderRight) {
        return null;
      }

      // 前序遍历的第一个节点为 根节点
      let preorderRoot = preorderLeft;

      // 中序遍历定位根节点
      let inorderRoot = index.get(preorder[preorderRoot]);

      // 建立根节点
      let root = new TreeNode(preorder[preorderRoot]);

      // 左子树的节点数目
      let sizeLeftSubtree = inorderRoot - inorderLeft;

      // 构建左子树
      root.left = myBuildTree(
        preorder,
        inorder,
        preorderLeft + 1,
        preorderLeft + sizeLeftSubtree,
        inorderLeft,
        inorderRoot - 1
      );

      root.right = myBuildTree(
        preorder,
        inorder,
        preorderLeft + sizeLeftSubtree + 1,
        preorderRight,
        inorderRoot + 1,
        inorderRight
      );

      return root;
    }

    const root = myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);

    return root;
  }

  static buildTreeFromInorderPostorder(inorder, postorder) {
    let post_idx;
    const idx_map = new Map();
    const helper = (in_left, in_right) => {
      // 如果这里没有节点构造二叉树了，就结束
      if (in_left > in_right) {
        return null;
      }

      // 选择 post_idx 位置的元素作为当前子树根节点
      const root_val = postorder[post_idx];
      const root = new TreeNode(root_val);

      // 根据 root 所在位置分成左右两棵子树
      const index = idx_map.get(root_val);

      // 下标减一
      post_idx--;
      // 构造右子树
      root.right = helper(index + 1, in_right);
      // 构造左子树
      root.left = helper(in_left, index - 1);
      return root;
    };

    // 从后序遍历的最后一个元素开始
    post_idx = postorder.length - 1;

    // 建立（元素，下标）键值对的哈希表
    let idx = 0;
    inorder.forEach((val, idx) => {
      idx_map.set(val, idx);
    });

    return helper(0, inorder.length - 1);
  }
}

// export default TreeNode;

module.exports = TreeNode;
