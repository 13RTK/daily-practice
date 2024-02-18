function maxProfit(prices: number[]): number {
  /**
   * 0 : hold
   * 1 : sold today
   * 2 : sold before (not frozen)
   * 3 : sold before (frozen period)
   */
  const profitCnt: number[][] = new Array(prices.length)
    .fill(null)
    .map(() => new Array(4).fill(0));
  profitCnt[0][0] = -prices[0];

  for (let curDay = 1; curDay < prices.length; curDay++) {
    profitCnt[curDay][0] = Math.max(
      profitCnt[curDay - 1][0],
      Math.max(profitCnt[curDay - 1][2], profitCnt[curDay - 1][3]) -
        prices[curDay]
    );
    profitCnt[curDay][1] = profitCnt[curDay - 1][0] + prices[curDay];
    profitCnt[curDay][2] = Math.max(
      profitCnt[curDay - 1][2],
      profitCnt[curDay - 1][3]
    );
    profitCnt[curDay][3] = profitCnt[curDay - 1][1];
  }

  return Math.max(...profitCnt[prices.length - 1]);
}
