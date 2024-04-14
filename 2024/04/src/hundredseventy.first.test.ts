import TreeNode from "../../../basic-structure/ts/TreeNode";

function sumOfLeftLeaves(root: TreeNode | null): number {
  return dfs(root, false);
}

function dfs(node: TreeNode | null, isLeftNode: boolean) {
  if (!node) {
    return 0;
  }

  if (!node.left && !node.right) {
    return isLeftNode ? node.val : 0;
  }

  const leftSum: number = dfs(node.left, true);
  const rightSum: number = dfs(node.right, false);

  return leftSum + rightSum;
}
