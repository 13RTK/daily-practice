import ListNode from "../../../basic-structure/ts/ListNode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const preHead: ListNode = new ListNode(0, head);
  let curNode: ListNode = preHead;
  let endNode: ListNode = preHead;

  for (let i = 0; i < n; i++) {
    endNode = endNode.next!;
  }

  while (endNode.next) {
    endNode = endNode.next;
    curNode = curNode.next!;
  }

  curNode.next = curNode.next!.next;

  return preHead.next;
}
