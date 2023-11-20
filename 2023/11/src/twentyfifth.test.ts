import TreeNode from "../../../basic-structure/ts/TreeNode";

function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const stack: TreeNode[] = [root];
    let curDepth: number = 0;

    while (stack.length) {
        const curLevelLength: number = stack.length;
        curDepth++;

        for (let i = 0; i < curLevelLength; i++) {
            const curNode = stack.shift()!;

            if (!curNode.left && !curNode.right) {
                return curDepth;
            }

            curNode.left && stack.push(curNode.left);
            curNode.right && stack.push(curNode.right);
        }
    }

    return curDepth;
}
