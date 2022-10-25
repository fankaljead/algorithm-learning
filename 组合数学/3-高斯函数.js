// 高斯函数 [x] 和 {x}
// [x] 表示小于或等于 x 的最大整数
// {x} = x - [x]
// 性质
// 1. x = [x] + {x}
// 2. [x] <= x < [] + 1
//    x - 1 < [x] <= x
//    0 <= {x} < 1
// 3. [n + x] = n + [x]，n 是整数
// 4. [x] + [y] <= [x + y]
//    {x} + {y} >= {x + y}


/**
 * 获取一个数的整数部分和小数部分
 * x = {x} + [x]
 * @param {number} x
 * @returns {[number, number]}
 */
function gauss(x = 1.1) {
  const integer = Math.floor(x);
  const decimal = x - integer;

  return [integer, decimal];
}

console.log(gauss(Math.PI));
console.log(gauss(-Math.PI));
console.log(gauss(2 / 3));
console.log(gauss(-3 / 5));
console.log(gauss(3 / 5));
