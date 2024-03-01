function longestPalindromeSubseq(s: string): number {
  const maxLen: number[][] = new Array(s.length)
    .fill([])
    .map(() => new Array(s.length).fill(0));

  for (let left = s.length - 1; left >= 0; left--) {
    maxLen[left][left] = 1;

    for (let right = left + 1; right < s.length; right++) {
      if (s[left] == s[right]) {
        maxLen[left][right] = maxLen[left + 1][right - 1] + 2;
      } else {
        maxLen[left][right] = Math.max(
          maxLen[left + 1][right],
          Math.max(maxLen[left][right - 1], maxLen[left][right])
        );
      }
    }
  }

  return maxLen[0].at(-1)!;
}
