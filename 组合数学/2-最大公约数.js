/**
 * 使用 广义欧几里得除法 求 两个正整数的最大公约数
 * 辗转相除法
 * @param {number} a 正整数 a
 * @param {number} b 正整数 b
 * @return {number} 返回 a 和 b 的最大公约数
 */
function gcd(a = 100, b = 24) {
  [a, b] = [Math.abs(a), Math.abs(b)];
  [a, b] = [Math.max(a, b), Math.min(a, b)];

  while (a > b) {
    if (a % b) {
      [a, b] = [b, a % b];
    } else {
      return b;
    }
  }

  return 1;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function findGcdST(a = 737, b = 635) {
  let flag = true;
  if (a < b) {
    flag = false;
  }

  let s = [1, 0],
    t = [0, 1];

  [a, b] = [Math.abs(a), Math.abs(b)];
  [a, b] = [Math.max(a, b), Math.min(a, b)];

  let q = [1];
  while (b !== 0) {
    q.push(Math.floor(a / b));
    if (a % b) {
      [a, b] = [b, a % b];
    } else {
      [a, b] = [b, a % b];
    }
  }

  for (let i = 2; i < q.length; ++i) {
    s[i] = s[i - 2] - q[i - 1] * s[i - 1];
    t[i] = t[i - 2] - q[i - 1] * t[i - 1];
  }

  if (flag) {
    return [a, s[s.length - 1], t[t.length - 1]];
  } else {
    return [a, t[t.length - 1], s[s.length - 1]];
  }
}

// console.log(gcd(1000, 248));
// console.log(gcd(1000, 250));
// console.log(gcd(100, 250));
// console.log(gcd(101, 250));
// console.log(gcd(130, -250));
// console.log(gcd(-1859, 1573));
// console.log(gcd(46480, 39423));
console.log(findGcdST());
console.log(findGcdST(100, 24));
console.log(findGcdST(666, 1414));
console.log(findGcdST(20785, 44350));
console.log(findGcdST(1613, 3589));
console.log(findGcdST(20041, 37516));
