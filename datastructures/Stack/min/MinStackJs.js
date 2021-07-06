/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minimum = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (val < this.minimum) {
    this.minimum = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const v = this.stack.pop();

  if (this.stack.length === 0) {
    this.minimum = Infinity;
  } else if (this.minimum === v) {
    this.minimum = Math.min(...this.stack);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minimum;
};

export default MinStack;
