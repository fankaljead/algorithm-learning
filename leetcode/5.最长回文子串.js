/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 动态规划法
  let dynamicLongestPalindrome = function (s) {
    let len = s.length;
    if (len < 2) {
      return s;
    }

    let maxLen = 1;
    let begin = 0;

    let dp = Array.from(Array(len)).map(() => new Array(len));
    for (let i = 0; i < len; i++) {
      dp[i][i] = true;
    }

    for (let L = 2; L <= len; L++) {
      for (let i = 0; i < len; i++) {
        let j = L + i - 1;
        if (j >= len) {
          break;
        }
        if (s.charAt(i) == s.charAt[j]) {
          if (j - i < 3) {
            dp[i][j] = true;
          } else {
            dp[i][j] = dp[i + 1][j - 1];
          }
        }
        if (dp[i][j] && j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          begin = i;
        }
      }
    }

    return s.substring(begin, begin + maxLen);
  };

  // 暴力破解法
  let bfLongestPalindrome = (s = "") => {
    if (s.length <= 0) {
      return "";
    }

    if (s.length == 1) {
      return s;
    }
    let max = 1;

    let isPalindrome = (s = "") => {
      for (let i = 0, j = s.length - 1; i <= j; ++i, --j) {
        if (s.charAt(i) != s.charAt(j)) {
          return false;
        }
      }
      return true;
    };

    let start = 0;
    for (let i = 2; i <= s.length; i++) {
      for (let j = 0; j < s.length - i + 1; j++) {
        let sub = s.substring(j, j + i);
        if (isPalindrome(sub) && max < i) {
          start = j;
          max = i;
        }
      }
    }

    return s.substring(start, start + max);
  };

  // 中心扩展法
  let centerExpandLongestPalindrome = (s = "") => {
    if (s.length == 1) {
      return s;
    }

    let gap = [0, 0];
    let calGap = (t1, t2) => {
      return t2[1] - t2[0] > t1[1] - t1[0] ? t2 : t1;
    };

    let expand = (s = "", left, right) => {
      while (
        left >= 0 &&
        right < s.length &&
        s.charAt(left) == s.charAt(right)
      ) {
        left--;
        right++;
      }
      return [left + 1, right - 1];
    };

    for (let i = 0; i < s.length; i++) {
      // odd
      let t1 = expand(s, i, i);
      // even
      let t2 = expand(s, i, i + 1);

      gap = calGap(calGap(t1, t2), gap);
    }

    return s.substring(gap[0], gap[1] + 1);
  };

  return centerExpandLongestPalindrome(s);
};
// @lc code=end
