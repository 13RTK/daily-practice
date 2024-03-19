import ListNode from "../../../basic-structure/ts/ListNode";

type CombineNode = ListNode | null;

function isPalindrome(head: CombineNode): boolean {
  if (!head || !head.next) {
    return true;
  }

  let slow: CombineNode = head;
  let fast: CombineNode = head.next;
  while (fast.next != null && fast.next.next != null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  const nextPartHead: CombineNode = slow!.next;
  slow!.next = null;

  let reversedHead: CombineNode = reverseList(nextPartHead);
  while (head != null && reversedHead != null) {
    if (head.val != reversedHead.val) {
      return false;
    }

    head = head.next;
    reversedHead = reversedHead.next;
  }

  return true;
}

function reverseList(curNode: CombineNode): CombineNode {
  if (curNode == null) {
    return null;
  }

  let tail: CombineNode = null;
  while (curNode != null) {
    const temp: CombineNode = curNode.next;
    curNode.next = tail;
    tail = curNode;
    curNode = temp;
  }

  return tail;
}
