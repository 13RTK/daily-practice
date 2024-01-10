function permuteUnique(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const curPermutation: number[] = [];

  const getPermutation = (nums: number[], mark: boolean[]): void => {
    if (nums.length === curPermutation.length) {
      resArr.push([...curPermutation]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if ((i > 0 && nums[i - 1] === nums[i] && mark[i - 1]) || mark[i]) {
        continue;
      }

      curPermutation.push(nums[i]);
      mark[i] = true;

      curPermutation.pop();
      mark[i] = false;
    }
  };

  getPermutation(
    nums,
    Array.from({ length: nums.length }, () => false)
  );

  return resArr;
}
