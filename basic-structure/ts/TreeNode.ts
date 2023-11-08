class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }

    // Convert array to tree node
    static arrayToBinaryTree(nums: (number | null)[]): TreeNode | null {
        if (nums.length === 0) {
            return null;
        }

        const root: TreeNode = new TreeNode(nums[0] || undefined);
        const queue: (TreeNode | null)[] = [root];
        let i = 1;

        while (i < nums.length) {
            const node: TreeNode | null = queue.shift() || null;

            if (node) {
                if (nums[i] !== null) {
                    const leftNode: TreeNode | null = new TreeNode(
                        nums[i] || undefined
                    );
                    node.left = leftNode;
                    queue.push(leftNode);
                }
                i++;

                if (i < nums.length && nums[i] !== null) {
                    const rightNode: TreeNode | null = new TreeNode(
                        nums[i] || undefined
                    );
                    node.right = rightNode;
                    queue.push(rightNode);
                }
                i++;
            }
        }

        return root;
    }
}

export default TreeNode;
