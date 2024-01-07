function subsetsWithDup(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const curSubset: number[] = [];

  nums.sort((o1, o2) => o1 - o2);

  const getSubset = (nums: number[], startIdx: number): void => {
    resArr.push([...curSubset]);

    for (let i = startIdx; i < nums.length; i++) {
      if (i > startIdx && nums[i - 1] === nums[i]) {
        continue;
      }

      curSubset.push(nums[i]);

      getSubset(nums, i + 1);

      curSubset.pop();
    }
  };

  getSubset(nums, 0);
  return resArr;
}
