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
    'user strict';
    if ((n >>> 0).toString(2).match(/1/g).length % 2 === 0)
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
function isPrime(num) {
  for (var i =2;i<num;i++){
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

/**
You will be given a list of strings which will include both integers and characters.

Return a list of length 2 with lst[0] representing the mean of the integers to a single decimal place. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as lst[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
Here is an example of your return

[3.6, 'udiwstagwo']

**/
var lst1 = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'];
function mean(lst){
	var nums = [] ,str =[];
	for(var x = 0;x<lst.length;x++){
		if(lst[x].match(/[0-9]/)){
  		nums.push(parseInt(lst[x]));
  	}else{
  		str.push(lst[x]);
  	}
	}
  var avg = nums.reduce(function(a,b){return a+b})/10.0;
  return [avg,str.join("")]
}
console.log(mean(lst1));


/**
Given few numbers, you need to print out the digits that are not being used.

Example:

unused_digits(12, 34, 56, 78) # "09"
unused_digits(2015, 8, 26) # "3479"
Note:

Result string should be sorted
The test case won't pass Integer with leading zero

**/
function unusedDigits(){
var arr=[],range=[],ans=[];
	//create the range from 0 to 10
  for(var i = 0;i<10;i++){range.push(i.toString());}
  //convert each number to a string and push to an array
  for(var a = 0;a<arguments.length;a++){
  }
  	arr.push(arguments[a].toString());
  //join the string array and sort it in ascending order
  var joined = arr.join("");

  for(var j = 0;j< range.length; j++){
  		if(joined.indexOf(range[j]) === -1){
    		ans.push(range[j]);
 		 	}
    }
	return ans.join("");
}

/**
You and your best friend Stripes have just landed your first high school jobs! You'll be delivering newspapers to your neighbourhood on weekends. For your services you'll be charging a set price depending on the quantity of the newspaper bundles.

The cost of deliveries is:

$3.85 for 40 newspapers
$1.93 for 20
$0.97 for 10
$0.49 for 5
$0.10 for 1
Stripes is taking care of the footwork doing door-to-door drops and your job is to take care of the finances. What you'll be doing is providing the cheapest possible quotes for your services.

Write a function that's passed an integer representing the amount of newspapers and returns the cheapest price. The returned number must be rounded to two decimal places.
*/
function cheapestQuote(n) {
    var bundles = [[40, 3.85], [20, 1.93], [10, 0.97], [5, 0.49], [1, 0.10]];
    var total = 0;
    for(var x = 0; x<bundles.length; x++){
        total += Math.floor(n / bundles[x][0]) * bundles[x][1];
        n = n % bundles[x][0];
    }
    return Math.round(total*100)/100;
}
console.log(cheapestQuote(499));

/*
Description:

Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)
*/
function alphabetPosition(text) {
    var res = [], text = text.toLowerCase();
    var alpha =/[a-z]/gi;
    for(var x = 0; x < text.length; x++){
        if(text.charCodeAt(x)-96 > 0 && text[x].match(alpha))
            res.push(text.charCodeAt(x)-96);
    }
  return res.join(" ");
}


/***/

var Ghost = function() {
	var colors = ['red', 'purple', 'white', 'yellow'];
	this.color = colors[Math.floor(Math.random() * colors.length)];
};
ghost = new Ghost();
console.log(ghost.color);
