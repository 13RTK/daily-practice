function minOperations(nums: number[], k: number): number {
  for (const num of nums) {
    k ^= num;
  }

  return k
    .toString(2)
    .split("")
    .reduce((acc, val) => acc + Number(val), 0);
}
