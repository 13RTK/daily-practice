import TreeNode from "../../../basic-structure/ts/TreeNode";

function convertBST(root: TreeNode | null): TreeNode | null {
    const traversal = (node: TreeNode | null): void => {
        if (!node) {
            return;
        }

        let preNodeVal: number = 0;
        const stack: (TreeNode | null)[] = [node];
        while (stack.length) {
            let curNode: TreeNode | null = stack.pop()!;

            if (curNode) {
                curNode.left && stack.push(curNode.left);

                stack.push(curNode);
                stack.push(null);

                curNode.right && stack.push(curNode.right);
            } else {
                curNode = stack.pop()!;

                curNode.val += preNodeVal;
                preNodeVal = curNode.val;
            }
        }
    };
    traversal(root);

    return root;
}

function convertBSTVer2(root: TreeNode | null): TreeNode | null {
    let preNodeVal = 0;

    const traversal = (node: TreeNode | null): void => {
        if (!node) {
            return;
        }

        // right, mid, left
        traversal(node.right);

        node.val += preNodeVal;
        preNodeVal = node.val;

        traversal(node.left);
    };
    traversal(root);

    return root;
}
