function eraseOverlapIntervals(intervals: number[][]): number {
  let resOppositeCounter: number = 1;

  intervals.sort((o1, o2) => o1[1] - o2[1]);
  let preIntervalRight = intervals[0][1];

  intervals.forEach((interval, idx) => {
    if (idx === 0) {
      return;
    }

    if (interval[0] >= preIntervalRight) {
      resOppositeCounter++;
      preIntervalRight = interval[1];
    }
  });

  return intervals.length - resOppositeCounter;
}
