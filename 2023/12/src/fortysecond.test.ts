import TreeNode from "../../../basic-structure/ts/TreeNode";

function mergeTrees(
    root1: TreeNode | null,
    root2: TreeNode | null
): TreeNode | null {
    if (!root1 || !root2) {
        return root1 ? root1 : root2;
    }

    const curRoot: TreeNode = new TreeNode(root1.val + root2.val);
    curRoot.left = mergeTrees(root1.left, root2.left);
    curRoot.right = mergeTrees(root1.right, root2.right);

    return curRoot;
}
