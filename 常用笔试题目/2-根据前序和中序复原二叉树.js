const TreeNode = require("./TreeNode.js");

// 通过先序和中序 构建二叉树
function test() {
  // const preorder = [3, 9, 20, 15, 7],
  //   inorder = [9, 3, 15, 20, 7];

  // let root = TreeNode.buildTreeFromPreorderInorder(preorder, inorder);

  // console.log(root.toString());

  // console.log(
  //   TreeNode.buildTreeFromPreorderInorder(
  //     "甲乙丙丁戊".split(""),
  //     "乙甲丁丙戊".split("")
  //   ).toString()
  // );

  console.log(
    TreeNode.buildTreeFromInorderPostorder(
      "debac".split(""),
      "dabec".split("")
    ).toString()
  );
  console.log(
    TreeNode.buildTreeFromPreorderInorder(
      "china".split(""),
      "cihan".split("")
    ).toString()
  );
}

test();
