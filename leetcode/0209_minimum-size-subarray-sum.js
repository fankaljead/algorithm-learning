/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let result = Number.MAX_VALUE;
    let sum = 0,
        i = 0,
        subLength = 0;
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        while (sum >= s) {
            subLength = i - j + 1;
            result = Math.min(result, subLength);
            sum -= nums[i++];
        }
    }

    return result === Number.MAX_VALUE ? 0 : result;
};
