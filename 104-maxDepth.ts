
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

function maxDepth(root: TreeNode | null): number {

    if(!root) return 0

    return 1 + Math.max(maxDepth(root?.left), maxDepth(root?.right))
};


const leaf1 = new TreeNode(7)
const leaf2 = new TreeNode(15)
const node = new TreeNode(20, leaf2, leaf1)
const leaf3 = new TreeNode(9)
const root = new TreeNode(3, leaf3, node)


console.log(maxDepth(root));
