function combinationSum(candidates: number[], target: number): number[][] {
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
    }

    for (let i = startIdx; i < candidates.length; i++) {
      curCombine.push(candidates[i]);

      getCombine(candidates, curSum + candidates[i], sum, i);

      curCombine.pop();
    }
  };

  getCombine(candidates, 0, target, 0);

  return resArr;
}
