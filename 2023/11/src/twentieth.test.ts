import TreeNode from "../../../basic-structure/ts/TreeNode";

function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const resArr: number[] = [];
    const stack: TreeNode[] = [root];

    while (stack.length) {
        const curLen: number = stack.length;
        let curSum: number = 0;

        for (let i = 0; i < curLen; i++) {
            const curNode: TreeNode = stack.shift()!;
            curSum += curNode.val;

            curNode.left && stack.push(curNode.left);
            curNode.right && stack.push(curNode.right);
        }

        resArr.push(curSum / curLen);
    }

    return resArr;
}
