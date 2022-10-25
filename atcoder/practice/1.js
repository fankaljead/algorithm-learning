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
Array.prototype.accendSort = function () {
  return this.sort((a, b) => a - b);
};
Array.prototype.descendSort = function () {
  return this.sort((a, b) => b - a);
};

const N = 1e6;
function solve() {}
solve();
