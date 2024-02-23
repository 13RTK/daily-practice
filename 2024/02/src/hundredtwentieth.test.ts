function longestCommonSubsequence(text1: string, text2: string): number {
  const commonLen: number[][] = new Array(text1.length + 1)
    .fill([])
    .map(() => new Array(text2.length + 1).fill(0));

  for (let idx1 = 1; idx1 <= text1.length; idx1++) {
    for (let idx2 = 1; idx2 <= text2.length; idx2++) {
      if (text1[idx1 - 1] === text2[idx2 - 1]) {
        commonLen[idx1][idx2] = Math.max(
          commonLen[idx1][idx2],
          commonLen[idx1 - 1][idx2 - 1] + 1
        );
      } else {
        commonLen[idx1][idx2] = Math.max(
          commonLen[idx1 - 1][idx2],
          commonLen[idx1][idx2 - 1]
        );
      }
    }
  }

  return commonLen.at(-1)!.at(-1)!;
}
