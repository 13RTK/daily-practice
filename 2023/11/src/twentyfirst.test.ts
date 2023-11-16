import Node from "../../../basic-structure/ts/Node";

function levelOrder(root: Node | null): number[][] {
    const resArr: number[][] = [];
    if (!root) {
        return resArr;
    }

    const stack: Node[] = [root];
    while (stack.length) {
        const curLevelLength: number = stack.length;
        const curLevel: number[] = [];

        for (let i = 0; i < curLevelLength; i++) {
            const curNode: Node = stack.shift()!;
            curLevel.push(curNode.val);

            curNode.children && stack.push(...curNode.children);
        }

        resArr.push(curLevel);
    }

    return resArr;
}
