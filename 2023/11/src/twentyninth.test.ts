import TreeNode from "../../../basic-structure/ts/TreeNode";

function countNodes(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let leftDepth: number = 0;
    let rightDepth: number = 0;

    let curNode: TreeNode | null = root;
    while (curNode) {
        leftDepth++;
        curNode = curNode.left;
    }
    curNode = root;

    while (curNode) {
        rightDepth++;
        curNode = curNode.right;
    }

    if (leftDepth === rightDepth) {
        return 2 ** leftDepth - 1;
    }

    return countNodes(root.left) + countNodes(root.right) + 1;
}
