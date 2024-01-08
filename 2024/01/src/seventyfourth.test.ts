function findSubsequences(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const curSubsequence: number[] = [];

  const getSubsequence = (nums: number[], startIdx: number): void => {
    if (curSubsequence.length >= 2) {
      resArr.push([...curSubsequence]);
    }

    const mark: boolean[] = new Array(201).fill(false);
    for (let i = startIdx; i < nums.length; i++) {
      // Skip the duplicate
      if (
        (curSubsequence.length && curSubsequence.at(-1)! > nums[i]) ||
        mark[nums[i] + 100]
      ) {
        continue;
      }

      curSubsequence.push(nums[i]);
      mark[nums[i] + 100] = true;

      getSubsequence(nums, i + 1);

      curSubsequence.pop();
    }
  };

  getSubsequence(nums, 0);
  return resArr;
}
