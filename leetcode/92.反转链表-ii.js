/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let singleReverseBetween = (head, left, right) => {
    if (left == right) {
      return head;
    }

    let cur = head;
    let leftNode = cur;
    let rightNode = cur;

    let s = [];
    let i = 1;
    while (cur) {
      if (i == left) {
        leftNode = cur;
        break;
      }
      cur = cur.next;
      i++;
    }

    while (i != right) {
      s.push(cur.val);
      cur = cur.next;
      i++;
    }
    rightNode = cur;
    s.push(rightNode.val);

    cur = leftNode;

    while (s.length > 0) {
      cur.val = s.pop();
      cur = cur.next;
    }

    return head;
  };

  let headReverseBetween = (head, left, right) => {
    if (left === right) {
      return head;
    }

    let headInsert = (head, node) => {
      if (!head.next) {
        head.next = node;
        return head;
      }
      let headNext = head.next;
      head.next = node;
      node.next = headNext;
      return head;
    };

    let cur = head;
    let leftPre = cur;
    let i = 1;
    while (true) {
      if (i < left) {
        i++;
        leftPre = cur;
        break;
      }
      cur = cur.next;
      i++;
    }
    console.log(i);
    cur = cur.next;
    let leftNode = cur;

    let headLeft = new ListNode();
    let curN = cur;

    while (cur) {
      if (i <= right) {
        curN = cur.next;
        headLeft = headInsert(headLeft, cur);
        cur = curN;
        i++;
      } else {
        break;
      }
    }
    console.log(i);
    let rightNext = cur;
    console.log(leftPre.val);
    if (leftPre) {
      leftPre.next = headLeft.next;
    }

    if (rightNext) {
      leftNode.next = rightNext;
    }

    return head;
  };

  return headReverseBetween(head, left, right);
};

// @lc code=end
