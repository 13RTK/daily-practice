function findTargetSumWays(nums: number[], target: number): number {
  const numsSum: number = nums.reduce((acc, val) => acc + val);
  if (numsSum < Math.abs(target) || (numsSum + target) % 2) {
    return 0;
  }

  const capacity: number = Math.trunc((numsSum + target) / 2);
  const bag: number[] = new Array(capacity + 1).fill(0);
  bag[0] = 1;

  nums.forEach((num) => {
    for (let curCapacity = capacity; curCapacity >= num; curCapacity--) {
      bag[curCapacity] += bag[curCapacity - num];
    }
  });

  return bag[capacity];
}
