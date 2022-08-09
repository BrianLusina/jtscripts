const CountBits = function () {};

CountBits.prototype.countBits = function (n) {
  const bin = (n >>> 0).toString(2).match(/(1)/g);
  return bin != null ? bin.length : 0;
};

module.exports = CountBits;
