exports.for = function(number){
    var primes = [];
    var candidate = 2;
    
    while(candidate * candidate <= number){
        while(number % candidate == 0){
            primes.push(candidate);
            number /= candidate;
        }
        candidate += 1;
    }
    if(number > 1){
        primes.push(number);
    }
    
    return primes;
}