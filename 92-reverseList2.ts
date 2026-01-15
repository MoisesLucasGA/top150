/**
 * 92. Reverse Linked List II
 * Medium
 * Given the head of a singly linked list and two integers left and right where left <= right, 
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 */


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function print(head: ListNode | null) {
    while (head) {
        console.log(head.val);
        head = head.next
    }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head?.next) return head

    const hash = new Map<number, number>()

    let index = 1
    let cur: ListNode | null = head
    while (cur) {
        hash.set(index++, cur.val)
        cur = cur.next
    }

    cur = head
    index = 1
    while (cur) {
        if (index >= left && index <= right) {            
            cur.val = hash.get(right - (index - left))!
        }
        cur = cur.next
        index++
    }

    return head
};


const head = new ListNode(1, new ListNode(2,new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
const left = 2
const right = 5


print(reverseBetween(head, left, right))
