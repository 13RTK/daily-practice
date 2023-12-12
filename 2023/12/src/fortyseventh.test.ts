import TreeNode from "../../../basic-structure/ts/TreeNode";

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    if (!root || root === p || root === q) {
        return root;
    }

    const left: TreeNode | null = lowestCommonAncestor(root.left, p, q);
    const right: TreeNode | null = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    }

    if (!left) {
        return right;
    }

    return left;
}
