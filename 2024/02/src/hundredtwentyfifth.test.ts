function minDistance(word1: string, word2: string): number {
  const dp: number[][] = new Array(word1.length + 1)
    .fill([])
    .map((_val, row) => {
      if (row === 0) {
        return Array.from({ length: word2.length + 1 }, (_val, idx) => idx);
      }

      return new Array(word2.length + 1)
        .fill(0)
        .map((val, idx) => (idx === 0 ? row : val));
    });

  for (let row = 1; row <= word1.length; row++) {
    for (let col = 1; col <= word2.length; col++) {
      if (word1[row - 1] === word2[col - 1]) {
        dp[row][col] = dp[row - 1][col - 1];
      } else {
        dp[row][col] = Math.min(
          dp[row - 1][col - 1] + 1,
          Math.min(dp[row][col - 1], dp[row - 1][col]) + 1
        );
      }
    }
  }

  return dp.at(-1)!.at(-1)!;
}
