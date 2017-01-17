exports.for = function(number){
    var primes = [];
    var candidate = 2;

    while(candidate <= number){
        // check if the number is divisible
        if(number % candidate == 0){
            primes.push(candidate);
            number %= candidate;
        }

        candidate += 1;
    }

    return primes;
}