import TreeNode from "../../../basic-structure/ts/TreeNode";

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let curVal = 0;
    if (root.left && !root.left.left && !root.left.right) {
        curVal = root.left.val;
    }

    return curVal + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}

function sumOfLeftLeavesTraverse(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const stack: (TreeNode | null)[] = [root];
    let res: number = 0;

    while (stack.length) {
        const curNode: TreeNode | null = stack.pop()!;

        if (curNode.left && !curNode.left.left && !curNode.left.right) {
            res += curNode.left.val;
        }

        curNode.left && stack.push(curNode.left);
        curNode.right && stack.push(curNode.right);
    }

    return res;
}
