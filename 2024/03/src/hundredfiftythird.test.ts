function connect(root: Node | null): Node | null {
  if (!root) {
    return null;
  }

  const stack: (Node | null)[] = [];
  stack.push(root);

  while (stack.length) {
    const curSize = stack.length;
    let preNode = null;

    for (let i = 0; i < curSize; i++) {
      const pollNode = stack.shift()!;

      if (preNode) {
        preNode.next = pollNode;
      }

      preNode = pollNode;

      if (pollNode.left) {
        stack.push(pollNode.left);
      }
      if (pollNode.right) {
        stack.push(pollNode.right);
      }
    }
  }

  return root;
}
