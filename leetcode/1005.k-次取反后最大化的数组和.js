/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => {
    return Math.abs(b) - Math.abs(a);
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1;
      --k;
    }
  }

  if (k > 0 && k % 2 === 1) {
    nums[nums.length - 1] *= 1;
  }
  k = 0;

  return nums.reduce((a, b) => a + b);
};

var largestSumAfterKNegations2 = function (nums, k) {
  let ans = 0,
    numsM = [];

  nums.map((v) => {
    if (v > 0) {
      ans += v;
    } else if (v < 0) {
      numsM.push(-v);
    }
  });
  if (numsM.length) {
    numsM.sort((a, b) => b - a);

    numsM.map((v) => {
      if (k) {
        ans += v;
        --k;
      }
    });

    if (k % 2 === 1) {
      ans -= numsM[numsM.length - 1];
    }
  } else {
    if (k % 2 === 1) {
      let min = Math.min(...nums);
      ans -= min;
    }
  }

  return ans;
};
// @lc code=end
