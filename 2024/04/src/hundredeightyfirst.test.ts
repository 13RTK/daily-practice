function tribonacci(n: number): number {
  const recorder: number[] = [0, 1, 1];

  if (n <= 2) {
    return recorder[n];
  }

  while (n > 2) {
    [recorder[0], recorder[1], recorder[2]] = [
      recorder[1],
      recorder[2],
      recorder.reduce((acc, val) => acc + val),
    ];

    n--;
  }

  return recorder.at(-1)!;
}
