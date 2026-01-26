/**
 * 82. Remove Duplicates from Sorted List II
 * Medium
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
 * Example 1:
 *      Input: head = [1,2,3,3,4,4,5]
 *      Output: [1,2,5]
 */


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function deleteDuplicatesRecursive(head: ListNode | null): ListNode | null {
    const hash = new Set<number>()

    function del(cur: ListNode | null): ListNode | null {
        if (!cur) return null

        if (cur.val === cur.next?.val || hash.has(cur.val)) {
            hash.add(cur?.val!)
            return del(cur.next)
        } else return new ListNode(cur.val, del(cur.next))
    }

    return del(head)
};

function deleteDuplicatesPointers(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(-1)
    dummy.next = head
    let cur = head
    let prev: ListNode | null = dummy

    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            while (cur.next && cur.val === cur.next.val) {
                cur = cur?.next
            }
            prev!.next = cur.next
        }else{
            prev = prev!.next
        }
        cur = cur.next
    }

    return dummy.next
};

const head =
    new ListNode(1,
        new ListNode(1))


console.log(deleteDuplicatesPointers(head));
