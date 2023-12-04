import TreeNode from "../../../basic-structure/ts/TreeNode";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    return buildTree(nums, 0, nums.length - 1);
}

const buildTree = (
    nums: number[],
    leftIdx: number,
    rightIdx: number
): TreeNode | null => {
    if (rightIdx < leftIdx) {
        return null;
    }

    let maxIdx = leftIdx;
    for (let idx = leftIdx + 1; idx <= rightIdx; idx++) {
        if (nums[idx] > nums[maxIdx]) {
            maxIdx = idx;
        }
    }

    const root: TreeNode = new TreeNode(nums[maxIdx]);
    root.left = buildTree(nums, leftIdx, maxIdx - 1);
    root.right = buildTree(nums, maxIdx + 1, rightIdx);

    return root;
};
