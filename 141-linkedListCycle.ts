/**
 * 141. Linked List Cycle
 * Easy
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached 
 * again by continuously following the next pointer. 
 * Internally, pos is used to denote the index of the node that tail's
 * next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */


class ListNode {
    val: number
    next: ListNode | null
    
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function hasCycle(head: ListNode | null): boolean {
    if (!head || !head?.next) return false

    let fast: ListNode | null = head.next
    let slow: ListNode | null = head

    while (fast !== slow) {
        if (!fast?.next || !fast?.next?.next) return false

        fast = fast.next.next
        slow = slow.next!
    }

    return true
};

const tail = new ListNode(4)
const node1 = new ListNode(2, tail)
const node2 = new ListNode(2, node1)
tail.next = node2
const head = new ListNode(3, node2)

console.log(hasCycle(head));