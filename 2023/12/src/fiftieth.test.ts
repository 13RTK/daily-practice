import TreeNode from "../../../basic-structure/ts/TreeNode";

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return build(nums, 0, nums.length - 1);
}

const build = (
    nums: number[],
    left: number,
    right: number
): TreeNode | null => {
    if (right < left) {
        return null;
    }

    const curMid = left + Math.round((right - left) / 2);
    const root: TreeNode | null = new TreeNode(nums[curMid]);

    root.left = build(nums, left, curMid - 1);
    root.right = build(nums, curMid + 1, right);

    return root;
};
