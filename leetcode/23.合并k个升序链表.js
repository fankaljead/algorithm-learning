/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let r = lists[0];
    let mergeTwoLists = function (l1, l2) {
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

    for (let i = 1; i < lists.length; ++i) {
        r = mergeKLists(r, lists[i]);
    }

    return r;
};
// @lc code=end

var mergeKListsPre = function (lists) {
    let r = new ListNode();
    let l = r;
    let minI = 0;

    while (lists.length > 1) {
        minI = 0;
        for (let i = 1; i < lists.length; ++i) {
            if (lists[minI].val > lists[i].val) {
                minI = i;
            }
        }

        l.val = lists[minI].val;
        l.next = new ListNode();
        l = l.next;

        if (lists[minI].next) {
            lists[minI] = lists[minI].next;
        } else {
            lists.splice(minI, 1);
        }
    }

    // l = lists[0];
    if (lists.length > 0) {
        l.val = lists[0].val;
        l.next = lists[0].next;
    } else if (lists.length == 0) {
        return null;
    }

    return r;
};
