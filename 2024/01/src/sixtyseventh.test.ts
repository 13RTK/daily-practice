function combine(n: number, k: number): number[][] {
  const resArr: number[][] = [];
  const curCombine: number[] = [];

  const getCombine = (
    boundary: number,
    size: number,
    startIdx: number
  ): void => {
    if (size === curCombine.length) {
      resArr.push([...curCombine]);
      return;
    }

    // boundary - i + 1 >= size - curCombine.length
    for (let i = startIdx; i <= boundary + 1 - size + curCombine.length; i++) {
      curCombine.push(i);

      getCombine(boundary, size, i + 1);

      curCombine.pop();
    }
  };

  getCombine(n, k, 1);

  return resArr;
}
