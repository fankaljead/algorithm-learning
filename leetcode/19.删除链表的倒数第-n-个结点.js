/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let stackRemoveNthFromEnd = (head, n) => {
        let cur = head;
        let s = [];
        let pre = null;
        while (cur) {
            s.push(cur);
            if (cur.next && s.length >= n) {
                pre = s.splice(0, 1)[0];
            }

            cur = cur.next;
        }

        for (let i = 0; i < n - 1; ++i) {
            s[i].val = s[i + 1].val;
        }
        if (n == 1) {
            if (pre) {
                pre.next = null;
            } else {
                return null;
            }
        } else {
            s[n - 2].next = null;
        }

        return head;
    };

    let dpRemoveNthFromEnd = (head, n) => {
        let ret = new ListNode(0, head),
            slow = (fast = ret);
        while (n--) {
            fast = fast.next;
        }
        if (!fast) {
            return ret.next;
        }
        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return ret.next;
    };

    return dpRemoveNthFromEnd(head, n);
};
// @lc code=end
