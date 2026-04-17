/**
 * 148. Sort List
 * Medium
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *  
 * Example 1:
 *      Input: head = [4,2,1,3]
 *      Output: [1,2,3,4]
 * Example 2:
 *      Input: head = [-1,5,3,4,0]
 *      Output: [-1,0,3,4,5]
 * Example 3:
 *      Input: head = []
 *      Output: []
 *  
 * Constraints:
 *      The number of nodes in the list is in the range [0, 5 * 104].
 *      -105 <= Node.val <= 105
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function middle(head: ListNode | null): ListNode | null {
    let slow: ListNode | null = head
    let fast: ListNode | null = head?.next!

    while (fast && fast.next) {
        slow = slow?.next!
        fast = fast.next.next
    }

    return slow
}

function merge(l1: ListNode | null, l2: ListNode | null) {
    let temp = new ListNode(-1)
    const dummy = temp

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            temp.next = l1
            l1 = l1.next
        } else {
            temp.next = l2
            l2 = l2.next
        }

        temp = temp.next
    }

    temp.next = (l1 !== null) ? l1 : l2;

    return dummy.next
}


function sortList(head: ListNode | null): ListNode | null {

    if (head === null || head.next === null) {
        return head
    }

    const mid: ListNode | null = middle(head)
    let right: ListNode | null = mid?.next!
    mid!.next = null

    let left: ListNode | null = head


    left = sortList(left)
    right = sortList(right)

    return merge(left, right)
};

const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))

console.log(sortList(head));

