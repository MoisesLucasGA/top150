/**
 * 2. Add Two Numbers
 * Medium
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Example 1:
 *      Input: l1 = [2,4,3], l2 = [5,6,4]
 *      Output: [7,0,8]
 *      Explanation: 342 + 465 = 807.
 */

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    function add(l1: ListNode | null, l2: ListNode | null, carryOne: boolean): ListNode | null {
        if (!l1 && !l2 && !carryOne) return null

        let sum = carryOne ? (l1?.val ?? 0) + (l2?.val ?? 0) + 1 : (l1?.val ?? 0) + (l2?.val ?? 0)

        if (sum >= 10) {
            sum %= 10
            carryOne = true
        } else carryOne = false

        return new ListNode(sum, add(l1?.next ?? null, l2?.next ?? null, carryOne))
    }

    return add(l1, l2, false)
};


const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(5))


console.log(addTwoNumbers(l1, l2));