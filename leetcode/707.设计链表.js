/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this._head = new LinkNode();
        this._tail = null;
        this._size = 0;
    }
    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index >= 0 && index < this._size) {
            let i = 0,
                cur = this._head;
            while (i++ <= index) {
                cur = cur.next;
            }

            return cur.val;
        }
        return -1;
    }
    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let node = new LinkNode(val);
        if (!this._tail) {
            this._head = node;
            this._tail = node;
        } else {
            let next = this._head.next;
            this._head.next = node;
            node.next = next;
        }
        this._size++;
    }
    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        if (!this._tail) {
            this.addAtHead(val);
        } else {
            let node = new LinkNode(val);
            this._tail.next = node;
            this._size++;
        }
    }
    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0) {
            this.addAtHead(val);
        } else if (index === this._size) {
            this.addAtTail(val);
        } else if (index >= 0 && index < this._size) {
            let i = 0,
                cur = this._head;
            while (i++ <= index) {
                cur = cur.next;
            }
            let next = cur.next;
            let node = new LinkNode(val);
            cur.next = node;
            node.next = next;
        } else {
            return;
        }
    }
    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index>=0&&index<this._size){
            
        }
        return
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
