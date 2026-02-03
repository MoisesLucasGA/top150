/**
 * 102. Binary Tree Level Order Traversal
 * Medium
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * 
 * Example 1:
 *      Input: root = [3,9,20,null,null,15,7]
 *      Output: [[3],[9,20],[15,7]]
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function levelOrder(root: TreeNode | null): number[][] {

    const matrix: number[][] = []

    function add(root: TreeNode | null, count: number) {
        if (!root) {
            return null
        }
        if (matrix.length <= count) {
            matrix.push([])
        }

        matrix[count].push(root.val)

        add(root.left, 1 + count)
        add(root.right, 1 + count)
    }
    add(root, 0)

    return matrix
};


const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

console.log(levelOrder(root));