import TreeNode from "../../../basic-structure/ts/TreeNode";

function rightSideView(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const stack: TreeNode[] = [root];
    const resArr: number[] = [];

    while (stack.length) {
        const curLevelLength = stack.length;
        const curLevel: number[] = [];

        for (let i = 0; i < curLevelLength; i++) {
            const curNode = stack.shift()!;
            curLevel.push(curNode.val);

            curNode.left && stack.push(curNode.left);
            curNode.right && stack.push(curNode.right);
        }

        resArr.push(curLevel.at(-1)!);
    }

    return resArr;
}
