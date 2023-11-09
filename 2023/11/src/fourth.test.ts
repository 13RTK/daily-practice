import TreeNode from "../../../basic-structure/ts/TreeNode";

/**
 * Generates a preorder traversal of a binary tree.
 *
 * @param {TreeNode | null} root - The root node of the binary tree.
 * @return {number[]} An array containing the values of the tree nodes in preorder traversal.
 */
function preorderTraversal(root: TreeNode | null): number[] {
    const resArr: number[] = [];

    const traversal = (root: TreeNode | null) => {
        if (root) {
            resArr.push(root.val);

            root.left && traversal(root.left);
            root.right && traversal(root.right);
        }
    };

    traversal(root);
    return resArr;
}

function preorderTraversalStack(root: TreeNode | null): number[] {
    const resArr: number[] = [];
    if (!root) {
        return resArr;
    }

    const stack: TreeNode[] = [root];

    while (stack.length) {
        const curNode: TreeNode = stack.pop();
        resArr.push(curNode.val);

        curNode.right && stack.push(curNode.right);
        curNode.left && stack.push(curNode.left);
    }

    return resArr;
}
