import TreeNode from "../../../basic-structure/ts/TreeNode";

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return false;
    }

    const stack: (TreeNode | null)[] = [root, root];
    while (stack.length) {
        const leftNode: TreeNode = stack.pop()!;
        const rightNode: TreeNode = stack.pop()!;

        if (!leftNode && !rightNode) {
            continue;
        }

        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
            return false;
        }

        stack.push(leftNode.left);
        stack.push(rightNode.right);

        stack.push(leftNode.right);
        stack.push(rightNode.left);
    }

    return true;
}

function isSymmetricRecursive(root: TreeNode | null): boolean {
    const isSymmetric = (
        node1: TreeNode | null,
        node2: TreeNode | null
    ): boolean => {
        if (!node1 && !node2) {
            return true;
        }

        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }

        return (
            isSymmetric(node1.left, node2.right) &&
            isSymmetric(node1.right, node2.left)
        );
    };

    return isSymmetric(root, root);
}
