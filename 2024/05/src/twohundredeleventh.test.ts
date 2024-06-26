import type ListNode from "../../../basic-structure/ts/ListNode";

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const nextPartHead: ListNode | null = head.next.next;
  const newHead: ListNode | null = head.next;
  newHead.next = head;

  head.next = swapPairs(nextPartHead);

  return newHead;
}
