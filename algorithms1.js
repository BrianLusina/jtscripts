/**
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided a list (or array in JS) of integer array. Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item).

The first integer array has 0 number in the second item, since the bus is empty in the first bus stop.

Your task is to return number of people in the bus after the last bus station. Take a look on the test cases :)

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
**/
function number(busStops){
var res = 0;
   for(var x=0;x<busStops.length;x++){
			res+=busStops[x].reduce(function(x,y){
      		return x-y;
      });
   }
return res;
}

/**
"""
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.
"""
**/
function narcissistic(value){
  var l = String(value).length;
  var res = 0;
  for(var x =0;x<l;x++){
    res += Math.pow(parseInt(String(value)[x]),l);
  }
  return res === value;
}


/**
 *
 """
 In this kata, you must create a digital root function.

 A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

 Here's how it works (Ruby example given):

 digital_root(16)
 => 1 + 6
 => 7

 digital_root(942)
 => 9 + 4 + 2
 => 15 ...
 => 1 + 5
 => 6

 digital_root(132189)
 => 1 + 3 + 2 + 1 + 8 + 9
 => 24 ...
 => 2 + 4
 => 6

 digital_root(493193)
 => 4 + 9 + 3 + 1 + 9 + 3
 => 29 ...
 => 2 + 9
 => 11 ...
 => 1 + 1
 => 2
 """
 * */
function digital_root(n) {
  var strArr = String(n).split("");
  if(n<10){
    return n;
  }else{
    var res = strArr.reduce(function(x,y){
      return parseInt(x) + parseInt(y);
    });
  }


/**"""
  Your goal in this kata is to implement an difference function, which subtracts one list from another.
  It should remove all values from list a, which are present in list b.
  array_diff([1,2],[1]) == [2]
  If a value is present in b, all of its occurrences must be removed from the other:
  array_diff([1,2,2,2,3],[2]) == [1,3]
**/
function array_diff(a, b) {
  var res = []
  for(var x = 0;x<a.length;x++){
    for(var i=0;i<b.length;i++){
      if(a[x] !==b[i]){
        res.push(a[x]);
      }
    }
  }
  return res;
}

/**As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last digit from fibonacci number. Example: getLastDigit(15) - 610. Your method must return 0 because the last digit of 610 is 0. Fibonacci sequence grows very fast and value can take very big numbers (bigger than integer type can contain), so, please, be careful with overflow.
**/
function getLastDigit(index) {
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    //create the fibonacci sequence upto the indicated index
    for(var x=2;x<=index;x++){
      fib[x] = fib[x-1] + fib[x-2];
    }
    var last = String(fib[index]); //convert the last element in array to a string
    var arr = last.split("");// split the last element into a string array
    var lastDigit = arr[arr.length-1]; //obtain the last digit from the array
    return parseInt(lastDigit);
}

//console.log(getLastDigit(15));
//console.log(getLastDigit(193150));// 5);
console.log(getLastDigit(300));//, 0);
//console.log(getLastDigit(20001));//, 6);
