/**
 * 98. Validate Binary Search Tree
 * Medium
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 *      The left of a node contains only nodes with keys strictly less than the node's key.
 *      The right subtree of a node contains only nodes with keys strictly greater than the node's key.
 *      Both the left and right subtrees must also be binary search trees.
 * 
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function isValidBSTRecursive(root: TreeNode | null): boolean {

    if (!root) return true

    function checkLeft(aux: TreeNode | null): boolean {
        if (!aux) return true
        if (root?.val! <= aux?.val) return false

        return checkLeft(aux.left) && checkLeft(aux.right) 
    }

    function checkRight(aux: TreeNode | null): boolean {
        if (!aux) return true
        if (root?.val! >= aux?.val) return false

        return checkRight(aux.left) && checkRight(aux.right) 
    }

    if (!checkLeft(root.left) || !checkRight(root.right)) return false 

    return isValidBSTRecursive(root.left) && isValidBSTRecursive(root.right)
};

function isValidBST(root: TreeNode | null): boolean {

    if (!root) return true

    const stack: TreeNode[] = []

    let pre: TreeNode | null = null

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop() ?? null

        if (pre && root?.val! <= pre.val) return false

        pre = root
        root = root?.right ?? null
    }
    return true
}

const root = new TreeNode(5,
    new TreeNode(4,
        null,
        null,
    ),
    new TreeNode(7, new TreeNode(3), new TreeNode(8))
)


// console.log(isValidBSTRecursive(root));
console.log(isValidBST(root));
