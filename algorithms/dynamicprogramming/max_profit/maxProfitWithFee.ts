export function maxProfit(prices: number[], fee: number): number {
  if (prices.length === 0) {
    return 0;
  }

  let cashWithShares = -prices[0];
  let cashWithoutShares = 0;

  for (let i = 1; i < prices.length; i++) {
    // Maximum cash in hand with shares
    // Either
    // 1. withold prev share in which case your cash in hand will not change,
    // 2. or assume there was no currently bought share but you want to buy it today -
    //         In this case: your current cash in hand with shares will be your previous cash
    //         in hand without shares minus buying price of the share today.
    cashWithShares = Math.max(cashWithShares, cashWithoutShares - prices[i]);

    // Maximum cash in hand without shares
    // Either
    // 1. withold money without shares in which case your cash in hand will not change,
    // 2. or assume you previously bought the share and you are going to sell that today -
    //         In this case : your current cash in hand without shares will be your previous cash
    //         in hand with shares plus the current selling price minus transaction fee
    cashWithoutShares = Math.max(cashWithoutShares, cashWithShares + prices[i] - fee);
  }

  return cashWithoutShares;
}
