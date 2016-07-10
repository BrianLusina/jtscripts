/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.*/

function binaryAgent(str) {
  var strArr = str.split(" ");
  return strArr.map(function(x){
  	return String.fromCharCode(parseInt(x,2));
  }).join("");
}

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


/*
Instructions
Output
Past Solutions
Implement a function that successfully adds two numbers together and returns their solution in binary. The conversion can be done before, or after the addition of the two.

The binary number returned should be a string!
*/
function addBinary(n){
    return (n >>> 0).toString(2);
}
