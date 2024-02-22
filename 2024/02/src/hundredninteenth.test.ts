function findLength(nums1: number[], nums2: number[]): number {
  const commonLen: number[][] = new Array(nums1.length + 1)
    .fill([])
    .map(() => new Array(nums2.length + 1).fill(0));

  let maxLen = 0;
  for (let idx1 = 1; idx1 <= nums1.length; idx1++) {
    for (let idx2 = 1; idx2 <= nums2.length; idx2++) {
      if (nums1[idx1 - 1] === nums2[idx2 - 1]) {
        commonLen[idx1][idx2] = commonLen[idx1 - 1][idx2 - 1] + 1;
      }

      maxLen = Math.max(maxLen, commonLen[idx1][idx2]);
    }
  }

  return maxLen;
}
