/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  let tx = Math.abs(x);
  let abs = x > 0 ? true : false;

  let i = new String(Math.abs(x)).length - 1;
  while (i >= 0) {
    result += (tx % 10) * 10 ** i;
    tx = Math.floor(tx / 10);
    --i;
  }

  if (!abs) {
    result *= -1;
  }

  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }

  return result;
};
