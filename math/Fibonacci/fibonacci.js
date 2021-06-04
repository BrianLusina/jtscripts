var fibonacci = (function () {
	var memo = [0, 1];
	var fib = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fib(n - 1) + fib(n - 2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
})();

var memoizer = function (memo, fundamental) {
	var shell = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			memo[n] = result;
		}
		return result;
	};
	return shell;
};

var fibonacci_2 = memoizer([0, 1], function (shell, n) {
	return shell(n - 1) + shell(n - 2);
});
