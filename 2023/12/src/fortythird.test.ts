import TreeNode from "../../../basic-structure/ts/TreeNode";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return null;
    }

    if (root.val < val) {
        return searchBST(root.right, val);
    } else if (root.val > val) {
        return searchBST(root.left, val);
    } else {
        return root;
    }
}
