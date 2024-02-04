function integerBreak(n: number): number {
  const maxProduct: number[] = new Array(n + 1).fill(0);
  maxProduct[2] = 1;

  for (let curNum = 3; curNum <= n; curNum++) {
    for (let curSplitNum = 1; curSplitNum < curNum - 1; curSplitNum++) {
      const newProduct = Math.max(
        maxProduct[curNum - curSplitNum] * curSplitNum,
        (curNum - curSplitNum) * curSplitNum
      );
      maxProduct[curNum] = Math.max(maxProduct[curNum], newProduct);
    }
  }

  return maxProduct.at(-1)!;
}
