// 节点类
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 插入数据
  insert(key) {
    const newNode = new Node(key);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, node) {
    if (node.key < root.key) {
      if (!root.left) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (!root.right) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  preorderTraversal() {
    const result = [];
    this.preorderTraversalNode(this.root, result);
    return result;
  }

  preorderTraversalNode(node, result) {
    if (!node) {
      return result;
    }
    result.push(node.key);
    this.preorderTraversalNode(node.left, result);
    this.preorderTraversalNode(node.right, result);
  }

  inorderTraversal() {
    const result = [];
    this.inorderTraversalNode(this.root, result);
    return result;
  }

  inorderTraversalNode(node, result) {
    if (!node) {
      return result;
    }
    this.inorderTraversalNode(node.left, result);
    result.push(node.key);
    this.inorderTraversalNode(node.right, result);
  }

  postorderTraversal() {
    const result = [];
    this.postorderTraversalNode(this.root, result);
    return result;
  }

  postorderTraversalNode(node, result) {
    if (!node) {
      return result;
    }
    this.postorderTraversalNode(this.left, result);
    this.postorderTraversalNode(this.right, result);
    result.push(node.key);
  }

  min() {
    if (!this.root) {
      return null;
    }
    let node = this.root;
    while (!node.left) {
      node = node.left;
    }

    return node.key;
  }

  max() {
    if (!this.root) {
      return null;
    }
    let node = this.root;
    while (!node.right) {
      node = node.right;
    }

    return node.key;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (!node) {
      return false;
    }

    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  remove(key) {
    let currentNode = this.node,
      parentNode = null,
      isLeftChild = true;

    while (currentNode.key !== key) {
      parentNode = currentNode;

      if (key < currentNode.key) {
        isLeftChild = true;
        currentNode = currentNode.left;
      } else {
        isLeftChild = false;
        currentNode = currentNode.right;
      }

      if (!currentNode) {
        return false;
      }
    }

    if (!currentNode.left && !currentNode.right) {
      if (currentNode === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    } else if (!currentNode.right) {
      if (currentNode === this.root) {
        this.root = currentNode.left;
      } else if (isLeftChild) {
        parentNode.left = currentNode.left;
      } else {
        parentNode.right = currentNode.right;
      }
    } else if (!currentNode.left) {
      if (currentNode === this.root) {
        this.root = currentNode.right;
      } else if (isLeftChild) {
        parentNode.left = currentNode.right;
      } else {
        parentNode.right = currentNode.right;
      }
    } else {
      let successor = this.getSuccessor(currentNode);

      if (currentNode === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parentNode.left = successor;
      } else {
        parentNode.right = successor;
      }

      successor.left = currentNode.left;
    }
  }

  getSuccessor(delNode) {
    let successor = delNode,
      current = delNode.right,
      successorParent = delNode;

    while (!current) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    if (successor !== delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }

    return successor;
  }
}
