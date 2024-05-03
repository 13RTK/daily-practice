function findMaxK(nums: number[]): number {
  nums.sort((o1, o2) => o1 - o2);

  for (const num of nums) {
    if (num > 0) {
      return -1;
    }

    if (nums.includes(-num)) {
      return -num;
    }
  }

  return -1;
}
