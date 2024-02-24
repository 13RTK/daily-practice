function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  const lineCount: number[][] = new Array(nums1.length + 1)
    .fill([])
    .map(() => new Array(nums2.length + 1).fill(0));

  for (let idx1 = 1; idx1 <= nums1.length; idx1++) {
    for (let idx2 = 1; idx2 <= nums2.length; idx2++) {
      if (nums1[idx1 - 1] == nums2[idx2 - 1]) {
        lineCount[idx1][idx2] = Math.max(
          lineCount[idx1 - 1][idx2 - 1] + 1,
          lineCount[idx1][idx2]
        );
      } else {
        lineCount[idx1][idx2] = Math.max(
          lineCount[idx1 - 1][idx2],
          lineCount[idx1][idx2 - 1]
        );
      }
    }
  }

  return lineCount[nums1.length][nums2.length];
}
