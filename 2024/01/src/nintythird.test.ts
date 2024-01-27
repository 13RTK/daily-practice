function merge(intervals: number[][]): number[][] {
  intervals.sort((o1, o2) => o1[0] - o2[0]);
  const resArr: number[][] = [];
  let curLeft: number = intervals[0][0];

  intervals.forEach((interval, idx) => {
    if (idx === 0) {
      return;
    }

    const preInterval: number[] = intervals[idx - 1];

    if (interval[0] <= preInterval[1]) {
      interval[1] = Math.max(interval[1], preInterval[1]);
    } else {
      resArr.push([curLeft, preInterval[1]]);
      curLeft = interval[0];
    }
  });

  resArr.push([curLeft, intervals.at(-1)![1]]);
  return resArr;
}
