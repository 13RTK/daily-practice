import TreeNode from "../../../basic-structure/ts/TreeNode";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true;
    }

    if ((!p && q) || (p && !q) || p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
