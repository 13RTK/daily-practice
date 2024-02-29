function minDistance(word1: string, word2: string): number {
  const minStepCnt: number[][] = new Array(word1.length + 1)
    .fill([])
    .map(() => new Array(word2.length + 1).fill(0));

  for (let idx1 = 0; idx1 <= word1.length; idx1++) {
    minStepCnt[idx1][0] = idx1;
  }

  for (let idx2 = 0; idx2 <= word2.length; idx2++) {
    minStepCnt[0][idx2] = idx2;
  }

  for (let idx1 = 1; idx1 <= word1.length; idx1++) {
    for (let idx2 = 1; idx2 <= word2.length; idx2++) {
      if (word1[idx1 - 1] !== word2[idx2 - 1]) {
        minStepCnt[idx1][idx2] = Math.min(
          minStepCnt[idx1 - 1][idx2 - 1] + 2,
          Math.min(minStepCnt[idx1 - 1][idx2], minStepCnt[idx1][idx2 - 1]) + 1
        );
      } else {
        minStepCnt[idx1][idx2] = minStepCnt[idx1 - 1][idx2 - 1];
      }
    }
  }

  return minStepCnt.at(-1)!.at(-1)!;
}
