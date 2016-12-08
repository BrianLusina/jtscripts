
/**Sum all prime numbers below a certain number**/
function sumPrimes(num) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes.reduce(function(x,y){
    	return x+y;
    });
}
console.log(sumPrimes(10)); //should return 17.
console.log(sumPrimes(977)); //should return 73156.

/***/

class Primes{
  constructor() {}
  
  static first(num){
  	var sieve = [], primes = [];
  	for(var x = 0; x <= num; x++){
  		if(!sieve[x]){
  			primes.push(x);
  			for(var j = x << 1;j <= num; j+=x){
  				sieve[j] = true;
  			}
  		}
  	}
  	return primes;
  }
}

