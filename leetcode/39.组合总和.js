/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates = candidates.sort((a, b) => a - b);
    let ans = [];

    let find = function (s, use, remain) {
        for (let i = s; i < candidates.length; ++i) {
            let c = candidates[i];
            if (c == remain) {
                let d = [c];
                d.splice(d.length, 0, ...use);
                ans.push(d);
            } else if (c < remain) {
                let d = [c];
                d.splice(d.length, 0, ...use);
                find(i, d, remain - c);
            } else {
                return;
            }
        }
    }

    find(0, [], target);

    return ans;
};

// @lc code=end

var combinationSum1 = function (candidates, target) {
    const ans = [];
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            ans.push(combine);
            return;
        }
        // 直接跳过
        dfs(target, combine, idx + 1);
        // 选择当前数
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }

    dfs(target, [], 0);
    return ans;
};