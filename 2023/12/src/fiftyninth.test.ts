import ListNode from "../../../basic-structure/ts/ListNode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let preHead: ListNode | null = new ListNode(0, head);
  let preNode: ListNode | null = preHead;
  let curNode: ListNode | null = preNode;

  for (let i = 0; i < n; i++) {
    curNode = curNode.next;
  }

  while (curNode.next) {
    curNode = curNode.next;
    preNode = preNode.next;
  }

  preNode.next = preNode.next.next;

  return preHead.next;
}
