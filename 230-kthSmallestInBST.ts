/**
 * 230. Kth Smallest Element in a BST
 * Medium
 * Given the root of a binary search tree, and an integer k, 
 * return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
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


function kthSmallest(root: TreeNode | null, k: number): number {
    const stack:number[] = []
    
    function inOrder(aux: TreeNode | null){
        if (aux?.left) inOrder(aux?.left!)

        if (aux) {
            stack.push(aux.val)
        }

        if (aux?.right) inOrder(aux?.right!)
    }
    inOrder(root)

    return stack.at(k-1)!
};

const root = new TreeNode(5,
    new TreeNode(4,
        null,
        null,
    ),
    new TreeNode(7, new TreeNode(6), new TreeNode(8))
)


console.log(kthSmallest(root, 3))


