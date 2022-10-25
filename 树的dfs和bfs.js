class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }

  static dfs(head) {
    if (!head) {
      return;
    }
    // process 处理节点
    ddfs(head.left);
    ddfs(head.right);
  }

  static dfsWithStack(head) {
    if (!head) {
      return;
    }
    const stack = [];
    stack.push(head);
    while (stack.length > 0) {
      const cur = stack.pop();
      // 处理节点
      console.log(cur.val);
      if (cur.right) {
        stack.push(cur.right);
      }
      if (cur.left) {
        stack.push(cur.left);
      }
    }
  }

  static bfs(head) {
    if (!head) {
      return;
    }
    const queue = [];
    queue.push(head);
    while (queue.length > 0) {
      const cur = queue.shift();
      // 处理节点
      console.log(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }

  static bfs(start, target) {
    let queue = [];
    let visited = [];
    queue.push(start);
    let step = 0;

    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; ++i) {
        const cur = queue.shift();
        if (cur === target) {
          return step;
        }
        for (let j = 0; j < cur.neighbors.length; ++j) {
          const neighbor = cur.neighbors[j];
          if (!visited.includes(neighbor)) {
            visited.push(neighbor);
            queue.push(neighbor);
          }
        }
      }
      step++;
    }
  }
}
