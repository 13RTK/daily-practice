function numSquares(n: number): number {
  const squareCount: number[] = Array.from({ length: n + 1 }, (_val, idx) =>
    idx === 0 ? 0 : Number.MAX_SAFE_INTEGER
  );

  for (let curSum = 0; curSum <= n; curSum++) {
    for (let curNum = 1; curNum * curNum <= curSum; curNum++) {
      squareCount[curSum] = Math.min(
        squareCount[curSum - curNum * curNum] + 1,
        squareCount[curSum]
      );
    }
  }

  return squareCount[n];
}
