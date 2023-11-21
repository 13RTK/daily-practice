import TreeNode from "../../../basic-structure/ts/TreeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return root;
    }

    const temp: TreeNode | null = root.left;
    root.left = root.right;
    root.right = temp;

    root.left = invertTree(root.left);
    root.right = invertTree(root.right);

    return root;
}
