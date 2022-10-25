/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function (head, k) {
    if (k === 1) {
        return head;
    }

    let hair = {
        next: null,
        tail: null,
    };

    let hairInsert = (hair, node) => {
        if (!hair.next) {
            hair.next = node;
            hair.tail = node;
            let temp = node.next;
            node.next = null;
            return temp;
        }

        let hairNext = hair.next;
        let nodeNext = node.next;
        hair.next = node;
        node.next = hairNext;

        return nodeNext;
    };

    let count = 1,
        cur = head,
        first = new ListNode(),
        curP = first,
        curN = cur;

    while (cur) {
        if (count < k) {
            curN = hairInsert(hair, cur);
            console.log("hair:", hair);
            if (!curN) {
                break;
            }
            count++;
            cur = curN;
        }

        if (count === k) {
            curN = hairInsert(hair, cur);
            if (!curN) {
                curP.next = hair.next;
                break;
            }
            curP.next = hair.next;
            hair.next = null;
            cur = curN;
            curP = hair.tail;
            hair.tail = null;
            count = 1;
        }
    }

    if (count < k) {
        cur = hair.next;
        hair.tail = cur;
        hair.next = null;

        while (count >= 0) {
            curN = hairInsert(hair, cur);
            count--;
            if (!curN) {
                break;
            } else {
                cur = curN;
            }
        }
        hair.tail.next = null;
        curP.next = hair.next;
    }

    return first.next;
};

var reverseKGroup2 = function (head, k) {
    let headInsert = (head, node) => {
        if (!head.next) {
            head.next = node;
            let temp = node.next;
            node.next = null;
            return temp;
        }

        let headNext = head.next;
        let nodeNext = node.next;
        head.next = node;
        node.next = headNext;

        return nodeNext;
    };

    let count = 1,
        hair = new ListNode(),
        first = new ListNode();
    (cur = head), (curP = first), (curN = cur), (tail = head);

    while (cur) {
        console.log("curP:", curP);
        // console.log("hair:", hair);
        if (count == 1) {
            tail = cur;
        }

        if (count < k) {
            console.log("cur:", cur);
            curN = headInsert(hair, cur);
            count++;
            cur = curN;
        } else {
            let temp = cur; // 保存上一个的结尾
            curN = headInsert(hair, cur);
            console.log("hair:", hair);
            curP.next = hair.next;
            // cur = curN;
            if (!curN) {
                curP = tail;
                tail.next = null;
                break;
            } else {
                cur = curN;
            }
            count = 1;
            hair.next = null;

            curP = temp;
        }
    }
    // console.log("hair:", hair);
    console.log("tail:", tail);
    // console.log("curP:", curP);
    // console.log("first:", first);
    if (count < k) {
        cur = hair.next;
        hair.next = null;
        let last = cur;
        while (count) {
            if (count === 1) {
                last.next = null;
            }
            cur = headInsert(hair, cur);
            count--;
        }
        curP.next = hair.next;
    } else {
        curP.next = null;
    }

    // cur.next = null;

    return first.next;
};

// 官方
//  const myReverse = (head, tail) => {
//     let prev = tail.next;
//     let p = head;
//     while (prev !== tail) {
//         const nex = p.next;
//         p.next = prev;
//         prev = p;
//         p = nex;
//     }
//     return [tail, head];
// }
// var reverseKGroup = function(head, k) {
//     const hair = new ListNode(0);
//     hair.next = head;
//     let pre = hair;

//     while (head) {
//         let tail = pre;
//         // 查看剩余部分长度是否大于等于 k
//         for (let i = 0; i < k; ++i) {
//             tail = tail.next;
//             if (!tail) {
//                 return hair.next;
//             }
//         }
//         const nex = tail.next;
//         [head, tail] = myReverse(head, tail);
//         // 把子链表重新接回原链表
//         pre.next = head;
//         tail.next = nex;
//         pre = tail;
//         head = tail.next;
//     }
//     return hair.next;
// };

// @lc code=end
