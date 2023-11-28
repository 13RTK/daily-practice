import TreeNode from "../../../basic-structure/ts/TreeNode";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    return JSON.stringify(root).includes(JSON.stringify(subRoot));
}
