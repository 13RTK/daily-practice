//   Definition for Node.
class Node {
    val: number;
    left: Node | null;
    right: Node | null;
    next: Node | null;
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
        this.next = next === undefined ? null : next;
    }
}

function connect(root: Node | null): Node | null {
    if (!root) {
        return root;
    }

    const stack: Node[] = [root];
    while (stack.length) {
        let preNode: Node;
        const curLevelLength: number = stack.length;

        for (let i = 0; i < curLevelLength; i++) {
            const curNode: Node = stack.shift()!;
            curNode.left && stack.push(curNode.left);
            curNode.right && stack.push(curNode.right);

            if (i === 0) {
                preNode = curNode;
                continue;
            }
            preNode.next = curNode;
            preNode = curNode;
        }

        preNode.next = null;
    }

    return root;
}
