var SumArray = function () {};

SumArray.prototype.sumArray = function (numbers) {
	if (numbers === null || numbers.length === 0 || numbers.length === 1) {
		return 0;
	}
	var sorted = numbers.sort(function (a, b) {
		return a - b;
	});
	var l = sorted.pop(),
		f = sorted.shift();
	return sorted.reduce(function (prev, curr) {
		return prev + curr;
	});
};

module.exports = SumArray;
