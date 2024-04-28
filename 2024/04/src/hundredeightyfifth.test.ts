function search(nums: number[], target: number): number {
  let leftIdx: number = 0;
  let rightIdx: number = nums.length - 1;

  while (leftIdx <= rightIdx) {
    const midIdx: number = Math.trunc((leftIdx + rightIdx) / 2);

    if (target === nums[midIdx]) {
      return midIdx;
    } else if (nums[leftIdx] <= nums[midIdx]) {
      if (target < nums[midIdx] && target >= nums[leftIdx]) {
        rightIdx = midIdx - 1;
      } else {
        leftIdx = midIdx + 1;
      }
    } else {
      if (target > nums[midIdx] && target <= nums[rightIdx]) {
        leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx - 1;
      }
    }
  }

  return -1;
}
