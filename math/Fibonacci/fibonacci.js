const fibonacci = (function () {
  const memo = [0, 1];
  var fib = function (n) {
    let result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
})();

const memoizer = function (memo, fundamental) {
  const shell = function (n) {
    const result = memo[n];
    if (typeof result !== 'number') {
      memo[n] = result;
    }
    return result;
  };
  return shell;
};

const fibonacci_2 = memoizer([0, 1], function (shell, n) {
  return shell(n - 1) + shell(n - 2);
});
