function fib(n: number): number {
  const resArr: number[] = [0, 1];

  if (n <= 1) {
    return resArr[n];
  }

  while (n > 1) {
    n--;

    const curSum: number = resArr.reduce((acc, val) => acc + val);
    resArr[0] = resArr[1];
    resArr[1] = curSum;
  }

  return resArr[1];
}
