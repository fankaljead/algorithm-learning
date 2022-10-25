const MAXN = 1000;

let fa = new Array(MAXN);
// 记录每个根节点对应数的深度，或者以他为根节点的子树的深度
let rank = new Array(MAXN).fill(1);

function makeSet(size = 10) {
  for (let i = 0; i < size; ++i) {
    fa[i] = i;
  }
  return;
}

// 要判断两个元素是否属于同一个集合，只需要看它们的根节点是否相同即可
function find(x = 1) {
  if (fa[x] === x) {
    return x;
  } else {
    return find(fa[x]);
  }
}

function find2(x = 1) {
  while (x !== fa[x]) {
    x = fa[x];
  }
  return x;
}

// 路径压缩 在查询的过程中，把沿途的每个节点的父节点都设为根节点
function find3(x = 1) {
  if (x !== fa[x]) {
    fa[x] = find3(fa[x]);
  }
  return fa[x];
}

function find4(x = 1) {
  return x === fa[x] ? x : (fa[x] = find3(fa[x]));
}

// 合并 合并操作也是很简单的，先找到两个集合的代表元素，然后将前者的父节点设为后者即可
function merge(x = 1, y = 2) {
  x = find(x);
  y = find(y);
  fa[x] = y;
}

function init(n = 1) {
  for (let i = 1; i <= n; ++i) {
    fa[i] = i;
    rank[i] = 1;
  }
}

function merge(i = 0, j = 0) {
  let x = find(i),
    y = find(j);

  if (rank[x] <= rank[y]) {
    fa[x] = y;
  } else {
    fa[y] = x;
  }

  if (rank[x] === rank[y] && x !== y) {
    rank[y]++;
  }
}
