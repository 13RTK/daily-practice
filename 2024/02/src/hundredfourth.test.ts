function lastStoneWeightII(stones: number[]): number {
  const weightSum: number = stones.reduce((acc, val) => acc + val);
  const targetWeight: number = Math.trunc(weightSum / 2);

  const bag: number[] = new Array(targetWeight + 1).fill(0);
  stones.forEach((stone) => {
    for (let curWeight = targetWeight; curWeight >= stone; curWeight--) {
      bag[curWeight] = Math.max(bag[curWeight], bag[curWeight - stone] + stone);
    }
  });

  return weightSum - bag[targetWeight] * 2;
}
