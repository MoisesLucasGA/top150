/**
 * 530. Minimum Absolute Difference in BST
 * Easy
 * Given the root of a Binary Search Tree (BST), 
 * return the minimum absolute difference between the values of any two different nodes in the tree.
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


function getMinimumDifference(root: TreeNode | null): number {

    function lNode(root : TreeNode | null): number {
        if (!root) return Number.POSITIVE_INFINITY
        if (!root.left) return root.val

        return lNode(root.left)
    }

    function rNode(root : TreeNode | null): number {
        if (!root) return Number.POSITIVE_INFINITY
        if (!root.right) return root.val

        return rNode(root.right)
    }

    function check(root: TreeNode | null, min: number): number {
        if (!root) return min

        const n = Math.min(
            min,
            Math.abs(root.val - (rNode(root.left))),
            Math.abs(root.val - (lNode(root.right)))
        )

        return Math.min(check(root.left, n), check(root.right, n))
    }


    return check(root, Number.POSITIVE_INFINITY)
};

const root = new TreeNode(236,
    new TreeNode(104,
        null,
        new TreeNode(227),
    ),
    new TreeNode(701, null, new TreeNode(911))
)


console.log(getMinimumDifference(root));
