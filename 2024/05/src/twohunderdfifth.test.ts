function buildArray(nums: number[]): number[] {
  const res: number[] = new Array(nums.length).fill(0);

  nums.forEach((num, idx) => {
    res[idx] = nums[num];
  });

  return res;
}
