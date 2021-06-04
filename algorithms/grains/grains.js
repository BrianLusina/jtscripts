var BigInt = require('./big-integer');

var Grains = function () {};

Grains.prototype.square = function (square_num) {
	var n = BigInt(2).pow(square_num - 1);
	return String(n);
};

Grains.prototype.total = function () {
	let totalGrains = BigInt(0);
	for (var sq = 1; sq <= 64; ++sq) {
		totalGrains = totalGrains.add(this.square(sq));
	}
	return String(totalGrains);
};

module.exports = Grains;
