function jump(nums: number[]): number {
  let res: number = 0;
  let curArrive: number = 0;
  let nextArrive: number = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    nextArrive = Math.max(nextArrive, i + nums[i]);

    if (i === curArrive) {
      curArrive = nextArrive;
      res++;
    }
  }

  return res;
}
