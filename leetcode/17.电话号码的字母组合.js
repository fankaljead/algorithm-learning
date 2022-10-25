/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let pLetterCombinations = (digits) => {
    let trans = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
    };
    let res = [];

    let find = function (digits, index, s) {
      if (index == digits.length) {
        res.push(s);
        return;
      }

      let letters = trans[digits.charAt(index)];
      for (let i = 0; i < letters.length; ++i) {
        arguments.callee(digits, index + 1, s + letters.charAt(i));
      }

      return;
    };

    if (digits == "") {
      return res;
    }

    find(digits, 0, "");

    return res;
  };

  let backtrackingLetterCombinations = (digits = "") => {
    const k = digits.length;
    const map = [
      "",
      "",
      "abc",
      "def",
      "ghi",
      "jkl",
      "mno",
      "pqrs",
      "tuv",
      "wxyz",
    ];
    if (!k) {
      return [];
    }
    const res = [],
      path = [];

    function backtracking(n, k, a) {
      if (path.length === k) {
        res.push(path.join(""));
        return;
      }
      for (const v of map[n[a]]) {
        path.push(v);
        arguments.callee(n, k, a + 1);
        path.pop();
      }
    }

    backtracking(digits, k, 0);

    return res;
  };

  return backtrackingLetterCombinations(digits);
};
// @lc code=end
