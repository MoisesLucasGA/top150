/**
 * 637. Average of Levels in Binary Tree
 * Easy
 * Given the root of a binary tree, return the average value of the nodes on each level
 * in the form of an array. Answers within 10-5 of the actual answer will be accepted.

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


function averageOfLevels(root: TreeNode | null): number[] {

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

    return matrix.map(row =>
        row.reduce((a, b) => a + b, 0) / row.length
    );
};

const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

console.log(averageOfLevels(root));

