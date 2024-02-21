function findLengthOfLCIS(nums: number[]): number {
  let maxLen: number = 1;
  let curLen: number = 1;

  for (let idx = 1; idx < nums.length; idx++) {
    if (nums[idx] > nums[idx - 1]) {
      curLen++;
      maxLen = Math.max(maxLen, curLen);
    } else {
      curLen = 1;
    }
  }

  return maxLen;
}
