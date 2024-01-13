function maxSubArray(nums: number[]): number {
  let res: number = Number.MIN_SAFE_INTEGER;
  let counter: number = 0;

  nums.forEach((num) => {
    counter += num;
    res = Math.max(counter, res);

    if (counter < 0) {
      counter = 0;
    }
  });

  return res;
}
