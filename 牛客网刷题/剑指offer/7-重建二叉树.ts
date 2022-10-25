class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param pre int整型一维数组
 * @param vin int整型一维数组
 * @return TreeNode类
 */
export function reConstructBinaryTree(pre: number[], vin: number[]): TreeNode {
  // write code here

  let index = new Map<number, number>();
  for (let i = 0; i < vin.length; i++) {
    index.set(vin[i], i);
  }

  function reConstructBinaryTreeInside(
    pre: number[],
    vin: number[],
    pl: number,
    pr: number,
    vl: number,
    vr: number
  ): TreeNode {
    if (pl > pr) return null;

    let p_root = pl;
    let v_root = index.get(pre[p_root]);

    let root = new TreeNode(pre[p_root]);

    let size_left_subtree = v_root - vl;

    root.left = arguments.callee(
      pre,
      vin,
      pl + 1,
      pl + size_left_subtree,
      vl,
      v_root - 1
    );

    root.right = arguments.callee(
      pre,
      vin,
      pl + size_left_subtree + 1,
      pr,
      v_root + 1,
      vr
    );

    return root;
  }

  return reConstructBinaryTreeInside(
    pre,
    vin,
    0,
    pre.length - 1,
    0,
    vin.length - 1
  );
}
