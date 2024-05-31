function permuteUnique(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const curPermutation: number[] = [];
  nums.sort((o1, o2) => o1 - o2);

  function getPermutation(nums: number[], mark: boolean[]): void {
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

      getPermutation(nums, mark);

      curPermutation.pop();
      mark[i] = false;
    }
  }

  getPermutation(
    nums,
    Array.from({ length: nums.length }, () => false)
  );

  return resArr;
}
