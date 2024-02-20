function lengthOfLIS(nums: number[]): number {
  const subAscLength: number[] = new Array(nums.length).fill(1);
  let res: number = 1;

  for (let curRight = 1; curRight < nums.length; curRight++) {
    for (let curLeft = 0; curLeft < curRight; curLeft++) {
      if (nums[curRight] > nums[curLeft]) {
        subAscLength[curRight] = Math.max(
          subAscLength[curRight],
          subAscLength[curLeft] + 1
        );
      }
    }

    res = Math.max(subAscLength[curRight], res);
  }

  return res;
}
