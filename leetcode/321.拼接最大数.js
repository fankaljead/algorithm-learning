/*
 * @lc app=leetcode.cn id=321 lang=javascript
 *
 * [321] 拼接最大数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  const findMax = (nums = [], start = 0, end = nums.length) => {
    let maxIndex = start;

    for (let i = start + 1; i < end; ++i) {
      if (nums[maxIndex] < nums[i]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  };
  const m = nums1.length,
    n = nums2.length;
  let count = 1,
    res = [];
  for (let i = 0, j = 0; count <= k; ) {
    let max1 = findMax(nums1, i),
      max2 = findMax(nums2, j);

    let max = 0;
    if (nums1[max1] > nums2[max2]) {
      max = nums1[max1];
      i=max;
      if (m - max2 + n - j < k - count) {
        max = nums2[max2];
        i--;
        j++;
      }
      res.push(max);
      count++;
    } else {
      max = nums2[max2];
      j++;
      if (m - max1 + m - i < k - count) {
        max = nums1[max1];
        j--;
        i++;
      }
      res.push(max);
      count++;
    }
  }

  return res;
};
// @lc code=end
