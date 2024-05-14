function merge(intervals: number[][]): number[][] {
  intervals.sort((o1, o2) => o1[0] - o2[0]);
  const res: number[][] = [intervals[0]];

  for (const interval of intervals) {
    if (res.at(-1)![1] < interval[0]) {
      res.push(interval);
    } else {
      res[res.length - 1][1] = Math.max(res.at(-1)![1], interval[1]);
    }
  }

  return res;
}
