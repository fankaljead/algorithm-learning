/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const sLen = s.length,
    pLen = p.length;

  if (sLen < pLen) {
    return [];
  }

  const ans = [],
    a = "a".charCodeAt(),
    count = new Array(26).fill(0);

  for (let i = 0; i < pLen; ++i) {
    ++count[s[i].charCodeAt() - a];
    --count[p[i].charCodeAt() - a];
  }

  let differ = 0;
  for (let j = 0; j < 26; ++j) {
    if (count[j] !== 0) {
      ++differ;
    }
  }

  if (differ === 0) {
    ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
    if (count[s[i].charCodeAt() - a] === 1) {
      --differ;
    } else if (count[s[i].charCodeAt() - a] === 0) {
      ++differ;
    }
    --count[s[i].charCodeAt() - a];
    if (count[s[i + pLen].charCodeAt() - a] === -1) {
      --differ;
    } else if (count[s[i + pLen].charCodeAt() - a] === 0) {
      ++differ;
    }
    ++count[s[i + pLen].charCodeAt() - a];
    if (differ === 0) {
      ans.push(i + 1);
    }
  }

  return ans;
};

var findAnagrams2 = function (s, p) {
  const sLen = s.length,
    pLen = p.length;

  if (sLen < pLen) {
    return [];
  }

  const ans = [],
    sCount = new Array(26).fill(0),
    pCount = new Array(26).fill(0);

  for (let i = 0; i < pLen; ++i) {
    ++sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++pCount[p[i].charCodeAt() - "a".charCodeAt()];
  }

  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
    --sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++sCount[s[i + pLen].charCodeAt() - "a".charCodeAt()];
    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1);
    }
  }

  return ans;
};
// @lc code=end
