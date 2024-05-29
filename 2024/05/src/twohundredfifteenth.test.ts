function findPeaks(mountain: number[]): number[] {
  const res: number[] = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    const curHeight: number = mountain[i];

    if (curHeight > mountain[i - 1] && curHeight > mountain[i + 1]) {
      res.push(i);
    }
  }

  return res;
}
