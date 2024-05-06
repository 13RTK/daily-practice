import ListNode from "../../../basic-structure/ts/ListNode";

function removeNodes(head: ListNode | null): ListNode | null {
  const newHead = reverseLinkedList(head);
  let curNode = newHead;

  // traverse to remove smaller node
  while (curNode && curNode.next) {
    if (curNode.val > curNode.next.val) {
      curNode.next = curNode.next.next;
      continue;
    }

    curNode = curNode.next;
  }

  return reverseLinkedList(newHead);
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let newHead: ListNode | null = null;

  while (head) {
    const temp = head.next;
    head.next = newHead;
    newHead = head;
    head = temp;
  }

  return newHead;
}
