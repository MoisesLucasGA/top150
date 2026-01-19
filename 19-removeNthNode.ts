/**
 * 19. Remove Nth Node From End of List
 * Medium
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * Example 1:
 *      Input: head = [1,2,3,4,5], n = 2
 *      Output: [1,2,3,5]
 */


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let cur = head
    let remove = head
    let prev = head
    let index = 0

    while (cur) {
        cur = cur.next
        index++
        if (index > n) {
            prev = remove
            remove = remove?.next!
            index--
        }
    }

    if (remove == head) return head?.next || null

    if (prev?.next !== undefined) prev.next = remove?.next!

    return head
};


const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

console.log(removeNthFromEnd(head, 1));