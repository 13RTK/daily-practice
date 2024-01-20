function canCompleteCircuit(gas: number[], cost: number[]): number {
  let currentGasCount: number = 0;
  let totalGasCount: number = 0;
  let resIdx: number = 0;

  gas.forEach((gather, idx) => {
    currentGasCount += gather - cost[idx];
    totalGasCount += gather - cost[idx];

    if (currentGasCount < 0) {
      resIdx = idx + 1;
      currentGasCount = 0;
    }
  });

  return totalGasCount < 0 ? -1 : resIdx
};