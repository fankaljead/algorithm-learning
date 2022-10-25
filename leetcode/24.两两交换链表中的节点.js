/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let sOdd = []; // 存储第 奇数 个节点
    let sEven = []; // 存储第 偶数 个节点

    let res = new ListNode();
    let cur = res;

    let isOdd = (n) => n % 2 == 1;

    let count = 1;
    while (head) {
        if (isOdd(count)) {
            sOdd.push(head);
        } else {
            sEven.push(head);
        }
        head = head.next;
        count++;
    }

    let i = 0;
    let j = 0;

    // 偶数个节点先出，奇数后出
    while (i < sEven.length && j < sOdd.length) {
        if (i <= j) {
            cur.next = sEven[i];
            i++;
        } else {
            cur.next = sOdd[j];
            j++;
        }
        cur = cur.next;
    }

    // 剩下的奇数节点
    while (j < sOdd.length) {
        cur.next = sOdd[j];
        cur = cur.next;
        j++;
    }
    cur.next = null;

    return res.next;
};
// @lc code=end
