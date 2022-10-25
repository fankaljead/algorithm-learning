function solve() {
  // let n = parseInt(readline());
  let n = 40;
  let dp = new Array(n + 1).fill(0);
  (dp[0] = 0), (dp[1] = 1);
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  // print(a[n]);
  console.log(dp);
}

function solve() {
  let n = parseInt(readline());
  let dp = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811,
    514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352,
    24157817, 39088169, 63245986, 102334155,
  ];
  print(dp[n]);
}

solve();
