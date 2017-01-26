var Pernicious = function () {};

Pernicious.prototype.is_pernicious = function (num) {
	var b = num.toString(10),
		prim = [];
	for (var i = 0; i < b.length; i++) {
		if (this.isPrime(b[i])) {
			prim.push(b[i]);
		}
	}
};

Pernicious.prototype.isPrime = function (n) {
	if (n < 2) {
		return false;
	}

	var q = parseInt(Math.sqrt(n));

	for (var i = 2; i <= q; i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
};

module.exports = Pernicious;
