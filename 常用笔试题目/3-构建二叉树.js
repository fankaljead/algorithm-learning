const TreeNode = require("./TreeNode.js");

function test() {
  const arr = [1, null, 2, 3];

  let root = TreeNode.buildTreeFromArray(arr);

  console.log(root.toString());

  console.log(TreeNode.buildTreeFromArray([1, null, 2]).toString());
}

test();
