function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const numIdxMap: Map<number, number> = new Map();
  for (let idx = 0; idx < nums1.length; idx++) {
    numIdxMap.set(nums1[idx], idx);
  }

  const res: number[] = new Array(nums1.length).fill(-1);
  const idxStack: number[] = [];

  for (let i = 0; i < nums2.length; i++) {
    while (idxStack.length && nums2[idxStack.at(-1)!] < nums2[i]) {
      if (numIdxMap.has(nums2[idxStack.at(-1)!])) {
        const resIdx: number = numIdxMap.get(nums2[idxStack.at(-1)!]) || 0;
        res[resIdx] = nums2[i];
      }

      idxStack.pop();
    }

    idxStack.push(i);
  }
  return res;
}
