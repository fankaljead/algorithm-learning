/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let my = (head, val) => {
        let hair = new ListNode(),
            pre = hair,
            cur = head;

        while (cur) {
            if (cur.val !== val) {
                pre.next = cur;
                pre = pre.next;
            }
            cur = cur.next;
        }
        pre.next = null;

        return hair.next;
    };

    let method2 = (head, val) => {
        const ret = new ListNode(0, head);
        let cur = ret;
        while (cur.next) {
            if (cur.next.val === val) {
                cur.next = cur.next.next;
                continue;
            }
            cur = cur.next;
        }
        return ret.next;
    };

    return my(head, val);
};
// @lc code=end
