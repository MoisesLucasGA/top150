/**
 * 129. Sum Root to Leaf Numbers
 * Medium
 * You are given the root of a binary tree containing digits from 0 to 9 only.
 * Each root-to-leaf path in the tree represents a number.
 * For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
 * Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
 * 
 * A leaf node is a node with no children.
 * 
 * Input: root = [1,2,3]
 * Output: 25
 * Explanation:
 *      The root-to-leaf path 1->2 represents the number 12.
 *      The root-to-leaf path 1->3 represents the number 13.
 *      Therefore, sum = 12 + 13 = 25.
 */


class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function sumNumbers(root: TreeNode | null): number {
    if (!root) return 0

    function sum(root: TreeNode | null, nums: string): number {
        if (!root) {
            return 0
        }

        nums += root?.val.toString()
        
        if (!root?.left && !root?.right) {
            return Number(nums)
        }

        return sum(root?.left, nums) + sum(root?.right, nums)
    }

    return sum(root, '')
};


const root = 
new TreeNode(4, 
    new TreeNode(9, new TreeNode(5), new TreeNode(1)), 
    new TreeNode(0)
)

console.log(sumNumbers(root));