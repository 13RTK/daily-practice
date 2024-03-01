function dailyTemperatures(temperatures: number[]): number[] {
  const idxStack: number[] = [];
  const res: number[] = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      idxStack.length > 0 &&
      temperatures[idxStack.at(-1)!] < temperatures[i]
    ) {
      const curIdx: number = idxStack.pop()!;

      res[curIdx] = i - curIdx;
    }

    idxStack.push(i);
  }

  return res;
}
