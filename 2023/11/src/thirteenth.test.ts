/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
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
import { test, expect } from "bun:test";

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }
    const resArr: number[][] = [];

    const stack: TreeNode[] = [root];
    while (stack.length > 0) {
        const curLevelArr: number[] = [];
        const curLevelLength = stack.length;

        for (let i = 0; i < curLevelLength; i++) {
            const curNode: TreeNode = stack.shift() || new TreeNode();
            if (curNode.left) {
                stack.push(curNode.left);
            }
            if (curNode.right) {
                stack.push(curNode.right);
            }

            curLevelArr.push(curNode.val);
        }
        resArr.push(curLevelArr);
    }

    return resArr;
}
// @lc code=end

const treeNode = TreeNode.arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);

test("levelOrder", () => {
    expect(levelOrder(treeNode)).toEqual([[3], [9, 20], [15, 7]]);
});
