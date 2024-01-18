function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((o1, o2) => Math.abs(o2) - Math.abs(o1));

  for (const [idx, num] of nums.entries()) {
    if (num <= 0 && k > 0) {
      nums[idx] = -num;
      k--;
    }

    if (k === 0) {
      break;
    }
  }

  nums[nums.length - 1] = k % 2 ? -nums.at(-1)! : nums[nums.length - 1];

  return nums.reduce((acc, val) => acc + val);
};