import TreeNode from "../../../basic-structure/ts/TreeNode";

function isBalanced(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    return getHeight(root) != -1;
}

const getHeight = (root: TreeNode | null): number => {
    if (!root) {
        return 0;
    }

    const leftHeight: number = getHeight(root.left);
    const rightHeight: number = getHeight(root.right);

    if (
        leftHeight === -1 ||
        rightHeight === -1 ||
        Math.abs(leftHeight - rightHeight) > 1
    ) {
        return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
};
