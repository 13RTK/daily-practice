import TreeNode from "../../../basic-structure/ts/TreeNode";

function findBottomLeftValue(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let depth: number = 0;
    let res: number = 0;

    const traversal = (node: TreeNode | null, curDepth: number): void => {
        if (!node.left && !node.right && curDepth > depth) {
            depth = curDepth;
            res = node.val;
            return;
        }

        if (node.left) {
            traversal(node.left, curDepth + 1);
        }
        if (node.right) {
            traversal(node.right, curDepth + 1);
        }
    };

    traversal(root, 1);

    return res;
}
