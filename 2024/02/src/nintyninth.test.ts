function uniquePaths(m: number, n: number): number {
  const pathCount: number[] = new Array(n).fill(1);

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      pathCount[col] += pathCount[col - 1];
    }
  }

  return pathCount.at(-1)!;
}
