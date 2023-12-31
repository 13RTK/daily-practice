function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const curCombination: number[] = [];

  const getCombine = (
    boundary: number,
    size: number,
    startNum: number
  ): void => {
    if (curCombination.length === size) {
      res.push([...curCombination]);
      return;
    }

    for (let i = startNum; i <= boundary; i++) {
      curCombination.push(i);

      getCombine(boundary, size, i + 1);

      curCombination.pop();
    }
  };

  getCombine(n, k, 1);
  return res;
}
