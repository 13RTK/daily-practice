function minCostClimbingStairs(cost: number[]): number {
  const stepCost: number[] = [0, 0];

  cost.forEach((curCost, idx, arr) => {
    if (idx === arr.length - 1) {
      return;
    }

    const curMinCost: number = Math.min(
      curCost + stepCost[0],
      arr[idx + 1] + stepCost[1]
    );

    stepCost[0] = stepCost[1];
    stepCost[1] = curMinCost;
  });

  return stepCost[1];
}
