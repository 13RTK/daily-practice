function findMinArrowShots(points: number[][]): number {
  points.sort((o1, o2) => o1[0] - o2[0]);

  let res: number = 1;
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > points[i - 1][1]) {
      res++;
    } else {
      points[i][1] = Math.min(points[i][1], points[i - 1][1]);
    }
  }

  return res;
}
