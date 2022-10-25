/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length <= 1) {
    return duration * timeSeries.length;
  }
  let time = 0;

  for (let i = 1; i < timeSeries.length; i++) {
    // for (
    //   let j = 0;
    //   j < timeSeries[i] - timeSeries[i - 1] && j < duration;
    //   j++
    // ) {
    //   time++;
    // }
    time += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
  }
  time += duration;

  return time;
};
// @lc code=end
