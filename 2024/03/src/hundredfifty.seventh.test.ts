import ListNode from "../../../basic-structure/ts/ListNode";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry: number = 0;

  const preHead: ListNode = new ListNode(0);
  let curNode = preHead;

  while (l1 && l2) {
    const curSum: number = l1.val + l2.val + carry;
    const curVal: number = curSum % 10;

    curNode.next = new ListNode(curVal);
    curNode = curNode.next;

    carry = Math.trunc(curSum / 10);

    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    const curSum: number = l1.val + carry;
    const curVal: number = curSum % 10;

    curNode.next = new ListNode(curVal);
    curNode = curNode.next;

    carry = Math.trunc(curSum / 10);

    l1 = l1.next;
  }

  while (l2) {
    const curSum: number = l2.val + carry;
    const curVal: number = curSum % 10;

    curNode.next = new ListNode(curVal);
    curNode = curNode.next;

    carry = Math.trunc(curSum / 10);

    l2 = l2.next;
  }

  if (carry > 0) {
    curNode.next = new ListNode(1);
  }

  return preHead.next;
}
