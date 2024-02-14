function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  const amountExpectFirst: number = getAmount(nums, 1, nums.length - 1);
  const amountExpectLast: number = getAmount(nums, 0, nums.length - 2);

  return Math.max(amountExpectFirst, amountExpectLast);
}

const getAmount = (nums: number[], left: number, right: number) => {
  if (left === right) {
    return nums[left];
  }

  const curAmount: number[] = [
    nums[left],
    Math.max(nums[left], nums[left + 1]),
  ];
  for (let curRoom = left + 2; curRoom <= right; curRoom++) {
    const curMax = Math.max(curAmount[0] + nums[curRoom], curAmount[1]);

    [curAmount[0], curAmount[1]] = [curAmount[1], curMax];
  }

  return curAmount[1];
};
