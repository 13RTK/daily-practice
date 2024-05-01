function canJump(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }

  let curMax: number = nums[0];
  for (let i = 0; i <= curMax; i++) {
    curMax = Math.max(curMax, i + nums[i]);

    if (curMax >= nums.length - 1) {
      return true;
    }
  }

  return false;
}
