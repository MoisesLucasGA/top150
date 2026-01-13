/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * Medium
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia: 
 * “The lowest common ancestor is defined between two nodes p and q as 
 * the lowest node in T that has both p and q as descendants 
 * (where we allow a node to be a descendant of itself).”
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

function lowestCommonAncestorBrute(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const hash = new Map<number, TreeNode>()

    function mapping(r1: TreeNode | null) {
        if (!r1) return null

        if (r1?.left) {
            hash.set(r1?.left?.val, r1)
        }
        if (r1?.right) {
            hash.set(r1?.right?.val, r1)
        }

        mapping(r1.left)
        mapping(r1.right)
    }

    mapping(root)

    const pParents = [p!]
    const qParents = [q!]

    while (hash.has(pParents[0].val)) {
        pParents.unshift(hash.get(pParents[0].val)!)
    }

    while (hash.has(qParents[0].val)) {
        qParents.unshift(hash.get(qParents[0].val)!)
    }

    const target = pParents.findLast((e) => qParents.indexOf(e) !== - 1)

    return target ?? null
};

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root || root === p || root === q) {
        return root
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    }

    return left || right;    
}

const q = new TreeNode(4)
const p = new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), q))

const root =
    new TreeNode(3,
        p,
        new TreeNode(1, new TreeNode(0), new TreeNode(8)),
    )

console.log(lowestCommonAncestor(root, p, q)?.val);