import ListNode from "../../../basic-structure/ts/ListNode";

const getIntersectionNode = function (
  headA: ListNode,
  headB: ListNode
): ListNode | null {
  if (!headA || !headB) {
    return null;
  }

  let curNodeA = headA;
  let curNodeB = headB;

  while (curNodeA !== curNodeB) {
    curNodeA = curNodeA ? curNodeA.next : headB;
    curNodeB = curNodeB ? curNodeB.next : headA;
  }

  return curNodeA;
};
