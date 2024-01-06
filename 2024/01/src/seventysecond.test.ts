function subsets(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const curCombine: number[] = [];

  const getSubsets = (nums: number[], startIdx: number): void => {
    resArr.push([...curCombine]);

    if (startIdx >= nums.length) {
      return;
    }

    for (let i = startIdx; i < nums.length; i++) {
      if (i > startIdx && nums[i] === nums[i - 1]) {
        continue;
      }

      curCombine.push(nums[i]);

      getSubsets(nums, i + 1);

      curCombine.pop();
    }
  };
  getSubsets(nums, 0);

  return resArr;
}
