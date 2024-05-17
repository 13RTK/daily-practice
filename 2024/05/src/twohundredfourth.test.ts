import ListNode from "../../../basic-structure/ts/ListNode";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let curNode: ListNode = head;
  while (curNode.next) {
    if (curNode.val === curNode.next.val) {
      curNode.next = curNode.next.next;
      continue;
    }

    curNode = curNode.next;
  }

  return head;
}
