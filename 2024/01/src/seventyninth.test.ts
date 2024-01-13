function wiggleMaxLength(nums: number[]): number {
  let preDif: number = 0;
  let res: number = 1;

  for (let i = 1; i < nums.length; i++) {
    const curDiff = nums[i] - nums[i - 1];

    if ((curDiff > 0 && preDif <= 0) || (curDiff < 0 && preDif >= 0)) {
      preDif = curDiff;
      res++;
    }
  }

  return res;
}
