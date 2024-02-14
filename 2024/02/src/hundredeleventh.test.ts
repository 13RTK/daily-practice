function rob(nums: number[]): number {
  if (nums.length == 1) {
    return nums[0];
  }

  const curAmount: number[] = [nums[0], Math.max(nums[0], nums[1])];

  for (let curRoom = 2; curRoom < nums.length; curRoom++) {
    const curMaxAmount: number = Math.max(
      curAmount[1],
      curAmount[0] + nums[curRoom]
    );

    [curAmount[0], curAmount[1]] = [curAmount[1], curMaxAmount];
  }

  return curAmount[1];
}
