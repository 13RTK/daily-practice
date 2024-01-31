function climbStairs(n: number): number {
  const climbStep: number[] = [1, 2];
  if (n <= 2) {
    return climbStep[n - 1];
  }

  while (n > 2) {
    const sum: number = climbStep.reduce((acc, val) => acc + val);
    climbStep[0] = climbStep[1];
    climbStep[1] = sum;

    n--;
  }

  return climbStep[1];
};