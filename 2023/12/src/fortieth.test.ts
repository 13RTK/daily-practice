import TreeNode from "../../../basic-structure/ts/TreeNode";

const inorderNumIdxMap: Map<number, number> = new Map();
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    for (let i = 0; i < inorder.length; i++) {
        inorderNumIdxMap.set(inorder[i], i);
    }

    return build(postorder, 0, postorder.length - 1, 0, inorder.length - 1);
}

const build = (
    postorder: number[],
    postLeft: number,
    postRight: number,
    inorderLeft: number,
    inorderRight: number
): TreeNode | null => {
    if (postLeft > postRight || inorderLeft > inorderRight) {
        return null;
    }

    const rootVal: number = postorder[postRight];
    const root: TreeNode = new TreeNode(rootVal);

    if (postLeft === postRight) {
        return root;
    }

    const rootInorderIdx: number = inorderNumIdxMap.get(rootVal) || 0;
    const leftLength: number = rootInorderIdx - inorderLeft;

    root.left = build(
        postorder,
        postLeft,
        postLeft + leftLength - 1,
        inorderLeft,
        rootInorderIdx - 1
    );
    root.right = build(
        postorder,
        postLeft + leftLength,
        postRight - 1,
        rootInorderIdx + 1,
        inorderRight
    );

    return root;
};
