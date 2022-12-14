/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let res = new ListNode();
    let cur = res;

    let i = l1,
        j = l2;

    while (i && j) {
        if (i.val > j.val) {
            cur.next = j;
            cur = cur.next;
            j = j.next;
        } else {
            cur.next = i;
            cur = cur.next;
            i = i.next;
        }
    }

    if (i) {
        cur.next = i;
    }

    if (j) {
        cur.next = j;
    }

    return res.next;
};
// @lc code=end
