function findRelativeRanks(score: number[]): string[] {
  const scoreIdxMap: Map<number, number> = new Map();
  const resArr: string[] = new Array(score.length).fill(0);

  // score - index
  score.forEach((score, idx) => scoreIdxMap.set(score, idx));

  // get the sorted array base on score rank, which contains score and origin index in the input score array
  const scoreIdxArr: number[][] = [...scoreIdxMap.entries()];
  scoreIdxArr.sort((o1, o2) => o2[0] - o1[0]);

  const rankMap: Map<number, string> = new Map([
    [0, "Gold"],
    [1, "Silver"],
    [2, "Bronze"],
  ]);
  scoreIdxArr.forEach((scoreIdx, idx) => {
    const curRank: string =
      idx <= 2 ? `${rankMap.get(idx)} Medal` : `${idx + 1}`;

    resArr[scoreIdx[1]] = curRank;
  });

  return resArr;
}
