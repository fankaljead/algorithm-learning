function backpack01Two(
  bagWeight = 4,
  weight = [1, 3, 4],
  values = [15, 20, 30]
) {
  let dp = Array.from({ length: weight.length }, () =>
    new Array(bagWeight + 1).fill(0)
  );
  dp[0].fill(values[0], weight[0]);

  for (let i = 1; i < weight.length; ++i) {
    for (let j = 0; j <= bagWeight; ++j) {
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + values[i]);
      }
    }
  }

  console.log(dp);
}

function backpack01One(
  bagWeight = 4,
  weight = [1, 3, 4],
  values = [15, 20, 30]
) {
  let dp = new Array(bagWeight + 1).fill(0);

  for (let i = 0; i < weight.length; ++i) {
    for (let j = bagWeight; j >= weight[i]; --j) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + values[i]);
    }
  }

  console.log(dp);

  return dp[bagWeight];
}

backpack01One();
