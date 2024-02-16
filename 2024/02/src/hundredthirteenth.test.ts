import TreeNode from "../../../basic-structure/ts/TreeNode";

function rob(root: TreeNode | null): number {
  const res: number[] = getAmount(root);

  return Math.max(...res);
}

const getAmount = (curNode: TreeNode | null): number[] => {
  if (!curNode) {
    return [0, 0];
  }

  const curAmount: number[] = [0, 0];
  const leftRes: number[] = getAmount(curNode.left);
  const rightRes: number[] = getAmount(curNode.right);

  curAmount[0] =
    Math.max(leftRes[0], leftRes[1]) + Math.max(rightRes[0], rightRes[1]);
  curAmount[1] = leftRes[0] + rightRes[0] + curNode.val;

  return curAmount;
};
