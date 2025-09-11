/**
 * This function calculates the smallest amount of change that cannot be made with a given set of coins.
 * It sorts the coins in ascending order and then iterates through them, keeping track of the current total change that can be made.
 * If it encounters a coin that is greater than the current total change plus one, it returns the current total change plus one,
 * as this amount cannot be made with the given coins. If it iterates through all coins without finding such a gap,
 * it returns the total change plus one, which is the smallest amount that cannot be made.
 * Note: The function modifies the original coins array by sorting it in place, as indicated by the comment.
 * @param {number[]} coins an array of positive integers representing the values of coins
 * @returns {number}
 */
export const nonConstructibleChange = (coins: number[]): number => {
  // sort the coins and return a copy of the sort
  coins.sort((a, b) => a - b);

  let currentChange = 0;
  for (const coin of coins) {
    if (coin > currentChange + 1) {
      return currentChange + 1;
    }
    currentChange += coin;
  }
  return currentChange + 1;
};
