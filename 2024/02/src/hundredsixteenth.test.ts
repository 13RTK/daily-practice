function maxProfit(prices: number[], fee: number): number {
  /**
    0 : sold
    1 : hold
  */

  const profitCnt: number[][] = new Array(prices.length).fill([0, 0]);
  profitCnt[0][1] = -prices[0];

  for (let curDay = 1; curDay < prices.length; curDay++) {
    profitCnt[curDay][0] = Math.max(
      profitCnt[curDay - 1][0],
      profitCnt[curDay - 1][1] + prices[curDay] - fee
    );
    profitCnt[curDay][1] = Math.max(
      profitCnt[curDay - 1][1],
      profitCnt[curDay - 1][0] - prices[curDay]
    );
  }

  return profitCnt.at(-1)![0];
}
