/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let cal = (s1 = 0, s2 = 0, op = "+") => {
    if (op === "+") {
      return s1 + s2;
    }
    if (op === "-") {
      return s1 - s2;
    }
    if (op === "*") {
      return s1 * s2;
    }
    if (op === "/") {
      return ~~(s1 / s2);
    }
    return 0;
  };
  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      let s1 = stack.pop();
      let s2 = stack.pop();
      stack.push(cal(s2, s1, token));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
};
// @lc code=end
