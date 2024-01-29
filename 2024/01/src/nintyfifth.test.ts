import TreeNode from "../../../basic-structure/ts/TreeNode";

function minCameraCover(root: TreeNode | null): number {
  const setCamera = (node: TreeNode): number => {
    if (!node) {
      return 2;
    }

    const leftResult: number = setCamera(node.left);
    const rightResult: number = setCamera(node.right);

    if (leftResult === 2 && rightResult === 2) {
      return 0;
    }

    if (leftResult === 0 || rightResult === 0) {
      cameraCount++;
      return 1;
    }

    if (leftResult === 1 || rightResult === 1) {
      return 2;
    }

    return -1;
  };

  let cameraCount: number = 0;
  if (setCamera(root) === 0) {
    cameraCount++;
  }

  return cameraCount;
}
