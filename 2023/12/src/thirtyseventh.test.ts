import TreeNode from "../../../basic-structure/ts/TreeNode";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return findTarget(root, targetSum, 0);
}

const findTarget = (
    node: TreeNode | null,
    targetSum: number,
    curSum: number
): boolean => {
    if (!node) {
        return false;
    }

    if (!node.left && !node.right) {
        return curSum + node.val === targetSum;
    }

    return (
        findTarget(node.left, targetSum, curSum + node.val) ||
        findTarget(node.right, targetSum, curSum + node.val)
    );
};
