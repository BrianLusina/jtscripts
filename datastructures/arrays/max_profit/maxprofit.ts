export default function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }
  return maxProfit;
}
