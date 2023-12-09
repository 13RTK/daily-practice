import TreeNode from "../../../basic-structure/ts/TreeNode";

function isValidBST(root: TreeNode | null): boolean {
    const inorderArr = inorderTraversal(root);

    for (let i = 0; i < inorderArr.length - 1; i++) {
        if (inorderArr[i + 1] <= inorderArr[i]) {
            return false;
        }
    }

    return true;
}

const inorderTraversal = (root: TreeNode | null): number[] => {
    if (!root) {
        return [];
    }

    const resArr: number[] = [];
    const stack: (TreeNode | null)[] = [root];

    while (stack.length) {
        let curNode: TreeNode | null = stack.pop()!;

        if (curNode) {
            // inorder: left, root, right => right, root, left
            curNode.right && stack.push(curNode.right);

            stack.push(curNode);
            stack.push(null);

            curNode.left && stack.push(curNode.left);
        } else {
            curNode = stack.pop()!;

            resArr.push(curNode.val);
        }
    }

    return resArr;
};
