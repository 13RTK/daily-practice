import TreeNode from "../../../basic-structure/ts/TreeNode";

function findMode(root: TreeNode | null): number[] {
    let resArr: number[] = [];
    let preNode: TreeNode | null = null;
    let counter: number = 0;
    let maxCounter: number = 0;

    const search = (root: TreeNode | null): void => {
        if (!root) {
            return;
        }

        search(root.left);

        if (preNode && preNode.val === root.val) {
            counter++;
        } else {
            counter = 1;
        }
        preNode = root;

        if (counter === maxCounter) {
            resArr.push(root.val);
        }

        if (counter > maxCounter) {
            maxCounter = counter;
            resArr = [root.val];
        }

        search(root.right);
    };

    search(root);

    return resArr;
}
