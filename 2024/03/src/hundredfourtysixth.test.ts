import ListNode from "../../../basic-structure/ts/ListNode";

type CombineNode = ListNode | null;

function reorderList(head: CombineNode): void {
  if (head == null || head.next == null) {
    return;
  }

  let slow: CombineNode = head;
  let fast: CombineNode = head;

  while (fast != null && fast.next != null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  const nextPartHead: CombineNode = slow!.next;
  slow!.next = null;

  let reversedHead: CombineNode = reverse(nextPartHead);
  while (head != null && reversedHead != null) {
    let originNext: CombineNode = head.next;
    let reverseNext: CombineNode = reversedHead.next;

    head.next = reversedHead;
    reversedHead.next = originNext;

    head = originNext;
    reversedHead = reverseNext;
  }
}

function reverse(curNode: CombineNode): CombineNode {
  if (curNode == null) {
    return null;
  }

  let tail: CombineNode = null;
  while (curNode != null) {
    let temp: CombineNode = curNode.next;
    curNode.next = tail;
    tail = curNode;
    curNode = temp;
  }

  return tail;
}
