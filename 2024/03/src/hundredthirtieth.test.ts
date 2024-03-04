function nextGreaterElements(nums: number[]): number[] {
  const res: number[] = new Array(nums.length).fill(-1);

  const idxStack: number[] = [];
  for (let i = 0; i < nums.length * 2; i++) {
    while (idxStack.length && nums[idxStack.at(-1)!] < nums[i % nums.length]) {
      const resIdx: number = idxStack.pop()!;

      res[resIdx] = nums[i % nums.length];
    }

    idxStack.push(i % nums.length);
  }

  return res;
}
