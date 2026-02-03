/**
 * 199. Binary Tree Right Side View
 * Medium
 * Given the root of a binary tree, imagine yourself standing on the right side of it, 
 * return the values of the nodes you can see ordered from top to bottom.
 * Example 1:
 *      Input: root = [1,2,3,null,5,null,4]
 *      Output: [1,3,4]
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


function rightSideView(root: TreeNode | null): number[] {

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

    return matrix.map((level) => level[level.length-1])
};


const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

console.log(rightSideView(root));