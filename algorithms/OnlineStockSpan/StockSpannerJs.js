const StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let weight = 1;

  while (this.stack.length > 0 && price >= this.stack[this.stack.length - 1][0]) {
    weight += this.stack[this.stack.length - 1][1];
    this.stack.pop();
  }

  this.stack.push([price, weight]);
  return weight;
};
