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
var removeElements = function(head, val) {
    // 哑节点（dummy node）用于简化删除头节点的情况
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // 初始化 currentNode 指向哑节点
    let currentNode = dummy;
    
    while (currentNode.next !== null) {
        if (currentNode.next.val === val) {
            // 发现目标值，删除节点，把指针指向下下个节点
            currentNode.next = currentNode.next.next;
        } else {
            // 否则，继续遍历下一个节点
            currentNode = currentNode.next;
        }
    }
    
    // 返回新的链表（跳过头节点的哑节点）
    return dummy.next;
};


// @lc code=end

