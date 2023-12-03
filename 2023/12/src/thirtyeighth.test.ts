import TreeNode from "../../../basic-structure/ts/TreeNode";

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const resArr: number[][] = [];

    const getPath = (
        node: TreeNode | null,
        targetSum: number,
        curSum: number,
        curPath: number[]
    ) => {
        if (!node) {
            return;
        }

        if (!node.left && !node.right && curSum + node.val === targetSum) {
            resArr.push([...curPath, node.val]);
        }

        node.left &&
            getPath(node.left, targetSum, curSum + node.val, [
                ...curPath,
                node.val,
            ]);
        node.right &&
            getPath(node.right, targetSum, curSum + node.val, [
                ...curPath,
                node.val,
            ]);
    };

    getPath(root, targetSum, 0, []);

    return resArr;
}
