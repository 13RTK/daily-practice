function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((o1, o2) => o1 - o2);

  for (let idx = 0; idx < nums.length - 2; idx++) {
    if (idx > 0 && nums[idx] === nums[idx - 1]) {
      continue;
    }

    let leftIdx: number = idx + 1;
    let rightIdx: number = nums.length - 1;

    while (leftIdx < rightIdx) {
      const curSum = nums[idx] + nums[leftIdx] + nums[rightIdx];

      if (!curSum) {
        res.push([nums[idx], nums[leftIdx], nums[rightIdx]]);
        while (leftIdx < rightIdx && nums[leftIdx] === nums[leftIdx + 1]) {
          leftIdx++;
        }

        while (leftIdx < rightIdx && nums[rightIdx] === nums[rightIdx - 1]) {
          rightIdx--;
        }

        leftIdx++;
        rightIdx--;
      } else if (curSum > 0) {
        rightIdx--;
      } else {
        leftIdx++;
      }
    }
  }

  return res;
}
