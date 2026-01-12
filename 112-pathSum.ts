/**
 * 112. Path Sum
 * Easy
 * Given the root of a binary tree and an integer targetSum, 
 * return true if the tree has a root-to-leaf path 
 * such that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
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


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    
    function sum(root: TreeNode | null, cur: number): boolean{
        if (!root) return false
        
        cur += root?.val ?? 0

        if (cur === targetSum && !root?.left && !root?.right) {
            return true
        }else return sum(root.left, cur) || sum(root.right, cur) 
    }
    
    return sum(root, 0)
};

const root = new TreeNode(3, new TreeNode(5), new TreeNode(20, new TreeNode(4), new TreeNode(11)))

console.log(hasPathSum(root, 7));
