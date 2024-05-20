function subsetXORSum(nums: number[]): number {
  let sum: number = 0;

  for (const num of nums) {
    sum |= num;
  }

  return sum << (nums.length - 1);
}
