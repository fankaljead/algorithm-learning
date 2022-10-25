/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let r = 0,
    m = nums1.length,
    n = nums2.length;
  let l = Math.floor((m + n + 1) / 2);
  for (let i = 0, j = 0; i + j <= l; ) {
    if (nums1[i] <= nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return r;
};
// @lc code=end
