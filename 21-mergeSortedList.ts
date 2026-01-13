/**
 * 21. Merge Two Sorted Lists
 * Easy
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */


class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 || !list2) {
        return list1 || list2
    }
    if (list1?.val! < list2?.val!) {
        const x = new ListNode(list1?.val, mergeTwoLists(list1?.next!, list2))

        return x
    } else {
        const x = new ListNode(list2?.val, mergeTwoLists(list1, list2?.next!))

        return x
    }
};

const l1 = new ListNode(1, new ListNode(4, new ListNode(6)))
const l2 = new ListNode(2, new ListNode(3))


console.log(mergeTwoLists(l1, l2));
