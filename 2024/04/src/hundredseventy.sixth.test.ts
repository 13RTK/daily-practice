import type TreeNode from "../../../basic-structure/ts/TreeNode";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function buildTree(left: number, right: number): TreeNode | null {
    if (left > right) {
      return null;
    }

    const rootIdx: number = Math.trunc((right + left) / 2);

    const root: TreeNode = new TreeNode(nums[rootIdx]);
    root.left = buildTree(left, rootIdx - 1);
    root.right = buildTree(rootIdx + 1, right);

    return root;
  }

  return buildTree(0, nums.length - 1);
}
