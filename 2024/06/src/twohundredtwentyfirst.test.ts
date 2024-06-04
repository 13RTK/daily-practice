function removeDuplicates(nums: number[]): number {
  let newArrayIndex: number = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[newArrayIndex] = nums[i];
      newArrayIndex++;
    }
  }

  return newArrayIndex;
}
