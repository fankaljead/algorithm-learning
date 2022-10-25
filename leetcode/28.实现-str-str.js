/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // return haystack.indexOf(needle); // ooops :)

    let violentMatch = (haystack, needle) => {
        const n = haystack.length,
            m = needle.length;
        for (let i = 0; i + m <= n; i++) {
            let flag = true;
            for (let j = 0; j < m; j++) {
                if (haystack[i + j] != needle[j]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return i;
            }
        }
        return -1;
    };

    let kmpMatch = (haystack, needle) => {
        const n = haystack.length,
            m = needle.length;
        if (m === 0) {
            return 0;
        }
        const pi = new Array(m).fill(0);
        for (let i = 1, j = 0; i < m; i++) {
            while (j > 0 && needle[i] !== needle[j]) {
                j = pi[j - 1];
            }
            if (needle[i] == needle[j]) {
                j++;
            }
            pi[i] = j;
        }
        for (let i = 0, j = 0; i < n; i++) {
            while (j > 0 && haystack[i] != needle[j]) {
                j = pi[j - 1];
            }
            if (haystack[i] == needle[j]) {
                j++;
            }
            if (j === m) {
                return i - m + 1;
            }
        }
        return -1;
    };

    return kmpMatch(haystack, needle);
};
// @lc code=end
