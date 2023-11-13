import TreeNode from "../../../basic-structure/ts/TreeNode";

function levelOrderBottom(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const stack: TreeNode[] = [root];
    const resArr: number[][] = [];

    while (stack.length) {
        const curLevelLength = stack.length;
        const curLevel: number[] = [];

        for (let i = 0; i < curLevelLength; i++) {
            const popNode = stack.shift()!;
            curLevel.push(popNode.val);

            popNode.left && stack.push(popNode.left);
            popNode.right && stack.push(popNode.right);
        }

        resArr.push(curLevel);
    }

    resArr.reverse();
    return resArr;
}
