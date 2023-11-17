import TreeNode from "../../../basic-structure/ts/TreeNode";

function largestValues(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const resArr: number[] = [];
    const stack: TreeNode[] = [root];

    while (stack.length) {
        const curLevelLength: number = stack.length;
        let curMax: number = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < curLevelLength; i++) {
            const curNode: TreeNode = stack.shift()!;
            curMax = Math.max(curMax, curNode.val);

            curNode.left && stack.push(curNode.left);
            curNode.right && stack.push(curNode.right);
        }

        resArr.push(curMax);
    }

    return resArr;
}
