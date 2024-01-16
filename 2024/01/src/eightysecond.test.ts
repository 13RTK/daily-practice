function maxProfit(prices: number[]): number {
  let res: number = 0;

  prices.forEach((price, idx, arr) => {
    if (idx > 0 && price > arr[idx - 1]) {
      res += price - arr[idx - 1];
    }
  });

  return res;
}
