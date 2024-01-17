function canJump(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }

  let maxArrive: number = 0;
  for (let i = 0; i <= maxArrive; i++) {
    maxArrive = Math.max(maxArrive, i + nums[i]);

    if (maxArrive >= nums.length - 1) {
      return true;
    }
  }

  return false;
}
