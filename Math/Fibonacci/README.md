This is a sample implementation of memoization in JavaScript on a common fibonacci problem.

``` JavaScript
var fibonacci = function(){
  var memo = [0, 1];
  var fib = function(n){
    var result = memo[n];
    if(typeof result !== "number"){
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
}();
```
> This demonstrates memoization in JavaScript for Fibonacci where the memo array remembers the already calculated
value. Reduces the workload of the function and is called far less times by the function.

We can automate the process with the following snippet
``` JavaScript
var memoizer = function(memo, fundamental){
  var shell = function(n){
    var result = memo[n];
    if(typeof result !== "number"){
      memo[n] = result;
    }
    return result;
  };
  return shell;
};

var fibonacci_2 = memoizer([0, 1], function(shell, n){
  return shell(n -1) + shell(n - 2);
});
```
> The memoizer 'automates' the creation of a memo function and makes it easier to call the function.
The good thing is, this function is applicable to even factorial problem that requires recursion.