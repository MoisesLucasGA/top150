/**
 * 138. Copy List with Random Pointer
 * Medium
 * A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
 * Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
 * For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
 * Return the head of the copied linked list.
 * The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
 * val: an integer representing Node.val
 * random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
 * Your code will only be given the head of the original linked list.
 */

class _Node {
    val: number
    next: _Node | null
    random: _Node | null

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }
}



function copyBasic(head: _Node | null): _Node | null {
    if (!head) return null
    return new _Node(head.val, copyBasic(head?.next!)!)
};


function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null

    const hash = new Map<_Node, _Node>()

    let curr: _Node | null = head
    while (curr) {
        hash.set(curr, new _Node(curr.val))
        curr = curr?.next
    }

    curr = head

    while (curr) {
        hash.get(curr)!.next = hash.get(curr.next!) || null;
        hash.get(curr)!.random = hash.get(curr.random!) || null;
        curr = curr.next
    }

    return hash.get(head) || null;
};


const y = new _Node(5)
const head = new _Node(1, new _Node(3, new _Node(2, y), y))
 
console.log(copyRandomList(head));


