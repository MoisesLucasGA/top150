/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * Medium
 * 
 * Given two integer arrays preorder and inorder 
 * where preorder is the preorder traversal of a binary tree and inorder
 * is the inorder traversal of the same tree, construct and return the binary tree.

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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let index = 0
    const inHash = new Map<number, number>()

    for (let i = 0; i < preorder.length; i++) {
        inHash.set(inorder[i], i)
    }

    function build(left: number, right: number): TreeNode | null {
        
        if (left > right) return null

        const val = preorder[index++]
        const node = new TreeNode(val)
        const mid = inHash.get(val)!

        node.left = build(left, mid-1)
        node.right = build(mid+1, right)

        return node
    }


    
    return build(0, inorder.length - 1)
};