function smallerNumbersThanCurrent(nums: number[]): number[] {
  const sortArr: number[] = [...nums].sort((o1, o2) => o1 - o2);

  const map: Map<number, number> = new Map();
  for (let idx = 0; idx < nums.length; idx++) {
    if (!map.has(sortArr[idx])) {
      map.set(sortArr[idx], idx);
    }
  }

  for (let i = 0; i < sortArr.length; i++) {
    sortArr[i] = map.get(nums[i])!;
  }

  return sortArr;
}
