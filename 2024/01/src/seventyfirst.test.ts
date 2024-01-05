function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((o1, o2) => o1 - o2);
  const resArr: number[][] = [];
  const curCombine: number[] = [];

  const getCombine = (
    candidates: number[],
    curSum: number,
    sum: number,
    startIdx: number
  ): void => {
    if (curSum > sum) {
      return;
    }

    if (curSum === sum) {
      resArr.push([...curCombine]);
      return;
    }

    for (let i = startIdx; i < candidates.length; i++) {
      if (i > startIdx && candidates[i - 1] === candidates[i]) {
        continue;
      }

      curCombine.push(candidates[i]);

      getCombine(candidates, curSum + candidates[i], sum, i + 1);

      curCombine.pop();
    }
  };

  getCombine(candidates, 0, target, 0);

  return resArr;
}
