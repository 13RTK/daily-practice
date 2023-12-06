import TreeNode from "../../../basic-structure/ts/TreeNode";

const inorderNumIdxMap: Map<number, number> = new Map();
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    for (let i = 0; i < inorder.length; i++) {
        inorderNumIdxMap.set(inorder[i], i);
    }

    return build(preorder, 0, inorder.length - 1, 0);
}

const build = (
    preorder: number[],
    inorderLeft: number,
    inorderRight: number,
    preorderRoot: number
): TreeNode | null => {
    if (inorderLeft > inorderRight) {
        return null;
    }

    const rootVal: number = preorder[preorderRoot];
    const inorderRoot: number = inorderNumIdxMap.get(rootVal) || 0;

    const root: TreeNode = new TreeNode(rootVal);
    root.left = build(preorder, inorderLeft, inorderRoot - 1, preorderRoot + 1);
    root.right = build(
        preorder,
        inorderRoot + 1,
        inorderRight,
        preorderRoot + inorderRoot - inorderLeft + 1
    );

    return root;
};
