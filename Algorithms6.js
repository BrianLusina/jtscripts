/**
Instructions
Output
The number n is Evil if it has an even number of 1's in its binary expansion.
First ten: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary expansion.
First ten: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

*/
function evil(n) {
    if((n>>>0).toString(2).match(/1/g).length%2 === 0)
    	return "It's Evil!";
    else
    	return "It's Odious!";
}

/**
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!
"""
*/

function fix_the_meerkat(arr){
    return arr.reverse();
}

/**
"""
Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Example

isPrime(5)
=> true
Assumptions
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers.
"""
*/
unction isPrime(num) {
  for(var i =2;i<num;i++){
    if(num%i === 0)
      return false;
  }
  return num>1;
}


/**
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (StringUtils.toAlternatingCase(String) in Java) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
Note to no Java langs
You must NOT alter the original string.
**/
String.prototype.toAlternatingCase = function () {
    var res ="";
    for(var x =0;x<this.length;x++){
	    if(this[x] === this[x].toUpperCase()){
  	    res += this[x].toLowerCase();
      }else{
  	    res+= this[x].toUpperCase();
      }
    }
    return res;
}
