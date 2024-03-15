function sortArrayByParityII(nums: number[]): number[] {
  let oddIdx: number = 1;
  let evenIdx: number = 0;

  for (; evenIdx < nums.length; evenIdx += 2) {
    // Occur odd number in even index
    if ((nums[evenIdx] & 1) == 1) {
      // Skip odd number in odd index
      while ((nums[oddIdx] & 1) == 1) {
        oddIdx += 2;
      }

      [nums[oddIdx], nums[evenIdx]] = [
        nums[evenIdx],
        nums[oddIdx],
      ];
    }
  }

  return nums;
}
