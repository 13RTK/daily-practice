import TreeNode from "../../../basic-structure/ts/TreeNode";

function binaryTreePaths(root: TreeNode | null): string[] {
    if (!root) {
        return [];
    }

    const resArr: string[] = [];
    const findPath = (node: TreeNode | null, curPath: string[]): void => {
        if (!node) {
            return;
        }

        curPath.push(`${node.val}`);

        if (node.left) {
            findPath(node.left, curPath);
            curPath.pop();
        }

        if (node.right) {
            findPath(node.right, curPath);
            curPath.pop();
        }

        if (!node.left && !node.right) {
            resArr.push(curPath.join("->"));
            return;
        }
    };

    findPath(root, []);
    return resArr;
}
