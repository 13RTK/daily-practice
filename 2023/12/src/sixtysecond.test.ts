function threeSum(nums: number[]): number[][] {
  nums.sort((o1, o2) => o1 - o2);
  const resArr: number[][] = [];

  for (let pinIdx = 0; pinIdx < nums.length - 2; pinIdx++) {
    if (pinIdx > 0 && nums[pinIdx] === nums[pinIdx - 1]) {
      continue;
    }

    let left: number = pinIdx + 1;
    let right: number = nums.length - 1;

    while (left < right) {
      const curSum: number = nums[pinIdx] + nums[left] + nums[right];

      if (curSum < 0) {
        left++;
      } else if (curSum > 0) {
        right--;
      } else {
        resArr.push([nums[pinIdx], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }

  return resArr;
}
