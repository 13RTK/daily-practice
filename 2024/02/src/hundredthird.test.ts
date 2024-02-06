function canPartition(nums: number[]): boolean {
  const curSum = nums.reduce((acc, val) => acc + val);

  if ((curSum & 1) == 1) {
    return false;
  }

  let capacity = curSum / 2;
  const bag: number[] = new Array(capacity + 1).fill(0);
  for (const curNum of nums) {
    for (let curCapacity = capacity; curCapacity >= curNum; curCapacity--) {
      bag[curCapacity] = Math.max(
        bag[curCapacity - curNum] + curNum,
        bag[curCapacity]
      );
    }
  }

  return bag[capacity] == capacity;
}
