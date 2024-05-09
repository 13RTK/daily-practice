function climbStairs(n: number): number {
  const approachCount: number[] = [1, 2];

  if (n <= 2) {
    return approachCount[n - 1];
  }

  while (n > 2) {
    [approachCount[0], approachCount[1]] = [
      approachCount[1],
      approachCount.reduce((acc, val) => acc + val, 0),
    ];

    n--;
  }

  return approachCount.at(-1)!;
}
