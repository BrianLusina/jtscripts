module.exports = function fibsFizzBuzz(num){
  var fib = [1,1];

  if(fib.length == num){
    return fib;
  }

  for(var x = 0; x < fib.length; x++){
    var nxt = fib[x] + fib[x+1];
    fib.push(nxt);
    if(fib.length >= num){
      break;
    }
  }

  return fib.map(function(elem){
    if(elem % 3 == 0){
      elem = "Fizz";
    }
    else if(elem % 5 == 0){
      elem = "Buzz";
    }
    else if(elem % 5 == 0 && elem % 3 == 0){
      elem = "FizzBuzz";
    }
    return elem;
  });
}
