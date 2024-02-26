function numDistinct(s: string, t: string): number {
  const sequenceCnt: number[][] = new Array(s.length + 1)
    .fill([])
    .map(() => new Array(t.length + 1).fill(0));

  for (let srcIdx = 0; srcIdx <= s.length; srcIdx++) {
    sequenceCnt[srcIdx][0] = 1;
  }

  for (let srcIdx = 1; srcIdx <= s.length; srcIdx++) {
    for (let targetIdx = 1; targetIdx <= t.length; targetIdx++) {
      if (s.charAt(srcIdx - 1) == t.charAt(targetIdx - 1)) {
        sequenceCnt[srcIdx][targetIdx] =
          sequenceCnt[srcIdx - 1][targetIdx - 1] +
          sequenceCnt[srcIdx - 1][targetIdx];
      } else {
        sequenceCnt[srcIdx][targetIdx] = sequenceCnt[srcIdx - 1][targetIdx];
      }
    }
  }

  return sequenceCnt.at(-1)!.at(-1)!;
}
