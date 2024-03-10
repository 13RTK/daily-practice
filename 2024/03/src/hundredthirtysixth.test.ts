function intersection(nums1: number[], nums2: number[]): number[] {
  const resArr: Set<number> = new Set();
  const nums2Set = new Set([...nums2]);

  new Set([...nums1]).forEach((num) => {
    if (nums2Set.has(num)) {
      resArr.add(num);
    }
  });

  return [...resArr];
}
