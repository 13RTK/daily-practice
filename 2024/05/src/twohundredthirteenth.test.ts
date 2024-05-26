function combine(n: number, k: number): number[][] {
  const resArr: number[][] = [];
  const curCombination: number[] = [];

  function getCombine(boundary: number, size: number, startIdx: number) {
    if (size === curCombination.length) {
      resArr.push([...curCombination]);
      return;
    }

    for (
      let i = startIdx;
      i <= boundary + 1 - size + curCombination.length;
      i++
    ) {
      curCombination.push(i);

      getCombine(boundary, size, i + 1);

      curCombination.pop();
    }
  }

  getCombine(n, k, 1);

  return resArr;
}
