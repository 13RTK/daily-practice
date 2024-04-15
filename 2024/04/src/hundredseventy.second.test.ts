import TreeNode from "../../../basic-structure/ts/TreeNode";

function sumNumbers(root: TreeNode | null): number {
  return dfs(root, 0);
}

function dfs(node: TreeNode | null, curSum: number): number {
  if (!node) {
    return 0;
  }

  curSum = curSum * 10 + node.val;

  if (!node.left && !node.right) {
    return curSum;
  }

  return dfs(node.left, curSum) + dfs(node.right, curSum);
}
