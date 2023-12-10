import TreeNode from "../../../basic-structure/ts/TreeNode";

function getMinimumDifference(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let res: number = Number.MAX_SAFE_INTEGER;
    let preNode: TreeNode | null = null;

    const stack: (TreeNode | null)[] = [root];
    const inorderArr: number[] = [];
    while (stack.length) {
        let curNode: TreeNode | null = stack.pop()!;

        // inorder: left, root, right => right, root, left
        if (curNode) {
            curNode.right && stack.push(curNode.right);

            stack.push(curNode);
            stack.push(null);

            curNode.left && stack.push(curNode.left);
        } else {
            curNode = stack.pop()!;

            inorderArr.push(curNode.val);
        }
    }

    inorderArr.forEach((num, idx, arr) => {
        if (idx > 0) {
            res = Math.min(res, num - arr[idx - 1]);
        }
    });

    return res;
}
