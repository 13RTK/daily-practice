import TreeNode from "../../../basic-structure/ts/TreeNode";

function sumNumbers(root: TreeNode | null): number {
  let res: number = 0;
  const stack: (TreeNode | null)[] = [];
  const sumStack: number[] = [];

  stack.push(root);
  sumStack.push(0);
  while (stack.length) {
    const curSize: number = stack.length;

    for (let i = 0; i < curSize; i++) {
      const pollNode = stack.shift()!;
      let pollNum: number = sumStack.shift()!;

      pollNum = pollNum * 10 + pollNode.val;

      if (pollNode.left) {
        stack.push(pollNode.left);
        sumStack.push(pollNum);
      }
      if (pollNode.right) {
        stack.push(pollNode.right);
        sumStack.push(pollNum);
      }

      if (!pollNode.left && !pollNode.right) {
        res += pollNum;
      }
    }
  }

  return res;
}
