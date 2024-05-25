function findIndices(
  nums: number[],
  indexDifference: number,
  valueDifference: number
): number[] {
  // If the index difference is greater than or equal to the length of nums, no such indices exist
  if (indexDifference >= nums.length) {
    return [-1, -1];
  }

  // If the value difference is greater than the maximum difference in nums, no such indices exist either
  if (valueDifference > Math.max(...nums) - Math.min(...nums)) {
    return [-1, -1];
  }

  // Brute force traversal to find the indices
  for (let startIdx = 0; startIdx + indexDifference < nums.length; startIdx++) {
    for (
      let endIdx = startIdx + indexDifference;
      endIdx < nums.length;
      endIdx++
    ) {
      if (valueDifference <= Math.abs(nums[startIdx] - nums[endIdx])) {
        return [startIdx, endIdx];
      }
    }
  }

  return [-1, -1];
}
