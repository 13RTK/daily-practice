import TreeNode from "../../../basic-structure/ts/TreeNode";

function evaluateTree(root: TreeNode | null): boolean {
  if (!root.left && !root.right) {
    return root.val === 1;
  }

  if (root.val === 2) {
    return evaluateTree(root.left!) || evaluateTree(root.right!);
  }

  return evaluateTree(root.left!) && evaluateTree(root.right!);
}
