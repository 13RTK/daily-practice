function maxProfit(prices: number[]): number {
  /**
    1 : first hold
    2 : first sold
    3 : second hold
    4 : second sold
  */
  const profitCnt: number[][] = new Array(prices.length).fill(
    new Array(5).fill(0)
  );
  profitCnt[0][1] = -prices[0];
  profitCnt[0][3] = -prices[0];

  for (let curDay = 1; curDay < prices.length; curDay++) {
    profitCnt[curDay][1] = Math.max(
      profitCnt[curDay - 1][1],
      profitCnt[curDay - 1][0] - prices[curDay]
    );
    profitCnt[curDay][2] = Math.max(
      profitCnt[curDay - 1][2],
      profitCnt[curDay - 1][1] + prices[curDay]
    );
    profitCnt[curDay][3] = Math.max(
      profitCnt[curDay - 1][3],
      profitCnt[curDay - 1][2] - prices[curDay]
    );
    profitCnt[curDay][4] = Math.max(
      profitCnt[curDay - 1][4],
      profitCnt[curDay - 1][3] + prices[curDay]
    );
  }

  return profitCnt[prices.length - 1][4];
}
