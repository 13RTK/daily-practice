function minimumAddedCoins(
  coins: number[],
  target: number
): number {
  coins.sort((o1, o2) => o1 - o2);

  let coinNeedCount: number = 0;
  let currentCoinAmount: number = 0;

  coins.forEach((coin) => {
    while (coin > currentCoinAmount + 1) {
      coinNeedCount++;
      currentCoinAmount += currentCoinAmount + 1;
    }

    currentCoinAmount += coin;
  });

  while (currentCoinAmount < target) {
    currentCoinAmount += currentCoinAmount + 1;
    coinNeedCount++;
  }

  return coinNeedCount;
}
