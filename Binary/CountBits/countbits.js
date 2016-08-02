var CountBits = function(){}

CountBits.prototype.countBits = function (n) {
  return  (n >>> 0).toString(2).match(/1/).length;
};

module.exports = CountBits
