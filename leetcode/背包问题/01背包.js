// 01 背包
// n 物品总数
// W 背包容量
// weight=[] 每个物品重量
// value=[] 每个物品价值
// 输出最大价值

// 使用 二维数组 dp
/**
 *
 * @param {number} n 物品数量
 * @param {number} w 背包容量
 * @param {number[]} weight 物品重量
 * @param {number[]} value 物品价值
 * @param {boolean} wFirst 先遍历容量
 * @returns {number} 能够容纳最大价值
 */
function zeroOneBack1(
  n = 3,
  w = 4,
  weight = [1, 3, 4],
  value = [15, 20, 30],
  wFirst = true
) {
  // dp[i][j] 表示前i个物品任选，背包容量为j的最大价值
  let dp = Array.from({ length: n }, () => new Array(w + 1).fill(0));
  dp[0].fill(value[0], weight[0]);

  // 先遍历容量，再遍历物品
  if (wFirst) {
    for (let i = 1; i < n; ++i) {
      for (let j = 0; j <= w; ++j) {
        // 当前背包容量放不下 i 物品时
        if (j < weight[i]) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = Math.max(
            dp[i - 1][j],
            dp[i - 1][j - weight[i]] + value[i]
          );
        }
      }
    }
  } else {
    // 先遍历物品，再遍历容量
    for (let j = 0; j <= w; ++j) {
      for (let i = 1; i < n; ++i) {
        if (j < weight[i]) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = Math.max(
            dp[i - 1][j],
            dp[i - 1][j - weight[i]] + value[i]
          );
        }
      }
    }
  }

  return dp[n - 1][w];
}

// 使用 一维 dp
/**
 *
 * @param {number} n 物品数量
 * @param {number} w 背包容量
 * @param {number[]} weight 物品重量
 * @param {number[]} value 物品价值
 * @returns {number} 能够容纳最大价值
 */
function zeroOneBack2(n = 3, w = 4, weight = [1, 3, 4], value = [15, 20, 30]) {
  let dp = new Array(w + 1).fill(0);

  for (let i = 0; i < n; ++i) {
    // 倒序遍历是为了保证物品i只被放入一次
    for (let j = w; j >= weight[i]; --j) {
      // dp[j] 相当于不放入 i 物品时，即和不放入 i 物品和放入 i 物品比较价值
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }

  return dp[w];
}

console.log(zeroOneBack1());
console.log(
  zeroOneBack2(6, 30, [8, 11, 14, 5, 9, 5], [20, 15, 40, 10, 25, 30])
);
