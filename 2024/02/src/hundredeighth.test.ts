function coinChange(coins: number[], amount: number): number {
  const coinCnt: number[] = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  coinCnt[0] = 0;

  for (const curCoin of coins) {
    for (let curAmount = curCoin; curAmount <= amount; curAmount++) {
      if (coinCnt[curAmount - curCoin] !== Number.MAX_SAFE_INTEGER) {
        coinCnt[curAmount] = Math.min(
          coinCnt[curAmount],
          coinCnt[curAmount - curCoin] + 1
        );
      }
    }
  }

  return coinCnt[amount] === Number.MAX_SAFE_INTEGER ? -1 : coinCnt[amount];
}
