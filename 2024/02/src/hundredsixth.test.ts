function change(amount: number, coins: number[]): number {
  const amountCnt: number[] = new Array(amount + 1).fill(0);
  amountCnt[0] = 1;

  for (const curCoin of coins) {
    for (let curAmount = curCoin; curAmount <= amount; curAmount++) {
      amountCnt[curAmount] += amountCnt[curAmount - curCoin];
    }
  }

  return amountCnt[amount];
}
