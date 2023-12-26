import ListNode from "../../../basic-structure/ts/ListNode";

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }

  let preNode: ListNode | null = head.next;
  let curNode: ListNode | null = head.next.next;

  while (preNode !== curNode) {
    if (!curNode || !curNode.next) {
      return null;
    }

    preNode = preNode.next;
    curNode = curNode.next.next;
  }

  curNode = head;
  while (preNode !== curNode) {
    preNode = preNode.next;
    curNode = curNode.next;
  }

  return preNode;
}
