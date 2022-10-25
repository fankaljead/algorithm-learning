class DisjointSet {
  constructor() {
    this.father = new Map();
  }
  add(x) {
    if (!this.father.has(x)) {
      this.father.set(x, x);
    }
  }

  find2(x) {
    let root = x;
    while (this.father.get(root)) {
      root = this.father.get(root);
    }
    return root;
  }

  merge(x, y) {
    let rootX = this.find(x),
      rootY = this.find(y);
    if (rootX !== rootY) {
      this.father.set(rootX, rootY);
    }
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }

  find(x) {
    let root = x;
    while (this.father.get(root)) {
      root = this.father.get(root);
    }
    while (x !== root) {
      let originalFather = this.father.get(x);
      this.father.set(x, root);
      x = originalFather;
    }

    return root;
  }
}

class UnionFind {
  constructor() {
    this.father = new Map();
    this.numOfSets = 0;
  }
  add(x) {
    if (!this.father.has(x)) {
      this.father.set(x, x);
      this.numOfSets++;
    }
  }

  find2(x) {
    let root = x;
    while (this.father.get(root)) {
      root = this.father.get(root);
    }
    return root;
  }

  merge(x, y) {
    let rootX = this.find(x),
      rootY = this.find(y);
    if (rootX !== rootY) {
      this.father.set(rootX, rootY);
      this.numOfSets--;
    }
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }

  find(x) {
    let root = x;
    while (this.father.get(root)) {
      root = this.father.get(root);
    }
    while (x !== root) {
      let originalFather = this.father.get(x);
      this.father.set(x, root);
      x = originalFather;
    }

    return root;
  }
}
