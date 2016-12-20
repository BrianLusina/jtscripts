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
  /**Sum all prime numbers below a certain number**/
  static sumPrimes(num) {
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


/**
* Checks if a number is prime
*/
static isPrime(num){
    var range = this.get_range;
    var start = 2;
    if(num < 2){
        return false;
    }
    while (start <= Math.sqrt(num)) {
        if (num % start++ < 1) return false;
    }
    return num > 1;
}

static get_range(num){
    var array = [];
    for(var x = 2; x < num.length; x++){
        array.push(x);
    }
    return array;
}

}





module.exports = Primes;