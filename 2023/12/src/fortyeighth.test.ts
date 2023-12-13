import TreeNode from "../../../basic-structure/ts/TreeNode";

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    if (!root) {
        return null;
    }

    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
}
