import ListNode from "../../../basic-structure/ts/ListNode";

function doubleIt(head: ListNode | null): ListNode | null {
  let newHead: ListNode | null = reverseLinkedList(head);

  const preHead: ListNode = new ListNode(0);
  let carry: number = 0;
  let curNode = preHead;

  while (newHead) {
    const curSum: number = newHead.val * 2 + carry;
    carry = Math.trunc(curSum / 10);

    curNode.next = new ListNode(curSum % 10);

    curNode = curNode.next;
    newHead = newHead.next;
  }

  if (carry) {
    curNode.next = new ListNode(1);
  }

  return reverseLinkedList(preHead.next);
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let newHead: ListNode | null = null;

  while (head) {
    const temp: ListNode | null = head.next;
    head.next = newHead;
    newHead = head;
    head = temp;
  }

  return newHead;
}
