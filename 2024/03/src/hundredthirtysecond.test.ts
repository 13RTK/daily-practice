function largestRectangleArea(heights: number[]): number {
  const idxStack: number[] = [];
  const newArr: number[] = [0, ...heights, 0];

  let resArea: number = 0;
  for (let i = 0; i < newArr.length; i++) {
    while (idxStack.length && newArr[idxStack.at(-1)!] > newArr[i]) {
      const midHeight = newArr[idxStack.pop()!];
      const width = i - idxStack.at(-1)! - 1;

      resArea = Math.max(resArea, midHeight * width);
    }

    idxStack.push(i);
  }

  return resArea;
}
