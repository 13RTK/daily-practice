import TreeNode from "../../../basic-structure/ts/TreeNode";

function isSymmetric(root: TreeNode | null): boolean {
  return compareNode(root, root);
}

function compareNode(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if (!node1 && !node2) {
    return true;
  }

  if (!node1 || !node2) {
    return false;
  }

  return (
    node1.val === node2.val &&
    compareNode(node1.left!, node2.right!) &&
    compareNode(node1.right!, node2.left!)
  );
}
