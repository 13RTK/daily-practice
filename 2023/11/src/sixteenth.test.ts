import TreeNode from "../../../basic-structure/ts/TreeNode";

function postorderTraversal(root: TreeNode | null): number[] {
    const resArr: number[] = [];
    const traversal = (root: TreeNode | null): void => {
        if (root) {
            root.left && traversal(root.left);
            root.right && traversal(root.right);
            resArr.push(root.val);
        }
    };

    traversal(root);
    return resArr;
}
