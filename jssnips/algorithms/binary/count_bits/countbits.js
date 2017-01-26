var CountBits = function () {};

CountBits.prototype.countBits = function (n) {
	var bin = (n >>> 0).toString(2).match(/(1)/g);
	return (bin != null) ? bin.length : 0;
};

module.exports = CountBits;
