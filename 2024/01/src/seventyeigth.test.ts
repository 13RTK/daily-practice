function findContentChildren(g: number[], s: number[]): number {
  const sortFunc = (o1: number, o2: number) => o1 - o2;

  g.sort(sortFunc);
  s.sort(sortFunc);

  let res: number = 0;
  for (
    let childIdx = g.length - 1, cookieIdx = s.length - 1;
    childIdx >= 0 && cookieIdx >= 0;
    childIdx--
  ) {
    if (g[childIdx] <= s[cookieIdx]) {
      res++;
      cookieIdx--;
    }
  }

  return res;
}
