import ListNode from "../../../basic-structure/ts/ListNode";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return null;
  }

  const preNode: ListNode | null = new ListNode(0, head);
  let curNode: ListNode | null = preNode;

  while (curNode.next) {
    if (curNode.next.val === val) {
      curNode.next = curNode.next.next;
    } else {
      curNode = curNode.next;
    }
  }

  return preNode.next;
}
