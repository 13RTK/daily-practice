import ListNode from "../../../basic-structure/ts/ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  let tail = null;

  while (head) {
    const temp = head.next;
    head.next = tail;
    tail = head;
    head = temp;
  }

  return tail;
}
