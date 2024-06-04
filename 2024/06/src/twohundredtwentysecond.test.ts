function threeSumClosest(nums: number[], target: number): number {
  nums.sort((o1, o2) => o1 - o2);

  let res: number = 0;
  let minDVal: number = Number.MAX_SAFE_INTEGER;
  let curSum: number = 0;

  for (let firstNumIndex = 0; firstNumIndex < nums.length; firstNumIndex++) {
    let left = firstNumIndex + 1;
    let right = nums.length - 1;

    while (left < right) {
      curSum = nums[firstNumIndex] + nums[left] + nums[right];

      if (curSum == target) {
        return curSum;
      }

      if (Math.abs(curSum - target) < minDVal) {
        minDVal = Math.abs(curSum - target);
        res = curSum;
      }

      if (curSum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return res;
}
