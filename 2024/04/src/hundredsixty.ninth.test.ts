import ListNode from "../../../basic-structure/ts/ListNode";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 || !list2) {
    return list1 ? list1 : list2;
  }

  const preHead: ListNode = new ListNode(0);
  let curNode: ListNode = preHead;

  while (list1 && list2) {
    let nextVal: number;

    if (list1.val < list2.val) {
      nextVal = list1.val;
      list1 = list1.next;
    } else {
      nextVal = list2.val;
      list2 = list2.next;
    }

    curNode.next = new ListNode(nextVal);
    curNode = curNode.next;
  }

  if (list1 || list2) {
    curNode.next = list1 ? list1 : list2;
  }

  return preHead.next;
}
