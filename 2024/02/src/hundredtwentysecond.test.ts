function isSubsequence(s: string, t: string): boolean {
  const matchLen: number[][] = new Array(s.length + 1)
    .fill([])
    .map(() => new Array(t.length + 1).fill(0));

  for (let idx1 = 1; idx1 <= s.length; idx1++) {
    for (let idx2 = 1; idx2 <= t.length; idx2++) {
      if (s[idx1 - 1] === t[idx2 - 1]) {
        matchLen[idx1][idx2] = Math.max(
          matchLen[idx1][idx2],
          matchLen[idx1 - 1][idx2 - 1] + 1
        );
      } else {
        matchLen[idx1][idx2] = Math.max(
          matchLen[idx1][idx2 - 1],
          matchLen[idx1][idx2 - 1]
        );
      }
    }
  }

  return matchLen.at(-1)!.at(-1)! == s.length;
}
