import TreeNode from "../../../basic-structure/ts/TreeNode";

function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const resArr: number[] = [];
    const stack: (TreeNode | null)[] = [root];

    while (stack.length) {
        let curNode: TreeNode | null = stack.pop()!;

        if (curNode) {
            curNode.right && stack.push(curNode.right);
            curNode.left && stack.push(curNode.left);

            stack.push(curNode);
            stack.push(null);
        } else {
            curNode = stack.pop()!;
            resArr.push(curNode.val);
        }
    }

    return resArr;
}
