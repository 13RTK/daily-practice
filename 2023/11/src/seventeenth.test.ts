import TreeNode from "../../../basic-structure/ts/TreeNode";

function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const stack: (TreeNode | null)[] = [root];
    const resArr: number[] = [];

    while (stack.length) {
        const curNode = stack.at(-1);

        if (curNode) {
            stack.pop();
            // Preorder: mid, left, right; Insert order: right, left, mid
            curNode.right && stack.push(curNode.right);
            curNode.left && stack.push(curNode.left);

            stack.push(curNode);
            stack.push(null);
        } else {
            stack.pop();
            const popNode = stack.pop()!;

            resArr.push(popNode.val);
        }
    }

    return resArr;
}

function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const stack: (TreeNode | null)[] = [root];
    const resArr: number[] = [];

    while (stack.length) {
        const curNode = stack.at(-1);

        if (curNode) {
            stack.pop();
            // Preorder: left, mid, right; Insert order: right, mid, left
            curNode.right && stack.push(curNode.right);

            stack.push(curNode);
            stack.push(null);

            curNode.left && stack.push(curNode.left);
        } else {
            stack.pop();
            const popNode = stack.pop()!;

            resArr.push(popNode.val);
        }
    }

    return resArr;
}

function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const stack: (TreeNode | null)[] = [root];
    const resArr: number[] = [];

    while (stack.length) {
        const curNode = stack.at(-1);

        if (curNode) {
            stack.pop();
            // Postorder: left, right, mid; Insert order: mid, right, left
            stack.push(curNode);
            stack.push(null);

            curNode.right && stack.push(curNode.right);
            curNode.left && stack.push(curNode.left);
        } else {
            stack.pop();
            const popNode = stack.pop()!;

            resArr.push(popNode.val);
        }
    }

    return resArr;
}
