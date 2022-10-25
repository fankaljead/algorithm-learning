// 前缀树 Trie
class Trie {
  constructor() {
    this.children = {};
  }
  insert(word) {
    let node = this.children;
    for (const ch of word) {
      if (!node[ch]) {
        node[ch] = {};
      }
      node = node[ch];
    }

    node.isEnd = true;
  }

  searchPrefix(prefix) {
    let node = this.children;
    for (const ch of prefix) {
      if (!node[ch]) {
        return false;
      }
      node = node[ch];
    }

    return node;
  }

  search(word) {
    const node = this.searchPrefix(word);

    return node !== undefined && node.isEnd !== undefined;
  }
}

let tree = new Trie();
let input = [
  "Trie",
  "insert",
  "search",
  "search",
  "startsWith",
  "insert",
  "search",
];
input.forEach((word) => tree.insert(word));

console.log(tree);

let search = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];
search.forEach((word) => {
  console.log(tree.search(word));
});
