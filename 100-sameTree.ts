/**
 * 100. Same Tree
Easy

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 */



// Definition for a binary tree node.
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


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    
    if (!p && !q) {
        return true
    }

    return p?.val === q?.val && isSameTree(p?.left!, q?.left!) && isSameTree(p?.right!, q?.right!)
 
};


const leaf1 = new TreeNode(7)
const leaf2 = new TreeNode(15)
const node = new TreeNode(20, leaf2, leaf1)
const leaf3 = new TreeNode(9)
const leaf4 = new TreeNode(11)
const root = new TreeNode(3, leaf3, node)
const root2 = new TreeNode(3, leaf4, node)

console.log(isSameTree(root,root2));
