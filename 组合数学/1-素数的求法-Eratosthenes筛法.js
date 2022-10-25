/*
 * @Author: Zhou Xianghui
 * @Date: 2022-09-17 21:00:10
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-09-17 21:35:47
 * @FilePath: \算法\组合数学\1-素数的求法-Eratosthenes筛法.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
// 1、 要求出不超过 n 的一切素数,只须把不超过 sqrt(n) 的素数的倍数划去即可.
// 2、 要划掉素数 p 的倍数,可以从 p**2 开始划起,因对于每一个小于 p**2 的合数 a,
//  它的最小素因数 <= sqrt(q) < p, 因而在之前已被划掉了.
/**
 * 寻找不大于 n 的所有素数
 * @param {number} n 不大于 n 的正整数
 * @returns {number[]} 不大于 n 的 素数
 */
function findPrimeNumber(n = 100) {
  let nums = Array.from({ length: n + 1 }, (_, index) => index);

  for (let i = 2; i < nums.length; ++i) {
    const num = nums[i];
    if (num !== 0) {
      for (let j = num ** 2; j <= n; j += num) {
        // 将所有非素数标记为 0
        nums[j] = 0;
      }
    }
  }
  return nums.slice(2).filter((num) => num !== 0);
}

/**
 * 判断正整数 n 是否为素数
 * 对于所有小于 sqrt(n) 的素数，都不能整除 n，则 n 为素数
 * @param {number} n 判断 n 是否为素数
 * @returns {boolean}
 */
function isPrime(n = 137) {
  let primes = findPrimeNumber(Math.ceil(Math.sqrt(n)));

  for (const prime of primes) {
    if (n % prime === 0) {
      return false;
    }
  }

  return true;
}

console.log(findPrimeNumber(137));
console.log(isPrime(137));
