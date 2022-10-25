/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = function (s, words) {
    let res = [];

    let ww = words[0].length;
    let wsl = ww * words.length;

    for (let i = 0; i < s.length - wsl; i++) {
        let arr = [];
        let sub = s.substring(i, i + wsl);
        let start = 0;
        for (let j = 0; j < words.length; ) {
            start = sub.indexOf(words[j], start);
            if (start >= 0) {
                if (arr.includes(start)) {
                    start += ww;
                    continue;
                } else {
                    arr.push(start);
                    start = 0;
                    j++;
                }
            } else {
                // i += j * ww;
                break;
            }
        }
        if (arr.length == words.length) {
            res.push(i);
        }
    }

    return res;
};

var findSubstring3 = function (s, words) {
    let res = [];
    let wordsn = words.length * words[0].length;

    // 无法应对 words 中有相同的
    for (let i = 0; i < s.length - wordsn; ) {
        let sub = s.substring(i, i + wordsn);
        let arr = [];
        for (let j = 0; j < words.length; ) {
            let index = sub.indexOf(words[j], j);
            if (index >= 0) {
                arr.push(i + index);
                j += words[0].length;
            } else {
                break;
            }
        }
        if (arr.length === words.length) {
            res.push(i);
            i += words[0].length;
        }
    }

    return res;
};
var findSubstring2 = function (s, words) {
    let res = [];
    let wordsn = words.length * words[0].length;

    // 无法应对 words 中有相同的
    for (let i = 0; i < s.length - wordsn; ) {
        let sub = s.substring(i, i + wordsn);
        let map = new Map();
        for (let j = 0; j < words.length; ) {
            let set = null;
            if (map.has(words[j])) {
                set = map.get(words[j]);
            } else {
                set = new Set();
                map.set(words[j], set);
            }

            let index = sub.indexOf(words[j], j);
            if (index >= 0) {
                set.add(index);
                j += words[0].length;
            } else {
                break;
            }
        }
        let mapn = 0;
        map.forEach((set) => (mapn += set.size));
        if (mapn === words.length) {
            res.push(i);
            i += words[0].length;
        }
    }

    return res;
};
// @lc code=end
