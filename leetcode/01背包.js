// 1. 01背包问题
function testWeightBagProblem(weight = [], value = [], size = 0) {
  const len = weight.length;
  // 生成 weight.length + 1 x size+1 大小的 dp 数组 默认值为 0
  const dp = Array.from({ length: len + 1 }).map(() => Array(size + 1).fill(0));

  for (let i = 1; i <= len; ++i) {
    for (let j = 0; j <= size; ++j) {
      // 判断当前物品是否能放进背包
      if (weight[i - 1] <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          value[i - 1] + dp[i - 1][j - weight[i - 1]]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  console.table(dp);

  return dp[len][size];
}

function testWeightBagProblem2(weight = [], value = [], size = 0) {
  const len = weight.length;
  const dp = Array(size + 1).fill(0);
  for (let i = 1; i <= len; ++i) {
    for (let j = size; j >= weight[i - 1]; --j) {
      dp[j] = Math.max(dp[j], value[i - 1] + dp[j - weight[i - 1]]);
    }
  }
  return dp[size];
}

function test() {
  console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
  // dp
  // ┌─────────┬───┬────┬────┬────┬────┬────┬────┐
  // │ (index) │ 0 │ 1  │ 2  │ 3  │ 4  │ 5  │ 6  │
  // ├─────────┼───┼────┼────┼────┼────┼────┼────┤
  // │    0    │ 0 │ 0  │ 0  │ 0  │ 0  │ 0  │ 0  │
  // │    1    │ 0 │ 15 │ 15 │ 15 │ 15 │ 15 │ 15 │
  // │    2    │ 0 │ 15 │ 15 │ 20 │ 35 │ 35 │ 35 │
  // │    3    │ 0 │ 15 │ 15 │ 20 │ 35 │ 45 │ 45 │
  // │    4    │ 0 │ 15 │ 15 │ 20 │ 35 │ 55 │ 70 │
  // └─────────┴───┴────┴────┴────┴────┴────┴────┘
}

test();
