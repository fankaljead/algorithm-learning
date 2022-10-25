const max = Math.max;
const min = Math.min;
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
const readArray = () => {
  const line = readline();
  return line.split(" ").map(Number);
};
const readInt = () => {
  return parseInt(readline());
};
Array.prototype.accendSort = function () {
  return this.sort((a, b) => a - b);
};
Array.prototype.descendSort = function () {
  return this.sort((a, b) => b - a);
};

const N = 1e6;
function solve() {
  let n = readInt();
  let arr = readArray();
  let pre_max = arr[0],
    pre_min = arr[0];
  let ans = arr[0];
  for (let i = 1; i < n; i++) {
    let cur_max = Math.max(pre_max * arr[i], pre_min * arr[i], arr[i]);
    let cur_min = Math.min(pre_max * arr[i], pre_min * arr[i], arr[i]);
    ans = Math.max(ans, cur_max);
    pre_max = cur_max;
    pre_min = cur_min;
  }
  console.log(ans);
}
solve();
