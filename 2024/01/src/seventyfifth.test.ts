function permute(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const curPermutation: number[] = [];

  const getPermutation = (nums: number[], mark: boolean[]): void => {
    if (nums.length === curPermutation.length) {
      resArr.push([...curPermutation]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!mark[i]) {
        curPermutation.push(nums[i]);
        mark[i] = true;

        getPermutation(nums, mark);

        curPermutation.pop();
        mark[i] = false;
      }
    }
  };

  getPermutation(nums, new Array(nums.length).fill(false));
  return resArr;
}
