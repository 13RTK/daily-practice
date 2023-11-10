/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import TreeNode from "../../../basic-structure/ts/TreeNode";

function inorderTraversal(root: TreeNode | null): number[] {
    const resArr: number[] = [];
    const traversal = (root: TreeNode | null): void => {
        if (root) {
            root.left && traversal(root.left);
            resArr.push(root.val);
            root.right && traversal(root.right);
        }
    };

    traversal(root);
    return resArr;
}

function inorderTraversalStack(root: TreeNode | null): number[] {
    const resArr: number[] = [];
    const stack: TreeNode[] = [];

    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }

        const popNode: TreeNode = stack.pop() || new TreeNode();
        resArr.push(popNode.val);

        root = popNode.right;
    }

    return resArr;
}
