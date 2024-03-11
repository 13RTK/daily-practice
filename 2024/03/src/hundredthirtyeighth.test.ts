/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let nonZeroIdx: number = 0;

  for (const curNum of nums) {
    if (curNum) {
      nums[nonZeroIdx++] = curNum;
    }
  }

  nums.fill(0, nonZeroIdx, nums.length);
}
