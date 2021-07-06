/**
 * initialize your data structure here.
 */
var MaxStack = function () {
  this.stack = [];
  this.maximum = -Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MaxStack.prototype.push = function (val) {
  this.stack.push(val);
  if (val > this.maximum) {
    this.maximum = val;
  }
};

/**
 * @return {void}
 */
MaxStack.prototype.pop = function () {
  const v = this.stack.pop();

  if (this.stack.length === 0) {
    this.maximum = -Infinity;
  } else if (this.maximum === v) {
    this.maximum = Math.max(...this.stack);
  }
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.getMax = function () {
  return this.maximum;
};

export default MaxStack;
