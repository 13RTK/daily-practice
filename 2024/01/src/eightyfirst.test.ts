function maxProfit(prices: number[]): number {
  let res: number = 0;
  let buyInPrice: number = 0;

  prices.forEach((price, idx) => {
    if (idx === 0) {
      buyInPrice = price;
      return;
    }

    if (price < buyInPrice) {
      buyInPrice = price;
      return;
    }

    res = Math.max(price - buyInPrice, res);
  });

  return res;
}
