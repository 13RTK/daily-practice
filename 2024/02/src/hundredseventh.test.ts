function combinationSum4(nums: number[], target: number): number {
  const combineCnt: number[] = Array.from({ length: target + 1 }, () => 0);
  combineCnt[0] = 1;

  for (let curCapacity = 0; curCapacity <= target; curCapacity++) {
    for (const curNum of nums) {
      if (curCapacity - curNum >= 0) {
        combineCnt[curCapacity] += combineCnt[curCapacity - curNum];
      }
    }
  }

  return combineCnt[target];
}
