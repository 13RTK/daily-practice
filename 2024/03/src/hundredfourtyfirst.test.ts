function searchRange(
  nums: number[],
  target: number
): number[] {
  const startIdx: number = nums.findIndex(
    (num) => num === target
  );

  if (startIdx < 0) {
    return [-1, -1];
  }

  let left: number = startIdx - 1;
  let right: number = startIdx + 1;
  while (left >= 0 && nums[left] == target) {
    left--;
  }

  while (right < nums.length && nums[right] == target) {
    right++;
  }

  return [left + 1, right - 1];
}
