/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let result = 0,
        i = 0,
        basket = new Map();
    for (let j = 0; j < fruits.length; j++) {
        basket.set(fruits[j], 1);
        while (basket.size >= 3) {
            basket.set(basket.get(fruits[i]) - 1);
            if (basket.get(fruits[i]) === 0) {
                basket.delete(fruits[i]);
            }

            result = Math.max(result, j - i + 1);
        }
    }

    return result;
};
// @lc code=end
