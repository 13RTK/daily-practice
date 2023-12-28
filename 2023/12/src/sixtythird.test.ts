function removeElement(nums: number[], val: number): number {
  let resIdx: number = 0;
  let lastIdx: number = nums.length - 1;

  while (resIdx <= lastIdx) {
    if (nums[resIdx] === val) {
      nums[resIdx] ^= nums[lastIdx];
      nums[lastIdx] ^= nums[resIdx];
      nums[resIdx] ^= nums[lastIdx];

      lastIdx--;
    } else {
      resIdx++;
    }
  }

  return resIdx;
};