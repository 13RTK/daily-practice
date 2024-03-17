function searchInsert(
  nums: number[],
  target: number
): number {
  let leftIdx: number = 0;
  let rightIdx: number = nums.length - 1;

  while (leftIdx <= rightIdx) {
    const mid: number =
      leftIdx + Math.trunc((rightIdx - leftIdx) / 2);

    if (nums[mid] > target) {
      rightIdx = mid - 1;
    } else if (nums[mid] < target) {
      leftIdx = mid + 1;
    } else {
      return mid;
    }
  }

  return rightIdx + 1;
}
