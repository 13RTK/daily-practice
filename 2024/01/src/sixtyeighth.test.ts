function combinationSum3(k: number, n: number): number[][] {
  const resArr: number[][] = [];
  const curCombine: number[] = [];

  const getCombine = (
    size: number,
    curSum: number,
    sum: number,
    startNum: number
  ): void => {
    if (curSum > sum) {
      return;
    }

    if (curCombine.length === size && curSum === sum) {
      resArr.push([...curCombine]);
      return;
    }

    for (let i = startNum; i <= 9; i++) {
      curCombine.push(i);

      getCombine(size, curSum + i, sum, i + 1);

      curCombine.pop();
    }
  };

  getCombine(k, 0, n, 1);

  return resArr;
}
