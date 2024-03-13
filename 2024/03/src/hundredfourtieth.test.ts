function pivotIndex(nums: number[]): number {
  const sum: number = nums.reduce((acc, val) => acc + val);
  let leftSum: number = 0;
  let rightSum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    rightSum = sum - leftSum + nums[i];

    if (leftSum == rightSum) {
      return i;
    }
  }

  return -1;
}
